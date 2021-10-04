import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
//import MyOffer from "./MyOffer";
import MyContact from "./MyContact";
import CuriculumVitae from "./CuriculumVitae";


export default function Routes() {
  return (
    <>
      <Switch>
        {" "}
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={MyContact} />
        {/* <Route path="/skills-and-offer" component={MyOffer} /> */}
        <Route path="/cv" component={CuriculumVitae} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </>
  );
}
