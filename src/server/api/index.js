import express from 'express'
const router = express.Router()

import {Client, Person} from 'src/server/models'

// GET  /api/votes
router.get('/client', (req, res) => {
  Client.find({}, (err, docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})

// POST /api/vote/123
router.post('/client', (req, res) => {

    var onSave = function (person) {
      return function (err) {
        if (err) {
          return res.sendStatus(500).json(err)
        }
        let client = new Client(
          { _person : person._id,
            codigo  : "un codigo"

          }
        );
        client.populate("client._person")
        res.json(client);
      }
    }

   let person = new Person()
   person.nombre = req.body.nombre
   person.apellido=req.body.apellido

   person.save(onSave(person))


})

export default router
