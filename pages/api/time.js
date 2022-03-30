// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler (req, res) {

  const now = Date.now()
  res.statusCode = 200
  res.json({ now, query: req.query, url: req.url, req })
}
