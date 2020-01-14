import React, { Component } from "react"
import facade from "./apiFacade";
import MainPage from "./Main";
class LoggedIn extends Component {
    constructor(props) {
      super(props);
      this.state= {dataFromServer: "Fetching!!"};
      
    }
    componentDidMount(){
     //facade.fetchData().then(res=> this.setState({dataFromServer: res}));
     //ERROR lies in need of .msg on the bottom to indicate the element you want from res.
     facade.fetchData().then(res => this.setState({ dataFromServer: res.msg }) );
     let value = facade.fetchData();
     console.log(value);
    }
    render() {
      return (
        <div>
          <h3>{ "You are now logged in. " +this.state.dataFromServer}</h3>
            <p> "If this is shown, then the link and naviagtion elements have not been implement correctly."</p>
        </div>
      )
    }
   }
   export default LoggedIn;
