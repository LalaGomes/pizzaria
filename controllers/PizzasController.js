const pizzas = require('../database/Pizzas.json');

const PizzasController = {
    listar: (req, res) => {

        res.render('pizzas.ejs', { pizzas, busca: '' })
    },

    mostrar: (req, res) => {
        let id = req.params.id;

        pizzas.find(p => p.id == id);
        res.render('pizza.ejs', { pizzas })
    },

    buscar: (req, res) => {
        let busca = req.query.q;
        if (busca) {
            let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
            return res.render('../views/pizzas.ejs', { pizzas: result, busca });
        } else {
            return res.redirect('/');
        }
    }
}

module.exports = PizzasController;