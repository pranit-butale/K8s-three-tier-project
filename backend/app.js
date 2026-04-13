require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 🔥 IMPORTANT LINE

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ message: "🔥 Backend connected successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
~
