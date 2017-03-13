import React, { Component } from 'react';
import ClientList from './clientList'
import ClientForm from './clientForm';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = { clients: [] },
    this.handleInsertClient = this.handleInsertClient.bind(this);


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

  handleInsertClient(client){
    let clients = this.state.clients;
    console.log(client);
    clients.push(client);
    this.setState({ clients });
  }

  render() {
    return (
      <div>
      <ClientList listado={this.state.clients}/>
           
      <ClientForm addClient={this.handleInsertClient}/>

      </div>
      );
  }
}

export default Client;
