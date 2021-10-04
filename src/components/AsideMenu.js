import React from "react";
import "./Component.css";


export default function AsideMenu() {
    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner h-card">
                <a href="/" rel="me" className="person u-url">
                    <div className="person-avatar u-photo">
                        <img src="/v-img.jpeg" alt="" className="avatar" />
                    </div>
                    <div className="person-content">
                        <h1 className="person-title p-name">Vishal Gautam</h1>
                        <h2 className="person-subtitle p-job-title p-note">
                            Front-End Software Engineer
                        </h2>
                    </div>
                </a>
                <nav className="block main-navigation">
                    <div className="navigation-extend-bar">
                        <div className="social-icons">
                            <a
                                rel="me"
                                href="/cdn-cgi/l/email-protection#046e6567616f446e706b692a6961"
                                className="button button-icon u-email"
                                title="mail: jacek@jtom.me"
                            >
                                <i className="fa fa-envelope" />
                            </a>
                            <a
                                rel="me"
                                href="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                className="button button-icon"
                                title="linkedin: jtompl"
                            >
                                <i className="fa fa-linkedin-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://github.com/Vishal Gautam"
                                className="button button-icon"
                                title="github: Vishal Gautam"
                            >
                                <i className="fa fa-github-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://www.facebook.com/vishal.gautam.5"
                                className="button button-icon"
                                title="facebook: Vishal Gautam"
                            >
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://twitter.com/jtompl"
                                className="button button-icon"
                                title="twitter: @jtompl"
                            >
                                <i className="fa fa-twitter-square" />
                            </a>
                        </div>
                        <a
                            href="# "
                            className="navigation-extend-button js-extend-main-navigation"
                        >
                            <i className="fa fa-bars" />
                        </a>
                    </div>
                    <div className="navigation-extendable">
                        <ul>
                            <li >
                                <a href="/portfolio/">Portfolio</a>
                            </li>
                            {/* <li >
                                <a href="/skills-and-offer/">My offer</a>
                            </li> */}

                            <li >
                                <a href="/cv/">My CV</a>
                            </li>
                            <li >
                                <a href="/contact/">Contact me</a>
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
                            >
                                <i className="fa fa-linkedin-square" />
                            </a>
                            {/* <a
                                rel="me"
                                href="https://github.com/Vishal Gautam"
                                className="button button-icon"
                                title="github: Vishal Gautam"
                            >
                                <i className="fa fa-github-square" />
                            </a> */}
                            <a
                                rel="me"
                                href="https://www.facebook.com/vishal.gautam.5"
                                className="button button-icon"
                                title="facebook: Vishal Gautam"
                            >
                                <i className="fa fa-facebook-square" />
                            </a>
                            <a
                                rel="me"
                                href="https://twitter.com/VishalG14630432"
                                className="button button-icon"
                                title="twitter: @Vishal Gautam"
                            >
                                <i className="fa fa-twitter-square" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="block block-blog">
                    <div className="block-title">Recently on my blog</div>
                    <div className="block-content">
                        <ul className="posts-list">
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/how-we-will-get-rid-of-fake-news-by-2030-b70e330fbbaa">
                                    <div className="post-title">
                                        How AI will help us get rid of fake news by 2030
                                    </div>
                                    <div className="post-date">Sep 17, 2019</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/handling-asynchronous-actions-in-redux-86724ed87c6c">
                                    <div className="post-title">
                                        Handling asynchronous actions in Redux
                                    </div>
                                    <div className="post-date">Jul 9, 2019</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164">
                                    <div className="post-title">
                                        Why TypeScript is the best way to write Front-end in 2019
                                    </div>
                                    <div className="post-date">Dec 24, 2018</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b">
                                    <div className="post-title">
                                        How to write good, composable and pure components in Angular
                                        2+
                                    </div>
                                    <div className="post-date">Jun 7, 2018</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/mastering-the-angular-performance-by-dropping-the-magic-of-change-detector-2b605b444b04">
                                    <div className="post-title">
                                        Mastering the Angular performance — by dropping the magic of
                                        Change Detector
                                    </div>
                                    <div className="post-date">May 17, 2018</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/coding-is-not-an-art-its-engineering-e95c2eead1ea">
                                    <div className="post-title">
                                        Code is not art, it’s engineering
                                    </div>
                                    <div className="post-date">Apr 19, 2018</div>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@Vishal Gautam/keep-your-code-clean-forever-65c71f7f2df">
                                    <div className="post-title">Keep your code clean forever</div>
                                    <div className="post-date">Apr 5, 2018</div>
                                </a>
                            </li>
         
                        </ul>
                    </div>
                </div> */}
            </div>
        </aside>
    );
}
