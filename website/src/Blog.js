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
                    <div style={{ fontSize: "x-large", textIndent: "10vw", color: "white" }}>
                        <p>At AdvertAlpha, we help recruiters hire quality & relevant applicants according
                        to their listings & provide desired jobs for the job-seekers. We indulge deep
                        into our client's business narratives and crop up with quality solutions which
                            are not only effective but also efficient.</p>
                        <p>Our team is trained and driven by an impulse dedication to validate & produce highly
                        filtered information before serving it.</p>
                    </div>
                    <div style={{ marginTop: "6vh" }}>
                        <h5>Why CDL-A drivers? – “Heroes without capes” in pandemic</h5>
                        <p>Due to the COVID-19 strike, most of the citizens suffered from the unavailability of essentials and supplies. The only way to get supplies and essentials to the nearest stores is by trucks.
                        So, CDL-A drivers play a crucial role right now in helping people get the essentials.
                        We are trying to reach out to all kinds of drivers such as Owner Operator, Refrigerated, Tankers, Flatbed, and recent grads too.
                        We treat them as “Heroes without capes”.</p>
                        <h5>What are the next steps after filing the form?</h5>
                        <p>Our job starts here. We will get in touch with you via phone call, email or text to receive/provide more information
                        regarding the current opportunities.</p>
                        <h5>How are we serving?</h5>
                        <ul>
                            <li>
                                We will validate the information on the call with drivers and route the profile
                                details to the best match.
                            </li>
                            <li>
                                Based on the information we receive from drivers at the time of validation, we will route their applications to the respective companies.
                            </li>
                        </ul>
                    </div >
                    <p>Our dedication: To accompany and fetch best possible services for our clients
                    (job-seekers & employers) with the most effective approach.</p>
                    <p>We are happy to see feedback from you. Thank you.</p>
                </div>
            </div>
        )
    }
}

export default Blog;