import crypto from 'crypto';

export const KEYS = global.keys || (global.keys = []);

export default function handler(req, res) {
  const key = 'CXZ-' + crypto.randomBytes(5).toString('hex').toUpperCase();
  const expires = Date.now() + 2 * 24 * 60 * 60 * 1000;

  KEYS.push({ key, expires });

  res.json({
    key,
    expires: new Date(expires).toLocaleString()
  });
}
