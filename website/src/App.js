import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Requestaquote from './Requestaquote'
import { Nav, Navbar } from 'react-bootstrap'
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './advertalphaicon.png';
import ReactGa from 'react-ga';
// import logo from './logo1.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: "1"
    }
  }
  
  useEffect=(() => {
    ReactGa.initialize('UA-170502343-1')
    ReactGa.pageview('/Homepage')

},  [])
  
  handleClick = (selectedKey) => {
    this.setState({ activeKey: selectedKey })
  }

  handleNavbarOnClick = () => {
    this.setState({ activeKey: "1" })
  }

  render() {
    console.log(this.state.activeKey)
    return (
      <div className="App" >
        <div className="container-navbar">
          {/* <Navbar class="navbar navbar-fixed-top" activeKey={this.state.activeKey} bg="dark" variant="dark"> */}
          <Navbar class="navbar" activeKey={this.state.activeKey} variant="dark">
            <Navbar.Brand onClick={this.handleNavbarOnClick}><img width="40px" height="40px" src={logo} alt="Background" ></img> AdvertAlpha </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link eventKey={3} active={this.state.activeKey} onSelect={this.handleClick}>Blog<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>|</Nav.Link>
              <Nav.Link eventKey={2} active={this.state.activeKey} onSelect={this.handleClick}>Contact Us</Nav.Link>
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
