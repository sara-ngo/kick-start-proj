import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from '../membersportal/SignInForm';
import SignUpForm from '../membersportal/SignUpForm';
import Footer from '../footer/Footer';
import '../membersportal/SignUp.css';


function SignUp() {
  document.documentElement.scrollTop = 0; 

  return (
    <Router basename="/react-auth-ui/">
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
        </div>
      </div>
      <Footer />
    </Router>
    
  );
}

export default SignUp;