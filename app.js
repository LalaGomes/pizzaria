const express = require('express');

const PizzasRouter = require('./routers/PizzasRouter');

const app = express();

app.get('/', (req,res)=>{
    res.send("Olá visitante")
});

app.use('/', PizzasRouter)

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000!')
})