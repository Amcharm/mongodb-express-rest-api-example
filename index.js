const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://amcharm:zKJ9bfBHG1E1LAqN@reservation.zyeljp3.mongodb.net/?retryWrites=true&w=majority";


const axios = require('axios');
const data = JSON.stringify({
    "collection": "Reservation",
    "database": "All",
    "dataSource": "Reservation"
});

const config = {
    method: 'post',
    url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-drxgm/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '2F1ragTHRPEsLrRbh5b3orRd0hBYdbiYBiAVA7HFfQUdzcGiD8FqJz9TqcMBljKN',
    },
    data: data
};


app.use(cors())
app.use(express.json());

app.get('/', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('All').collection('Reservation').find({}).toArray();
    await client.close();
    res.status(200).json(users);

})

app.post('/', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('All').collection('Reservation').find({}).toArray();
    await client.close();
    res.status(200).json(users);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})