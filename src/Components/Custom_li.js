

import React from "react";


class Custom_li extends React.Component {

    constructor(props) {
        super();
        this.state = {
            text: props.text ? props.text : "default title text",
        }

    }

    render() {

        return (

            <li className="my-3">
                <a href="#" className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>{this.state.text}
                </a>
            </li>
        )
    }
}


export default Custom_li;