import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Records from "./components/Records";
import Villain from "./Villain";
import Records from "./components/Records";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function App() {
  // function RecordsPage (){
  //   window.location.href = "./Records";
  // }

  // function MainPage (){
  //   window.location.href = "./";
  // }

  return (
    <div>
      {/* <Button color="primary" onClick={ MainPage }>
      Game Page
    </Button>
    <Button color="secondary" onClick={ RecordsPage }>
    Records Page
    </Button> */}

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/villain" component={Villain}></Route>
          <Route path="/records" component={records}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/villain" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
