import mongoose from "mongoose";
export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    res.status(200).json({ message: "Connected to MongoDB" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "MongoDB connection failed", details: error.message });
  }
}
