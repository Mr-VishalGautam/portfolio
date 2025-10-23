import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";
import {  Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <AsideMenu />
      <div className="site-main">
        <div className="site-main-inner">
          <div className="home-section">
            <div className="home-section-inner">
              <div className="home-heading">Hi, I'm Vishal,</div>
              <h2 className="home-subheading">
                I engineer high-performance web applications and the scalable systems that power them
                <br />
                {/* <strong>Fullstack Web Development</strong>. */}
              </h2>
              <div className="home-location">
               Architecting solutions for international enterprises.
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
                {/* <a href="/blog/" className="button button-outline button-white">Tech blog</a> */}
                {/* <a href="/cv/" className="button button-outline button-white">My CV</a> */}
                {/* <a href="https://medium.com/@jGautam" className="button button-outline button-white">Personal blog</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
