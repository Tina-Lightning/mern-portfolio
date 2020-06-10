import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";

import ProjectsList from "./components/projects-list.components";
import EditProject from "./components/edit-project.component";
import CreateProject from "./components/create-project.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProjectsList} />
        <Route path="/edit/:id" component={EditProject} />
        <Route path="/create" exact component={CreateProject} />
        <Route path="/user" exact component={CreateUser} />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
