import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <AsideMenu />
      <div className="site-main">
        <div className="site-main-inner">
          <div className="home-section">
            <div className="home-section-inner">
              <div className="home-heading">Hi, I'm Vishal.</div>
              <h2 className="home-subheading">
                I build the interfaces that make hard problems navigable.
              </h2>
              <div className="home-location">
                Senior Frontend Engineer specialising in enterprise optimization systems,
                real-time infrastructure, and data-intensive operational software —
                the tools that expert users depend on to make high-stakes decisions.
                <br /><br />
                7+ years in production. Trusted by global organisations including Bayer Crop Science.
                Based in India. Working worldwide.
              </div>
              <div className="home-buttons">
                <Link
                  to="/my-portfolio"
                  className="button button-outline button-white"
                >
                  My Work
                </Link>
                <br />
                <Link to="/cv" className="button button-outline button-white">
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}