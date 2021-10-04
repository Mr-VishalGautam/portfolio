import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";

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
                a software engineer specialized&nbsp;in
                <br />
                <strong>front-end Development</strong>.
              </h2>
              <div className="home-location">
                Currently located in
                <span className="location-name">
                  &nbsp; <i className="fa fa-map-marker"></i>
                  Rajasthan, India
                </span>
                .
              </div>
              <div className="home-buttons">
                <a
                  href="/portfolio/"
                  className="button button-outline button-white"
                >
                  Portfolio
                </a>
                <br />
                <a href="/cv" className="button button-outline button-white">
                  My CV
                </a>
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
