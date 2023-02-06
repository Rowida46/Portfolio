import React from "react";


class CustomParagraph extends React.Component {

    constructor(props){
        super();
        this.state ={
            color : props.color ? props.color : "default title text",
            text : props.text ? props.text : "default title text"
         }
       
    }
    render(){
        
        return(
            <p className="mt-2 " style={{color:this.state.color}}>{ this.state.text }</p>
        )
    }
}


export default CustomParagraph ;