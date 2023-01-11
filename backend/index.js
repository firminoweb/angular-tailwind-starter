const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyparser.json());

require('dotenv').config();

//setar Api externa (Cat API)
var axios = require('axios');

app.get('/', (req, res) => {
  res.send('Olá!')
})

// Listar Raças
app.get('/getbreeds/:limit', (req, res) => {
  const {limit} = req.params;
  getData(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`, req, res);
})

// Encontrar Raça por ID
app.get('/getbreed/:id', (req, res) => {
  const {id} = req.params;
  getData(`https://api.thecatapi.com/v1/breeds/${id}`, req, res);
})

// Encontrar uma imagem
app.get('/getimage/:id', (req, res) => {
  const {id}=req.params;
  getData(`https://api.thecatapi.com/v1/images/${id}`, req, res); 
})

// Encontrar Imagens por raça
app.get('/catimages/:id', (req, res) => {
  const {id}=req.params;
  getData(`https://api.thecatapi.com/v1/images/search?format=json&limit=8&breed_ids=${id}`, req, res);
})

// Encontrar Gato por nome
app.get('/catbyname/:name', (req, res) => {
  const {name}=req.params;
  getData(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, req, res);
})


// Custom function para dados assíncronos
const getData = async(url = '', req, res) => {
  axios(url, {
      method: 'get',
      credentials: 'same-origin',
      headers: { 
        'Content-Type': 'application/json', 
        'x-api-key': 'ce08b7e5-01ca-450a-a1d3-abc9819bb15b'
      }
    }).then(response => {
      res.send(JSON.stringify(response.data))
  }).catch(err => {
    res.send(err);
  });
};

module.exports = app;
