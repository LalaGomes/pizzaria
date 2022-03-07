const PizzasController = {
    listar: (req, res) =>{
        const pizzas = require('../database/Pizzas.json')
        
        res.render('pizzas.ejs', {pizzas});
    }
};

module.exports = PizzasController;