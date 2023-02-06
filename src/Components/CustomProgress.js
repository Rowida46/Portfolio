
import React from "react";


class CustomProgress extends React.Component {

    constructor(props){
        super();
        this.state ={
            percent : props.percent ? props.percent : "75%",
            text:props.text ? props.text : "progress"

            
        }
       
    }

    render(){
        
        return(
            <div className="progress m-2">
                <div className="progress-bar" role="progressbar" style= {{width: this.state.percent}} >{this.state.text}</div>
            </div>
        )
    }
}


export default CustomProgress ;