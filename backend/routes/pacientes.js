var express = require('express');
var router = express.Router();

let pacientes = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(pacientes);
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  pacientes.push({
    'id': 1, 'nomePaciente': req.body.nomePaciente, 'dataNascimento': req.body.dtNascimento, 'telefone': req.body.telefone, 'email': req.body.email
  });
  res.json(pacientes);
  console.log(pacientes);
});

module.exports = router;