import React, { Component } from 'react';
import { Table } from 'react-materialize';

import './clientList.css';

class ClientList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th data-field="nombre">Nombre</th>
            <th data-field="apellido">Apellido</th>
            <th data-field="codigo">Codigo</th>
          </tr>
        </thead>
        <tbody>

          {this.props.listado.map(cliente => {
            return(
           <tr>
              <td> {cliente._person.nombre}</td>
              <td>{cliente._person.apellido}</td>
              <td>{cliente.codigo}</td>
            </tr>
            )
          }
          )
          }
        </tbody>
      </Table>



    )
  }
}

export default ClientList;
