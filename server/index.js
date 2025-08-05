const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
 
// .net/Cluster0?retryWrites= のようにCluster0(データベース名)をいれないといけないっぽい
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express()

app.get('/products', function(req, res) {
    res.json({'success': true})
})

const PORT = process.env.PORT || '3001'

app.listen('3001', function() {
    console.log('I am running!')
})
