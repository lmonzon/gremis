import express from 'express'
const app = express()

import api        from 'src/server/api'
import mongoose   from 'mongoose'
import bodyParser from 'body-parser'
mongoose.connect('mongodb://localhost/gremis')

app.use(express.static('public'))
app.use(bodyParser);


app.use('/api', api)

app.listen(3000, () => console.log('Servidor iniciado con Express en puerto 3000'))
