import React from 'react'
import { Form, Button, FormGroup, Col, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false
        }
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });
    };

    render() {
        return (
            <div className="container-main">
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
                <div className="container-form">
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                {/* <Form.Label>Last name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                // defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Phone Number"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                {/* <Form.Label>Last name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                // defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                {/* <Form.Label>City</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                {/* <Form.Label>State</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                {/* <Form.Label>Zip</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <div style={{ marginLeft: "3vw" }}>
                                <DropdownButton required drop="right" variant="secondary" id="dropdown-basic-button" title="Years of Experience">
                                    <Dropdown.Item href="#/action-1">0 - 1 years</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">1 - 3 years</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3 - 5 years</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">5+ years</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Do you have any endorsements?"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <fieldset style={{ marginLeft: "10vw" }}>
                                <Form.Group as={Col}>
                                    <Form.Label as="legend" required md={4}>
                                        Do you have a CDL-A?
                                </Form.Label>
                                    <Form.Check
                                        required
                                        inline
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        required
                                        inline
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Form.Group>
                            </fieldset>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="8">
                                <Form.Check
                                    // required
                                    label="I have experience in flatbed"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="8">
                                <Form.Check
                                    // required
                                    label="I am an owner operator"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="8">
                                <Form.Check
                                    // required
                                    label="I am interested in lease purchase"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        </Form.Row>
                        <div style={{ textAlign: "center", width: "33vw" }}>
                            <Button type="submit">Submit form</Button>
                        </div>
                    </Form >
                </div >
            </div>
        );
    }
}

export default Homepage;