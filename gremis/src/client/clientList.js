import React, { Component } from 'react';
import './clientList.css';

class ClientList extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
    <ul>

      {this.props.listado.map(cliente => {
        return <li> a {cliente._person.nombre} , {cliente._person.apellido},{cliente.codigo}</li>
    }
    )
  }
    </ul>


  
  )
  }
}

export default ClientList;
