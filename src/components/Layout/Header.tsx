import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { authMiddleware } from '@/middleware/auth'
import { cn } from '@/utils/helpers'

type NavChild = { name: string; href: string; description?: string }

type NavItem = { name: string; href: string; children?: NavChild[] }

const navigation: NavItem[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Advisory & Strategy', href: '#', description: 'Mock submenu item' },
      { name: 'Managed Security', href: '#', description: 'Mock submenu item' },
      { name: 'Cloud Transformation', href: '#', description: 'Mock submenu item' },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
    children: [
      { name: 'Startup', href: '#', description: 'Mock submenu item' },
      { name: 'Business', href: '#', description: 'Mock submenu item' },
      { name: 'Enterprise', href: '#', description: 'Mock submenu item' },
    ],
  },
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
        <div className="flex justify-between items-center h-16 p-2">
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
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    location.pathname === item.href
                      ? 'text-brand-primary'
                      : 'text-brand-fgMuted hover:text-brand-fg'
                  )}
                >
                  {item.name}
                </Link>

                {/* Dropdown (hover) */}
                {item.children && item.children.length > 0 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 mt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200"
                  >
                    <div className="rounded-lg bg-white shadow-card overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-brand-bgElevated/60 transition-colors"
                          >
                            <div className="mt-0.5 h-2 w-2 rounded-full bg-brand-primary"></div>
                            <div>
                              <div className="text-sm font-medium text-brand-fg">{child.name}</div>
                              {child.description && (
                                <div className="text-xs text-brand-fgMuted">{child.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                    location.pathname === item.href
                      ? 'text-brand-primary bg-brand-bgElevated/20'
                      : 'text-brand-fgMuted hover:text-brand-fg hover:bg-brand-bgElevated/20'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-3 py-1.5 text-sm text-brand-fgMuted hover:text-brand-fg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
