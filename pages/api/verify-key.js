import { KEYS } from './generate-key';

export default function handler(req, res) {
  const { key } = req.query;
  const data = KEYS.find(k => k.key === key);

  if (!data) return res.json({ success: false });
  if (Date.now() > data.expires)
    return res.json({ success: false, expired: true });

  res.json({ success: true });
}
