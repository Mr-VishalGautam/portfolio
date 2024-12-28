import React, { useState } from "react";
import "./Component.css";
import { Link } from "react-router-dom";

export default function AsideMenu() {
    const [extend, setExtend] = useState(false);
    console.log(extend);
    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner h-card">
                <Link to="/" rel="me" className="person u-url">
                    <div className="person-avatar u-photo">
                        <img
                            src="/portfolio/v-img2.jpeg"
                            alt=""
                            className="avatar"
                        />
                    </div>
                    <div className="person-content">
                        <h1 className="person-title p-name">Vishal Gautam</h1>
                        <h2 className="person-subtitle p-job-title p-note">
                            Webs Craftman
                        </h2>
                    </div>
                </Link>
                <nav
                    className={
                        extend === false
                            ? "block main-navigation"
                            : "block main-navigation extended"
                    }
                >
                    <div className="navigation-extend-bar">
                        <div className="social-icons">
                            <Link
                                rel="me"
                                to="/cdn-cgi/l/email-protection#046e6567616f446e706b692a6961"
                                className="button button-icon u-email"
                                title="mail: jacek@jtom.me"
                            >
                                <i className="fa fa-envelope" />
                            </Link>
                            <Link
                                rel="me"
                                to="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                className="button button-icon"
                                title="linkedin: Vishal Gautam"
                            >
                                <i className="fa fa-linkedin-square" />
                            </Link>
                            <Link
                                rel="me"
                                to="https://github.com/Vishal Gautam"
                                className="button button-icon"
                                title="github: Vishal Gautam"
                            >
                                <i className="fa fa-github-square" />
                            </Link>
                            <Link
                                rel="me"
                                to="https://www.facebook.com/vishal.gautam.5"
                                className="button button-icon"
                                title="facebook: Vishal Gautam"
                            >
                                <i className="fa fa-facebook-square" />
                            </Link>
                            <Link
                                rel="me"
                                to="https://twitter.com/VishalG14630432"
                                className="button button-icon"
                                title="twitter: @Visahol"
                            >
                                <i className="fa fa-twitter-square" />
                            </Link>
                        </div>
                        <Link
                            to="# "
                            onClick={() => setExtend(true)}
                            className="navigation-extend-button js-extend-main-navigation"
                        >
                            <i className="fa fa-bars" />
                        </Link>
                    </div>
                    <div className="navigation-extendable">
                        <ul>
                            <li>
                                <Link to="/my-portfolio">Portfolio</Link>
                            </li>

                            <li>
                                <Link to="/cv">My CV</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="block block-social">
                    <div className="block-title">Get in touch</div>
                    <div className="block-content">
                        <div className="social-icons">
                            <a
                                rel="me"
                                href="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                className="button button-icon"
                                title="linkedin: Vishal Gautam"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin-square" />
                            </a>

                            <a
                                rel="me"
                                href="https://www.facebook.com/vishal.gautam.5"
                                className="button button-icon"
                                title="facebook: Vishal Gautam"
                                target="_blank"
                            >
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://twitter.com/VishalG14630432"
                                className="button button-icon"
                                title="twitter: @Vishal Gautam"
                                target="_blank"
                            >
                                <i className="fa fa-twitter-square" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
