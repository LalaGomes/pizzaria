const pizzas = require('../database/Pizzas.json');

const PizzasController = {
    listar: (req, res) => {

        res.render('pizzas.ejs', { pizzas });
    },

    mostrar: (req, res) => {
        let id = req.params.id;

        pizzas.find(p => p.id == id);

        res.render('pizza.ejs', {pizzas})
    }
};

module.exports = PizzasController;