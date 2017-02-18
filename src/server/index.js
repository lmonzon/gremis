import express from 'express'
const app = express()

import api        from 'src/server/api'
import mongoose   from 'mongoose'
import bodyParser from 'body-parser'
mongoose.connect('mongodb://localhost:27017/gremis')

app.use(bodyParser.urlencoded({ extended: true })); //recibe parametros por url
app.use(bodyParser.json()); //recibe parametros por json
app.use(express.static('public'))
app.use('/api', api);

app.get('/', function(req, res) {
	res.json({ message: 'raiz de la aplicacion' });
});
app.listen(3000, () => console.log('Servidor iniciado con Express en puerto 3000'))
