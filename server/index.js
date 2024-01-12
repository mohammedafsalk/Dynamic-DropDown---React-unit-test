const express = require("express");
const cors = require("cors");
const dataRouter = require("./routes/data.route");

const app = express();

//Cors settings
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/data", dataRouter);

//Error handler
app.use((err, req, res, next) => {
  const msg = "Internal Server Error";
  res.status(500).json({
    success: false,
    message: msg,
  });
});

app.listen(8080, () => {
  console.log("Server listening on 8080");
});
