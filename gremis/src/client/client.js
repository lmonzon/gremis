import React, { Component } from 'react';
import ClientList          from './clientList'

class Client extends Component {
  constructor() {
      super()
      this.state = { clients: [] }
  }

  componentWillMount() {
      fetch('http://localhost:3000/api/client')
        .then((response) => {
          return response.json()
        })
        .then((clients) => {
          this.setState({ clients })
        })
    }

   render() {
    return (
      <ClientList listado={this.state.clients} />);
  }
}

export default Client;
