// models/GameSave.js
const mongoose = require('mongoose');

const gameSaveSchema = new mongoose.Schema(
  {
    user: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      'User',
      required: true,
      unique:   true,
      index:    true,
    },

    playerData: {
      type:     mongoose.Schema.Types.Mixed,
      required: true,
    },

    savedAt: { type: Date, default: Date.now },

    // Բankayin mutoq xyanotsumnner — load-i jamanаk frontend-ə kstuga
    pendingTransfers: [
      {
        fromName:    { type: String },
        fromAccount: { type: String },
        amount:      { type: Number },
        sentAt:      { type: Date, default: Date.now },
      },
    ],

    // Ընկերության հայտեր — ստացված, սպասվող
    friendRequests: [
      {
        fromUserId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        fromName:    { type: String },
        fromAccount: { type: String },
        fromRank:    { type: String },
        sentAt:      { type: Date, default: Date.now },
      },
    ],

    // Ընկերների ցուցակ
    friends: [
      {
        userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name:    { type: String },
        account: { type: String },
      },
    ],
  },
  { timestamps: true }
);

gameSaveSchema.pre('save', function (next) {
  this.savedAt = new Date();
  next();
});

module.exports = mongoose.model('GameSave', gameSaveSchema);
