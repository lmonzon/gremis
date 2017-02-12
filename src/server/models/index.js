import mongoose from 'mongoose'

let ClientSchema = new mongoose.Schema({
  numeroDocumento: { type: Srting},
  nombre: { type: Srting},
  apellido: { type: Srting },
  dirrecion: { type: Srting},
  numeroPuerta: { type: Number, default: 0 },
})

export default mongoose.model('Client', ClientSchema)
