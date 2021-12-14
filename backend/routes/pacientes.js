var express = require('express');
var router = express.Router();

let pacientes = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(pacientes);
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  pacientes.push({ 'id': pacientes.length + 1, 'paciente': req.body.paciente });
  res.json(pacientes);
  console.log(pacientes);
});

module.exports = router;