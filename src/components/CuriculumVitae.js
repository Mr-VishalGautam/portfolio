import React from "react";
import "./Component.css";
import {  Link } from "react-router-dom";

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
              Front-End Software Engineer
            </h2>
            <div className="cv-header-lead p-note">
              2+ years of experience in front-end engineering.
              <br />
              Ambitious and Communicative.
              <br />
            </div>
          </div>
          <div className="cv-header-meta">
            <div className="cv-header-meta-right">
              <div className="cv-header-meta-row">
                <Link to="https://mr-vishalgautam.github.io/portfolio/home" target="_blank" rel="me" className="u-url">
                https://mr-vishalgautam.github.io/portfolio/#/
                </Link>
              </div>
              <div className="cv-header-meta-row">
                <div>
                  <span className="__cf_email__">
                    vishalgautam520@gmail.com
                  </span>
                </div>
              </div>
              {/* <div "cv-header-meta-row">
            +48 792 290 484
          </div> */}
              <div className="cv-header-meta-row">
                <Link target="_blank" to="https://www.linkedin.com/in/vishal-gautam-a47a4935/">
                  linkedin.com/in/vishal-gautam-a47a4935/
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-section">
          <h3 className="cv-section-title">Skills</h3>
          <div className="cv-section-content cv-section-content--indented">
            <ul style={{ marginTop: 0 }}>
              <li>
                Front-end: JavaScript, TypeScript, React (with Both Class as
                well as Functional components), Redux, Sass,CSS3,JQuery.
              </li>

              <li>
                Attentive to UI/UX details and high code quality. Fan of unit
                tests, functional programming, typed interfaces.
              </li>

              <li>
                Do Security research (Just for fun &#128517;) on weekends and
                free time.
              </li>
              <li>Open to learn new skills .</li>
            </ul>
          </div>
        </div>
        <div className="cv-section">
          <h3 className="cv-section-title">Experience</h3>
          <div className="cv-section-content">
            <div className="cv-timeline">
              <div className="cv-timeline-row p-experience h-event">
                <div className="cv-timeline-side">
                  <div className="cv-timeline-company">ScalingWeb</div>
                  <div className="cv-timeline-date">Jan 2021 - Present</div>
                  <Link
                    to="https://scalingweb.com"
                    target="_blank"
                    rel="noreferrer"
                    className="cv-timeline-website"
                  >
                    scalingweb.com
                  </Link>
                </div>
                <div className="cv-timeline-body p-summary">
                  <h4 className="cv-timeline-position p-name">
                    React Js Developer
                  </h4>
                  <p>
                    Led development of a new front-end (Web Portal/Admin Panel)
                    for the company's dream startup project.
                  </p>
                  <ul>
                    <li>
                      Identified Web-based user Interactions and developed
                      highly-responsive user interface components via React &
                      Redux concepts.
                    </li>
                    <li>
                      Translated designs & wireframes into high-quality code and
                      wrote application interface code via JavaScript following
                      React.js workflows.
                    </li>
                    <li>
                      Troubleshot interface software and debugged application
                      codes to improve functionality and performance
                    </li>
                    <li>
                      Developed and implemented front-end architecture to
                      support user interface concept with 100% accuracy
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cv-timeline-row p-experience h-event">
                <div className="cv-timeline-side">
                  <div className="cv-timeline-company">Qutiq Myanmar</div>
                  <div className="cv-timeline-date">Aug 2020 - Dec 2020</div>
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
                    Software Engineer
                  </h4>
                  <p>
                    Qutiq functions as a world-class software solutions/digital
                    services provider that transforms complex business processes
                    into simplified systems.
                  </p>
                  <ul>
                    <li>
                      Developed design to meet specific requirements such as
                      quick-loading sites with particular layouts.
                    </li>
                    <li>
                      Tuned and improved software source code based upon new
                      user requirements and technical guidelines.
                    </li>
                    <li>
                      Designed and updated layouts to meet usability and
                      performance requirements
                    </li>
                    <li>
                      Produced advanced and clean code for diverse applications.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cv-timeline-row p-experience h-event">
                <div className="cv-timeline-side">
                  <div className="cv-timeline-company">
                    LivingSparks it solutions
                  </div>
                  <div className="cv-timeline-date">Apr 2019 - Aug 2020</div>
                  <Link
                    to="https://www.livingspark.in"
                    target="_blank"
                    rel="noreferrer"
                    className="cv-timeline-website"
                  >
                    www.livingspark.in
                  </Link>
                </div>
                <div className="cv-timeline-body p-summary">
                  <h4 className="cv-timeline-position p-name">
                    Junior Software Engineer
                  </h4>
                  <p>
                    Built an entire SaaS and E-Commerce platform, that allows
                    User to buy religeous and Cultural books,artifacts .
                  </p>
                  <ul>
                    <li>
                      My responsibilities include the initial research, planning
                      the project, designing the user interfaces, creating a
                      smooth front-end for the client, and writing out our
                      specs.
                    </li>
                    <li>
                      Adjusted software parameters to boost performance and
                      incorporate new features.
                    </li>
                    <li>
                      as in the team that was responsible for the Development
                      and maintenance of websites, we create user-friendly web
                      applications.
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
                  <div className="cv-timeline-date">2011 - 2015</div>
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
                      Earened a Degree In Electronics and Communication
                      Engineering
                    </li>
                    <li>
                      Worked as an technical Trainee Inter for Kalisindh thermal
                      Power Plant (Feb 2013- Sep 2013)
                    </li>
                    <li>
                      Co-created and programed an Eye Movement tracking wheel
                      chair for differently abled people .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-section">
          <h3 className="cv-section-title">Other perks</h3>
          <div className="cv-section-content cv-section-content--indented">
            <ul>
              <li>Good Public Speaker & Listener</li>
              <li>A Hiker,rock climber and Mountaineer</li>

              <li>
                Speaks native Hindi, conversational English, Basic Sanskrit.
              </li>
              <li>
                In his free time, likes to , dance, travel,learn Indian
                classical music and play cricket & chess.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
