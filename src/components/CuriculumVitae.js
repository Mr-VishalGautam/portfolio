import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";
import DownloadButton from "./DownloadButton";

export default function CuriculumVitae() {
    return (
        <>
            {" "}
           
            <div className="cv-page h-resume">
                 <DownloadButton style={{display:"flex",alignItem:'left'}}/>
                <div className="cv-page-inner">
                    <div className="cv-section cv-header p-contact h-card">
                        <div className="cv-header-avatar">
                            <img alt="" src="/portfolio/my_new_pic_ai.png" />
                        </div>
                        <div className="cv-header-text">
                            <h1 className="cv-header-name p-name">
                                Vishal Gautam
                            </h1>
                            <h2 className="cv-header-subname p-title">
                                Senior Software Engineer | Scalable Systems |
                                Distributed Computing
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
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/vishal-gautam-a47a4935/"
                                    >
                                        linkedin.com/in/vishal-gautam-a47a4935/
                                    </a>
                                </div>
                                <div className="cv-header-meta-row">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://mr-vishalgautam.github.io/portfolio/#"
                                    >
                                        https://mr-vishalgautam.github.io/portfolio
                                    </a>
                                </div>
                                <div className="cv-header-meta-row">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="x.com/V_C0DES"
                                    >
                                        x.com/V_C0DES
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cv-section">
                        <h3 className="cv-section-title">About Me</h3>
                        <div className="cv-section-content cv-section-content--indented">
                            <ul style={{ marginTop: 0 }}>
                                Expertise in architecting high-performance,
                                low-latency systems handling {">"} 50,000
                                events/second for global enterprises. Proven
                                track record of driving performance
                                optimizations resulting in {">"} 40% latency
                                reduction and 50% bundle size decrease. Led
                                full-stack development and technical strategy
                                for complex applications using React,
                                TypeScript, Node.js, and GraphQL. Product-minded
                                engineer focused on leveraging modern tech to
                                solve complex scalability and real-time data
                                challenges.
                            </ul>
                        </div>
                    </div>
                    <div className="cv-section">
                        <h3 className="cv-section-title">Skills</h3>
                        <div className="cv-section-content cv-section-content--indented">
                            <ul style={{ marginTop: 0 }}>
                                <li>
                                    Languages: TypeScript, JavaScript (Node.js),
                                    GraphQL, SQL, Python*
                                </li>

                                <li>
                                    Frontend: React, Next.js, Redux, D3.js,
                                    WebRTC, WebSockets
                                </li>

                                <li>
                                    Backend: Node.js, Next.js API, RESTful APIs,
                                    GraphQL (Apollo Server)
                                </li>
                                <li>Databases: PostgreSQL, MongoDB, Redis</li>
                                <li>
                                    Cloud & DevOps: AWS (EC2, S3, Lambda, RDS),
                                    Docker, CI/CD (GitHub Actions), Serverless
                                </li>
                                <li>
                                    Testing: Jest, Cypress, Playwright, React
                                    Testing Library, Unit / Integration / E2E
                                </li>
                                <li>
                                    Performance: Lighthouse, Web Vitals, Bundle
                                    Optimization (Webpack)
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
                                        <a
                                            href="https://bayer.com"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            bayer.com
                                        </a>
                                    </div>
                                    <div className="cv-timeline-body p-summary">
                                        <h4 className="cv-timeline-position p-name">
                                            Senior Software Engineer
                                        </h4>
                                        <p>
                                            Architected and deployed the Supply
                                            Chain Navigator (SCN) platform,
                                            empowering Bayer’s Operations
                                            Research and Data Science teams to
                                            optimize global supply chain
                                            operations with advanced data
                                            visualization and predictive
                                            analytics.
                                        </p>
                                        <ul>
                                            <li>
                                                Designed a micro-frontend
                                                architecture (React/TypeScript)
                                                with a Node.js/GraphQL BFF,
                                                enabling independent feature
                                                deployments and reducing
                                                frontend build times by 40%.
                                            </li>
                                            <li>
                                                Pit to Port (Bravus Mining) :
                                                Architected and developed a
                                                full-stack application for
                                                optimizing coal production and
                                                transportation logistics,
                                                resulting in a 20% improvement
                                                in operational eﬃciency.
                                            </li>
                                            <li>
                                                Classroom and University
                                                Scheduler : Led the development
                                                of an AI-powered scheduling
                                                system for educational
                                                institutions, incorporating RAG
                                                and AI-based chat systems to
                                                optimize resource utilization
                                                and faculty allocation.
                                            </li>
                                            <li>
                                                Engineered a real-time data
                                                pipeline using WebSockets and
                                                Node.js to handle a peak load of
                                                50,000+ events/sec, slashing
                                                data latency from minutes to{" "}
                                                {">"} 500ms for end-user
                                                analytics.
                                            </li>
                                            <li>
                                                Orchestrated AWS infrastructure
                                                (EC2, S3, RDS) with Docker and
                                                CI/CD, achieving 99.95% uptime
                                                and enabling zero-downtime
                                                deployments for a global user
                                                base.
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
                                        <a
                                            href="https://www.scalingweb.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cv-timeline-website"
                                        >
                                            www.scalingweb.com
                                        </a>
                                    </div>
                                    <div className="cv-timeline-body p-summary">
                                        <h4 className="cv-timeline-position p-name">
                                            Software Engineer (Frontend)
                                        </h4>
                                        <p>
                                            Led front-end development for a
                                            video streaming startup using
                                            React.js and React Native,
                                            delivering scalable, user-friendly
                                            applications.
                                        </p>
                                        <ul>
                                            <li>
                                                Developed the core architecture
                                                for a sub-200ms video
                                                conferencing product using
                                                WebRTC on the frontend and a
                                                highly optimized Node.js
                                                signaling server.
                                            </li>
                                            <li>
                                                Built an automated content
                                                moderation service by
                                                integrating TensorFlow.js with
                                                Node.js, reducing manual review
                                                workload by 40% and improving
                                                response time to violations.
                                            </li>
                                            <li>
                                                Spearheaded frontend performance
                                                initiatives using code-splitting
                                                and tree-shaking, cutting bundle
                                                size by 50%; optimized backend
                                                API response times by 35%
                                                through advanced database
                                                indexing.
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
                                        <a
                                            href="https://www.livingsparks.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cv-timeline-website"
                                        >
                                            www.livingspark.com
                                        </a>
                                    </div>
                                    <div className="cv-timeline-body p-summary">
                                        <h4 className="cv-timeline-position p-name">
                                            Software Engineer
                                        </h4>
                                        <p>
                                            Built and refined admin dashboards
                                            and e-commerce platforms, leading
                                            all stages from research and design
                                            to execution using React.js, Redux,
                                            and Sass.
                                        </p>
                                        <ul>
                                            <li>
                                                Full-stack development of an
                                                educational portal using React,
                                                Redux, and Node.js, delivering a
                                                responsive and performant
                                                experience for 10k+ users.
                                            </li>
                                            <li>
                                                Developed an interactive
                                                university portal with
                                                React/Redux, ensuring
                                                cross-browser compatibility and
                                                mobile responsiveness.
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
                                        <a
                                            href="https://www.rtu.ac.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cv-timeline-website"
                                        >
                                            www.rtu.ac.in
                                        </a>
                                    </div>
                                    <div className="cv-timeline-body p-summary">
                                        <div className="cv-timeline-position p-name">
                                            Computer Science
                                        </div>
                                        <ul>
                                            <li>
                                                Earned a Degree In Electronics
                                                and Communication Engineering
                                            </li>
                                            <li>
                                                Worked as an technical Trainee
                                                Inter for Kalisindh thermal
                                                Power Plant (Feb 2013- Sep 2013)
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
                                    Creative Problem-Solver : Whether it’s
                                    debugging or designing, I think ahead.
                                </li>
                                <li>
                                    Trekker & Explorer : Pushing boundaries,
                                    both on the trail and in code.
                                </li>

                                <li>
                                    Lifelong Learner : Always curious, always
                                    improving.
                                </li>
                                <li>
                                    Artistic : Exploring the depth of shades
                                    light and dark with charcoal
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
