import React, { Component } from "react"
import facade from "./apiFacade";
import MainPage from "./Main";
import LoggedIn from "./LoggedIn";
class LogIn extends Component {
 constructor(props) {
   super(props);
   this.state = { username: "", password: "" }
 }
 login = (evt) => {
   evt.preventDefault();
   this.props.login(this.state.username, this.state.password);
 }
 onChange = (evt) => {
   this.setState({[evt.target.id]: evt.target.value})
 }
 render() {
   return (
     <div>
       <h2>Login</h2>
       <form onSubmit={this.login} onChange={this.onChange} >
         <input placeholder="User Name" id="username" />
         <input placeholder="Password" id="password" />
         <button>Login</button>
         </form>
     </div>
   )
 }
}

class App extends Component {
 constructor(props) {
   super(props);
   this.state = { loggedIn: false }
 }
 logout = () => {
  facade.logout();
  this.setState({ loggedIn: false });
 } //TODO
 login = (user, pass) => {
   facade.login(user,pass)
    .then(res =>this.setState({ loggedIn: true }));
 } //renders using a if else condition, 
 render() {
   return (
     <div> 
       {!this.state.loggedIn ? (<LogIn login={this.login} />) :
         ( <div>
           <button onClick={this.logout}>Logout</button>
             <LoggedIn/> 
             
             
           </div>)}
     </div>
   )
 }
}
export default App;