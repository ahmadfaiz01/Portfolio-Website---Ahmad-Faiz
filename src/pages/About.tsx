import { motion } from 'framer-motion'

const education = [
  {
    institution: 'NUST',
    fullName: 'School of Electrical Engineering & Computer Science',
    degree: 'BS Computer Science',
    period: '2023 - 2027',
    year: '4th Sem',
    logo: '/nust-logo.png',
    location: 'Islamabad',
  },
]

const experience = [
  {
    organization: 'bluediamond.ai',
    role: 'AI Intern',
    period: 'Aug 2025 - Present',
    location: 'Austria (Remote)',
    description: 'Working on AI agents, agentic RAG, Rust programming, automation, and Moodle integration.',
    skills: ['AI Agents', 'RAG', 'Rust', 'Automation'],
    logo: '/aiesec-logo.png',
  },
  {
    organization: 'AIESEC',
    role: 'Member',
    period: '2023 - Present',
    description: 'Contributing to global youth leadership and cross-cultural exchange programs.',
    skills: ['Leadership', 'Management'],
    logo: '/aiesec-logo.png',
  },
]

const skills = {
  technical: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'ScikitLearn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  ],
  design: [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
  ],
}

const currentFocus = [
  'RAG evaluation and data curation for reliability',
  'Synthetic data loops to improve recall and coverage',
  'UX for debugging prompts, contexts, and agent behavior',
]

export default function About() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl w-full"
      >
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-2 w-2 rounded-full bg-[#800000] shadow-[0_0_0_6px_rgba(128,0,0,0.15)]" />
            <div className="text-sm uppercase tracking-wide text-charcoal/60 font-display font-bold">About</div>
          </div>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">
              Ahmad Faiz
            </h1>
            <p className="text-xl leading-relaxed font-body text-charcoal/80 max-w-2xl">
              I'm a 4th-semester CS undergrad at NUST. I split time between ML engineering (RAG/LLMs) and crafting interfaces
              for AI workflows.
            </p>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#800000] rounded-full blur-2xl opacity-20" />
            <img
              src="/pfp2.png"
              alt="Ahmad Faiz"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_10px_0_rgba(0,0,0,0.1)]"
            />
          </div>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* LEFT COL */}
          <div className="flex flex-col gap-6">
            
            {/* Education */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border-2 border-[#800000]/30 bg-white p-6 shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-wide text-[#800000] mb-4 font-display font-bold">Education</div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 border-2 border-[#800000]/10">
                  <img src={education[0].logo} alt="NUST" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-charcoal">{education[0].institution}</h3>
                  <p className="text-sm text-charcoal/70 font-body mb-1">{education[0].fullName}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                     <span className="text-xs font-bold bg-[#800000]/10 text-[#800000] px-2 py-1 rounded">{education[0].degree}</span>
                     <span className="text-xs font-bold bg-gray-100 text-charcoal/60 px-2 py-1 rounded">{education[0].year}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border-2 border-[#800000]/30 bg-white p-6 shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-wide text-[#800000] mb-6 font-display font-bold">Skills</div>
              <div className="space-y-6">
                <div>
                    <div className="text-xs font-bold text-charcoal/40 mb-3 uppercase">Technical</div>
                    <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg border border-[#800000]/20 px-3 py-1.5 hover:bg-[#800000]/5 transition-colors">
                            <img src={skill.icon} className="w-4 h-4" alt="" />
                            <span className="text-xs font-bold text-charcoal">{skill.name}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-xs font-bold text-charcoal/40 mb-3 uppercase">Design</div>
                    <div className="flex flex-wrap gap-2">
                        {skills.design.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg border border-[#800000]/20 px-3 py-1.5 hover:bg-[#800000]/5 transition-colors">
                            <img src={skill.icon} className="w-4 h-4" alt="" />
                            <span className="text-xs font-bold text-charcoal">{skill.name}</span>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col gap-6">
            
            {/* Experience (Updated to White Card style) */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border-2 border-[#800000]/30 bg-white p-6 shadow-[0_3px_0_#800000] hover:shadow-[0_10px_0_#800000] transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-wide text-[#800000] mb-6 font-display font-bold">Experience</div>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#800000]/10 last:border-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#800000] border-2 border-white shadow-sm" />
                    <div className="mb-2">
                      <h3 className="text-lg font-display font-bold text-charcoal">{exp.organization}</h3>
                      <div className="flex justify-between items-center text-xs font-bold text-[#800000]/80 mt-1">
                        <span>{exp.role}</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal/70 font-body mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills?.map((s, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-charcoal/60 px-2 py-1 rounded">
                            {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border-2 border-[#ffffff]0 bg-[#800000] p-6 shadow-[0_3px_0_#ffffff] hover:shadow-[0_10px_0_#ffffff] transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-wide text-[#ffffff] mb-4 font-display font-bold">Focus</div>
              <ul className="space-y-3">
                {currentFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-body text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}