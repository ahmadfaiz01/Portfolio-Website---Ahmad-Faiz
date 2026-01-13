import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-base text-charcoal font-body flex items-center justify-center">
            <div className="max-w-md w-full px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[120px] font-bold font-display text-[#800000] leading-none mb-2">
                        404
                    </h1>
                    <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-[#800000] text-white font-bold font-display text-lg shadow-[0_4px_0_#3f0000] hover:bg-[#600000] hover:shadow-[0_6px_0_#3f0000] transition-all duration-300"
                        >
                            Return Home
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
