import React from 'react';
import { Form, Button, Col, Dropdown, DropdownButton } from 'react-bootstrap';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            city: "",
            state: "",
            zipcode: "",
            CDL_A: "",
            experience: "Years of Experience",
            endorsements: "",
            isFlatBedChecked: false,
            isOwnerOperatorChecked: false,
            isLeasePurchaseChecked: false
        }
    }

    addUserToDB = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "phoneNumber": Number(this.state.phoneNumber),
            "email": this.state.email,
            "city": this.state.city,
            "state": this.state.state,
            "zipcode": this.state.zipcode,
            "CDL_A": this.state.CDL_A,
            "experience": this.state.experience,
            "endorsements": this.state.endorsements,
            "flatBedExperience": this.state.isFlatBedChecked,
            "ownerOperator": this.state.isOwnerOperatorChecked,
            "leasePurchase": this.state.isLeasePurchaseChecked
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://w5mq91au43.execute-api.us-east-1.amazonaws.com/Dev", requestOptions)
            .then(response => response.json())
            .then(result => console.log("Response from API: ", result))
            .catch(error => console.log('error', error));
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
        if (this.state.validated) {
            this.addUserToDB()
        }
    };

    handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        if (event.target.id === "flatbedExperience") {
            this.setState({
                isFlatBedChecked: !this.state.isFlatBedChecked
            })
        } else if (event.target.id === "ownerOperator") {
            this.setState({
                isOwnerOperatorChecked: !this.state.isOwnerOperatorChecked
            })
        } else if (event.target.id === "leasePurchaseInterest") {
            this.setState({
                isLeasePurchaseChecked: !this.state.isLeasePurchaseChecked
            })
        } else {
            this.setState({ [event.target.id]: event.target.value })
        }
    }

    handleDropdown = (eventKey) => {
        this.setState({ experience: eventKey })
    }

    render() {
        return (
            // <div style={{backgroundImage:"linear-gradient(rgb(233, 202, 191), white)"}}>
            <div>
                <div class="container-homePage">
                    <div class="fader">
                    <h2 style={{paddingTop: "5vh"}} >Looking for a truck driver job?</h2>
                    <h4 style={{color:"#fffff", paddingTop: "7vh"}} ><mark>Help us help you!</mark></h4>
                    <h4 style={{color:"#fffff", paddingTop: "7vh", paddingBottom: "2vh"}}>Forecast yourself with <b>AdvertAlpha</b> and get your desired opportunity in a glimpse</h4>
                    </div>
                </div>

                <div class="container">
  <div class="row">
    <div class="col-lg align-self-center">
    <div className="container-form">
                        <div className="applyNow">
                            <h4 >Register Now</h4>
                        </div>
                    <Form class="form-group form-group-lg container" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Control
                                    id="firstName"
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Control
                                    required
                                    id="lastName"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}  controlId="validationCustom01">
                                <Form.Control
                                    required
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="validationCustom02">
                                <Form.Control
                                    required
                                    id="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}  controlId="validationCustom03">
                                <Form.Control
                                    id="city"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="City"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="validationCustom04">
                                <Form.Control
                                    type="text"
                                    id="state"
                                    onChange={this.handleChange}
                                    placeholder="State"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md={6} controlId="validationCustom05">
                                <Form.Control
                                    id="zipcode"
                                    type="text"
                                    onChange={this.handleChange}
                                    placeholder="Zip"
                                    required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                            </Form.Control.Feedback>
                            </Form.Group>
                            <div style={{paddingBottom:"2vh", paddingLeft:"1vw"}}>
                                <DropdownButton
                                    required
                                    drop="right"
                                    variant="secondary"
                                    onSelect={this.handleDropdown}
                                    id="experience"
                                    title={this.state.experience}>
                                    <Dropdown.Item eventKey="0 - 1 Years">0 - 1 years</Dropdown.Item>
                                    <Dropdown.Item eventKey="1 - 3 Years">1 - 3 years</Dropdown.Item>
                                    <Dropdown.Item eventKey="3 - 5 Years">3 - 5 years</Dropdown.Item>
                                    <Dropdown.Item eventKey="5+ Years">5+ years</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md={6} controlId="validationCustom01">
                                <Form.Control
                                    required
                                    id="endorsements"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Do you have any endorsements?"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <fieldset style={{ fontSize: "small" }}>
                                <Form.Group as={Col}>
                                    <Form.Label as="legend" required >
                                        Do you have a CDL-A?
                                        </Form.Label>
                                    <Form.Check
                                        onChange={this.handleChange}
                                        required
                                        id="CDL_A"
                                        inline
                                        value="Yes"
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                    />
                                    <Form.Check
                                        onChange={this.handleChange}
                                        required
                                        id="CDL_A"
                                        inline
                                        value="No"
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                    />
                                </Form.Group>
                            </fieldset>
                        </Form.Row>
                        <Form.Row style={{ textAlign: "left" }}>
                            <Form.Group as={Col} md={7}  >
                                <Form.Check
                                    onChange={this.handleChange}
                                    checked={this.state.isFlatBedChecked}
                                    value="Yes"
                                    id="flatbedExperience"
                                    label="I have experience in flatbed"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={7}>
                                <Form.Check
                                    onChange={this.handleChange}
                                    id="ownerOperator"
                                    checked={this.state.isOwnerOperatorChecked}
                                    label="I am an owner operator"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md={7}>
                                <Form.Check
                                    onChange={this.handleChange}
                                    id="leasePurchaseInterest"
                                    checked={this.state.isLeasePurchaseChecked}
                                    label="I am interested in lease purchase"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        </Form.Row>
                        <div style={{ justifyContent: "center" }}>
                            <Button
                                onSubmit={this.handleSubmit}
                                variant="info"
                                size="lg"
                                type="submit">Submit</Button>
                        </div>
                        <div style={{ fontSize: "small", fontWeight: "lighter" }}>
                            <p>
                                *By submitting this form you are opting in to receive correspondence from employers.
                                This includes receiving auto-dialed telephone calls, prerecorded messages and emails
                                about trucking job opportunities at the contact numbers you have provided above.</p>
                        </div>
                    </Form >
                </div>
    </div>
    <div class="col align-self-center highlight" >
        <img src={require('./wearehere.JPG')}></img>
        <p>Let us help you match with your best suitable trucking job and transportation company. 
            Talk to us and let us know what exactly are you looking for. 
            We are here to listen to you and we will make sure your trucking job search ends here.</p>
    </div>
  </div>
</div>


                    <div className="opportunityText">
                        <p class="text-white bg-dark">Your opportunity strikes here...!</p>
                    </div>
            </div >
        );
    }
}

export default Homepage;