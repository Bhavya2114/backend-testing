const express = require("express");

const app = express();

app.use(express.json());

const students = [];

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.post("/students", (req, res) => {
  const { name, dsage } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      error: "Name and age are required"
    });
  }
  students.push({ name, age });

  res.status(201).json({
    message: "Student added successfully",
    students
  });
});

module.exports = app;

if (require.main === module) {
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}