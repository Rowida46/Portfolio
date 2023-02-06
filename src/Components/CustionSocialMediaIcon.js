
import React from "react";


class CustionSocialMediaIcon extends React.Component {

    constructor(props) {
        super();
        this.state = {
            src: props.src ? props.src : "",
        }

    }

    render() {

        return (
            <>
                <a href="https://www.quora.com/profile/Rowida-Nagah" target="blank" className="m-1">
                    <img align="center" src={this.state.src} draggable="false" alt="Dana46" height="30" width="40" />
                </a>
            </>
        )
    }
}


export default CustionSocialMediaIcon;