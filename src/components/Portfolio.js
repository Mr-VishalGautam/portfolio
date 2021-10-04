import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";

export default function Portfolio() {
    return (
        <div>
            <AsideMenu />
            <div className="site-main">
                <div className="site-main-inner">
                    <div className="main-section portfolio-section">
                        <h1 className="main-title">Portfolio</h1>
                        <p>
                            See my works below. Unless explicitly stated otherwise,{" "}
                            <strong>
                                all their front-end parts were completely done by me.
                            </strong>
                        </p>
                        <div className="timeline portfolio-timeline">
                            <ul>
                                <li className="timeline_element timeline_element--now project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">Now</time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <div className="project-description">
                                                <strong>
                                                    Currently open to co-operation on new and existing
                                                    projects.
                                                </strong>
                                                <br />
                                                Looking for a front-end Developer willing to join your
                                                team?
                                                <br />
                                                <a href="/contact/">Contact me</a>. I will answer you in
                                                ~24 hours.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element timeline_element--now project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            Jan 2021 - Present
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <div className="project-description">
                                                I am working as a React Developer in medium-size tech
                                                company. This gave me a lot of experience and hindsight
                                                on how a proper team collaborate, project management
                                                process should look like. See <a href="/cv/">my CV</a>{" "}
                                                for more details.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">Present</time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/adminpanel/" className="project-link">
                                                <div className="project-title">
                                                    Admin Panel & Website(Under NDA){" "}
                                                </div>
                                                <div className="project-subtitle">
                                                    Working on an High Functional Video uploading and
                                                    rating application
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    <strong>
                                                        This is a web platform that allows user to watch
                                                        videos and rate them for rewards
                                                    </strong>
                                                </p>
                                                <ul>
                                                    <li>
                                                        a SaaS platform for user to upload watch, review and
                                                        rate videos
                                                    </li>
                                                    <li>
                                                        User can watch both short and long videos and rate
                                                        them.
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/adminpanel/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="http://elasticsearch.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            ElasticSearch
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://firebase.google.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Firebase
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.ansible.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            sockets
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/adminpanel/">
                                                <img src="/adminpanalss.png" alt="Admin Panel" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            AUG 2020 - DEC 2020
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/jjtu/" className="project-link">
                                                <div className="project-title">JJTU </div>
                                                <div className="project-subtitle">
                                                    A Prestigeous University Based In india
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    <strong>
                                                        JJTU is a Prestigeous University in india which
                                                        specializes in research & Tech education.
                                                    </strong>
                                                </p>
                                                <p>
                                                    This web protal is used by thousands of
                                                    Students,Researchers , Adminstration staff daily
                                                </p>
                                                <ol>
                                                    <li>Responsive web application (React & Redux)</li>
                                                </ol>
                                            </div>
                                            <a
                                                href="/portfolio/jjtu/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://sass-lang.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Sass
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/jjtu/">
                                                <img src="/JJTUss.png" alt="JJTU WEBSITE" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        {/* <time className="timeline_element-date-text">2014</time> */}
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/jjtuadmin/" className="project-link">
                                                <div className="project-title">JJTU Admin Panel</div>
                                                <div className="project-subtitle">
                                                    A highly fuctional and responsive admin panel to
                                                    manage Universites data
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>The portal is used to manage data like:</p>
                                                <ul>
                                                    <li>Data & Profile of newly enlisted students;</li>
                                                    <li>
                                                        Profile ,Data ,Certificates of Research Students;
                                                    </li>
                                                    <li>
                                                        Managing Data and profile of Administration and
                                                        Staff;
                                                    </li>
                                                    <li>… and a lot more.</li>
                                                </ul>
                                                <p>Technical wrap-up:</p>
                                                <ul>
                                                    <li>A high functioning web portal</li>
                                                    <li>Done in React/Redux and TypeScript</li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/jjtuadmin/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.typescriptlang.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            TypeScript
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/jjtu-admin/">
                                                <img src="/jjtuadminss.png" alt="JJTU Admin " />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            Apr 2019 - Aug 2020
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/radhaStore/" className="project-link">
                                                <div className="project-title">Radha Store</div>
                                                <div className="project-subtitle">
                                                    An E-commerce website for Religious books,Traditional
                                                    clothes and things
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    The application allows to buy ISCKON's book's,
                                                    traditonal Indian cloths ornaments etc....
                                                </p>
                                                <ul>
                                                    <li>
                                                        A fully functional website with a high tech and
                                                        secure payment gateway
                                                    </li>
                                                    <li>Used By hundreds of devotees worldwide daily</li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/radhaStore/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/radhaStore/">
                                                <img src="/radhastoress.png" alt="Radha Store" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/namangtl/" className="project-link">
                                                <div className="project-title">
                                                    Naman Gems Testing lab
                                                </div>
                                                <div className="project-subtitle">
                                                    A Brand Portfolio website for of the India's top Gems
                                                    Testing lab Based in Jaipur,"Rajasthan"
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <ul>
                                                    <li>Responsive and highly efficient.</li>
                                                    <li>
                                                        Back-end server, written down in Asp.net - which
                                                        handles API requests and includes an admin panel.
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/namangtl/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/namangtl/">
                                                <img src="/ngtl.png" alt="Gems Testing lab" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/igl/" className="project-link">
                                                <div className="project-title">
                                                    Indian Gemological Lab
                                                </div>
                                                <div className="project-subtitle">
                                                    A Brand Portfolio website for of the India's top Gems
                                                    Testing lab Based in Jaipur,"Rajasthan"
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    An highly resoponsive an good lookin portfolio of one
                                                    of the best gemological lab in jaipur .{" "}
                                                </p>
                                                <ul>
                                                    <li>Responsive and highly efficient.</li>
                                                    <li>
                                                        Back-end server, written down in Asp.net - which
                                                        handles API requests and includes an admin panel.
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/igl/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://angular.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Angular
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="# ">HTML5</a>
                                                    </li>
                                                    <li>
                                                        <a href="# ">CSS3</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/igl/">
                                                <img src="/igl.png" alt="IGL" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a href="/portfolio/ayurvedah/" className="project-link">
                                                <div className="project-title">Ayurvedah</div>
                                                <div className="project-subtitle">
                                                    A web portal to communicate with india's best
                                                    ayurvedic doctor's for online diagnosis and
                                                    prescription
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>Ayurvedah lets you connect with :</p>
                                                <ul>
                                                    <li>Best Ayurvedic medicine experts in india </li>
                                                    <li>
                                                        and you got provided best treatment according to
                                                        your symtoms
                                                    </li>
                                                    <li>Communication and payment is all online </li>
                                                    <li>
                                                        Diagnosis and treatment by the best medical
                                                        professional arroud the country
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/ayurvedah/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a href="# ">HTML5</a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="http://vanilla-js.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Vanilla Js
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/ayurvedah/">
                                                <img src="/ayurvedah.png" alt="Ayurvedah " />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a
                                                href="/portfolio/mehta-stones/"
                                                className="project-link"
                                            >
                                                <div className="project-title">Mehta Stones </div>
                                                <div className="project-subtitle" />
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    A Brand portfolio for a local stone marbal trader and
                                                    supplier:
                                                </p>
                                                <ul>
                                                    <li>modern one-page, responsive web design;</li>
                                                    <li>custom subpages, gallery, contact form;</li>
                                                </ul>
                                            </div>
                                            <a
                                                href="/portfolio/mehta-stones/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="http://vanilla-js.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Vanilla Js
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="# ">HTML5</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/mehta-stones/">
                                                <img src="/mehtastones.png" alt="Mehta Stones" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            2012 - 2014
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <a
                                                href="/portfolio/slowniki-pro/"
                                                className="project-link"
                                            >
                                                <div className="project-title">Slowniki-Pro</div>
                                                <div className="project-subtitle">
                                                    Commercial dictionaries online
                                                </div>
                                            </a>
                                            <div className="project-description">
                                                <p>
                                                    <em>
                                                        Slowniki-Pro is a lexicographical project allowing
                                                        to accomodate all the general and specialist
                                                        dictionaries in just one, online place.
                                                    </em>
                                                </p>
                                                <p>Whole project includes:</p>
                                                <ul>
                                                    <li>
                                                        publicly accessable front-end portal with online
                                                        dictionaries,
                                                    </li>
                                                    <li>
                                                        a moderator and reseller panel, allowing to control
                                                        the sales of the access to the paid dictionaries,
                                                    </li>
                                                    <li>
                                                        dictionaries’ editor panel, that allows the
                                                        Slowniki-Pro and other clients to:
                                                        <ul>
                                                            <li>
                                                                create and manage dictionaries from the browser,
                                                            </li>
                                                            <li>
                                                                manage dictionaries databases and editors’ user
                                                                accounts,
                                                            </li>
                                                            <li>record audio pronunciation of headwords,</li>
                                                            <li>create a printable version of dictionary,</li>
                                                            <li>
                                                                export the dictionary to native dictionary
                                                                application (available on Windows, Mac and
                                                                Linux),
                                                            </li>
                                                            <li>
                                                                and finally, publish the dictionary onto the
                                                                Slowniki-Pro platform.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Written down fully from scratch in custom MVC PHP
                                                    framework.
                                                </p>
                                            </div>
                                            <a
                                                href="/portfolio/slowniki-pro/"
                                                className="project-readmore button button-red"
                                            >
                                                More details
                                            </a>
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <a
                                                            href="https://php.net"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            PHP
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="http://www.doctrine-project.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Doctrine ORM
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <a href="/portfolio/slowniki-pro/">
                                                <img
                                                    src="/generated/images/portfolio/slownikipro/slownikipro-800x568-3d9b07.edb9c787.png"
                                                    alt="Slowniki-Pro"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Analytics */}
            {/* Disqus: comments count */}
        </div>
    );
}
