import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";

export default function CuriculumVitae() {
    return (
        <div className="cv-page h-resume">
            <div className="cv-page-inner">
                <div className="cv-section cv-header p-contact h-card">
                    <div className="cv-header-avatar">
                        <img alt="" src="/portfolio/v-img.jpeg" />
                    </div>
                    <div className="cv-header-text">
                        <h1 className="cv-header-name p-name">Vishal Gautam</h1>
                        <h2 className="cv-header-subname p-title">
                            Senior Fullstack Engineer (Web's Craftman)
                        </h2>
                    </div>
                    <div className="cv-header-meta">
                        <div className="cv-header-meta-right">
                            <div className="cv-header-meta-row">
                                <div>
                                    <span className="__cf_email__">
                                        vishalgautam520@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="cv-header-meta-row">
                                +91 9950792281
                            </div>
                            <div className="cv-header-meta-row">
                                <Link
                                    target="_blank"
                                    to="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                >
                                    linkedin.com/in/vishal-gautam-a47a4935/
                                </Link>
                            </div>
                            <div className="cv-header-meta-row">
                                <Link
                                    to="https://mr-vishalgautam.github.io/portfolio/home"
                                    target="_blank"
                                    rel="me"
                                    className="u-url"
                                >
                                    https://mr-vishalgautam.github.io/portfolio/#/
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-section">
                    <h3 className="cv-section-title">About Me</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul style={{ marginTop: 0 }}>
                            I’m the kind of developer who doesn’t just write
                            code—I craft digital experiences that stick. With 6+
                            years of experience building sleek interfaces and
                            powerful systems, I specialize in bridging the gap
                            between robust backends and frontends that users
                            love. Whether it’s creating scalable architectures
                            or pixel-perfect designs, I’m not just solving
                            problems; I’m anticipating them. If it’s on the web,
                            I make it work better.
                        </ul>
                    </div>
                </div>
                <div className="cv-section">
                    <h3 className="cv-section-title">
                        WHAT I BRING TO THE TABLE
                    </h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul style={{ marginTop: 0 }}>
                            <li>
                                Front-End Wizardry: React.js, Next.js, Redux,
                                React Native, TypeScript, JavaScript, AngularJS
                            </li>

                            <li>Back-End Power: Node.js, Express.js</li>

                            <li>
                                Engineering Mastery: Micro-frontend
                                architecture, State Management, Responsive Web
                                Design
                            </li>
                            <li>
                                Tools of the Trade: WebRTC, WebSockets, REST
                                APIs, GraphQL, Docker, Kubernetes, Git.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cv-section">
                    <h3 className="cv-section-title">WORK EXPERIENCE</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        Ormae LLP | Bayer
                                    </div>
                                    <div className="cv-timeline-date">
                                        July 2022 – Present
                                    </div>
                                    <Link
                                        to="https://bayer.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cv-timeline-website"
                                    >
                                        bayer.com
                                    </Link>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Sr. Full-Stack Engineer (External
                                        Contractor)
                                    </h4>
                                    <p>
                                        Architected and deployed the Supply
                                        Chain Navigator (SCN) platform,
                                        empowering Bayer’s Operations Research
                                        and Data Science teams to optimize
                                        global supply chain operations with
                                        advanced data visualization and
                                        predictive analytics.
                                    </p>
                                    <ul>
                                        <li>
                                            Built a scalable, modular
                                            architecture integrating large-scale
                                            datasets into an intuitive front-end
                                            using React.js, Redux, and
                                            TypeScript, facilitating seamless
                                            decision-making.
                                        </li>
                                        <li>
                                            Developed real-time analytics
                                            dashboards and scenario simulation
                                            tools, enabling stakeholders to
                                            identify bottlenecks, enhance
                                            forecasting, and make data-driven
                                            decisions with precision.
                                        </li>
                                        <li>
                                            Collaborated with cross-functional
                                            teams to ensure enterprise-grade
                                            performance, security, and
                                            compliance standards across all
                                            platform modules.
                                        </li>
                                        <li>
                                            Consistently delivered ahead of
                                            expectations by blending technical
                                            expertise with strategic thinking,
                                            ensuring the SCN platform became a
                                            core enabler for Bayer’s global
                                            supply chain transformation
                                            initiatives.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        ScalingWeb
                                    </div>
                                    <div className="cv-timeline-date">
                                        Jan 2021 - June 2022
                                    </div>
                                    <Link
                                        to="https://www.scalingweb.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cv-timeline-website"
                                    >
                                        www.scalingweb.com
                                    </Link>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Software Engineer React
                                    </h4>
                                    <p>
                                        Led front-end development for a video
                                        streaming startup using React.js and
                                        React Native, delivering scalable,
                                        user-friendly applications.
                                    </p>
                                    <ul>
                                        <li>
                                            Integrated WebRTC, WebSockets, and
                                            push notification systems, ensuring
                                            seamless real-time interactions.
                                        </li>
                                        <li>
                                            Designed and launched a secure,
                                            AI-powered admin panel to moderate
                                            and manage user-uploaded content.
                                        </li>
                                        <li>
                                            Improved platform performance by
                                            optimizing key components, reducing
                                            video load times by 35%.
                                        </li>
                                        <li>
                                            Established coding standards and
                                            mentored junior developers,
                                            fostering a collaborative and
                                            efficient development environment.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        Qutiq
                                    </div>
                                    <div className="cv-timeline-date">
                                        Aug 2020 - Dec 2020
                                    </div>
                                    <Link
                                        to="https://www.qutiq.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cv-timeline-website"
                                    >
                                        www.qutiq.com
                                    </Link>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Software Engineer (Contract)
                                    </h4>
                                    <p>
                                        Developed a website portal and admin
                                        panel for JJTU University, utilizing
                                        Functional React, Redux, and modern
                                        design principles to improve usability
                                        and performance.
                                    </p>
                                    <ul>
                                        <li>
                                            Built custom reusable components,
                                            reducing development time for new
                                            features by 20%.
                                        </li>
                                        <li>
                                            Conducted rigorous testing to ensure
                                            cross-browser compatibility and
                                            optimized the UI for mobile
                                            responsiveness.
                                        </li>
                                        <li>
                                            Collaborated with back-end teams to
                                            integrate APIs, streamlining data
                                            flow and enhancing functionality.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cv-timeline-row p-experience h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        LivingSparks It Solutions
                                    </div>
                                    <div className="cv-timeline-date">
                                        June 2018 - Aug 2020
                                    </div>
                                    <Link
                                        to="https://www.livingsparks.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cv-timeline-website"
                                    >
                                        www.livingspark.com
                                    </Link>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <h4 className="cv-timeline-position p-name">
                                        Frontend Engineer
                                    </h4>
                                    <p>
                                        Built and refined admin dashboards and
                                        e-commerce platforms, leading all stages
                                        from research and design to execution
                                        using React.js, Redux, and Sass.
                                    </p>
                                    <ul>
                                        <li>
                                            Designed UX workflows and
                                            user-friendly interfaces that
                                            boosted customer satisfaction by
                                            40%.
                                        </li>
                                        <li>
                                            Conducted performance optimizations,
                                            achieving up to 50% faster page
                                            loading speeds on key client
                                            projects.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row p-education h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">
                                        Rajasthan Technical University
                                    </div>
                                    <div className="cv-timeline-date">
                                        Bachelore Of Technology
                                    </div>
                                    <div className="cv-timeline-date">
                                        2011 - 2015
                                    </div>
                                    <Link
                                        to="https://www.rtu.ac.in"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cv-timeline-website"
                                    >
                                        www.rtu.ac.in
                                    </Link>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <div className="cv-timeline-position p-name">
                                        Computer Science
                                    </div>
                                    <ul>
                                        <li>
                                            Earned a Degree In Electronics and
                                            Communication Engineering
                                        </li>
                                        <li>
                                            Worked as an technical Trainee Inter
                                            for Kalisindh thermal Power Plant
                                            (Feb 2013- Sep 2013)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-section">
                    <h3 className="cv-section-title">BEYOND THE CODE</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul>
                            <li>
                                Creative Problem-Solver : Whether it’s debugging
                                or designing, I think ahead.
                            </li>
                            <li>
                                Trekker & Explorer : Pushing boundaries, both on
                                the trail and in code.
                            </li>

                            <li>
                                Lifelong Learner : Always curious, always
                                improving.
                            </li>
                            <li>
                                Artistic : Exploring the depth of shades light
                                and dark with charcoal
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
