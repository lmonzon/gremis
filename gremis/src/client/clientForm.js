import React, { Component } from 'react';

class ClientForm extends Component {
  constructor(props) {
     super(props);
     this.state = {
       nombre: "Nombre",
       apellido: "Apellido"
     };

     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);

   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.nombre);
     event.preventDefault();
   }



   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Nombre:
           <input
             name="nombre"
             value={this.state.nombre}
             type="text"
             onChange={this.handleInputChange} />
         </label>
         <br />
         <label>
           Apellido:
           <input
             name="apellido"
             type="text"
             value={this.state.apellido}
             onChange={this.handleInputChange} />
         </label>
         <input type="submit" value="Enviar" />

       </form>
     );
   }
 }

export default ClientForm;
