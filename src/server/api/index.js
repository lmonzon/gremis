import express from 'express'
const router = express.Router()

import {Client, Person ,Chofer ,Coche} from 'src/server/models'

// GET  /client
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


   let person = createPerson(req);
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


 let person = createPerson(req)
 onSave(person,req.body.nroLinc)



})

router.get('/chofer', (req, res) => {
  Chofer.find({}).populate("_person").exec((err,docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})

router.get('/chofer/:id_chofer', (req, res) => {
  Chofer.findById(req.params.id_chofer).populate("_person").exec((err,docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})

router.get('/chofer/:nro_linc', (req, res) => {
  Client.find({'codigo':req.params.codigo_client}).populate("_person").exec((err,docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })
})


router.post('/coche', (req, res) => {

    var onSave = function (coche) {
      return function (err) {
        if (err) {
          return res.sendStatus(500).json(err)
        }

        //Client.populate(client,{path:"_person"},(err,client)=>res.json(client))
        Coche.populate(coche,{path:"titular"},(err,coche)=>res.json(coche));
      }
    }

  let coche = new Coche({
       marca      : req.body.marca,
       patente    : req.body.patente,
       modelo     : req.body.modelo,
       year       : req.body.year,
       vencVtv    : req.body.vencVtv,
       combustible: req.body.combustible,
       titular    : req.body.id_person

  })


 coche.save(onSave(coche))



})

router.get('/coche', (req, res) => {

  Coche.find({}).populate("titular").exec((err,docs) => {
    if (err) {
      return res.sendStatus(500).json(err)
    }
    res.json(docs)
  })


})




let createPerson = (req)=>{
  let person = new Person()
  person.nombre = req.body.nombre
  person.apellido=req.body.apellido
  person.tipoDoc=req.body.tipoDoc
  person.numeroDoc=req.body.numeroDoc
  person.celular=req.body.celular
  person.telefono=req.body.telefono
  person.calle=req.body.calle
  person.numeroPuerta=req.body.numeroPuerta
  return person;
}

export default router
