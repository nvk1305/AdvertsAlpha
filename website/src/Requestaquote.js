import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class RequestAQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">FindMeALead</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Request A Quote</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>

            </div>
        );
    }
}

export default RequestAQuote;