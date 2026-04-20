import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Slideshow component reused for Vyrothon images
const CertSlideshow = ({ images, title }: { images: string[], title: string }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === index ? 'w-5 bg-[#800000]' : 'w-1.5 bg-[#800000]/40'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

type Cert = {
  name: string
  org: string
  link?: string
  images: string[]
  date: string
  note?: string
  rotate?: boolean
}

const certs: Cert[] = [
  {
    name: 'Certificate of Participation — VROTHON 2026',
    org: 'Vyro AI',
    link: 'https://vrothon.vyro.ai',
    images: [
      '/optimized/vyrothon-cert.webp',
      '/optimized/vyrothon-banner.webp',
      '/optimized/vyrothon-stage.webp',
      '/optimized/vyrothon-working.webp',
    ],
    date: 'Apr 2026',
    note: 'Made the cut from 560 applicants. Pakistan\'s most competitive fully in-house hackathon across 3 stages at NSTP NUST, Islamabad.',
    rotate: true,
  },
  {
    name: 'Silver Badge, HackerRank Python Programming / Problem-Solving',
    org: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/itsahmadfaiz',
    images: ['/hackerrank-cert.png'],
    date: '2025',
  },
  {
    name: 'AI Fundamentals',
    org: 'IBM SkillsBuild',
    link: 'https://www.credly.com/badges/2beffb48-d8e4-4ae4-881f-b73869595e63/public_url',
    images: ['/ibm-cert.png'],
    date: '2024',
  },
]

export default function Certifications() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl w-full"
      >
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-2 w-2 rounded-full bg-[#800000] shadow-[0_0_0_6px_rgba(128,0,0,0.15)]" />
            <div className="text-sm uppercase tracking-wide text-charcoal/60 font-display font-bold">Certifications</div>
          </div>
          <h1 className="text-4xl font-display font-bold text-charcoal mb-4">Credentials</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="block rounded-2xl border-2 border-[#800000]/30 bg-white overflow-hidden shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] hover:border-[#800000] transition-all duration-300 group cursor-pointer relative"
              onClick={() => cert.link && window.open(cert.link, '_blank')}
            >
              {/* Image / Slideshow Section */}
              <div className="relative h-48 overflow-hidden bg-gray-50 border-b-2 border-[#800000]/10">
                <div className={`absolute inset-0 flex items-center justify-center p-6 ${cert.rotate ? 'bg-white' : ''}`}>
                  <CertSlideshow images={cert.images} title={cert.name} />
                </div>

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-[#800000] text-white text-xs font-display font-bold px-3 py-1.5 rounded-full shadow-sm z-20">
                  {cert.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 bg-white relative">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#800000]/10 text-[#800000] text-xs font-display font-bold uppercase tracking-wider">
                    {cert.org}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-charcoal mb-2 leading-tight group-hover:text-[#800000] transition-colors duration-300 pr-10">
                  {cert.name}
                </h3>

                {cert.note && (
                  <p className="text-xs text-charcoal/60 font-body leading-relaxed mb-6">
                    {cert.note}
                  </p>
                )}

                {!cert.note && <div className="mb-8" />}

                {/* Arrow Icon */}
                {cert.link && (
                  <div className="absolute bottom-6 right-6 text-[#800000] group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}