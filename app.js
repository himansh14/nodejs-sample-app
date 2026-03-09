const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey Bro Your Application is deployed in K8s and managed deploying it by argocd !!! - from QA EKS 🚀');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
