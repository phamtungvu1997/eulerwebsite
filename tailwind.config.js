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
          // Light corporate theme (SoftwareMind-like)
          bg: "#FFFFFF",               // page background
          bgElevated: "#F8FAFC",       // cards/sections
          border: "#E5E7EB",           // hairline borders
          fg: "#0F172A",               // main text (slate-900)
          fgMuted: "#475569",          // secondary text (slate-600)
          // Primary = orange CTA
          primary: "#F97316",          // orange-500
          primary700: "#EA580C",       // orange-600/700 (hover)
          primaryForeground: "#FFFFFF",
          // Accents (links/info if needed)
          accentBlue: "#2563EB",       // link / emphasis
          success: "#16A34A",
          info: "#0EA5E9"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 6, 23, 0.06)",
        soft: "0 6px 20px rgba(2, 6, 23, 0.05)"
      },
      backgroundImage: {
        // nhẹ nhàng, giúp chữ trắng nổi trên video
        "hero-vignette":
          "radial-gradient(1200px 600px at 30% 10%, rgba(0,0,0,0.35), transparent 60%), radial-gradient(1000px 480px at 80% 40%, rgba(0,0,0,0.25), transparent 65%)",
        "hero-top":
          "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
      },
      ringColor: { brand: "#F97316" },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn .5s ease-in-out",
        "slide-up": "slideUp .35s ease-out"
      },
      keyframes: {
        fadeIn: { "0%": {opacity:"0"}, "100%": {opacity:"1"} },
        slideUp: {
          "0%": { transform:"translateY(12px)", opacity:"0" },
          "100%": { transform:"translateY(0)", opacity:"1" }
        }
      }
    }
  },
  plugins: []
}
