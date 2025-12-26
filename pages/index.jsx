import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import QuestCard from "../components/QuestCard";
import Footer from "../components/Footer";

export default function Home() {
  const quests = [
    { id: 1, title: "Subscribe YouTube", url: "https://youtube.com" },
    { id: 2, title: "Join Telegram", url: "https://t.me" },
    { id: 3, title: "Follow GitHub", url: "https://github.com" },
  ];

  const [timer, setTimer] = useState({});
  const [done, setDone] = useState({});

  const startQuest = (q) => {
    window.open(q.url, "_blank");
    setTimer((p) => ({ ...p, [q.id]: 60 }));
  };

  useEffect(() => {
    const i = setInterval(() => {
      setTimer((p) => {
        const n = { ...p };
        Object.keys(n).forEach((id) => {
          if (n[id] > 0) n[id]--;
          if (n[id] === 0) setDone((d) => ({ ...d, [id]: true }));
        });
        return n;
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const allDone = quests.every((q) => done[q.id]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to Cxz Key System
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Complete the quests below then verify to get your key.
          </p>

          <div id="quest" className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {quests.map((q) => (
              <QuestCard
                key={q.id}
                title={q.title}
                url={q.url}
                onClick={() => startQuest(q)}
                timer={timer[q.id] || 0}
                done={done[q.id]}
              />
            ))}
          </div>

          <button
            id="verify"
            disabled={!allDone}
            className={`mt-12 px-6 py-3 font-bold rounded-xl transition
              ${allDone
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500"}`}
          >
            Verify & Get Key
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
  }
