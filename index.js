const express = require('express');
const app = express();
//Aqui usamos el parametro GET en la ruta RAIZ
app.get('/', (req, res)=> {
  //La función res.send() básicamente envía la respuesta HTTP.
  res.send('Hello World, this is the root route holaaaaaaaaaaa');
});
//La función app.listen() se usa para vincular y escuchar las conexiones en el host y puerto especificados.
app.listen(3000);
//Aqui usamos el parametro GET en la ruta UNO
app.get('/uno', (req, res)=> {
    //La función res.send() básicamente envía la respuesta HTTP.
  res.send('Hello World, from route ONE');
});