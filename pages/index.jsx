
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4">CxzDev Key System</h1>
        <p className="opacity-70 mb-6">Secure • Smooth • Professional</p>
        <a
          href="/quest"
          className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          Get Access
        </a>
      </motion.div>
    </div>
  );
}
