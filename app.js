const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey Bro !! - from QA EKS 🚀');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
