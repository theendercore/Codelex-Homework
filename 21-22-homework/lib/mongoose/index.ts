import mongoose from "mongoose";

const { MONGO_URI } = process.env;
if (!MONGO_URI) throw new Error("MONGO_URI is not defined.");

mongoose.set("strictQuery", false);

export const dbConnect = async () => await mongoose.connect(MONGO_URI);
