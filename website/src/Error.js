import React from 'react'

const Error = ({ touched, message }) => {
    // if (touched === false) {
    if (!touched) {
        return <div className="form-message invalid">&nbsp;</div>
    }

    if (message) {
        return <div className="form-message invalid">{message}</div>
    }
    return <div style={{ color: "green", fontSize: "medium" }} className="form-message valid">all good!</div>
}

export default Error