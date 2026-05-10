// models/Family.js — Ընտ. schema (war system included)
const mongoose = require('mongoose');

const attackLogSchema = new mongoose.Schema(
  {
    attackerId:   { type: String },
    attackerName: { type: String },
    side:         { type: String, enum: ['attacker', 'defender'] },
    damage:       { type: Number },
    attackedAt:   { type: Date, default: Date.now },
  },
  { _id: false }
);

const familySchema = new mongoose.Schema(
  {
    name: {
      type:      String,
      required:  true,
      unique:    true,
      trim:      true,
      minlength: 2,
      maxlength: 32,
    },

    bossId:      { type: String, required: true, index: true },
    bossName:    { type: String, required: true },
    bossAccount: { type: String, default: '?' },
    color:       { type: String, default: '#ff3b30' },
    power:       { type: Number, default: 15 },
    treasury:    { type: Number, default: 0 }, // ընտ-ի ընդհ. գantz

    members: [
      {
        userId:   { type: String, required: true },
        name:     { type: String, default: 'Anon' },
        account:  { type: String, default: '?' },
        role:     { type: String, enum: ['underboss', 'capo', 'soldier'], default: 'soldier' },
        joinedAt: { type: Date, default: Date.now },
      },
    ],

    // ── War system ────────────────────────────────────────────────
    // activeWar-ը ՄԻԱՅՆ հարձakогh yntaniqum e pahvum
    // defenseWar-ը MIAY partabanvoghin (ref դepi hارձakoghin)
    activeWar: {
      enemyFamilyId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Family', default: null },
      enemyFamilyName: { type: String, default: null },
      declaredAt:      { type: Date, default: null },
      attackerHP:      { type: Number, default: 0 },   // мой HP
      defenderHP:      { type: Number, default: 0 },   // thshnamii HP
      warStake:        { type: Number, default: 0 },   // $$ at stake
      attacks:         [attackLogSchema],
    },

    // Partabanvoghin՝ hарձakогhi yntaniqy ID
    underAttackBy: {
      type:    mongoose.Schema.Types.ObjectId,
      ref:     'Family',
      default: null,
    },

    warHistory: [
      {
        enemyFamilyName: { type: String },
        result:          { type: String, enum: ['won', 'lost'] },
        endedAt:         { type: Date, default: Date.now },
        prizeAmount:     { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Family', familySchema);
