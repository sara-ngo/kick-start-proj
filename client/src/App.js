import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';

//Import all pages
import Home from './components/pages/Home';
import TakeQuiz from './components/pages/TakeQuiz';
import AboutUs from './components/pages/AboutUs';
import Resources from './components/pages/Resources';
import SignUp from './components/pages/SignUp';
import Quiz from "./components/pages/Quiz";
import CommentPage from "./components/pages/CommentPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/TakeQuiz' exact component={TakeQuiz} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Resources' component={Resources} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Quiz' component={Quiz} />
          <Route path='/comments' component={CommentPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
