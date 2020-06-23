import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class RequestAQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="requestQuote container">
                    <div>
                        <h4>Please fill the form below. We will get in touch in the next 24 hours.</h4>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Your Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>  <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Your Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>  <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Subject</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Your Message</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl rows="5" as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </div>
                </div>
                <div className="container">
                        <Button variant="secondary">Send</Button>
                    </div>
            </div>
        );
    }
}

export default RequestAQuote;