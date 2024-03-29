const express = require('express')
const app = express();
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected mongo yeah')
})
mongoose.connection.on('error', (err) => {
    console.log('error connecting', err)
})

require('./model/user')
require('./model/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})