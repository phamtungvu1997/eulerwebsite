/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' }
    },
    extend: {
      colors: {
        brand: {
          // Light theme aligned to White / Black-Dark Blue / Purple
          bg: "#020d1c",               // page background (black)
          // bgElevated: "#F8FAFC",       // cards/sections (very light)
          bgElevated: "#FFFFFF",       // cards/sections (very light)
          border: "#E5E7EB",           // hairline borders
          fg: "#0B1220",               // main text (black/dark-blue)
          fgMuted: "#475569",          // secondary text (slate-600)
          // Primary = Purple
          primary: "#6D28D9",          // violet-700
          primary700: "#5B21B6",       // darker purple (hover)
          primaryForeground: "#FFFFFF",
          // Accents
          accentBlue: "#1E3A8A",       // dark blue accent
          accentPurple: "#7C3AED",
          bgGrayHover: "#b2b8c3"      // gray accent (gray-600)
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 6, 23, 0.06)",
        soft: "0 6px 20px rgba(2, 6, 23, 0.05)"
      },
      backgroundImage: {
        "hero-vignette":
          "radial-gradient(1200px 600px at 30% 10%, rgba(0,0,0,0.35), transparent 60%), radial-gradient(1000px 480px at 80% 40%, rgba(0,0,0,0.25), transparent 65%)",
        "hero-top":
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
      },
      ringColor: { brand: "#6D28D9" },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"]
      },
      animation: {
        "fade-in": "fadeIn .5s ease-in-out",
        "slide-up": "slideUp .35s ease-out"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
}
