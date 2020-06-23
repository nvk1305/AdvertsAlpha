import React from 'react'
import { Form, Button, Col, Dropdown, DropdownButton } from 'react-bootstrap'

// var sectionStyle = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: `url(${desktopImage})`,
// };

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


    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });
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
            <div className="container-homePage">
                {/* {<div className="container-form">} */}
                <div className="applyNow container">
                    <h4 >Register Now</h4>
                </div>
                <div className="container-form container">
                    <Form className="form"  noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    id="firstName"
                                    onChange={this.handleChange}
                                    required
                                    type="text"
                                    placeholder="First name"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom02">
                                {/* <Form.Label>Last name</Form.Label> */}
                                <Form.Control
                                    required
                                    id="lastName"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Last name"
                                // defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={this.handleChange}
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom02">
                                {/* <Form.Label>Last name</Form.Label> */}
                                <Form.Control
                                    required
                                    id="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                // defaultValue="Otto"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="5" controlId="validationCustom03">
                                {/* <Form.Label>City</Form.Label> */}
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
                            <Form.Group as={Col} md="5" controlId="validationCustom04">
                                {/* <Form.Label>State</Form.Label> */}
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
                            <Form.Group as={Col} md="5" controlId="validationCustom05">
                                {/* <Form.Label>Zip</Form.Label> */}
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
                            <div style={{ marginLeft: "0.5vw" }}>
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
                            <Form.Group as={Col} md="5" controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    id="endorsements"
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Do you have any endorsements?"
                                // defaultValue="Mark"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <fieldset style={{ fontSize: "small" }}>
                                <Form.Group as={Col}>
                                    <Form.Label as="legend" required md={4}>
                                        {/* <Form.Label required md={4}> */}
                                            Do you have a CDL-A?
                                        </Form.Label>
                                    <Form.Check
                                        onChange={this.handleChange}
                                        // checked={this.handleChange}
                                        required
                                        id="CDL_A"
                                        inline
                                        value="Yes"
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                    // id="formHorizontalRadios1"
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
                        {/* <Form.Row style={{ justifyContent: "center" }}>
                                <fieldset>
                                    <Form.Group as={Col}>
                                        <Form.Label as="legend" required md={4}>
                                            Do you have a CDL-A?
                                </Form.Label>
                                        <Form.Check
                                            onChange={this.handleChange}
                                            // checked={this.handleChange}
                                            required
                                            id="CDL_A"
                                            inline
                                            value="Yes"
                                            type="radio"
                                            label="Yes"
                                            name="formHorizontalRadios"
                                        // id="formHorizontalRadios1"
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
                            </Form.Row> */}
                        {/* <Form.Row style={{ justifyContent: "left" }}> */}
                        <Form.Row style={{ textAlign: "left" }}>
                            <Form.Group as={Col} md="8" >
                                <Form.Check
                                    // required
                                    onChange={this.handleChange}
                                    checked={this.state.isFlatBedChecked}
                                    value="Yes"
                                    id="flatbedExperience"
                                    label="I have experience in flatbed"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="8">
                                <Form.Check
                                    // required
                                    onChange={this.handleChange}
                                    id="ownerOperator"
                                    checked={this.state.isOwnerOperatorChecked}
                                    label="I am an owner operator"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="8">
                                <Form.Check
                                    // required
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

                {/* </div > */}
                <div className="opportunityText">
                    {/* <h1>Your opportunity strikes here.</h1> */}
                    <p>your opportunity strikes here...!</p>
                </div>
            </div >
        );
    }
}

export default Homepage;