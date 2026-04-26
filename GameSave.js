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
  },
  { timestamps: true }
);

gameSaveSchema.pre('save', function (next) {
  this.savedAt = new Date();
  next();
});

module.exports = mongoose.model('GameSave', gameSaveSchema);
