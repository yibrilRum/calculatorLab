const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// allow requests from anywhere
app.use(cors());

// define our api route
// add, sub, mult, div, pwr, root, sqrt
app.get("/div", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (b === 0) {
	return res.status(400).json({ error: "Division by zero is not allowed!" })
  }

  const result = a / b;
  const remainder = a % b;
  return res.json({ result, remainder })
});

// app.listen(port, () => {
//  console.log("Server running on " + port)
// });
