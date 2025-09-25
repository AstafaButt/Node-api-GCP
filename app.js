const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('✅ Node API is running on Cloud Run!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/version', (req, res) => {
  // VERSION should be injected as an env var during deploy
  res.send(process.env.VERSION || 'unknown');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
