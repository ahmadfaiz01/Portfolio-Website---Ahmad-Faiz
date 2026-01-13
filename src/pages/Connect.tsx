import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Email',
    handle: 'itsahmadfaiz@gmail.com',
    link: 'mailto:itsahmadfaiz@gmail.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg',
    color: 'bg-red-50 text-red-600',
  },
  {
    name: 'LinkedIn',
    handle: 'ahmadfaiz01',
    link: 'https://www.linkedin.com/in/ahmadfaiz01/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'GitHub',
    handle: 'ahmadfaiz01',
    link: 'https://github.com/ahmadfaiz01',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    color: 'bg-gray-50 text-gray-800',
  },
]

export default function Connect() {
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
            <div className="text-sm uppercase tracking-wide text-charcoal/60 font-display font-bold">Connect</div>
          </div>
          <h1 className="text-4xl font-display font-bold text-charcoal">Get in Touch</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg text-charcoal/80 font-body leading-relaxed mb-8">
                Let's collaborate on ML/RAG products or UI/UX for AI tools. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="block rounded-2xl border-2 border-[#800000]/30 bg-white p-4 shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] hover:border-[#800000] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border-2 border-current/10`}>
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wide text-charcoal/60 font-display font-bold mb-1">
                        {social.name}
                      </div>
                      <div className="text-base font-body font-bold text-charcoal group-hover:text-[#800000] transition-colors truncate">
                        {social.handle}
                      </div>
                    </div>
                     <div className="text-[#800000]/30 group-hover:text-[#800000] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                     </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border-2 border-[#800000]/30 bg-white p-6 sm:p-8 shadow-[0_3px_0_#800000] relative overflow-hidden"
          >
            <div className="mb-6 relative z-10">
              <div className="text-sm uppercase tracking-wide text-[#800000] mb-2 font-display font-bold">Quick Note</div>
              <p className="text-sm text-charcoal/70 font-body">
                Send a quick message and I'll get back to you soon.
              </p>
            </div>
            <form className="space-y-4 relative z-10">
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wide text-charcoal/60 font-display font-bold mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border-2 border-[#800000]/20 bg-gray-50 px-4 py-3 outline-none focus:border-[#800000] focus:bg-white transition font-body text-charcoal placeholder:text-charcoal/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wide text-charcoal/60 font-display font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border-2 border-[#800000]/20 bg-gray-50 px-4 py-3 outline-none focus:border-[#800000] focus:bg-white resize-none transition font-body text-charcoal placeholder:text-charcoal/40"
                  placeholder="What can we build together?"
                />
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-[#800000] hover:bg-[#600000] px-6 py-3 text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 font-display"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}