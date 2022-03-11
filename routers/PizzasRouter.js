const express = require('express');

const router = express.Router();

const PizzasController = require('../controllers/PizzasController');

router.get('/', PizzasController.listar);

router.get('/pizzas/busca', PizzasController.buscar);

router.get('/pizzas/:id', PizzasController.mostrar);

module.exports = router;