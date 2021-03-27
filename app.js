const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "welcome to examinar" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("app is running!");
});