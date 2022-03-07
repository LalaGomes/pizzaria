const PizzasController = {
    listar: (req, res) =>{
        res.render('pizzas.ejs')
    }
};

module.exports = PizzasController;