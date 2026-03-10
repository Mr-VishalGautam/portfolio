import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";
import AsideMenu from "./AsideMenu";

// ─── Static Data ──────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    date: "May 2025 – Present",
    to: "/my-portfolio/adminpanel/",
    title: "ORCampus — AI-Powered University Scheduling & Resource Optimization Engine",
    subtitle: "Constraint-solving scheduling platform for universities: transforms weeks of manual timetabling into a sub-30-minute automated operation.",
    summary:
      "ORCampus is an enterprise scheduling system built to solve one of the hardest combinatorial optimization problems in academic administration — allocating faculty, classrooms, labs, and time slots across an entire institution while satisfying thousands of hard and soft constraints simultaneously. The AI-powered constraint engine autonomously resolves 98.7% of scheduling conflicts, while the React/TypeScript frontend surfaces the output as an interactive, data-dense planning interface that administrators can inspect, override, and re-simulate in real time.",
    bullets: [
      "Designed and owned the full frontend architecture: a multi-pane, state-heavy React/TypeScript interface capable of rendering thousands of concurrent time-slot allocations across faculties, departments, rooms, and instructor availability windows — without sacrificing interactivity or responsiveness during active planning sessions.",
      "The constraint-solver backend autonomously generated conflict-free timetables in under 10 minutes for full-campus semester plans, compressing a previously manual 3–4 week process that required coordination across registrars, department heads, and facilities management — an 85% reduction in rescheduling effort.",
      "Increased institutional resource utilisation by 20–30%: intelligent, constraint-aware allocation algorithms eliminated double-booking, minimised room idle time, and maximised lab throughput — surfaced to planners via utilisation heatmaps and occupancy trend charts built in D3.js.",
      "Built a predictive budget modelling feature that simulated future faculty hiring and infrastructure investment needs based on projected enrolment scenarios — enabling data-driven capital allocation decisions without requiring dedicated analyst involvement.",
      "Implemented real-time collaborative planning via WebSockets: multiple administrators across departments could simultaneously review, adjust, and lock schedule segments, with conflict detection and change propagation happening live — critical for large institutions with competing scheduling stakeholders.",
      "Architected a NestJS monorepo backend with modular domain separation (scheduling engine, resource management, notifications, reporting), enabling independent team ownership of each domain and CI-gated deployments that maintained zero-downtime releases.",
    ],
    technologies: [
      { label: "Next.js", href: "https://nextjs.org/" },
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "Node.js", href: "https://nodejs.org/en" },
      { label: "MongoDB", href: "https://www.mongodb.com/" },
      { label: "Express.js", href: "https://expressjs.com/" },
      { label: "Sockets", href: "https://socket.io/" },
      { label: "Nest.js", href: "https://nestjs.com/" },
      { label: "Mono Repo", href: "https://nx.dev/" },
    ],
    images: [
      { src: "/portfolio/us-calender.jpeg", alt: "ORCampus Calendar View" },
      { src: "/portfolio/us-dash.jpeg", alt: "ORCampus Dashboard" },
      { src: "/portfolio/us-dash2.jpeg", alt: "ORCampus Planning Interface" },
    ],
  },
  {
    date: "July 2022 – Feb 2025",
    to: "/my-portfolio/adminpanel/",
    title: "Supply Chain Navigator — Enterprise Optimization Platform for Bayer Crop Science",
    subtitle: "Decision-support system for global supply chain planning: allocation policy, production campaigns, safety stock, and crop placement — built for expert operators navigating volatile agricultural markets.",
    summary:
      "Supply Chain Navigator is a mission-critical planning platform deployed within Bayer Crop Science's global operations, used by supply chain experts to model, simulate, and optimize decisions across a highly complex distribution network spanning seed production, crop placement, safety stock management, and multi-tier allocation policy. The platform ingests live and historical operational data, runs optimization and simulation models on the backend, and surfaces the results through an interactive, data-dense React/TypeScript interface designed specifically for expert users who need to interrogate trade-offs, compare scenarios, and commit to plans with confidence.",
    bullets: [
      "Owned the entire frontend architecture: multi-pane dashboard layouts, complex tabular planning grids, scenario comparison views, and timeline-based production planning surfaces — all optimized to handle large datasets (50,000+ rows) with sub-100ms interaction latency during extended analyst sessions.",
      "Built scenario management infrastructure: users could create, name, snapshot, and compare independent planning scenarios side-by-side without data cross-contamination — a critical confidentiality and auditability requirement for enterprise supply chain decisions.",
      "Designed and implemented the Allocation Policy module: an interactive constraint editor allowing planners to define priority rules, hard caps, and fallback strategies across product lines, geographies, and customer tiers — with the frontend immediately reflecting downstream impact on production plans and safety stock levels as rules changed.",
      "Built the Production Campaign Planner: a timeline-based visual interface where supply chain managers could model multi-month manufacturing runs, adjust capacity allocation across plants, and simulate the effect of demand shocks or supply disruptions — decisions previously made in spreadsheets and email threads.",
      "Integrated Safety Stock and Crop Placement optimizers: the frontend exposed model outputs as editable planning tables with inline delta-highlighting, enabling planners to accept model recommendations selectively or override individual line items while the system recalculated downstream impacts in real time.",
      "Collaborated closely with backend and data science teams to define API contracts, shape data-fetching strategies, and implement progressive rendering and caching layers that kept the interface responsive even when working with high-resolution historical datasets spanning multiple crop seasons.",
      "Introduced frontend observability with Sentry error tracking and Web Vitals instrumentation, establishing the first structured visibility into production issues across the platform — reduced recurring incidents by 30% within the first quarter of deployment.",
    ],
    technologies: [
      { label: "Next.js", href: "https://nextjs.org/" },
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "Node.js", href: "https://nodejs.org/en" },
      { label: "MongoDB", href: "https://www.mongodb.com/" },
      { label: "Express.js", href: "https://expressjs.com/" },
      { label: "Sockets", href: "https://socket.io/" },
      { label: "Nest.js", href: "https://nestjs.com/" },
      { label: "Mono Repo", href: "https://nx.dev/" },
    ],
    images: [
      { src: "/portfolio/scn.png", alt: "Supply Chain Navigator" },
    ],
  },
  {
    date: "Jan 2021 – June 2022",
    to: "/my-portfolio/adminpanel/",
    title: "Real-Time Video Collaboration Platform — WebRTC Infrastructure & AI Content Moderation",
    subtitle: "End-to-end video streaming and conferencing system: sub-200ms latency conferencing, real-time content moderation via TensorFlow.js, and a SaaS admin platform for content management.",
    summary:
      "Built the core technical infrastructure of a video streaming startup — including a sub-200ms WebRTC-powered video conferencing product, a TensorFlow.js-based automated content moderation pipeline, and a cross-platform admin and mobile application for content management. This was a ground-up systems engineering challenge: real-time distributed media transport, ML inference at the application layer, and a high-throughput video upload-and-rating SaaS platform serving a growing user base.",
    bullets: [
      "Architected the WebRTC conferencing system from scratch: designed the peer-connection lifecycle management, ICE candidate negotiation, TURN/STUN server integration, and a Node.js signalling server optimised for concurrent multi-party sessions — achieving sustained sub-200ms end-to-end latency under real-world network conditions.",
      "Built the real-time state synchronization layer for collaborative sessions: used WebSockets to maintain consistent shared application state across participants, handling edge cases including late-join reconciliation, participant disconnects, and network degradation gracefully without session collapse.",
      "Designed and implemented an automated content moderation pipeline by integrating TensorFlow.js model inference directly into the Node.js processing layer: the system classified uploaded video frames in near-real-time, flagged policy violations, and routed borderline cases to a human review queue — reducing manual moderation workload by 40% and improving average time-to-action on violations.",
      "Engineered the video upload and processing pipeline: chunked upload handling, progress tracking, server-side transcoding coordination, and delivery via CDN — optimised for both low-bandwidth mobile users and high-volume desktop uploads simultaneously.",
      "Led a systematic frontend performance programme that cut total JavaScript bundle size by 50% through code-splitting, tree-shaking, and lazy-loading; independently optimised backend API response times by 35% via targeted database indexing, query restructuring, and Redis caching — directly improving session stability under concurrent load.",
      "Built the React Native mobile applications (Android and iOS) in parallel with the web admin panel, sharing business logic via a common Redux state layer — enabling a single engineering investment to cover three platforms simultaneously.",
      "Implemented full E2E and integration test suites with Cypress and Jest, establishing CI quality gates that caught regressions before production and allowed the team to ship major features weekly without stability degradation.",
    ],
    technologies: [
      { label: "React", href: "https://reactjs.org/" },
      { label: "React Native", href: "https://reactnative.dev/" },
      { label: "Redux", href: "https://redux.js.org/" },
      { label: "ElasticSearch", href: "http://elasticsearch.org/" },
      { label: "Firebase", href: "https://firebase.google.com/" },
      { label: "Sockets", href: "https://socket.io/" },
    ],
    images: [
      { src: "/portfolio/adminpanalss.png", alt: "Video Platform Admin Panel" },
    ],
  },
  {
    date: "Aug 2020 – Dec 2020",
    to: "/my-portfolio/jjtu/",
    title: "JJTU — University Web Portal",
    subtitle: "High-traffic public portal for a prestigious Indian research university, serving students, researchers, and administrative staff.",
    summary:
      "Designed and built the public-facing web portal for Jagannath University (JJTU), a research-focused institution with thousands of daily users across student applications, academic programmes, research publications, and administrative services. The portal needed to be fast, fully responsive, and maintainable by a non-technical content team.",
    bullets: [
      "Architected a fully responsive React/Redux single-page application handling diverse content types — academic calendars, course catalogues, faculty profiles, research publications, and admission workflows — under a unified component system designed for long-term maintainability.",
      "Optimised for high-traffic conditions: lazy-loaded non-critical routes, minimised initial bundle size, and structured the Redux store to prevent unnecessary re-renders across deeply nested content hierarchies.",
      "Delivered full cross-browser and cross-device compatibility, ensuring consistent experience from legacy desktop browsers to mobile — a critical requirement for a user base spanning urban and rural India with varied device profiles.",
    ],
    technologies: [
      { label: "React", href: "https://reactjs.org/" },
      { label: "Redux", href: "https://redux.js.org/" },
      { label: "Bootstrap", href: "https://react-bootstrap.github.io/" },
      { label: "Sass", href: "https://sass-lang.com/" },
    ],
    images: [
      { src: "/portfolio/JJTUss.png", alt: "JJTU Website" },
    ],
  },
  {
    date: null,
    to: "/my-portfolio/jjtuadmin/",
    title: "JJTU Admin Panel — University Data Management System",
    subtitle: "Internal admin platform for managing student profiles, research certificates, and staff data across a multi-departmental university.",
    summary:
      "Built the internal administration platform used by JJTU staff to manage institutional data at scale — student enrolment records, research student certifications, faculty profiles, and administrative workflows. The system needed to be secure, role-aware, and capable of handling large data volumes without performance degradation.",
    bullets: [
      "Designed a role-based access control (RBAC) system with differentiated views and permissions for registrars, department administrators, research supervisors, and system admins — ensuring data confidentiality across sensitive student and staff records.",
      "Built a high-performance data management interface in React/Redux/TypeScript: sortable, filterable, and exportable tables handling thousands of student records with client-side pagination and server-side search integration.",
      "Implemented a digital certificate management workflow for research students: generation, versioning, approval routing, and download — replacing a previously paper-based process that required physical sign-off from multiple departments.",
      "Structured the TypeScript codebase with strict typing across API contracts, Redux state shape, and component props — significantly reducing runtime errors and accelerating onboarding for new team members.",
    ],
    technologies: [
      { label: "React", href: "https://reactjs.org/" },
      { label: "Redux", href: "https://redux.js.org/" },
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "Bootstrap", href: "https://react-bootstrap.github.io/" },
    ],
    images: [
      { src: "/portfolio/jjtuadminss.png", alt: "JJTU Admin Panel" },
    ],
  },
  {
    date: "June 2018 – Aug 2020",
    to: "/my-portfolio/radhaStore/",
    title: "Radha Store — E-Commerce Platform",
    subtitle: "Full-featured e-commerce platform for ISKCON books, traditional Indian clothing, and devotional goods — serving a global customer base.",
    summary:
      "Built a production e-commerce platform enabling devotees worldwide to purchase ISKCON literature, traditional Indian apparel, and devotional goods, with a fully integrated and secure payment gateway, order management system, and product catalogue.",
    bullets: [
      "End-to-end e-commerce implementation: product catalogue with categories and search, shopping cart with persistent state, secure checkout with payment gateway integration, and order confirmation and history — all in a single React application.",
      "Integrated a third-party payment gateway with full error handling, transaction retry logic, and post-payment order state reconciliation — ensuring zero data inconsistency between payment provider and order database.",
      "Optimised for international customers: handled multi-currency display, shipping zone configuration, and cross-browser compatibility across the diverse device profiles of a globally distributed devotee community.",
    ],
    technologies: [
      { label: "React", href: "https://reactjs.org/" },
      { label: "Bootstrap", href: "https://react-bootstrap.github.io/" },
      { label: "CSS3", href: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" },
    ],
    images: [
      { src: "/portfolio/radhastoress.png", alt: "Radha Store" },
    ],
  },
  {
    date: null,
    to: "/my-portfolio/namangtl/",
    title: "Naman Gems Testing Lab — Brand & Portfolio Platform",
    subtitle: "Professional digital presence for one of India's leading gemological testing laboratories, Jaipur.",
    summary:
      "Designed and developed a professional brand and portfolio website for Naman Gems Testing Lab, one of Jaipur's established gemological testing institutions. The platform communicates laboratory credentials, services, and certification capabilities to an international clientele of gem traders and jewellers.",
    bullets: [
      "Built a fully responsive, performance-optimised React frontend with a clean, trust-focused visual design appropriate for a B2B professional services audience.",
      "Backend powered by an ASP.NET API server handling contact form submissions, service enquiries, and an admin panel for content management — enabling non-technical lab staff to update service listings and certificates independently.",
    ],
    technologies: [
      { label: "React", href: "https://reactjs.org/" },
      { label: "Bootstrap", href: "https://react-bootstrap.github.io/" },
      { label: "CSS3", href: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" },
    ],
    images: [
      { src: "/portfolio/ngtl.png", alt: "Naman Gems Testing Lab" },
    ],
  },
  {
    date: null,
    to: "/my-portfolio/igl/",
    title: "Indian Gemological Lab — Portfolio Website",
    subtitle: "Responsive brand platform for a premier gemological certification laboratory in Jaipur.",
    summary:
      "Developed a high-quality portfolio and marketing website for the Indian Gemological Lab, showcasing its certification services, laboratory capabilities, and institutional credibility to gem industry clients across India and internationally.",
    bullets: [
      "Built with Angular for a performant, component-driven single-page experience — fully responsive across device sizes and optimised for fast load times on variable internet connections across Tier 2 and Tier 3 Indian cities.",
      "ASP.NET backend handling API requests, admin content management, and certification enquiry routing — providing the lab team with full control over site content without developer intervention.",
    ],
    technologies: [
      { label: "Angular", href: "https://angular.io/" },
      { label: "Bootstrap", href: "https://getbootstrap.com/" },
      { label: "HTML5", href: "#" },
      { label: "CSS3", href: "#" },
    ],
    images: [
      { src: "/portfolio/igl.png", alt: "Indian Gemological Lab" },
    ],
  },
  {
    date: null,
    to: "/my-portfolio/ayurvedah/",
    title: "Ayurvedah — Telemedicine Platform for Ayurvedic Healthcare",
    subtitle: "Online consultation and prescription platform connecting patients with qualified Ayurvedic practitioners across India.",
    summary:
      "Designed and built Ayurvedah, a telemedicine web platform enabling patients to consult with verified Ayurvedic doctors online — covering symptom submission, doctor matching, video or chat consultations, digital prescriptions, and secure online payment for consultations.",
    bullets: [
      "Implemented the end-to-end patient journey: symptom intake form, practitioner discovery and filtering by specialty, appointment booking with calendar integration, consultation interface, and post-consultation prescription download.",
      "Integrated a secure online payment system for consultation fees, with transaction confirmation and receipt generation handled entirely in-browser.",
      "Built with a mobile-first approach, ensuring full accessibility and usability on low-powered Android devices — the primary access point for the platform's target demographic in smaller Indian cities.",
    ],
    technologies: [
      { label: "HTML5", href: "#" },
      { label: "CSS3", href: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" },
      { label: "Bootstrap", href: "https://getbootstrap.com/" },
      { label: "Vanilla JS", href: "http://vanilla-js.com/" },
    ],
    images: [
      { src: "/portfolio/ayurvedah.png", alt: "Ayurvedah Telemedicine" },
    ],
  },
  {
    date: null,
    to: "/my-portfolio/mehta-stones/",
    title: "Mehta Stones — Brand Portfolio Website",
    subtitle: "Modern responsive brand presence for a local stone and marble trading business.",
    summary:
      "Built a clean, modern one-page brand website for Mehta Stones, a local marble and natural stone supplier, showcasing their product range, gallery, and contact information to residential and commercial buyers.",
    bullets: [
      "Designed and implemented a visually rich, single-page responsive layout with smooth scroll navigation, a full product image gallery, and an enquiry contact form — giving a small business a credible, professional digital presence.",
      "Optimised for fast load times on mobile data connections — used lightweight vanilla JS, minimised third-party dependencies, and compressed image assets for quick first-paint on low-bandwidth connections.",
    ],
    technologies: [
      { label: "Vanilla JS", href: "http://vanilla-js.com/" },
      { label: "Bootstrap", href: "https://getbootstrap.com/" },
      { label: "HTML5", href: "#" },
    ],
    images: [
      { src: "/portfolio/mehtastones.png", alt: "Mehta Stones" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechTags({ technologies }) {
  return (
    <div className="project-technologies">
      <div className="technologies-title">Technologies</div>
      <ul className="tech-tags">
        {technologies.map(({ label, href }) => (
          <li key={label}>
            <Link to={href} rel="nofollow noreferrer" target="_blank">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({ date, to, title, subtitle, summary, bullets, technologies, images }) {
  return (
    <li className="timeline_element project">
      <div className="timeline_element-date">
        {date && <time className="timeline_element-date-text">{date}</time>}
      </div>
      <div className="timeline_element-contents">
        <div className="project-text">
          <Link to={to} className="project-link">
            <div className="project-title">{title}</div>
            {subtitle && <div className="project-subtitle">{subtitle}</div>}
          </Link>
          <div className="project-description">
            {summary && <p><strong>{summary}</strong></p>}
            <ul>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <TechTags technologies={technologies} />
        </div>
        {images.map(({ src, alt }) => (
          <div key={src} className="project-image">
            <Link to={to}>
              <img src={src} alt={alt} />
            </Link>
          </div>
        ))}
      </div>
    </li>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div>
      <AsideMenu />
      <div className="site-main">
        <div className="site-main-inner">
          <div className="main-section portfolio-section">
            <h1 className="main-title">Portfolio</h1>
            <div className="timeline portfolio-timeline">
              <ul>
                {/* CTA — Now */}
                <li className="timeline_element timeline_element--now project">
                  <div className="timeline_element-date">
                    <time className="timeline_element-date-text">Now</time>
                  </div>
                  <div className="timeline_element-contents">
                    <div className="project-text">
                      <div className="project-description">
                        <strong>Open to high-impact engineering roles and selective collaborations.</strong>
                        <br />
                        I'm a Senior Frontend Engineer with deep experience in enterprise optimization systems,
                        real-time infrastructure, and data-intensive product platforms. If you're building something
                        that demands serious engineering — constraint-heavy systems, operational tools, high-performance
                        interfaces — I'd like to hear about it.
                        <br />
                        <Link to="/contact">Let's talk.</Link>{" "}
                        I typically respond within one business day.
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project list */}
                {PROJECTS.map((project) => (
                  <ProjectItem key={project.title} {...project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}