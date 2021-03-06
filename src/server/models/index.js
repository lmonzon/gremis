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

let CounterSchema = new mongoose.Schema({
  _id:{type: String,required:true},
  codigo        :{type : String}
})

let Counter = mongoose.model('Counter', CounterSchema);

let ClientSchema = new mongoose.Schema({
  _person       :{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
  codigo        :{type : String}
})

ClientSchema.pre('save', function(next) {

  let doc = this;
  Counter.findById('ClientID',(err, counter)=>{
    if (err)
    return   console.log(err);
    if (counter) {
      let increment = counter.codigo.slice(2);
     increment = Number(increment)+1;
      counter.codigo="RD"+increment ;

      counter.save(err=> {
        if (err)
        return   console.log(err);

        doc.codigo=counter.codigo;
        next();
      }
      )
    }else {
          let  newc=new Counter();
        newc.codigo='RD1';
        newc._id="ClientID"

        newc.save(err=>{next()})
      }
    });



  });

let ChoferSchema = new mongoose.Schema({
  _person       :{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
  nroLinc       : Number

})

let CocheSchema = new mongoose.Schema({
    marca  : String,
    modelo : String,
    year   : Number,
    titular:{type: mongoose.Schema.Types.ObjectId, ref: 'Person'},
    vencVtv: Date,
    combustible:Number

})

let ViajeSchema = new mongoose.Schema({
  _chofer       :{type: mongoose.Schema.Types.ObjectId, ref: 'Chofer'},
  _coche        :{type: mongoose.Schema.Types.ObjectId, ref: 'Coche'},
  fecha         : Number,
  desde         : String,
  hasta         : String,
  kms           : Number,
  precio        : Number,
  estado        : Number
})



export var Person =mongoose.model('Person', PersonSchema)
export var Client =mongoose.model('Client', ClientSchema)
export var Chofer =mongoose.model('Chofer', ChoferSchema)
export var Coche  =mongoose.model('Coche', CocheSchema)
export var Viaje  =mongoose.model('Viaje', ViajeSchema)
