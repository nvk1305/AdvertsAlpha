import React from 'react';
import { Form, Col, Dropdown, DropdownButton, Button, Modal, Spinner } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Error from "./Error"

const States = [
    { label: "Washington" },
    { label: "Delaware" },
    { label: "District of Columbia" },
    { label: "Wisconsin" },
    { label: "West Virginia" },
    { label: "Hawaii" },
    { label: "Florida" },
    { label: "Wyoming" },
    { label: "New Hampshire" }
];

const Cities = [
    { label: "Alligators" },
    { label: "Crocodiles" },
    { label: "Sharks" }
];

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Enter First name"),
    lastName: Yup.string()
        .required("Enter Last name"),
    email: Yup.string()
        .email("Must be a valid email address")
        .required("Enter email"),
    phoneNumber: Yup.number()
        .min(1, "Please enter complete phone number")
        .required("Enter Phone number"),
    zipcode: Yup.number()
        .required("Enter zipcode"),
    experience: Yup.string()
        .oneOf(["0 - 1 Year", "1 - 3 Years", "3 - 5 Years", "5+ Years"], "Please select your experience")
        .required("Select experience"),
    city: Yup.string()
        .required("Enter city"),
    state: Yup.string()
        .required("Enter state"),
    endorsement: Yup.string()
        .required("Enter your endorsement if any else enter none"),
    CDL_A: Yup.string()
        .oneOf(["Yes", "No"])
        .required("Please select any one")
})

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            formikValues: "",
            dataSubmitted: false
        }
        this.addUserToDB = this.addUserToDB.bind(this)
    }

    async addUserToDB() {
        console.log("addUserToDB called")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(this.state.formikValues)
        const formikValues = this.state.formikValues
        var raw = JSON.stringify({
            "firstName": formikValues.firstName,
            "lastName": formikValues.lastName,
            "phoneNumber": Number(formikValues.phoneNumber),
            "email": formikValues.email,
            "city": formikValues.city,
            "state": formikValues.state,
            "zipcode": formikValues.zipcode,
            "CDL_A": formikValues.CDL_A,
            "experience": formikValues.experience,
            "endorsement": formikValues.endorsement,
            "flatBedExperience": formikValues.flatbedExperience,
            "ownerOperator": formikValues.ownerOperator,
            "leasePurchase": formikValues.leasePurchase
        })
        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://w5mq91au43.execute-api.us-east-1.amazonaws.com/Dev", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("Response from API: ", result)
                this.setState({ dataSubmitted: true })
            })
            .catch(error => console.log('error', error));
    }

    handleModalClose = () => {
        this.setState({ showModal: false })
    }

    handleSubmit = () => {
        console.log("handlesubmit called")
    }

    render() {
        const ref = React.createRef();
        const ref1 = React.createRef();
        return (
            // <div style={{ backgroundImage: "linear-gradient(rgb(233, 202, 191), white)" }}>
            <div>
                <div class="container-homePage">
                    <div class="fader">
                        <h2 style={{ paddingTop: "5vh" }} >Looking for a truck driver job?</h2>
                        <h4 style={{ color: "#fffff", paddingTop: "7vh" }} ><mark>Glad you chose us</mark></h4>
                        <h4 style={{ color: "#fffff", paddingTop: "7vh", paddingBottom: "2vh" }}>Forecast yourself with <b style={{ fontSize: "xx-large", fontFamily: "verdana" }}>AdvertAlpha</b> and get your desired and deserved opportunity in a glimpse</h4>
                    </div>
                </div>
                <div>
                    <Modal show={this.state.showModal} size="md" onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            {this.state.dataSubmitted ? <Modal.Title>Successfully submitted!</Modal.Title> :
                                <Modal.Title>Submitting...</Modal.Title>}
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg align-self-center">
                            <div className="container-form">
                                <div className="applyNow">
                                    <h4 >Register Now</h4>
                                </div>
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        ownerOperator: false,
                                        phoneNumber: "",
                                        zipcode: "",
                                        experience: "Years of Experience",
                                        city: "",
                                        state: "",
                                        endorsement: "",
                                        CDL_A: "",
                                        flatbedExperience: false,
                                        leasePurchase: false
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        // this.setState({ showSubmitSpinner: true })
                                        setSubmitting(true)
                                        resetForm()
                                        ref.current.clear()
                                        ref1.current.clear()
                                        this.setState({ formikValues: values, showModal: true, dataSubmitted: false })
                                        this.addUserToDB()
                                        setSubmitting(false)
                                    }}
                                >
                                    {({ values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched,
                                        isSubmitting }) => (
                                            // <Form class="form-group form-group-lg container"
                                            <Form class="input-row"
                                                noValidate
                                                validated={this.state.validated}
                                                onSubmit={handleSubmit}
                                            >
                                                <Form.Row>
                                                    <Form.Group as={Col} >
                                                        <Form.Control
                                                            name="firstName"
                                                            type="text"
                                                            id="firstName"
                                                            placeholder="First name"
                                                            onChange={handleChange}
                                                            value={values.firstName}
                                                            onBlur={handleBlur}
                                                            className={touched.firstName && errors.firstName ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.firstName} message={errors.firstName} />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} >
                                                        <Form.Control
                                                            name="lastName"
                                                            type="text"
                                                            id="lastName"
                                                            placeholder="Last name"
                                                            onChange={handleChange}
                                                            value={values.lastName}
                                                            onBlur={handleBlur}
                                                            className={touched.lastName && errors.lastName ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.lastName} message={errors.lastName} />
                                                        </div>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} >
                                                        <Form.Control
                                                            name="phoneNumber"
                                                            type="number"
                                                            value={values.phoneNumber}
                                                            placeholder="Phone Number"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={touched.phoneNumber && errors.phoneNumber ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.phoneNumber} message={errors.phoneNumber} />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} >
                                                        <Form.Control
                                                            name="email"
                                                            id="email"
                                                            type="email"
                                                            placeholder="Email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={touched.email && errors.email ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.email} message={errors.email} />
                                                        </div>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} >
                                                        <Typeahead
                                                            name="state"
                                                            id="state"
                                                            type="text"
                                                            ref={ref}
                                                            placeholder="State"
                                                            value={values.state}
                                                            onChange={(selected) => {
                                                                setFieldValue('state', selected[0].label);
                                                            }}
                                                            onInputChange={(text, event) => {
                                                                setFieldValue('state', text)
                                                            }}
                                                            onBlur={(e) => setFieldTouched('state', true)}
                                                            className={touched.state && errors.state ? "has-error" : null}
                                                            options={States}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.state} message={errors.state} />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} >
                                                        <Typeahead
                                                            name="city"
                                                            labelKey="label"
                                                            id="city"
                                                            type="text"
                                                            ref={ref1}
                                                            placeholder="City"
                                                            value={values.city}
                                                            onChange={(selected) => {
                                                                setFieldValue('city', selected[0].label);
                                                            }}
                                                            onInputChange={(text, event) => {
                                                                setFieldValue('city', text)
                                                            }}
                                                            onBlur={(e) => setFieldTouched('city', true)}
                                                            className={touched.city && errors.city ? "has-error" : null}
                                                            options={Cities}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.city} message={errors.city} />
                                                        </div>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} md={6} >
                                                        <Form.Control
                                                            name="zipcode"
                                                            id="zipcode"
                                                            type="number"
                                                            placeholder="Zipcode"
                                                            value={values.zipcode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={touched.zipcode && errors.zipcode ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.zipcode} message={errors.zipcode} />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <DropdownButton
                                                            drop="right"
                                                            variant="secondary"
                                                            id="experience"
                                                            value={values.experience}
                                                            onSelect={(selected) => {
                                                                console.log(selected)
                                                                setFieldValue('experience', selected);
                                                            }}
                                                            onBlur={(e) => setFieldTouched('experience', true)}
                                                            title={values.experience}
                                                            className={touched.experience && errors.experience ? "has-error" : null}
                                                        >
                                                            <Dropdown.Item eventKey="0 - 1 Year">0 - 1 years</Dropdown.Item>
                                                            <Dropdown.Item eventKey="1 - 3 Years">1 - 3 years</Dropdown.Item>
                                                            <Dropdown.Item eventKey="3 - 5 Years">3 - 5 years</Dropdown.Item>
                                                            <Dropdown.Item eventKey="5+ Years">5+ years</Dropdown.Item>

                                                        </DropdownButton>
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.experience} message={errors.experience} />
                                                        </div>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} md={6}>
                                                        <Form.Control
                                                            name="endorsement"
                                                            type="text"
                                                            id="endorsement"
                                                            placeholder="Do you carry or hold any endorsements?"
                                                            onChange={handleChange}
                                                            value={values.endorsement}
                                                            onBlur={handleBlur}
                                                            className={touched.endorsement && errors.endorsement ? "has-error" : null}
                                                        />
                                                        <div style={{ color: "red", fontSize: "x-small" }} >
                                                            <Error touched={touched.endorsement} message={errors.endorsement} />
                                                        </div>
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    </Form.Group>
                                                    <fieldset style={{ fontSize: "small" }}>
                                                        <Form.Group as={Col}>
                                                            <Form.Label as="legend" required >
                                                                Do you have a CDL_A?
                                                        </Form.Label>
                                                            <Form.Check
                                                                inline
                                                                name="CDL_A"
                                                                type="radio"
                                                                id="CDL_A"
                                                                onChange={(selected) => {
                                                                    console.log(selected)
                                                                    setFieldValue('CDL_A', "Yes");
                                                                }}
                                                                value={values.CDL_A}
                                                                onBlur={handleBlur}
                                                                label="Yes"
                                                                className={touched.CDL_A && errors.CDL_A ? "has-error" : null}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                name="CDL_A"
                                                                type="radio"
                                                                id="CDL_A"
                                                                label="No"
                                                                onChange={(selected) => {
                                                                    console.log(selected)
                                                                    setFieldValue('CDL_A', "No");
                                                                }}
                                                                value={values.CDL_A}
                                                                onBlur={handleBlur}
                                                                className={touched.CDL_A && errors.CDL_A ? "has-error" : null}
                                                            />
                                                            <div style={{ color: "red", fontSize: "x-small" }} >
                                                                <Error touched={touched.CDL_A} message={errors.CDL_A} />
                                                            </div>
                                                        </Form.Group>
                                                    </fieldset>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} md={7}>
                                                        <Form.Check
                                                            onChange={handleChange}
                                                            name="ownerOperator"
                                                            value={values.ownerOperator}
                                                            // checked={this.state.isOwnerOperatorChecked}
                                                            label="I am an owner operator"
                                                            className={touched.ownerOperator && errors.ownerOperator ? "has-error" : null}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md={7}  >
                                                        <Form.Check
                                                            onChange={handleChange}
                                                            value={values.flatbedExperience}
                                                            name="flatbedExperience"
                                                            label="Experienced in flatbed"
                                                            className={touched.flatbedExperience && errors.flatbedExperience ? "has-error" : null}

                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md={7}>
                                                        <Form.Check
                                                            onChange={handleChange}
                                                            name="leasePurchase"
                                                            value={values.leasePurchase}
                                                            label="Interested in lease purchase"
                                                            feedback="You must agree before submitting."
                                                        />
                                                    </Form.Group>
                                                </Form.Row>
                                                <div >
                                                    {this.state.showSubmitSpinner ?
                                                        <Button variant="primary" disabled>
                                                            <Spinner
                                                                as="span"
                                                                animation="grow"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            />
                                                        Submitting...
                                                    </Button> : null}
                                                    <button className="contactSubmitBtn"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >Submit</button>
                                                </div>
                                            </Form >
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                        <div class="col align-self-center highlight" >
                            <img src={require('./wearehere.jpeg')} alt="LetUsKnow"></img>
                            <img src={require('./homepagelogo.png')} width="250px" alt="LetUsKnow"></img>
                            <p style={{
                                border: "solid black",
                                backgroundColor: "black",
                                color: "white",
                                padding: "10px",
                                borderRadius: "10px",
                                marginLeft: "3vw",
                                marginTop: "4vh",
                                textAlign: "left",
                                fontSize: "large",
                                fontFamily: "OCR A Std, monospace"
                            }}>
                                <p>Let us help you match with your best suitable trucking job and transportation company.</p>
                                <p>Feel free to let us know what exactly are you looking for.</p>
                                <p>We are here to listen to you and we'll make sure your trucking job hunt ends here.</p></p>
                        </div>
                    </div>
                </div>
                <div className="opportunityText">
                    <p className="opportunityText text-white bg-dark" >Your opportunity strikes here!</p>
                </div>
            </div>
        );
    }
}

export default Homepage;