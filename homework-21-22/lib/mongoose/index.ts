import mongoose from "mongoose";

const { MONGO_URI } = process.env;

if (!MONGO_URI) throw new Error("MONGO_URI is not defined.");

export const dbConnect = async () => mongoose.connect(MONGO_URI);
