import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";

export default function MyContact() {
    return (
        <div>
            <AsideMenu />
            <div className="site-main">
                <div className="site-main-inner">
                    <div className="main-section">
                        <h1 className="main-title">Contact me</h1>
                        <p>
                            I am available for hire and open to any ideas of
                            cooperation.
                        </p>
                        <div className="vcard">
                            <dl className="dl dl-vertical">
                                <dt>E-mail:</dt>
                                <dd>
                                    <a href="# ">
                                        <i className="icon fa fa-envelope" />
                                        <span>vishalgautam520@gmail.com</span>
                                    </a>
                                </dd>
                                <dt>Phone No. :</dt>
                                <dd>
                                    {" "}
                                    <a href="# ">
                                        <i className="icon fa fa-phone" />
                                        <span>+91-9950792281</span>
                                    </a>
                                </dd>

                                <dt>LinkedIn:</dt>
                                <dd>
                                    <a
                                        href="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="icon fa fa-linkedin" />
                                        vishal gautam
                                    </a>
                                </dd>

                                <dt>Facebook:</dt>
                                <dd>
                                    <a
                                        href="https://www.facebook.com/vishal.gautam.5"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="icon fa fa-facebook" />
                                        vishal gautam
                                    </a>
                                </dd>
                                <dt>Twitter:</dt>
                                <dd>
                                    <a
                                        href="https://twitter.com/VishalG14630432"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="icon fa fa-twitter" />
                                        @vishal gautam
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
