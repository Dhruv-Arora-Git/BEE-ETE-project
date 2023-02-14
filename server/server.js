const express = require("express");
const mongoose = require("mongoose");
const { crt } = require("./cart.mongo");
const { ord } = require("./order.mongo");
const cors = require("cors");

const app = express();

app.use(cors({}));
app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("connection established");
});
mongoose.connection.on("error", (err) => {
  console.log("refused");
});

async function connectdata() {
  await mongoose.connect(
    "mongodb+srv://dhruv:harihari@cluster0.89rfyad.mongodb.net/clothes?retryWrites=true&w=majority"
  );
  app.listen(6565, () => {
    console.log("http://localhost:6565/");
  });
}

app.post("/addOrder", async (req, res) => {
  const data = req.body;
  try {
    await ord.create(data);
    res.send("created");
  } catch (err) {
    console.log(err);
  }
});

app.post("/addCart", async (req, res) => {
  const data = req.body;
  try {
    await crt.create(data);
    res.send("created");
  } catch (err) {
    console.log(err);
  }
});

connectdata();
