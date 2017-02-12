import express from 'express'
const router = express.Router()

import Client from 'src/server/models'

// GET  /api/votes
router.get('/client', (req, res) => {
  console.log('GET /client')
  Client.find({}, (err, docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})

// POST /api/vote/123
router.post('/client', (req, res) => {

        let client = new Client()
      client.nombre = req.body.nombre
     client.apellido=req.body.apellido
      client.save(onSave(client))

  var onSave = function (client) {
    return function (err) {
      if (err) {
        return res.sendStatus(500).json(err)
      }
      res.json(client)
    }
  }

})

export default router
