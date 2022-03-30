This is a reproduction of the `now-proxy` behaviour reported over at https://github.com/vercel/community/discussions/500.

```
// /api/time

export default function handler (req, res) {

  const now = Date.now()
  res.statusCode = 200
  res.json({ now, query: req.query, url: req.url })
}

```

When you visit the `/api/time` endpoint with a query string like `?name=william&place=HongKong&product=Vercel&price=2000&message=1283024&format=json`, the `req.query` object and `req.url` object is returned.

### Expected Result
Visit https://discussion-500-nextjs-query-string-order-test.vercel-support.app/api/time?name=william&place=HongKong&product=Vercel&price=2000&message=1283024&format=json and the following json _should_ be returned:

```
{
  "now": 1648629415573,
  "query": {
    "name": "william",
    "place": "HongKong",
    "product": "Vercel",
    "price": "2000",
    "message": "1283024",
    "format": "json"
  },
  "url": "/api/time?name=william&place=HongKong&product=Vercel&price=2000&message=1283024&format=json"
}
```

### Current Result

```
{
  "now": 1648629415573,
  "query": {
    "name": "william",
    "place": "HongKong",
    "product": "Vercel",
    "price": "2000",
    "message": "1283024",
    "format": "json"
  },
  "url": "/api/time?place=HongKong&message=1283024&product=Vercel&name=william&price=2000&format=json"
}
```

### Note
- This works fine locally.
