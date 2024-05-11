import mongoose from "mongoose";

export function dbConnection() {
  mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("connection to database established ✔");
  })
  .catch((err) => {
    console.error("database connection error " + err);
  })
}