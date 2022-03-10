import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Add Routes here! */}
        <Route path='/about'>
          
        </Route>
        <Route path='/signup'>
          <About />
        </Route>
        <Route path='/articles/:title'>
          <Articles />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/author/:name'>
          <Author />
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
