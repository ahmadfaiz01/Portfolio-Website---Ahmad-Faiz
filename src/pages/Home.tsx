import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const backgroundLabels = [
  { text: 'ML', section: 'projects', x: '30%', y: '88%', rotate: -2, size: 'text-5xl' },
  { text: 'Engineer', section: 'projects', x: '30%', y: '94%', rotate: -2, size: 'text-3xl' },
  { text: 'RAG', section: 'projects', x: '62.8%', y: '60%', rotate: 2, size: 'text-6xl' },
  { text: 'Systems', section: 'projects', x: '63%', y: '68%', rotate: 2, size: 'text-3xl' },
  { text: 'UI/UX', section: 'designs', x: '28%', y: '63%', rotate: -12, size: 'text-5xl' },
  { text: 'Design', section: 'designs', x: '29%', y: '70%', rotate: -12, size: 'text-4xl' },
  { text: 'Product', section: 'about', x: '60%', y: '91%', rotate: 6, size: 'text-3xl' },
  { text: 'Design', section: 'about', x: '62%', y: '95%', rotate: 6, size: 'text-4xl' },
]

const stats = [
  { label: 'Focus', value: 'ML · RAG · UI/UX' },
  { label: 'Location', value: 'Islamabad · PK' },
  { label: 'Role', value: 'CS @ NUST · 3rd year' },
]

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  const [showCVOptions, setShowCVOptions] = useState(false)

  return (
    <div className="min-h-screen bg-base text-charcoal font-body" onClick={() => setShowCVOptions(false)}>
      <div className="max-w-5xl mx-auto px-6 py-10 relative z-10 pt-24">
        <div className="relative flex justify-center mb-8 overflow-visible">
          <motion.img
            src="/portrait.png"
            alt="Portrait of Ahmad Faiz"
            className="relative z-10 w-[280px] sm:w-[400px] h-auto object-contain filter grayscale hover:grayscale-0 transition duration-200"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
          {backgroundLabels.map((label) => {
            const paths: { [key: string]: string } = {
              projects: '/projects',
              designs: '/designs',
              about: '/about',
            }
            return (
              <Link
                key={label.text + label.y}
                to={paths[label.section] || '/'}
                className={`hidden md:block absolute ${label.size} font-display font-bold uppercase tracking-tight text-[#800000cc] hover:text-[#800000] transition cursor-pointer`}
                style={{ left: label.x, top: label.y, transform: `rotate(${label.rotate}deg)` }}
              >
                <motion.span
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -4 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                >
                  {label.text}
                </motion.span>
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl px-4">
            Ahmad Faiz is an ML Engineer &amp;<br />UI/UX Designer
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-2xl leading-relaxed font-body">
            Building AI-driven software that handles the heavy lifting so humans don’t have to.
          </p>
          <div className="flex gap-4 justify-center items-center relative">
            <Link
              to="/connect"
              className="rounded-full bg-charcoal px-6 py-3 text-white font-semibold transition hover:-translate-y-0.5 hover:shadow-lg font-body"
            >
              Get in touch
            </Link>
            <div className="relative">
              <button
                className="rounded-full border border-charcoal/20 bg-white px-6 py-3 font-semibold text-charcoal transition hover:-translate-y-0.5 hover:shadow-lg font-body flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowCVOptions(!showCVOptions)
                }}
              >
                Download CV
                <svg className={`w-4 h-4 transition-transform ${showCVOptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {showCVOptions && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-20 flex flex-col">
                  <a href="/CV.pdf" target="_blank" className="px-4 py-3 text-sm text-left hover:bg-gray-50 text-charcoal font-bold flex items-center gap-2" onClick={() => setShowCVOptions(false)}>
                    <span>Technical CV</span>
                  </a>
                  <a href="/CV.pdf" target="_blank" className="px-4 py-3 text-sm text-left hover:bg-gray-50 text-charcoal font-bold flex items-center gap-2 border-t border-gray-100" onClick={() => setShowCVOptions(false)}>
                    <span>Design CV</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-0 rounded-3xl border-2 border-[#800000]/30 bg-white p-6 shadow-sm pt-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed font-body font-bold text-charcoal/60 uppercase tracking-widest text-sm">
              Few things about me
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-center">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-2xl border-2 border-[#800000]/30 bg-white px-4 py-3 shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-xs uppercase tracking-wide font-display text-[#800000] font-bold group-hover:text-[#800000]">{item.label}</div>
                  <div className="font-semibold mt-1 font-display text-charcoal group-hover:text-charcoal">{item.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {[
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'LangChain', icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langchain-color.png' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
                { name: 'Maze', icon: 'https://www.datocms-assets.com/38511/1762798858-maze-icon.svg' },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="rounded-full bg-white p-3 transition hover:bg-[#800000] cursor-pointer shadow-sm group"
                  title={tech.name}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
