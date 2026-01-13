import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define the Project type to support multiple images
type Project = {
  title: string
  blurb: string
  stack: string[]
  liveLink?: string
  githubLink?: string
  videoLink?: string
  thumbnails: string[]
}

const projectCards: Project[] = [
  {
    title: 'AutoClassP',
    blurb: 'Streamlit automated supervised classification pipeline. Automated EDA, issue detection, and SHAP explainability.',
    stack: ['Python', 'Streamlit', 'Scikit-Learn', 'SHAP'],
    liveLink: 'https://autoclasspredictor.streamlit.app/',
    githubLink: 'https://github.com/ahmadfaiz01/AutoClasp-AutoClassPredictor',
    thumbnails: ['/acp1.png', '/acp2.png'],
  },
  {
    title: 'Hamsafar',
    blurb: 'AI-powered travel companion app enhancing travel experiences through intelligent recommendations.',
    stack: ['AI/ML', 'Mobile Dev', 'UI/UX'],
    videoLink: '#',
    thumbnails: ['/hamsafar-thumb.png'],
  },
  {
    title: 'Hybrid CPU Scheduler',
    blurb: 'Interactive simulation of lock-aware CPU scheduling. Features process configuration and real-time visualization.',
    stack: ['OS', 'React', 'Vercel'],
    liveLink: 'https://v0-hybrid-cpu-scheduler-simulator-2.vercel.app/',
    thumbnails: ['/cpu-scheduler-thumb.png'],
  },
  {
    title: 'Ilm App - eLearning Platform',
    blurb: 'Comprehensive Android-based eLearning application featuring online notes, interactive quizzes, video lectures, and real-time live classes.',
    stack: ['Android Studio', 'Java', 'Firebase', 'Real-time DB'],
    thumbnails: ['/ilm-app-1.png', '/ilm-app-2.png'],
  },
]

// Reusable Slideshow Component for Projects
const SlideshowProjectImage = ({ images, title, priority = false }: { images: string[], title: string, priority?: boolean }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Fallback Icon */}
      <div className="absolute inset-0 flex items-center justify-center text-[#800000]/10 z-0">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 w-full h-full object-contain z-10 transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </AnimatePresence>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${i === index ? 'w-4 bg-[#800000]' : 'w-1.5 bg-gray-300'
                }`}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-base text-charcoal font-body py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-2 w-2 rounded-full bg-[#800000] shadow-[0_0_0_6px_rgba(128,0,0,0.15)]" />
            <div className="text-sm uppercase tracking-wide text-charcoal/60 font-display font-bold">Work</div>
          </div>
          <h1 className="text-4xl font-display font-bold text-charcoal mb-4">Projects</h1>
          <p className="text-base text-charcoal/70 font-body max-w-2xl">
            Machine learning pipelines, AI applications, and systems research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCards.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="rounded-2xl border-2 border-[#800000]/30 bg-white shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] hover:border-[#800000] transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-video w-full bg-gray-50 border-b-2 border-[#800000]/10 relative overflow-hidden">
                <SlideshowProjectImage
                  images={proj.thumbnails}
                  title={proj.title}
                  priority={idx < 2}
                />
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-display font-bold text-charcoal mb-2 group-hover:text-[#800000] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal/70 font-body line-clamp-3">
                    {proj.blurb}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {proj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-wider bg-[#800000]/5 text-[#800000] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {proj.liveLink && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-charcoal hover:text-[#800000] flex items-center gap-1.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-charcoal hover:text-[#800000] flex items-center gap-1.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg> Code
                    </a>
                  )}
                  {proj.videoLink && (
                    <a
                      href={proj.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-charcoal hover:text-[#800000] flex items-center gap-1.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg> Video
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
