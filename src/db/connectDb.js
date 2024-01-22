const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connectionURI;
  if (process.env.NODE_ENV === "development") {
    connectionURI = process.env.DATABASE_LOCAL;
    connectionURI = connectionURI.replace("<username>", process.env.DB_NAME);
    connectionURI = connectionURI.replace(
      "<password>",
      process.env.DB_PASSWORD
    );
  } else {
    connectionURI = process.env.DATABASE_PROD;
  }
  return connectionURI;
};

const connectDB = async () => {
  console.log("connecting to database...");
  const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.zelnjpd.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(uri, {
    dbName: "foodi",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to database");
};

module.exports = connectDB