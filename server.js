const express = require('express');
const app = express();
require('./hbs/helpers');

const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Raul',
    //     edad: 34,
    //     url: req.url
    // }
    //res.send(salida)
    res.render('home', {
        nombre: 'raul huamani hilario',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});