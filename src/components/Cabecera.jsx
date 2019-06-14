import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react';
class Cabecera extends Component {
  render() {
    return (
      <div>
        <Menu color="teal" inverted>
          <Menu.Item header>Inicio</Menu.Item>
          <Menu.Item active position="right">
            Sube tu link
          </Menu.Item>
          <Menu.Item position="right">Sube tu link</Menu.Item>
        </Menu>
        <Header textAlign="center">
          <Icon name="play" color="teal" />
          REACT LINKS
          <Header.Subheader>
            Bienvenido al sitio para encontrar recursos de React
          </Header.Subheader>
          Bienvenido al sitio
        </Header>
      </div>
    );
  }
}

export default Cabecera;
