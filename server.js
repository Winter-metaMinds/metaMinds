const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const Scheme = mongoose.model("Scheme", {
  name: String,
  minAge: Number,
  maxAge: Number,
  category: String,
  education: String,
  incomeLimit: Number
});

app.post("/check-eligibility", async (req, res) => {
  const { age, category, education, income } = req.body;

  const schemes = await Scheme.find({
    minAge: { $lte: age },
    maxAge: { $gte: age },
    category: category,
    education: education,
    incomeLimit: { $gte: income }
  });

  res.json(schemes);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
