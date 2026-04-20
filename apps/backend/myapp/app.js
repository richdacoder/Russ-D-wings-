const express = require('express');
const app = express();

/*
- make sure health is 200
- added allowed urls
- add cors
- make middleware
- make 404 handler
- make error hanler

*/

app.get('/health', (req, res) => {
  return res.status(200)
  .json({status:200})
});

const allowedOrigins = [process.env.NEXT_PUBLIC_API_URL];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);
