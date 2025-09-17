import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.SERVER_PORT || 3001

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Create reusable transporter
function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = String(process.env.SMTP_SECURE).toLowerCase() === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASS')
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

app.post('/api/contact', async (req, res) => {
  try {
    const {
      name = '',
      phone = '',
      email = '',
      company = '',
      topic = '',
      message = '',
      source = 'website_contact',
      submittedAt,
    } = req.body || {}

    if (!name || !email || !topic) {
      return res.status(400).json({ message: 'name, email and topic are required' })
    }

    const to = process.env.CONTACT_TO || 'info@euler-digital.com'
    const from = process.env.CONTACT_FROM || `noreply@${new URL('http://localhost').hostname}`

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
    ].join('\n')

    const html = `
      <h2>New contact form submission</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Topic:</strong> ${topic}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p><small>Source: ${source} | Submitted At: ${submittedAt || new Date().toISOString()}</small></p>
    `

    const transporter = createTransporter()
    await transporter.sendMail({ to, from, subject: `Contact: ${topic} — ${name}`, text, html })

    res.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ message })
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`)
})


