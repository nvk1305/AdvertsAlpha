import React from 'react'
import { Modal, Form, Col } from 'react-bootstrap'

class Contactusmodal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            showSuccessModal: false
        }
    }

    addDataToDB = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "name": this.state.name,
            "email": this.state.email,
            "subject": this.state.subject,
            "message": this.state.message
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://k560p3a91d.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
            .then(response => response.json())
            .then(result => console.log("Response from API: ", result))
            .catch(error => console.log('error', error));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = () => {
        this.addDataToDB()
        this.setState({ showSuccessModal: true })
    }

    handleClose = () => {
        this.setState({ showSuccessModal: false })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal size="md" show={this.props.showModal} onHide={this.props.onModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Leave us a message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Control
                                        id="name"
                                        onChange={this.handleChange}
                                        required
                                        type="text"
                                        placeholder="Name"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Control
                                        id="email"
                                        onChange={this.handleChange}
                                        required
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        id="message"
                                        onChange={this.handleChange}
                                        type="text"
                                        placeholder="Message"
                                    />
                                </Form.Group>
                            </Form.Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: "center" }}>
                        <button
                            onClick={() => { this.handleSubmit(); this.props.onModalSubmit() }}
                            className="contactSubmitBtn">Submit</button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

export default Contactusmodal;