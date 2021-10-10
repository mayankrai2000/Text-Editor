import React from "react"

function Alert(props) {
    return (
        // Below statement is equivalent to. if (props. alert != NULL)
        props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert