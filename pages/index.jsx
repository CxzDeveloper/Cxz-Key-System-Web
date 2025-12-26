import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="navbar">
        <strong>Cxz Key System</strong>
      </div>

      <div className="hero-section">
        <h4>Roblox Key System</h4>
        <p className="text-muted">Complete quest to get your key</p>
      </div>

      <div className="key-card">
        <h5>Get Access Key</h5>
        <p className="text-muted">You must complete verification first</p>

        <Link href="/quest">
          <button className="btn-dark">Start Verification</button>
        </Link>
      </div>
    </>
  )
}
