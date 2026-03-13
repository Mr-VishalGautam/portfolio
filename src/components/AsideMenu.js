import React, { useState } from "react";
import "./Component.css";
import { Link } from "react-router-dom";

export default function AsideMenu() {
    const [extend, setExtend] = useState(false);

    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner h-card">
                <Link to="/" rel="me" className="person u-url">
                    <div className="person-avatar u-photo">
                        <img
                            src="/portfolio/my_new_pic_ai.png"
                            alt=""
                            className="avatar"
                        />
                    </div>
                    <div className="person-content">
                        <h1 className="person-title p-name">Vishal Gautam</h1>
                        <h2 className="person-subtitle p-job-title p-note">
                           Senior Frontend Engineer — Optimization & Data-Intensive Systems
                        </h2>
                        <p>
                            Building operational software for complex,
                            data-intensive problems.
                        </p>
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
                            <a
                                rel="me"
                                href="mailto:vishalgautam520@gmail.com"
                                className="button button-icon u-email"
                                title="mail: vishalgautam520@gmail.com"
                            >
                                <i className="fa fa-envelope" />
                            </a>
                            <a
                                rel="me"
                                href="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                className="button button-icon"
                                title="LinkedIn: Vishal Gautam"
                                target="_blank"
                             //   rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://github.com/mr-vishalgautam"
                                className="button button-icon"
                                title="GitHub: mr-vishalgautam"
                                target="_blank"
                             //   rel="noopener noreferrer"
                            >
                                <i className="fa fa-github-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://x.com/V_C0DES"
                                className="button button-icon"
                                title="X: @V_C0DES"
                                target="_blank"
                             //   rel="noopener noreferrer"
                            >
                                <i className="fa fa-twitter-square" />
                            </a>
                        </div>
                        <Link
                            to="#"
                            onClick={() => setExtend(true)}
                            className="navigation-extend-button js-extend-main-navigation"
                        >
                            <i className="fa fa-bars" />
                        </Link>
                    </div>
                    <div className="navigation-extendable">
                        <ul>
                            <li>
                                <Link to="/my-portfolio">Work</Link>
                            </li>
                            <li>
                                <Link to="/cv">Resume</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
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
                                title="LinkedIn: Vishal Gautam"
                                target="_blank"
                              //  rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://github.com/mr-vishalgautam"
                                className="button button-icon"
                                title="GitHub: mr-vishalgautam"
                                target="_blank"
                             //   rel="noopener noreferrer"
                            >
                                <i className="fa fa-github-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://x.com/V_C0DES"
                                className="button button-icon"
                                title="X: @V_C0DES"
                                target="_blank"
                               // rel="noopener noreferrer"
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