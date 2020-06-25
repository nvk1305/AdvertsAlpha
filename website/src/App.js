import React from 'react';
import './App.css';
import Homepage from './Homepage'
import { Nav, Navbar, Modal, Button } from 'react-bootstrap'
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './advertalphaicon.png';
import ReactGa from 'react-ga';
// import logo from './logo1.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: "1",
      showModal: false,
      showToast: true,
      showSuccessModal: false
    }
  }

  useEffect = (() => {
    ReactGa.initialize('UA-170502343-1')
    ReactGa.pageview('/Homepage')

  }, [])

  handleClick = (selectedKey) => {
    selectedKey === "2" ? this.setState({ showModal: true }) : this.setState({ activeKey: selectedKey })
  }

  handleClose = () => {
    this.setState({ showSuccessModal: false })
  }

  handleNavbarOnClick = () => {
    this.setState({ activeKey: "1" })
  }

  handleModalClose = () => {
    console.log("handleModalClose called")
    this.setState({ showModal: !this.state.showModal })
  }

  handleSubmitContactInfo = () => {
    this.setState({ showModal: false, showSuccessModal: true })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="container-navbar">
          <Navbar className="navbar" activeKey={this.state.activeKey} variant="dark">
            <Navbar.Brand onClick={this.handleNavbarOnClick}><img width="50px" height="50px" src={logo} ></img> AdvertAlpha </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link eventKey={3} active={this.state.activeKey} onSelect={this.handleClick}>Blog<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>|</Nav.Link>
              <Nav.Link eventKey={2} active={this.state.activeKey} onSelect={this.handleClick}>Contact Us</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        {this.state.showModal ? <ContactUsModal
          showModal={this.state.showModal}
          onModalClose={this.handleModalClose}
          onModalSubmit={this.handleSubmitContactInfo} /> : null}
        <div>
          <Modal show={this.state.showSuccessModal} size="lg" onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you for contacting us. We will get back to you within 24 hours.</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {this.state.activeKey === "1" ? <Homepage /> : null}
          {this.state.activeKey === "3" ? <Blog /> : null}
        </div>
      </div >
    );
  }
}

export default App;
