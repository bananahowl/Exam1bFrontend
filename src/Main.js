import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import { Switch, Route, NavLink,Link,useRouteMatch, Prompt, Router} from "react-router-dom";

function Main() {
  return (
    <Router>
    <div>
    <nav className="topmenu" id="topmenu">
      <ul className="nav">
        {/* <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" to="/recipes">
            Recipes
          </NavLink>
        </li>
        <li className="nav-logout">
          <NavLink to="/">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
     
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
{/* <div>
     <Header />
      <Content />
     </div> */}
const Content = ()=>{
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
  );
}
/* const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
}; */

const Home = ()=>{
  return (
    <div> 
      <h1>Home</h1>
       </div>
  );
}

const Products = () =>{
  //console.log(bookFactory.getBooks());
  let {path,url} = useRouteMatch(); //match
  return (
    <div>
      {/* <p> amount: {bookFactory.getBooks()}</p> */}
    {/* <table>
      <thead>
      <tr><th>ID</th><th>TITLE</th><th>INFO</th></tr>
    </thead>
    <tbody>
      {bookFactory.getBooks().map((book)=>{
        return <tr><td><Link to={`${url}/${book.id}`}> book:{book.id}
        </Link></td>
        <td>{book.title}</td>
        <td>{book.info}</td>
        </tr>
      })}
      </tbody>
      </table> */}
      <p> Recipes here </p>
    </div>
  );
};

const Company = ()=>{
  return (
    <div> company </div>
  );
}



const NoMatch = ()=>{
  return (
    <div> 
      <p> no match found</p>
    </div>
  );
};
export default Main;
