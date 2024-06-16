const express = require("express");
const cors = require("cors");
const connectToDb = require("./db.js");
const routes = require("./routes/taskRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const main = async () => {
  try {
    await connectToDb();
    app.listen(3030, () => {
      console.log("Listening to Port: 3030...");
    });
  } catch (err) {
    console.error("Failed to connect to the database. Server not started.");
  }
};

main();
