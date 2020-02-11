import React from 'react'
import mystyle from '../testModule/myformstyles.module.css';



class SendDataToAPI extends React.Component {

    render() {
        return (
            <form className={mystyle.bigblue}>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input
                    type="text"
                    width="100%"
                    name="username"
                    onChange={this.namehandler} />

                <p>Enter your last Name:</p>
                <input
                    type="text"
                    name="age"
                    onChange={this.lastnamehadelr}

                />
                <p>
                    <button type="submit">SubmitValues</button>
                </p>

            </form>
        );
    }
}

class GetDataFromAPI extends React.Component {
    render() {
        return (
            <div>
                <h1>Getting Data From API</h1>
            </div>
        )
    }
}
export { SendDataToAPI, GetDataFromAPI };