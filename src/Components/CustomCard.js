
import React from "react";


class CustomCard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            color: props.color ? props.color : " rgba(128, 128, 128, 0.958)",
            text: props.text ? props.text : "default title text",
            width: "18rem"
        }

    }

    render() {

        return (

            <div className="col-4">
                <div className="card" style={{ width: this.state.width, backgroundColor: this.state.color }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default CustomCard;