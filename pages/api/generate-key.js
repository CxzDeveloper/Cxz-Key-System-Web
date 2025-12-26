export default function handler(req, res) {
  const key = "CXZ-" + Math.random().toString(36).substring(2, 12).toUpperCase()
  res.status(200).json({ key })
}
