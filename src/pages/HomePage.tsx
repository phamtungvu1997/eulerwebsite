import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Sparkles } from 'lucide-react'
import Button from '@/components/UI/Button'
import Card from '@/components/UI/Card'
import Section from '@/components/UI/Section'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with performance in mind, delivering blazing fast user experiences.',
    accentColor: 'text-brand-accentCyan'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Enterprise-grade security with built-in protection and compliance.',
    accentColor: 'text-brand-accentPurple'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration features.',
    accentColor: 'text-brand-accentBlue'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Euler has transformed how we build and deploy applications. The performance improvements are incredible.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    content: 'The developer experience is unmatched. Clean code, great documentation, and excellent support.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    content: 'We\'ve seen a 40% increase in user engagement since implementing Euler solutions.',
    rating: 5,
    avatar: '/api/placeholder/40/40'
  }
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  
  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-spotlight"></div>
        <div className="absolute -inset-x-32 -top-40 h-[480px] bg-hero-sweep opacity-15 blur-3xl"></div>
        <div className="container relative z-10 py-28 md:py-36">
          <div className="text-center max-w-4xl mx-auto">
            <div className="badge-soft inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-accentCyan" />
              Unlock the Power of Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white-900 mb-6">
              Euler Digital Solution
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#ffffff]">
                {' '}Software Development
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-balance text-brand-fg mb-6">
              A technology company developing cutting-edge software
            </h1>
            <p className="text-lg md:text-xl text-brand-fgMuted mb-8 max-w-2xl mx-auto">
              Transforming businesses with cutting-edge solutions that drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Learn more →
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
            
            {/* Social proof card */}
            <div className="glass rounded-2xl p-6 shadow-card max-w-3xl mx-auto">
              <p className="text-brand-fgMuted mb-3">
                Move faster. <span className="text-brand-accentPurple">Think bigger.</span>
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-brand-accentCyan rounded-full border-2 border-brand-bg"></div>
                  ))}
                </div>
                <div className="text-sm text-brand-fg">
                  <span className="font-semibold">100k</span> Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section 
        title="What We Offer" 
        description="Discover the powerful features that make Euler the leading choice for modern applications"
        className="bg-brand-bgElevated/20"
      >
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-bgElevated flex items-center justify-center ${feature.accentColor}`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-fg mb-2">{feature.title}</h3>
            <p className="text-brand-fgMuted">{feature.description}</p>
          </Card>
        ))}
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="What Our Customers Say" 
        description="Join thousands of satisfied customers who trust Euler for their digital transformation"
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-brand-fgMuted mb-4 italic">"{testimonial.content}"</p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-brand-accentPurple rounded-full"></div>
              <div>
                <p className="font-semibold text-brand-fg">{testimonial.name}</p>
                <p className="text-sm text-brand-fgMuted">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary700 to-brand-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-primaryForeground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses building the future with Euler
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </Link>
            <Link to="/services" className="text-white border border-white/30 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-brand-fg mb-4">
              Stay Updated
            </h2>
            <p className="text-brand-fgMuted mb-8">
              Get the latest updates, tips, and insights delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field flex-1"
                required
              />
              <Button type="submit" className="btn-primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
