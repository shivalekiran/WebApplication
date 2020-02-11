import React, { Component } from 'react';
import './App.css';
// import MyForm from "./testModule/myform"
// import { SendDataToAPI, GetDataFromAPI} from "./pages/apiform"
import HomePage from "./pages/homepage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        username: "",
        age: "",
        errormessage : "",
        description : " this is the desacription for text area tag.",
        selecterval : 'Select Gender'
    })
}
  render() {
    return (
      <HomePage />
    );
  }
}

export default App;