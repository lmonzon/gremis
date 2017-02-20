import express from 'express'
const router = express.Router()

import {Client, Person ,Chofer} from 'src/server/models'

// GET  /api/votes
router.get('/client', (req, res) => {
  Client.find({}).populate("_person").exec((err,docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})

router.get('/client/:codigo_client', (req, res) => {
  Client.find({'codigo':req.params.codigo_client}).populate("_person").exec((err,docs) => {
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
          { _person : person._id

          }
        );
        client.save(err=> Client.populate(client,{path:"_person"},(err,client)=>res.json(client)))
      }
    }


   let person = new Person()
   person.nombre = req.body.nombre
   person.apellido=req.body.apellido
   person.tipoDoc=req.body.tipoDoc
   person.numeroDoc=req.body.numeroDoc
   person.celular=req.body.celular
   person.telefono=req.body.telefono
   person.calle=req.body.calle
   person.numeroPuerta=req.body.numeroPuerta
   person.save(onSave(person))


})

// POST /api/vote/123
router.post('/chofer', (req, res) => {

    var onSave = function (person,nroLinc) {
      return function (err) {
        if (err) {
          return res.sendStatus(500).json(err)
        }
        let chofer = new Chofer(
          { _person : person._id,
            nroLinc :nroLinc
          }
        );
        chofer.save(err=> Chofer.populate(chofer,{path:"_person"},(err,chofer)=>res.json(chofer)))
      }
    }


   let person = new Person()
   person.nombre = req.body.nombre
   person.apellido=req.body.apellido
   person.tipoDoc=req.body.tipoDoc
   person.numeroDoc=req.body.numeroDoc
   person.celular=req.body.celular
   person.telefono=req.body.telefono
   person.calle=req.body.calle
   person.numeroPuerta=req.body.numeroPuerta
   person.save(onSave(person,req.body.nroLinc))


})

export default router
