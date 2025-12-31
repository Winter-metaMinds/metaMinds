app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const reply =
    "Please enter your age, education and category so I can guide you.";

  res.json({ reply });
});
