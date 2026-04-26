// db/connect.js — MongoDB կապ Mongoose-ով
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Mongoose 8-ում այս options-ները default-ով ակտիվ են,
      // բայց ավելացնում ենք հստակության համար
      serverSelectionTimeoutMS: 5000, // 5 վ-ի ընթացքում չկապվի → error
    });

    console.log(`✅ MongoDB կապվեց: ${conn.connection.host}`);
  } catch (err) {
    console.error('❌ MongoDB կապի սխալ:', err.message);
    process.exit(1); // Server-ը կանգ կառնի, եթե DB-ն անհասանելի է
  }
};

module.exports = connectDB;
