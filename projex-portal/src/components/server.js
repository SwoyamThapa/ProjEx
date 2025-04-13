const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/comments', (req, res) => {
  const { name, comment } = req.body;
  const newEntry = `${name}: ${comment}\n`;

  fs.appendFile('comments.txt', newEntry, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Server Error');
    }
    res.status(200).send('Comment saved');
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
