import { motion } from "framer-motion";

export default function QuestCard({ title, url, onClick, timer, done }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border rounded-xl shadow-sm p-4 w-full"
    >
      <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
      <button
        onClick={onClick}
        disabled={done}
        className={`w-full py-2 rounded-lg font-bold transition
          ${done
            ? "bg-green-500 text-white"
            : timer > 0
            ? "bg-gray-300 text-gray-600"
            : "bg-blue-600 text-white hover:bg-blue-700"}`}
      >
        {done ? "Completed" : timer > 0 ? `Wait ${timer}s` : "Start Quest"}
      </button>
    </motion.div>
  );
    }
