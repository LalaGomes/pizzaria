const pizzas = require('../database/Pizzas.json');

const PizzasController = {
    listar: (req, res) => {
        
     res.render('pizzas.ejs', { pizzas, busca: '' })
    },

     mostrar: (req, res) => {
       let id = req.params.id;

        const pizza = pizzas.find(p => p.id == id);

        let posicao = pizzas.indexOf(pizza);

        let idProxima = null
        if (posicao < pizzas.length - 1) {
            idProxima = pizzas[posicao + 1].id
        } ;
        let idAnterior = null 
        if (posicao > 0) {
            idAnterior = pizzas[posicao - 1].id
        } ;

        res.render('pizza.ejs', { pizzas, posicao});
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