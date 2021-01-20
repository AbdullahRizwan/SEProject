const router = require('express').Router();
let RepairRegister = require('../models/repairregister.model');

router.route('/').get((req, res) => {
  RepairRegister.find()
    .then(repairregister => res.json(repairregister))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {

  const itemID= req.body.itemID;
  const itemname= req.body.itemname;
  const vendorID= req.body.vendorID;
  const vendorname=req.body.vendorname;
  const billnumber=Number(req.body.billnumber);
  const cost=Number(req.body.cost);
  const date=Date.parse(req.body.date);
  const approvalordernumber=Number(req.body.approvalordernumber);
  const depreciationvalue = Number(req.body.depreciationvalue);


  const newRepairRegister = new RepairRegister({
      itemID,
      itemname,
      vendorID,
      vendorname,
      billnumber,
      cost,
      date,
      approvalordernumber,
      depreciationvalue
    
  });
  newRepairRegister.save()
  .then(() => res.json('item in Repair Register added!'))
  .catch(err => {
    res.status(400).json('Error: ' + err)
    console.log(err)
});
});

module.exports = router;