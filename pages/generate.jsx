import { motion } from 'framer-motion';

export default function Generate({ keyData }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl text-center"
      >
        <h2 className="text-2xl mb-4">Your Key</h2>
        <div className="font-mono bg-black/40 px-6 py-3 rounded-xl select-all">
          {keyData.key}
        </div>
        <p className="opacity-60 mt-4">Expires: {keyData.expires}</p>
      </motion.div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/generate-key`);
  const keyData = await res.json();
  return { props: { keyData } };
    }
