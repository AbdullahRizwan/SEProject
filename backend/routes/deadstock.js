const router = require('express').Router();
let DeadStock = require('../models/deadstock.model');

router.route('/').get((req, res) => {
  DeadStock.find()
    .then(deadstock => res.json(deadstock))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const itemID= req.body.itemID;
  const itemname= req.body.itemname;
  const purchaseprice = Number(req.body.purchaseprice);
  const reserveprice = Number(req.body.reserveprice);
  const approvingauthority = req.body.approvingauthority;
  const expirydate = Date.parse(req.body.expirydate);
  const auctionnoticedate =Date.parse(req.body.auctionnoticedate);
  const addate = Date.parse(req.body.addate);
  

  const newDeadStock = new DeadStock({
    itemID,
    itemname,
    purchaseprice,
    reserveprice,
    approvingauthority,
    expirydate,
    auctionnoticedate,
    addate
  });

  newDeadStock.save()
  .then(() => res.json('DeadStock added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;