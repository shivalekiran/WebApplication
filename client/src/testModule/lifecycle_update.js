import React, {Component} from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoritecolor : "Red",
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
          }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prewState){
        document.getElementById("div1").innerHTML    = "Previous color = " + prewState.favoritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML    = "new color = " + this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>
                    Color is {this.state.favoritecolor}
                </h1>
                <div id = "div1"/>
                <div id = "div2"/>
            </div>
        );
    }
}

export default Header;