import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import rateLimit from "express-rate-limit"

dotenv.config()

const app = express()

/* --- Security/limits --- */
app.use(express.json({ limit: "200kb" }))
app.use(
  cors({
    origin: process.env.ALLOW_ORIGIN?.split(",") ?? true, 
    methods: ["POST", "GET", "OPTIONS"],
  })
)
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
  })
)

const PORT = process.env.SERVER_PORT || 3001
const CONTACT_TO = process.env.CONTACT_TO || "info@euler-digital.com"
const CONTACT_FROM = process.env.CONTACT_FROM 

/* ---------- Mailer ---------- */
function resolveSecure(port, secureEnv) {
  if (secureEnv != null && secureEnv !== "") {
    return String(secureEnv).toLowerCase() === "true"
  }
  return Number(port) === 465
}

function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = resolveSecure(port, process.env.SMTP_SECURE)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASS")
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    pool: true,
    tls: { rejectUnauthorized: true },
  })
}

const transporter = createTransporter()

// Kiểm tra cấu hình ngay khi khởi động (log cảnh báo nếu lỗi)
transporter.verify((err, success) => {
  if (err) {
    console.error("[mailer] verify failed:", err?.message)
  } else if (success) {
    console.log("[mailer] ready")
  }
})

/* ---------- Utils ---------- */
const sanitizeSubject = (s) => s.replace(/[\r\n]+/g, " ").slice(0, 200)
const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

/* ---------- Routes ---------- */
app.get("/api/health", (_req, res) => res.json({ ok: true }))

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name = "",
      phone = "",
      email = "",
      company = "",
      topic = "",
      message = "",
      source = "website_contact",
      submittedAt,
    } = req.body || {}

    if (!name || !email || !topic) {
      return res.status(400).json({ message: "name, email and topic are required" })
    }
    if (!CONTACT_FROM) {
      return res.status(500).json({ message: "CONTACT_FROM is not configured on server" })
    }

    const subject = sanitizeSubject(`Contact: ${topic} — ${name}`)

    const text = [
      `New contact form submission`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Topic: ${topic}`,
      `Message: ${message}`,
      `Source: ${source}`,
      `Submitted At: ${submittedAt || new Date().toISOString()}`,
    ].join("\n")

    const html = `
      <h2>New contact form submission</h2>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
        <li><strong>Company:</strong> ${escapeHtml(company)}</li>
        <li><strong>Topic:</strong> ${escapeHtml(topic)}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><small>Source: ${escapeHtml(source)} | Submitted At: ${submittedAt || new Date().toISOString()}</small></p>
    `

    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,     
      replyTo: email,         
      subject,
      text,
      html,
    })

    return res.status(202).json({ ok: true })
  } catch (error) {
    console.error("[contact] send error:", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return res.status(500).json({ message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
