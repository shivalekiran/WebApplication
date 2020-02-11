import React, { Component } from 'react';
import mystyle from  './myformstyles.module.css';


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = ( {
            username: "",
            age: "",
            errormessage : "",
            description : " this is the desacription for text area tag.",
            selecterval : 'Select Gender'
        })
    }

    set(key, val) {
        this.setState(
            {
                [key]: val
            }
        );
    }
    textChenger = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        let err = '';
        if (key === "age") {
            if (!Number(val) && val !== "") {
                err  = <strong>Your age is not valid </strong>;        
                
            } 
        }
        this.setState({errormessage: err});
        this.set(key, val);        
    }
    submitData = (event) => {
        // event.preventDefault();
        let agev = this.state.age;
        if (!Number(agev)) {
            this.state.errormessage = "Age is not valid"
        }
    }

    handleChange = (event) => {
        this.setState({selecterval: event.target.value})
    }
    render() {
        const lag = "Enter your name: " + this.state.username
        return (
            <form className = {mystyle.bigblue }>
                {/*  onSubmit={this.submitData} */}
                <h1>Hello</h1>
                    <p>Enter your name: {this.state.username}</p>
                    <input 
                        type="text" 
                        width = "100%"
                        name="username" 
                        onChange={this.textChenger} />
                
                <p>Enter your last Name:{this.state.age}</p>
                <input 
                    type="text" 
                    name="age" 
                    onChange={this.textChenger} 
                
                    />
                {this.state.errormessage}
                <p> 
                    <textarea style ={mystyle} value = {this.state.description} hidden  ="" />
                </p>
                <p>
                    <select value= {this.state.selecterval} onChange= {this.handleChange}>
                        <option value="abc">Select Gender</option>
                        <option value="def">Male</option>
                        <option value="ghij">Female</option>
                    </select>
                </p>
                {/* <p> */}
                {/* <button type="submit">SubmitValues</button> */}
                {/* </p> */}

            </form>
        );
    }
}

export default MyForm;