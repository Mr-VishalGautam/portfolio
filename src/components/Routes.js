import React from "react";
import {  Switch, Route } from "react-router-dom";
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
        <Route exact path="/" component={Home} />
        <Route  path="/my-portfolio" component={Portfolio} />
        <Route  path="/contact" component={MyContact} />
        {/* <Route path="/skills-and-offer" component={MyOffer} /> */}
        <Route  path="/cv" component={CuriculumVitae} />
        {/* <Redirect exact from="/" to="/portfolio/home" /> */}
      </Switch>
    </>
  );
}
