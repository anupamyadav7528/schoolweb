import mongoose from 'mongoose';

// Ye line sabse zaroori hai. Iske bina error aayega.
export const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    if (!process.env.MONGO_URI) {
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.log('❌ DB Error:', error);
  }
};
