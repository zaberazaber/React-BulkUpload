const express = require ('express')
// const upload = require('./upload');
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions))

// app.post('/upload', upload)


app.listen(7000, () => {
console.log('server is up');
})