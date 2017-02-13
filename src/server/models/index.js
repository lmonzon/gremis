import mongoose from 'mongoose'

let ClientSchema = new mongoose.Schema({
  numeroDocumento: { type: String},
  nombre: { type: String},
  apellido: { type: String },
  dirrecion: { type: String},
  numeroPuerta: { type: Number, default: 0 },
})

export default mongoose.model('Client', ClientSchema)
