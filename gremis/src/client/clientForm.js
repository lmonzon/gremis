import React, { Component } from 'react';
import {Modal, Row, Input, Icon, Button, Col } from 'react-materialize';
class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipoDoc: "",
      numeroDoc: "",
      nombre: "",
      apellido: "",
      celular: "",
      telefono: "",
      calle: "",
      numeroPuerta: ""
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
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    self = this;
    fetch("http://localhost:3000/api/client",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(this.state),
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        self.props.addClient(data);
      })
      .catch(err => console.log(err))

  }



  render() {
    return (


<Modal
  header='Alta Cliente'
  trigger={
    <Button  floating large icon='add' waves='light'></Button>
  }>
      <Row>
        <Col s={12}>
          <form onSubmit={this.handleSubmit}>
            <Row>

              <Input
                s={6}
                name="tipoDoc"
                onChange={this.handleInputChange}
                type='select'
                label="Tipo Documento"
                value={this.state.tipoDoc}
                defaultValue='DNI'>
                <option value='DNI'>DNI</option>
                <option value='LE'>LE</option>
                <option value='CL'>CL</option>
              </Input>

              <Input
                name="numeroDoc"
                value={this.state.numeroDoc}
                s={6}
                onChange={this.handleInputChange}
                label="Numero Documento"
              >
              </Input>
            </Row>
            <Row>
              <Input
                name="nombre"
                onChange={this.handleInputChange}
                value={this.state.nombre}
                s={6}
                label="Nombre">
              </Input>

              <Input
                name="apellido"
                value={this.state.apellido}
                s={6}
                onChange={this.handleInputChange}
                label="Apellido" />
            </Row>
            <Row>
              <Input
                name="celular"
                onChange={this.handleInputChange}
                value={this.state.celular}
                s={6}
                validate

                type="tel"
                label="Celular">
              </Input>

              <Input
                name="telefono"
                value={this.state.telefono}
                s={6}
                onChange={this.handleInputChange}
                label="Telefono" />
            </Row>
            <Row>
              <Input
                name="calle"
                onChange={this.handleInputChange}
                value={this.state.calle}
                s={6}
                label="Calle">
              </Input>

              <Input
                name="numeroPuerta"
                value={this.state.numeroPuerta}
                s={6}
                onChange={this.handleInputChange}
                label="Numero" />
            </Row>
            <Button type='submit' waves='light'>Enviar<Icon right>send</Icon></Button>

          </form>
        </Col>
      </Row>
  </Modal>

    );
  }
}

export default ClientForm;
