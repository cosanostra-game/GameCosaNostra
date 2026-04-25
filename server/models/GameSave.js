// models/GameSave.js — Խաղի save schema
const mongoose = require('mongoose');

const gameSaveSchema = new mongoose.Schema(
  {
    user: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      'User',
      required: true,
      unique:   true, // Մեկ user → մեկ save
      index:    true,
    },

    // Ամբողջ player object-ը JSON-ով ենք պահում
    // (ճկուն է — frontend-ի player struct-ը կարող է փոխվել)
    playerData: {
      type:     mongoose.Schema.Types.Mixed,
      required: true,
    },

    // Ե՞րբ է վերջին անգամ save արվել
    savedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Save-ից առաջ savedAt-ը թարմացնել
gameSaveSchema.pre('save', function (next) {
  this.savedAt = new Date();
  next();
});

module.exports = mongoose.model('GameSave', gameSaveSchema);
