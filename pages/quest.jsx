import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Quest() {
  const [time, setTime] = useState(60)
  const [done, setDone] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (time <= 0) {
      setDone(true)
      return
    }
    const t = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(t)
  }, [time])

  return (
    <>
      <div className="blur-overlay"></div>

      <div className="key-card">
        <h5>Complete Quest</h5>
        <p className="text-muted">Click button and wait 60 seconds</p>

        <button
          className="btn-dark quest-btn"
          onClick={() => window.open("https://youtube.com", "_blank")}
        >
          Go to Quest
        </button>

        <div className="timer-box">
          Time left: <span>{time}s</span>
        </div>

        <button
          className={`verify-btn ${done ? "active" : ""}`}
          disabled={!done}
          onClick={() => router.push("/generate")}
        >
          Verify
        </button>
      </div>
    </>
  )
}
