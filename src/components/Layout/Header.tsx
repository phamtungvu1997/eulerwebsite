import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'
import { authMiddleware } from '@/middleware/auth'
import { cn } from '@/utils/helpers'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      const authState = authMiddleware.getAuthState()
      setIsAuthenticated(authState.isAuthenticated)
      setUser(authState.user)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await authMiddleware.logout()
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled
        ? "glass hairline-b"
        : "bg-transparent"
    )}>
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 h-full">
            <Link to="/" className="flex items-center w-full h-full">
              <img
                src="/src/assets/logo.png"
                alt="Euler Logo"
                className="h-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-brand-accentCyan'
                    : 'text-brand-fgMuted hover:text-brand-fg'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-fgMuted hover:text-brand-fg transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass border-t border-brand-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-brand-accentCyan bg-brand-bgElevated/20'
                    : 'text-brand-fgMuted hover:text-brand-fg hover:bg-brand-bgElevated/20'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
