import React from 'react'
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-blog" >
                <div className="container" >
                    <div>
                        <p>At Advertalpha, we help recruiters get the most relevant jobseekers for their listings and most relevant jobs for the job seekers. To achieve that, to add a
                    pinch of quality to service, we are validating the information before serving it.</p>

                        <p>When we say “Validation”, we would need to get in touch with job seekers and employers. We do that on phone calls, texts, emails, and video calls too.
                        Empathy is the foremost key when we build a conversation with job seekers and employers. While on call, we try to get as much information as possible to
                    serve the best to jobseekers and employers.</p>
                    </div>
                    <div style={{ marginTop: "6vh" }}>
                        <h5>Why CDL-A drivers? – “Heros without capes” in pandemic</h5>
                        <p>Due to the COVID-19 strike, most of the citizens suffered from the unavailability of essentials and supplies. The only way to get supplies and essentials to the nearest stores is by trucks.
                        So, CDL-A drivers play a crucial role right now in helping people get the essentials.
                        We are trying to reach out to all kinds of drivers such as Owner Operator, Refrigerated, Tankers, Flatbed, and recent grads too.
                        We treat them as “Heros without capes”.</p>
                        <h5>What are the next steps after filing the form?</h5>
                        <p>Our job starts here. We will get in touch with you via phone call, email or text to receive/provide more information
                        regarding the current opportunities.</p>
                        <h5>How are we serving?</h5>
                        <ul>
                            <li>
                                We will validate the information on the call with drivers and route the profile details to the best match.
                            </li>
                            <li>
                                Based on the information we receive from drivers at the time of validation, we will route their applications to the respective companies.
                            </li>
                        </ul>
                    </div >
                    We are happy to see feedback from you. Thank you.
                </div>
            </div>
        )
    }
}

export default Blog;