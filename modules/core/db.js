import mongoose from 'mongoose';

dbConnect().catch(err => console.log(err));

async function dbConnect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/express');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default dbConnect;
