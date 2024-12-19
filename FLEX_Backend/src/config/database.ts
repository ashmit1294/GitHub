import { error } from 'console';
import mongoose from 'mongoose';

const connectDB = async () => {
try {
    if(process.env.MONGODB_URI){await mongoose.connect(process.env.MONGODB_URI);}
    else{
      throw error();
    }
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;
