import { useState, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

type DesignShot = {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  figmaLink?: string
  photoshopLink?: string
  shadowStyle: 'maroon' | 'black' | 'blue' | 'green' | 'none'
}

const designShots: DesignShot[] = [
  {
    id: 0,
    title: 'Sukoon App',
    description: 'AI-based mental health and wellbeing app. A comprehensive design system.',
    category: 'UI/UX',
    images: ['/sukoon.png'],
    figmaLink: 'https://www.figma.com/community/file/1581600162242062684',
    shadowStyle: 'blue',
  },
  {
    id: 1,
    title: 'Fitted App',
    description: 'AI-based food scanning and voice log for calorie and workout tracker.',
    category: 'UI/UX',
    images: ['/fitted.png'],
    figmaLink: 'https://www.figma.com/community/file/1581758303209118075',
    shadowStyle: 'green',
  },
  {
    id: 2,
    title: 'NUST Music Festival Identity',
    description: 'Complete brand identity including multiple poster variations and promotional materials.',
    category: 'Graphic Design',
    images: ['/nust-fest-1.png', '/nust-fest-2.png'],
    photoshopLink: '#',
    shadowStyle: 'maroon',
  },
  {
    id: 5,
    title: 'Digital Sketchbook',
    description: 'A collection of digital illustrations and character studies created in Photoshop.',
    category: 'Graphic Design',
    images: ['/sketch-1.png', '/sketch-2.png', '/sketch-3.png'],
    photoshopLink: '#',
    shadowStyle: 'black',
  },
  {
    id: 8,
    title: 'Campaign Posters',
    description: 'High-impact poster designs for various events.',
    category: 'Graphic Design',
    images: ['/poster-1.png', '/poster-2.png', '/poster-3.png'],
    photoshopLink: '#',
    shadowStyle: 'maroon',
  },
  {
    id: 11,
    title: 'Social Thumbnails',
    description: 'Optimized thumbnails for digital engagement.',
    category: 'Graphic Design',
    images: ['/thumbnail-1.png', '/thumbnail-2.png', '/thumbnail-3.png'],
    photoshopLink: '#',
    shadowStyle: 'black',
  },
  {
    id: 13,
    title: 'XploreBot',
    description: 'Social media design and branding for XploreBot.',
    category: 'Graphic Design',
    images: ['/xpl1.png', '/xpl2.png'],
    photoshopLink: '#',
    shadowStyle: 'black',
  },
  {
    id: 14,
    title: 'NUST Summer School Magazine',
    description: 'Magazine cover design for NUST Summer School program.',
    category: 'Graphic Design',
    images: ['/magazine cover.png'],
    photoshopLink: '#',
    shadowStyle: 'maroon',
  },
  {
    id: 15,
    title: 'Product Ads',
    description: 'Creative product advertisement designs for various campaigns.',
    category: 'Graphic Design',
    images: ['/ad-1.png', '/ad-2.png'],
    photoshopLink: '#',
    shadowStyle: 'maroon',
  },
]

// Slideshow Component
const SlideshowImage = ({ images, title, priority = false }: { images: string[], title: string, priority?: boolean }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-auto overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ease-out">
      {/* Invisible image to reserve layout space properly */}
      <img
        src={images[0]}
        alt="spacer"
        className="invisible w-full h-auto"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />

      <AnimatePresence mode='popLayout'>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
          }}
        />
      </AnimatePresence>

      {/* Dots - Only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
          {images.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

// Card Component
const ProjectCard = ({ shot, priority = false }: { shot: DesignShot, priority?: boolean }) => {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const getShadowClasses = (shadowStyle: string) => {
    if (shadowStyle === 'black') return 'hover:shadow-[0_12px_0_#1C1C1C] border-[#1C1C1C]/10'
    if (shadowStyle === 'blue') return 'hover:shadow-[0_12px_0_#0066FF] border-[#0066FF]/10'
    if (shadowStyle === 'green') return 'hover:shadow-[0_12px_0_#00AA44] border-[#00AA44]/10'
    if (shadowStyle === 'maroon') return 'hover:shadow-[0_12px_0_#800000] border-[#800000]/10'
    return 'shadow-none border-transparent'
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={shot.figmaLink || shot.photoshopLink || '#'}
        target="_blank"
        className={`relative flex flex-col h-full rounded-2xl bg-white overflow-hidden border-2 transition-all duration-500 will-change-transform ${getShadowClasses(shot.shadowStyle)}`}
        whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      >
        <SlideshowImage images={shot.images} title={shot.title} priority={priority} />

        <div className="p-6 border-t border-gray-100 flex-1 flex flex-col justify-between bg-white relative z-20">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-lg font-display font-bold text-charcoal leading-tight mb-2">{shot.title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed font-body">{shot.description}</p>
            </div>
            {(shot.figmaLink || shot.photoshopLink) && (
              <div className="shrink-0 bg-gray-50 p-2 rounded-xl border border-gray-100">
                {shot.figmaLink && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-5 h-5" alt="Figma" />}
                {shot.photoshopLink && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" className="w-5 h-5" alt="PS" />}
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (shot.figmaLink || shot.photoshopLink) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal/5 backdrop-blur-[1px] flex items-center justify-center pointer-events-none z-30"
            >
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-[#800000] text-white px-6 py-2.5 rounded-full font-bold font-display shadow-xl flex items-center gap-2"
              >
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  )
}

export default function Designs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', ...Array.from(new Set(designShots.map(shot => shot.category)))]

  // Filter Logic
  const visibleDesigns = selectedCategory === 'All'
    ? designShots
    : designShots.filter(shot => shot.category === selectedCategory)

  // Split Data for Hybrid Layout
  const featuredDesigns = visibleDesigns.filter(shot => shot.category === 'UI/UX')
  const masonryDesigns = visibleDesigns.filter(shot => shot.category !== 'UI/UX')

  return (
    <div className="min-h-screen bg-base text-charcoal font-body py-32 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-[#800000] shadow-[0_0_0_6px_rgba(128,0,0,0.15)]" />
            <div className="text-sm uppercase tracking-wide text-charcoal/60 font-display font-bold">Designs</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4 tracking-tight">Design Work</h1>
          <p className="text-lg text-charcoal/70 font-body max-w-2xl leading-relaxed">
            A curated collection of digital products, design systems, and brand identities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div layout className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full border-2 transition-all duration-300 font-display font-bold text-sm uppercase tracking-wide ${selectedCategory === category
                ? 'bg-[#800000] text-white border-[#800000] shadow-[0_4px_0_#3f0000] translate-y-[-2px]'
                : 'bg-white text-charcoal border-[#800000]/20 hover:border-[#800000]/60 hover:bg-[#800000]/5'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">

          {/* SECTION 1: FEATURED (UI/UX) - BIG GRID */}
          {featuredDesigns.length > 0 && (
            <motion.div layout className="mb-20">
              {selectedCategory === 'All' && (
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xl font-display font-bold text-charcoal uppercase tracking-wider">UI/UX & Products</h2>
                  <div className="h-px bg-[#800000]/10 flex-1" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredDesigns.map((shot, idx) => (
                  <ProjectCard key={shot.id} shot={shot} priority={idx < 2} />
                ))}
              </div>
            </motion.div>
          )}

          {/* SECTION 2: MASONRY (GRAPHIC DESIGN) - COMPACT COLUMNS */}
          {masonryDesigns.length > 0 && (
            <motion.div layout>
              {selectedCategory === 'All' && (
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xl font-display font-bold text-charcoal uppercase tracking-wider">Graphic Design</h2>
                  <div className="h-px bg-[#800000]/10 flex-1" />
                </div>
              )}

              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {masonryDesigns.map((shot) => (
                  <div key={shot.id} className="break-inside-avoid mb-8">
                    <ProjectCard shot={shot} priority={false} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {visibleDesigns.length === 0 && (
          <div className="text-center py-32">
            <div className="text-6xl mb-4">🎨</div>
            <div className="text-charcoal/40 text-lg font-body font-medium">
              No designs found in this category.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}