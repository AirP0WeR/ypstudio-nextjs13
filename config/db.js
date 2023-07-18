import mongoose from 'mongoose';
import logHelper from '@/utils/logHelper';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    logHelper(`MongoDB Connected: ${conn.connection.host}`)
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
