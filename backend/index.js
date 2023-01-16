const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyparser.json());

require('dotenv').config();

//Setting (Cat API)
var axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Breed List
app.get('/getbreeds/:limit', (req, res) => {
  const {limit} = req.params;
  getData(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=0`, req, res);
})

// Find breed by ID
app.get('/getbreed/:id', (req, res) => {
  const {id} = req.params;
  getData(`https://api.thecatapi.com/v1/breeds/${id}`, req, res);
})

// Find An Image
app.get('/getimage/:id', (req, res) => {
  const {id}=req.params;
  getData(`https://api.thecatapi.com/v1/images/${id}`, req, res); 
})

// Find Images by Breed
app.get('/catimages/:id', (req, res) => {
  const {id}=req.params;
  getData(`https://api.thecatapi.com/v1/images/search?format=json&limit=8&breed_ids=${id}`, req, res);
})

// Find Cats by breed name
app.get('/catbyname/:name', (req, res) => {
  const {name}=req.params;
  getData(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, req, res);
})


// Async Custom function
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
