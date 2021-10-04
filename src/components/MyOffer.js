import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";

export default function MyOffer() {
    return (
        <div>
            <AsideMenu />
            <div className="site-main">
                <div className="site-main-inner">
                    <div className="main-section offer-section">
                        <h1 className="main-title">My offer</h1>
                        <p>
                            <strong>
                                A <span className="red">full-stack software engineer</span> with
                                over
                                <span className="red">14 years of experience</span>.
                            </strong>
                        </p>
                        <p>
                            <strong>
                                I have maintained, developed and launched
                                <a href="/portfolio/" className="nocolor">
                                    multiple projects
                                </a>
                                from scratch
                            </strong>
                            , carrying the development of its' back-end and front-end
                            codebases.
                        </p>
                        <p>
                            My current toolset includes
                            <strong>Elixir Language &amp; Phoenix Framework</strong>, Ruby
                            &amp; Ruby on Rails,
                            <strong>React</strong>, Redux, Angular, TypeScript, Docker and all
                            the other various frameworks, libraries and technologies related
                            to them.
                        </p>
                        <p>
                            <strong>
                                I can help you with all the sides of your project:
                            </strong>
                        </p>
                        <ul>
                            <li>verifying good UI/UX design,</li>
                            <li>leading/co-developing the back-end and front-end,</li>
                            <li>setting up the CI/CD,</li>
                            <li>mentoring the team,</li>
                            <li>estimating tasks,</li>
                            <li>researching possible techs,</li>
                            <li>leading, launching and monitoring the project.</li>
                        </ul>
                        <p>
                            <em>Call me a Swiss Army Knife in terms of software.</em>
                        </p>
                        <hr />
                        <h2 className="red">
                            <i className="fa fa-edit" />
                            Front-end Engineering
                        </h2>
                        <p>
                            <strong>
                                I specialize in applications written in both React and Angular.
                            </strong>
                            Recently I became also a huge fan of
                            <a
                                href="https://jtom.me/talks/make-your-components-pure-and-dumb-and-composable.pdf"
                                rel=" noreferrer"
                                target="_blank"
                            >
                                one-way data flow
                            </a>
                            and
                            <a
                                href="https://medium.com/@jGautam/handling-asynchronous-actions-in-redux-86724ed87c6c"
                                rel=" noreferrer"
                                target="_blank"
                            >
                                Redux-like
                            </a>
                            architecture and also typed languages, e.g.
                            <a
                                href="https://medium.com/@jGautam/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164"
                                rel=" noreferrer"
                                target="_blank"
                            >
                                TypeScript
                            </a>
                            .
                        </p>
                        <p>My current experience and skills in front-end includes:</p>
                        <ul>
                            <li>
                                lead TypeScript/JavaScript development: bootstraping,
                                refactoring, improving the structure, reliability, build setup;
                            </li>
                            <li>
                                full integration of front-end development using tools like
                                <a href="https://webpack.js.org/" rel="nofollow noreferrer">
                                    Webpack
                                </a>{" "}
                                with features like automatic code reload, code minifications,
                                multiple environments support, CI/CD, Storybook components
                                library, automated testing of accessibility, server-side render
                                and visual snapshots,
                            </li>
                            <li>good sense of design and UX,</li>
                            <li>
                                huge experience in almost all of the JS ecosystems, by having
                                used in the past many libraries like Next.js, React, Redux,
                                Redux-Observable, RxJS, Angular, Ionic Framework, Backbone,
                                jQuery, Lodash/Underscore and many else.
                            </li>
                            {/* <li>
      ... and even <strong>mobile app  development</strong> with the use of <a href="http://ionicframework.com/" rel="nofollow noreferrer" >Ionic Framework</a>.
      <br>
       With these, I can build a fully working native application for iOS and Android (both at once!) in Javascript in less than month.
       <br>
       <strong>You can already find some of my mobile applications in <a href="/portfolio/">my portfolio</a>.</strong>
    </li> */}
                        </ul>
                        <div className="row features">
                            <div className="col col-4 feature">
                                <div className="feature-icon feature-number">14</div>
                                <div className="feature-description">
                                    single page applications launched in Angular or React
                                </div>
                            </div>
                            <div className="col col-4 feature">
                                <div className="feature-icon feature-number">9</div>
                                <div className="feature-description">
                                    talks given about front-end development
                                </div>
                            </div>
                            <div className="col col-4 feature">
                                <div className="feature-icon feature-number">
                                    <a href="https://meetup.com/ng-poznan-meetup/">
                                        <img
                                            src="/images/ngpoznan-logo.fcf8968e.png"
                                            alt="ng-poznan"
                                        />
                                    </a>
                                </div>
                                <div className="feature-description">
                                    co-founded ng-poznan, Poznan Angular meetup group
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h2 className="red">
                            <i className="fa fa-code" />
                            Back-end Engineering
                        </h2>
                        <p>
                            <strong>
                                In back-end development, my current stack involves
                                <a href="http://elixir-lang.org/" rel="nofollow noreferrer">
                                    Elixir
                                </a>{" "}
                                and
                                <a
                                    href="http://phoenixframework.org/"
                                    rel="nofollow noreferrer"
                                >
                                    Phoenix Framework
                                </a>
                            </strong>
                            , and alternatively
                            <a href="http://rubyonrails.org/" rel="nofollow noreferrer">
                                Ruby on Rails
                            </a>{" "}
                            or
                            <a href="https://nodejs.org/" rel="nofollow noreferrer">
                                NodeJS
                            </a>
                            .
                        </p>
                        <p>
                            Nearly every app I have launched in the past had the back-end done
                            also by me. In order to improve the development speed, performance
                            and reliability, I have changed languages and frameworks already
                            multiple times, from PHP to Ruby and now to Elixir; and configured
                            servers using just the shell, then Chef/Ansible, and now Docker
                            and Kubernetes.
                        </p>
                        <p>
                            The lessons I learned while doing all these apps will be useful
                            for me forever, no matter what framework I will use in the next
                            project.
                        </p>
                        <p>What I can do for you at that side is:</p>
                        <ul>
                            <li>lead development of backends in Elixir/Ruby,</li>
                            <li>
                                splitting the back-end into separate domains and microservices,
                            </li>
                            <li>
                                cooperation with APIs, remote data synchronizations, cloud
                                servers, asynchronous workers,
                            </li>
                            <li>
                                using different types of databases (like
                                <a href="https://www.postgresql.org/" rel="nofollow noreferrer">
                                    PostgreSQL
                                </a>
                                ,
                                <a href="https://www.mysql.com/" rel="nofollow noreferrer">
                                    MySQL
                                </a>
                                ,
                                <a
                                    href="http://www.elasticsearch.org/"
                                    rel="nofollow noreferrer"
                                >
                                    Elasticsearch
                                </a>
                                ,
                                <a href="http://redis.io/" rel="nofollow noreferrer">
                                    Redis
                                </a>
                                )
                            </li>
                            <li>
                                dividing the servers into different machine nodes / docker
                                containers; database sharding; load balancing,
                            </li>
                            <li>
                                refactoring existing applications, by improving code
                                readibility, separating concerns into separate
                                functions/classes/modules, taking the business logic out from
                                your request/response layer into separate modules (
                                <a
                                    href="https://en.wikipedia.org/wiki/Domain-driven_design"
                                    rel="nofollow noreferrer"
                                >
                                    DDD
                                </a>
                                ), and moving the app architecture into an event-based one
                            </li>
                            <li>writing unit and e2e tests</li>
                        </ul>
                        <hr />
                        <h2 className="red">
                            <i className="fa fa-terminal" />
                            What about dev-ops, design, UI, project leadership, team
                            mentorship ?
                        </h2>
                        <p>
                            <strong>
                                During my time I have created and released tens of websites.
                            </strong>
                        </p>
                        <p>
                            Thus, not only I have coded their back-end and front-end
                            codebases, but often I also had to care about other things needed
                            in a successful web application project:
                        </p>
                        <ul>
                            <li>good planning of UI and thinking how it affects the UX;</li>
                            <li>consistency in design and typography;</li>
                            <li>Search Engine Optimization;</li>
                            <li>
                                launching, deployment and monitoring the app after the release;
                            </li>
                            <li>recruiting, onboarding and mentoring team members;</li>
                            <li>
                                in cases where a good Project Manager was missing, fullfilling
                                his role, in order to save the project from losing time on
                                unneeded things.
                            </li>
                        </ul>
                        <hr />
                        <p>
                            If your initial thought is that I can’t be the best in everything,
                            it's okay. Send the design job to someone else, and I will take
                            care of all the code development, or whatever other role you see
                            me best in.
                        </p>
                        <p>
                            In cases when you already have an existing team, but you would
                            still use some help, <a href="/contact/">contact me</a> as well.
                            I’ll fit in very quickly, I promise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
