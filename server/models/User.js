// models/User.js — Օգտատիրոջ schema
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type:     String,
      required: [true, 'Անունը պարտադիր է'],
      trim:     true,
      minlength: [2, 'Անունը պետք է լինի առնվազն 2 նիշ'],
      maxlength: [32, 'Անունը չպետք է գերազանցի 32 նիշը'],
    },

    email: {
      type:     String,
      required: [true, 'Էլ. հասցեն պարտադիր է'],
      unique:   true,
      lowercase: true,
      trim:     true,
      match: [/\S+@\S+\.\S+/, 'Էլ. հասցեի ձևաչափը սխալ է'],
    },

    password: {
      type:     String,
      required: [true, 'Գաղտնաբառը պարտադիր է'],
      minlength: [6, 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ'],
      select:   false, // Query-ներում password-ը չի վերադառնա
    },

    // Պրոֆիլ
    avatarColor: { type: String, default: '#ff3b30' },
    avatarImg:   { type: String, default: null },   // base64 կամ URL
    bio:         { type: String, default: '', maxlength: 160 },

    // Ստեղծման ամսաթիվ
    createdAt: { type: Date, default: Date.now },
  },
  {
    // createdAt / updatedAt ավտոմատ
    timestamps: true,
  }
);

// ─── Pre-save hook: գաղտնաբառի hash ──────────────────────────────
userSchema.pre('save', async function (next) {
  // Փոփոխված չէ → բաց թող
  if (!this.isModified('password')) return next();

  const salt     = await bcrypt.genSalt(12);
  this.password  = await bcrypt.hash(this.password, salt);
  next();
});

// ─── Instance method: գաղտնաբառի ստուգում ────────────────────────
userSchema.methods.checkPassword = async function (plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model('User', userSchema);
