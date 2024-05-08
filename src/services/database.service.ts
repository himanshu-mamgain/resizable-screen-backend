import mongoose from "mongoose";

const dbConUrl = process.env.DATABASE_URL;

export function connectDatabase() {
  if (dbConUrl) {
    mongoose.connect(dbConUrl);

    const db = mongoose.connection;

    db.on("error", (error) => console.log(error.message));

    db.once("connected", (connected) =>
      console.log("Successfully connected to database!")
    );

    return db;
  }

  throw new Error("Database url issue");
}
