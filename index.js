const express = require('express');
const consign = require();

let app = express();

consign().include('routes').into(app);

app.use('/index',routesIndex);
app.use('/users',routesUsers);

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});