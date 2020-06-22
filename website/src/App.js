import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Requestaquote from './Requestaquote'
import { Nav, Navbar } from 'react-bootstrap'
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import AA from './advertalphaicon.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: "1"
    }
  }

  handleClick = (selectedKey) => {
    this.setState({ activeKey: selectedKey })
  }

  render() {
    console.log(this.state.activeKey)
    return (
      <div className="App" >
        <div>
          <Navbar class="navbar navbar-fixed-top" activeKey={this.state.activeKey} bg="dark" variant="dark">
            <Navbar.Brand href="./Homepage"><img width="30px" height="30px" src={AA} ></img> AdvertAlpha </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link eventKey={2} active={this.state.activeKey} onSelect={this.handleClick}>Request A Quote {" "}|</Nav.Link>
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
