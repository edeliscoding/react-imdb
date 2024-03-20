require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
const app = express();
const path = require("path");

// const __dirname = path.resolve();
dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

// console.log(__dirname);
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
