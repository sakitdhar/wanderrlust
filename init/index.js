const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/WonderLust";
const MONGO_URL = "mongodb+srv://<sakit>:<Y9eKpDhLF1jEDyEt>@cluster0.erret.mongodb.net/WonderLust?retryWrites=true&w=majority&appName=Cluster0";


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj, owner: "66c63b30231f0b007ae381c1"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();