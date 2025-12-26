import { useEffect, useState } from "react"

export default function Generate() {
  const [key, setKey] = useState("Generating...")

  useEffect(() => {
    fetch("/api/generate-key")
      .then(res => res.json())
      .then(data => setKey(data.key))
  }, [])

  return (
    <>
      <div className="key-card">
        <h5>Your Key</h5>
        <input
          value={key}
          readOnly
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "10px"
          }}
        />
      </div>
    </>
  )
}
