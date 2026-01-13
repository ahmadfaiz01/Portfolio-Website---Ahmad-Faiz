import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'designs', label: 'Designs', path: '/designs' },
  { id: 'certs', label: 'Certifications', path: '/certifications' },
  { id: 'connect', label: 'Connect', path: '/connect' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Auto-collapse when scrolling
      if (window.scrollY > 50) {
        setIsExpanded(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-base text-charcoal font-body">
      {/* Collapsible Navigation */}
      <motion.div
        className="fixed top-6 z-50"
        initial={{ left: '50%', x: '-50%' }}
        animate={{
          left: isScrolled ? '24px' : '50%',
          x: isScrolled ? 0 : '-50%',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {isScrolled ? (
          // Collapsed state: Show hamburger icon
          <motion.nav
            className="flex flex-col gap-2 bg-white shadow-[0_6px_0_#800000] border border-border/80 backdrop-blur-sm bg-white/95 rounded-2xl"
            initial={false}
          >
            {/* Hamburger Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 rounded-xl hover:bg-[#800000]/5 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-charcoal"
              >
                {isExpanded ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </motion.svg>
            </button>

            {/* Expanded Menu Items */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-2 pb-2 flex flex-col gap-1">
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/')
                      
                      return (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setIsExpanded(false)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                            isActive
                              ? 'bg-charcoal text-white scale-105 font-display'
                              : 'text-charcoal/80 hover:bg-[#800000] hover:text-white focus-visible:bg-charcoal/5 font-body'
                          }`}
                          title={item.label}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        ) : (
          // Expanded state: Show all items horizontally
          <motion.nav
            className="flex items-center gap-2 bg-white shadow-[0_6px_0_#800000] border border-border/80 tracking-tight backdrop-blur-sm bg-white/95 rounded-full px-3 py-2"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/')
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                    isActive
                      ? 'bg-charcoal text-white scale-105 font-display'
                      : 'text-charcoal/80 hover:bg-[#800000] hover:text-white focus-visible:bg-charcoal/5 font-body'
                  }`}
                  title={item.label}
                >
                  {item.label}
                </Link>
              )
            })}
          </motion.nav>
        )}
      </motion.div>
      {children}
    </div>
  )
}

