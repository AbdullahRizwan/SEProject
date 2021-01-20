const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RepairSchema = new Schema({
    
    itemID:{type: String,required: true},
  itemname: { type: String, required: true },
  vendorID:{type: String,required: true},
  vendorname: { type: String, required: true },
  billnumber: { type: Number, required: true },
  cost: { type: Number, required: true },
  date: { type: Date, required: true },
  approvalordernumber: { type: Number, required: true },
  depreciationvalue: { type: Number, required: true }
}, {
  timestamps: true,
});

const RepairRegister = mongoose.model('RepairRegister', RepairSchema);

module.exports = RepairRegister;