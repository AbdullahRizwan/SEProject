const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deadstockSchema = new Schema({
    itemID:{type: String,required: true},
  itemname: { type: String, required: true },
  purchaseprice: { type: Number, required: true },
  reserveprice: { type: Number, required: true },
  approvingauthority: { type: String, required: true },
  expirydate: { type: Date, required: true },
  auctionnoticedate: { type: Date, required: true },
  addate: { type: Date, required: true },
}, {
  timestamps: true,
});

const DeadStock = mongoose.model('DeadStock', deadstockSchema);

module.exports = DeadStock;