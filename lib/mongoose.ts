import mongoose from "mongoose";

let isConnected: boolean = false;

const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URL is missing from env");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "stackoverflow",
    });

    console.log("connected to database");

    if (db) {
      isConnected = db.connections[0].readyState === 1;
      console.log("=> using new database connection");
    }
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

export default dbConnect;
