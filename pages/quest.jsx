import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Quest() {
  const router = useRouter();

  const quests = [
    { id: 1, title: "Subscribe YouTube", url: "https://youtube.com" },
    { id: 2, title: "Join Telegram Channel", url: "https://t.me" },
    { id: 3, title: "Follow GitHub", url: "https://github.com" }
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white border rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Cxz Key System
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Complete all steps below to receive your key
        </p>

        {quests.map((q) => (
          <div key={q.id} className="border rounded-xl p-4 mb-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{q.title}</span>
              <button
                onClick={() => startQuest(q)}
                disabled={done[q.id] || timer[q.id] > 0}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold
                  ${
                    done[q.id]
                      ? "bg-green-500 text-white"
                      : timer[q.id]
                      ? "bg-gray-300 text-gray-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                {done[q.id] ? "Done" : timer[q.id] ? `${timer[q.id]}s` : "Start"}
              </button>
            </div>
          </div>
        ))}

        <button
          disabled={!allDone}
          onClick={() => router.push("/generate")}
          className={`w-full mt-4 py-2.5 rounded-xl font-bold
            ${
              allDone
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500"
            }`}
        >
          Get Key
        </button>
      </div>
    </div>
  );
            }
