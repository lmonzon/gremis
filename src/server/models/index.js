import mongoose from 'mongoose'

let PersonSchema = new mongoose.Schema({
  tipoDoc       : { type: String},
  numeroDoc     : { type: String},
  clular        : { type: Number},
  telefono      : { type: Number},
  nombre        : { type: String},
  apellido      : { type: String},
  dirrecion     : { type: String},
  numeroPuerta  : { type: Number, default: 0 },

})


let ClientSchema = new mongoose.Schema({
  _person       :{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
  codigo        :{type : String}
})

let ChoferSchema = new mongoose.Schema({
  _person       :{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
  nroLinc   : Number

})

export var Person =mongoose.model('Person', PersonSchema)
export var Client =mongoose.model('Client', ClientSchema)
export var Chofer =mongoose.model('Chofer', ChoferSchema)
