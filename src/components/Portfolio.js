import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";

import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div>
            <AsideMenu />
            <div className="site-main">
                <div className="site-main-inner">
                    <div className="main-section portfolio-section">
                        <h1 className="main-title">Portfolio</h1>
                        {/*  <p>
                            See my works below. Unless explicitly stated
                            otherwise,{" "}
                            <strong>
                                all their front-end parts were completely done
                                by me.
                            </strong>
                        </p>*/}
                        <div className="timeline portfolio-timeline">
                            <ul>
                                <li className="timeline_element timeline_element--now project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            Now
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <div className="project-description">
                                                <strong>
                                                    Currently open to
                                                    co-operation on new and
                                                    existing projects.
                                                </strong>
                                                <br />
                                                Looking for a Senior Full-Stack
                                                Engineer who brings expertise,
                                                innovation, and a passion for
                                                building exceptional digital
                                                experiences?
                                                <br />
                                                <Link to="/contact">
                                                    Contact me
                                                </Link>
                                                . I will answer you in ~24
                                                hours.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            July 2022 - Present
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/adminpanel/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Supply Chain Navigator
                                                </div>
                                                <div className="project-subtitle">
                                                    Supply Chain Navigator
                                                    platform helps Bayer's
                                                    Supply Chain teams across
                                                    Crop Science optimize their
                                                    decisions in a complex and
                                                    volatile environment.
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    <strong>
                                                        Supply Chain Navigator
                                                        helps with extended
                                                        optimization in
                                                        Allocation policy,
                                                        Production campaign
                                                        policy, Crop placement,
                                                        Safety stock, Adjust
                                                        plan etc
                                                    </strong>
                                                </p>
                                                <ul>
                                                    <li>
                                                        Best and robust solution
                                                        providing new optimal
                                                        plans using optimization
                                                        and simulations
                                                    </li>
                                                    <li>
                                                        Impoving models with
                                                        continues enhancements
                                                        based on snapshots of
                                                        data
                                                    </li>
                                                    <li>
                                                        Capable of handling high
                                                        peak system loads with
                                                        historical data
                                                    </li>
                                                    <li>
                                                        Focus on expert user
                                                        enabling them with
                                                        intelligent insights
                                                    </li>
                                                    <li>
                                                        Confidentiality of
                                                        scenarios and data
                                                    </li>
                                                    <li>
                                                        Analyze benefit of
                                                        changed Supply Chain
                                                        setup
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://nextjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Next.js
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.typescriptlang.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            TypeScript
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://nodejs.org/en"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Node.js
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.mongodb.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Mongo db
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://expressjs.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Express.js
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.ansible.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            sockets
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://nestjs.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Nest.js
                                                        </Link>
                                                    </li>
                                                    <li>
                                                    <Link
                                                        to="https://nx.dev/"
                                                        rel="nofollow noreferrer"
                                                        target="_blank"
                                                    >
                                                        Mono repo
                                                    </Link>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/adminpanel/">
                                                <img
                                                    src="/portfolio/scn.png"
                                                    alt="Supply Chain Navigator"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            Jan 2021 - June 2022
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/adminpanel/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Admin Panel & App (Android
                                                    and iOS)
                                                </div>
                                                <div className="project-subtitle">
                                                    Working on an High
                                                    Functional Video uploading
                                                    and rating application
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    <strong>
                                                        Web platform that allows
                                                        user to watch videos and
                                                        rate them for rewards
                                                    </strong>
                                                </p>
                                                <ul>
                                                    <li>
                                                        a SaaS platform for user
                                                        to upload watch, review
                                                        and rate videos
                                                    </li>
                                                    <li>
                                                        User can watch both
                                                        short and long videos
                                                        and rate them.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React Native
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="http://elasticsearch.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            ElasticSearch
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://firebase.google.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Firebase
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.ansible.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            sockets
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/adminpanel/">
                                                <img
                                                    src="/portfolio/adminpanalss.png"
                                                    alt="Admin Panel"
                                                />
                                            </Link>
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
                                            <Link
                                                to="/my-portfolio/jjtu/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    JJTU{" "}
                                                </div>
                                                <div className="project-subtitle">
                                                    A Prestigeous University
                                                    Based In india
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    <strong>
                                                        JJTU is a Prestigeous
                                                        University in india
                                                        which specializes in
                                                        research & Tech
                                                        education.
                                                    </strong>
                                                </p>
                                                <p>
                                                    This web protal is used by
                                                    thousands of
                                                    Students,Researchers ,
                                                    Adminstration staff daily
                                                </p>
                                                <ol>
                                                    <li>
                                                        Responsive web
                                                        application (React &
                                                        Redux)
                                                    </li>
                                                </ol>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://sass-lang.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Sass
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/jjtu/">
                                                <img
                                                    src="/portfolio/JJTUss.png"
                                                    alt="JJTU WEBSITE"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        {/* <time className="timeline_element-date-text">2014</time> */}
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/jjtuadmin/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    JJTU Admin Panel
                                                </div>
                                                <div className="project-subtitle">
                                                    A highly fuctional and
                                                    responsive admin panel to
                                                    manage Universites data
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    The portal is used to manage
                                                    data like:
                                                </p>
                                                <ul>
                                                    <li>
                                                        Data & Profile of newly
                                                        enlisted students;
                                                    </li>
                                                    <li>
                                                        Profile ,Data
                                                        ,Certificates of
                                                        Research Students;
                                                    </li>
                                                    <li>
                                                        Managing Data and
                                                        profile of
                                                        Administration and
                                                        Staff;
                                                    </li>
                                                    <li>… and a lot more.</li>
                                                </ul>
                                                <p>Technical wrap-up:</p>
                                                <ul>
                                                    <li>
                                                        A high functioning web
                                                        portal
                                                    </li>
                                                    <li>
                                                        Done in React/Redux and
                                                        TypeScript
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://redux.js.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Redux
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.typescriptlang.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            TypeScript
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/jjtu-admin/">
                                                <img
                                                    src="/portfolio/jjtuadminss.png"
                                                    alt="JJTU Admin "
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date">
                                        <time className="timeline_element-date-text">
                                            June 2018 - Aug 2020
                                        </time>
                                    </div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/radhaStore/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Radha Store
                                                </div>
                                                <div className="project-subtitle">
                                                    An E-commerce website for
                                                    Religious books,Traditional
                                                    clothes and things
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    The application allows to
                                                    buy ISCKON's book's,
                                                    traditonal Indian cloths
                                                    ornaments etc....
                                                </p>
                                                <ul>
                                                    <li>
                                                        A fully functional
                                                        website with a high tech
                                                        and secure payment
                                                        gateway
                                                    </li>
                                                    <li>
                                                        Used By hundreds of
                                                        devotees worldwide daily
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/radhaStore/">
                                                <img
                                                    src="/portfolio/radhastoress.png"
                                                    alt="Radha Store"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/namangtl/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Naman Gems Testing lab
                                                </div>
                                                <div className="project-subtitle">
                                                    A Brand Portfolio website
                                                    for of the India's top Gems
                                                    Testing lab Based in
                                                    Jaipur,"Rajasthan"
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <ul>
                                                    <li>
                                                        Responsive and highly
                                                        efficient.
                                                    </li>
                                                    <li>
                                                        Back-end server, written
                                                        down in Asp.net - which
                                                        handles API requests and
                                                        includes an admin panel.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://reactjs.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            React
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://react-bootstrap.github.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/namangtl/">
                                                <img
                                                    src="/portfolio/ngtl.png"
                                                    alt="Gems Testing lab"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/igl/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Indian Gemological Lab
                                                </div>
                                                <div className="project-subtitle">
                                                    A Brand Portfolio website
                                                    for of the India's top Gems
                                                    Testing lab Based in
                                                    Jaipur,"Rajasthan"
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    An highly resoponsive an
                                                    good lookin portfolio of one
                                                    of the best gemological lab
                                                    in jaipur .{" "}
                                                </p>
                                                <ul>
                                                    <li>
                                                        Responsive and highly
                                                        efficient.
                                                    </li>
                                                    <li>
                                                        Back-end server, written
                                                        down in Asp.net - which
                                                        handles API requests and
                                                        includes an admin panel.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://angular.io/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Angular
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="# ">
                                                            HTML5
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="# ">
                                                            CSS3
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/igl/">
                                                <img
                                                    src="/portfolio/igl.png"
                                                    alt="IGL"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/ayurvedah/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Ayurvedah
                                                </div>
                                                <div className="project-subtitle">
                                                    A web portal to communicate
                                                    with india's best ayurvedic
                                                    doctor's for online
                                                    diagnosis and prescription
                                                </div>
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    Ayurvedah lets you connect
                                                    with :
                                                </p>
                                                <ul>
                                                    <li>
                                                        Best Ayurvedic medicine
                                                        experts in india{" "}
                                                    </li>
                                                    <li>
                                                        and you got provided
                                                        best treatment according
                                                        to your symtoms
                                                    </li>
                                                    <li>
                                                        Communication and
                                                        payment is all online{" "}
                                                    </li>
                                                    <li>
                                                        Diagnosis and treatment
                                                        by the best medical
                                                        professional arroud the
                                                        country
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link to="# ">
                                                            HTML5
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Css3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="http://vanilla-js.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Vanilla Js
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/ayurvedah/">
                                                <img
                                                    src="/portfolio/ayurvedah.png"
                                                    alt="Ayurvedah "
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline_element project">
                                    <div className="timeline_element-date"></div>
                                    <div className="timeline_element-contents">
                                        <div className="project-text">
                                            <Link
                                                to="/my-portfolio/mehta-stones/"
                                                className="project-link"
                                            >
                                                <div className="project-title">
                                                    Mehta Stones{" "}
                                                </div>
                                                <div className="project-subtitle" />
                                            </Link>
                                            <div className="project-description">
                                                <p>
                                                    A Brand portfolio for a
                                                    local stone marbal trader
                                                    and supplier:
                                                </p>
                                                <ul>
                                                    <li>
                                                        modern one-page,
                                                        responsive web design;
                                                    </li>
                                                    <li>
                                                        custom subpages,
                                                        gallery, contact form;
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="project-technologies">
                                                <div className="technologies-title">
                                                    Technologies
                                                </div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="http://vanilla-js.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Vanilla Js
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="https://getbootstrap.com/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Bootstrap
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="# ">
                                                            HTML5
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/my-portfolio/mehta-stones/">
                                                <img
                                                    src="/portfolio/mehtastones.png"
                                                    alt="Mehta Stones"
                                                />
                                            </Link>
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
                                            <Link
                                                to="/portfolio/slowniki-pro/"
                                                className="project-link"
                                            >
                                                <div className="project-title">Slowniki-Pro</div>
                                                <div className="project-subtitle">
                                                    Commercial dictionaries online
                                                </div>
                                            </Link>
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
                                         
                                            <div className="project-technologies">
                                                <div className="technologies-title">Technologies</div>
                                                <ul className="tech-tags">
                                                    <li>
                                                        <Link
                                                            to="https://php.net"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            PHP
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="http://www.doctrine-project.org/"
                                                            rel="nofollow noreferrer"
                                                            target="_blank"
                                                        >
                                                            Doctrine ORM
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <Link to="/portfolio/slowniki-pro/">
                                                <img
                                                    src="/portfolio/generated/images/portfolio/slownikipro/slownikipro-800x568-3d9b07.edb9c787.png"
                                                    alt="Slowniki-Pro"
                                                />
                                            </Link>
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
