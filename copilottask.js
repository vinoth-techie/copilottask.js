const express = require('express');
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

//nodejs post request function for simple interest
app.post('/simpleinterest', function (req, res) {
 
  const { p, r, t } = req.body;
   //formula to calculate simple interest
  const simpleinterest = (p * r * (t / 12)) / 100
  //add simpleinterest and principal
  const total = simpleinterest + p

  res.status(200).json({
    'Interest earned': simpleinterest,
    'Principal Amount': p,
    'Total Amount': total
  })
})
//nodejs post request function for compound interest
app.post('/compoundinterest', function (req, res) {

  const { p, r, t } = req.body;
  //formula to calculate compound interest
  var compoundinterest = p * (Math.pow((1 + (r / 12) / 100), t));
  //add compoundinterest and principal
  const total = compoundinterest + p
  //get two decimal places in javascript
  compoundinterest = compoundinterest.toFixed(2) 
  res.status(200).json({
    'Interest earned': compoundinterest,
    'Principal Amount': p,
    'Total Amount': total
  })
})
