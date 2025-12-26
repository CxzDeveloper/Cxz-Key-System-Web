import { motion } from 'framer-motion';

export default function Quest() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-4">Complete Quest</h2>
        <ul className="space-y-2 opacity-80">
          <li>✔ Like Video</li>
          <li>✔ Subscribe Channel</li>
          <li>✔ Join Group</li>
        </ul>

        <form action="/api/verify-quest" method="POST">
          <button className="w-full mt-6 py-3 bg-green-600 rounded-xl hover:scale-105 transition">
            Verify
          </button>
        </form>
      </motion.div>
    </div>
  );
}
