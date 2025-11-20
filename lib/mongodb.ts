import mongoose from 'mongoose';

const MONGODBKEY = process.env.MONGODB_URI;

export default dbConnect;

async function dbConnect() {
  if (!MONGODBKEY) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  await mongoose.connect(MONGODBKEY);
  return mongoose;
}