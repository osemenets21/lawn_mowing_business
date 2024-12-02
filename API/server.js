const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let visitorCount = 30100; 

app.get("/api/visitors", (req, res) => {
  res.json({ count: visitorCount });
});

app.post("/api/visitors", (req, res) => {
  visitorCount += 1;
  res.json({ count: visitorCount });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
