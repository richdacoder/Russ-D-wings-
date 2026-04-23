const express = require('express');
const app = express();
const cors = require('cors');

/*
- make sure health is 200 *
- added allowed urls*
- add cors*
- make middleware
- make 404 handler
- make error hanler

*/

app.get('/health', (req, res) => {
  return res.status(200)
  .json({status:200})
});

// const allowedOrigins = [process.env.NEXT_PUBLIC_API_URL];
const allowedOrigins = ['http://localhost:3000'];
console.log('allowed origin', allowedOrigins);

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

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));


  const router =
  app.post('/availability', (req, res) => {
    res.json({ available: true });
  });

  app.use('/api', router);

console.log('check', router );

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    error: "Not Found",
    message: "The requested resource does not exist."
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001')
});
