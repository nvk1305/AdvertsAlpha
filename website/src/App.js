import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Requestaquote from './Requestaquote'
import { Nav, Navbar } from 'react-bootstrap'
import Blog from './Blog'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: "3"
    }
  }

  handleClick = (selectedKey) => {
    this.setState({ activeKey: selectedKey })
  }

  render() {
    console.log(this.state.activeKey)
    // if (this.state.activeKey === "3") {
    //   return <Blog />
    // } else return null
    return (
      <div className="App" >
        <div>
          <Navbar fixed="top" activeKey={this.state.activeKey} bg="dark" variant="dark">
            <Navbar.Brand href="#home">FindMeALead</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link eventKey={1} active={this.state.activeKey} onSelect={this.handleClick}>Home</Nav.Link>
              <Nav.Link eventKey={2} active={this.state.activeKey} onSelect={this.handleClick}>Request A Quote</Nav.Link>
              <Nav.Link eventKey={3} active={this.state.activeKey} onSelect={this.handleClick}>Blog</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        {this.state.activeKey === "1" ? <Homepage /> : null}
        {this.state.activeKey === "2" ? <Requestaquote /> : null}
        {this.state.activeKey === "3" ? <Blog /> : null}
      </div >
    );
  }
}

export default App;
