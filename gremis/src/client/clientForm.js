import React, { Component } from 'react';
import { Row, Input, Icon, Button, Col } from 'react-materialize';
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
    alert('A name was submitted: ' + this.state.nombre);
    event.preventDefault();
  }



  render() {
    return (


      <Row>
        <Col s={12}>

          <h5>Alta Cliente</h5>
          <form onSubmit={this.handleSubmit}>
            <Row>

              <Input
                s={3}
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
                s={3}
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
                s={3}
                label="Nombre">
              </Input>

              <Input
                name="apellido"
                value={this.state.apellido}
                s={3}
                onChange={this.handleInputChange}
                label="Apellido" />
            </Row>
            <Row>
              <Input
                name="celular"
                onChange={this.handleInputChange}
                value={this.state.celular}
                s={3}
                validate

                type="tel"
                label="Celular">
              </Input>

              <Input
                name="telefono"
                value={this.state.telefono}
                s={3}
                onChange={this.handleInputChange}
                label="Telefono" />
            </Row>
            <Row>
              <Input
                name="calle"
                onChange={this.handleInputChange}
                value={this.state.calle}
                s={3}
                label="Calle">
              </Input>

              <Input
                name="numeroPuerta"
                value={this.state.numeroPuerta}
                s={3}
                onChange={this.handleInputChange}
                label="Numero" />
            </Row>
            <Button type='submit' waves='light'>Enviar<Icon right>send</Icon></Button>

          </form>
        </Col>
      </Row>
    );
  }
}

export default ClientForm;
