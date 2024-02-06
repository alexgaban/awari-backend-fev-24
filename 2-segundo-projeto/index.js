const express = require('express');
const axios = require('axios');
const server = express();

server.get('/awari', async (req, res) =>{
    const result = await axios.get(`https://viacep.com.br/ws/${req.query.cep}/json/`);
    console.log(result.data);
    return res.send('Rota Awari.');
})

server.listen(3333); 