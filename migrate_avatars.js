// migrate_avatars.js — One-time script: copy avatarImg/avatarColor from User → GameSave.playerData
// Run once on your server: node migrate_avatars.js
require('dotenv').config();

const mongoose  = require('mongoose');
const User      = require('./User');
const GameSave  = require('./GameSave');
const connectDB = require('./connect');

connectDB().then(async () => {
  try {
    const users = await User.find({}, { _id: 1, avatarImg: 1, avatarColor: 1 }).lean();
    console.log(`Found ${users.length} users to migrate`);

    let updated = 0;
    for (const u of users) {
      const result = await GameSave.findOneAndUpdate(
        { user: u._id },
        {
          $set: {
            'playerData.avatarImg':   u.avatarImg   || null,
            'playerData.avatarColor': u.avatarColor || '#ff3b30',
          },
        },
        { new: true }
      );
      if (result) updated++;
    }

    console.log(`Migration done — updated ${updated}/${users.length} GameSave records`);
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    mongoose.disconnect();
    process.exit(0);
  }
});
