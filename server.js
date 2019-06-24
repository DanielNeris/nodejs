const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodoapi', { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res) => {
    Product.create({ 
        title: 'ReactJS', 
        description: 'Learning ReactJS/Native and NodeJs',
        url: 'http://github.com/facebook/react'
    });
    return res.send("Hello guys");
});

app.listen(3001);