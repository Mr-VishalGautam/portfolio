import React from "react";
import "./Component.css";
import AsideMenu from "./AsideMenu";
import DownloadButton from "./DownloadButton";

// ─── Static Data ──────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
    { label: "vishalgautam520@gmail.com", href: "mailto:vishalgautam520@gmail.com" },
    { label: "+91 9950792281" },
    { label: "linkedin.com/in/vishal-gautam-a47a4935/", href: "https://www.linkedin.com/in/vishal-gautam-a47a4935/" },
    { label: "mr-vishalgautam.github.io/portfolio", href: "https://mr-vishalgautam.github.io/portfolio/#" },
    { label: "x.com/V_C0DES", href: "https://x.com/V_C0DES" },
];

const SKILLS = [
    "Languages: TypeScript (Advanced), JavaScript (ES6+), GraphQL, SQL, Python",
    "Frontend: React, Next.js, Redux, D3.js, WebRTC, WebSockets, Modular Component Architecture",
    "Complex UI Systems: Multi-pane dashboards, large data grids, timeline planners, workflow editors, real-time collaborative interfaces",
    "Backend: Node.js, Express.js, Next.js API Routes, RESTful APIs, GraphQL (Apollo Server)",
    "Databases: PostgreSQL, MongoDB, Redis — query optimization, indexing strategies, caching layers",
    "Cloud & DevOps: AWS (EC2, S3, Lambda, RDS), Docker, CI/CD (GitHub Actions), Serverless architectures",
    "Performance & Observability: Lighthouse, Core Web Vitals, memory profiling, bundle optimization (Webpack/Vite), Sentry, structured logging",
    "Testing: Jest, Cypress, Playwright, React Testing Library — Unit / Integration / E2E with CI quality gates",
    "Domain Expertise: Supply chain optimization, operational research, AI-assisted scheduling, real-time video infrastructure, content moderation pipelines",
];

const WORK_EXPERIENCE = [
    {
        company: "Ormae LLP | Bayer Crop Science",
        date: "July 2022 – Dec 2025",
        website: { href: "https://bayer.com", label: "bayer.com" },
        position: "Senior Software Engineer — Frontend Feature Owner",
        summary:
            "Owned the frontend architecture and end-to-end delivery of enterprise-grade optimization platforms — including a Supply Chain Navigator for Bayer Crop Science that modelled allocation strategies, production planning horizons, and safety stock thresholds across global distribution networks, built on Next.js, TypeScript, Node.js, and MongoDB.",
        bullets: [
            "Designed and shipped ORCampus, an AI-powered university timetabling and resource-scheduling system — the constraint-solver backend autonomously resolved 98.7% of scheduling conflicts, compressing schedule generation from multiple weeks of manual coordination to under 30 minutes; directly responsible for the data-dense React/TypeScript interface that visualised thousands of concurrent time-slot constraints in real time.",
            "Built the full frontend for a pit-to-port logistics optimizer for Bravus Mining: integrated operational research models with an interactive React/TypeScript planning surface, enabling planners to simulate multi-variable extraction-and-transport scenarios and evaluate trade-off decisions previously requiring dedicated analyst teams.",
            "Architected modular Redux state layers and virtualised rendering pipelines to support large planning documents and high-interaction workflows — sustained under 100ms interaction latency across datasets exceeding 50,000 rows, critical for operational planning sessions lasting hours.",
            "Drove performance profiling and remediation initiatives (memoization, component virtualization, progressive rendering, bundle splitting) achieving up to 35% improvement in perceived load latency across dashboard-heavy workflows.",
            "Introduced production observability with Sentry integration and Web Vitals instrumentation, cutting recurring production incidents by 30% and establishing regression-detection standards adopted across the engineering org.",
            "Led sprint-level delivery for a pod of 4 engineers: defined architecture alignment, enforced code review standards, unblocked teammates, and maintained release velocity through structured testing coverage and CI quality gates.",
        ],
    },
    {
        company: "ScalingWeb",
        date: "Jan 2021 – June 2022",
        website: { href: "https://www.scalingweb.com", label: "www.scalingweb.com" },
        position: "Software Engineer — Real-Time Systems & Video Infrastructure",
        summary:
            "Engineered the core of a real-time video collaboration platform from the ground up — responsible for the WebRTC-powered conferencing architecture, synchronised state management, and the AI-driven content moderation pipeline that protected the platform at scale.",
        bullets: [
            "Designed and built a sub-200ms video conferencing product: architected the WebRTC signalling layer, peer-connection lifecycle management, and a highly optimised Node.js signalling server capable of handling concurrent multi-party sessions with minimal jitter — a technically demanding distributed systems problem solved at the application layer.",
            "Implemented an automated real-time content moderation service by integrating TensorFlow.js inference into a Node.js processing pipeline: reduced manual review workload by 40%, cut average time-to-action on policy violations, and enabled the platform to scale content safety without linear headcount growth.",
            "Spearheaded a systematic frontend performance programme — applied code-splitting, tree-shaking, and lazy-loading strategies to cut total bundle size by 50%; independently optimised backend API response times by 35% through targeted database indexing and query restructuring, extending session stability under high-concurrency load.",
            "Implemented structured E2E and integration testing suites using Cypress and Jest, preventing regressions during rapid feature iteration and maintaining product reliability through multiple major releases.",
        ],
    },
    {
        company: "LivingSparks IT Solutions",
        date: "June 2018 – Aug 2020",
        website: { href: "https://www.livingsparks.com", label: "www.livingspark.com" },
        position: "Software Engineer — Frontend Product Development",
        summary:
            "Led Frontend development of admin dashboards, e-learning platforms, and university portals — owning the complete product lifecycle from architecture design and database modelling through to responsive UI delivery and production deployment, using React, Redux, Node.js, and PostgreSQL.",
        bullets: [
            "Frontend development of an educational portal serving 10,000+ active users: designed the React/Redux frontend architecture, Node.js API layer, and PostgreSQL schema — delivered a responsive, performant experience with zero critical production incidents in the first year of operation.",
            "Refactored a legacy university portal into a modular React/Redux component system: eliminated cross-browser compatibility failures, achieved full mobile responsiveness, and measurably improved release velocity by reducing time-to-deploy for new features.",
        ],
    },
];

const BEYOND_CODE = [
    "Operational Thinker: Drawn to problems where software meets real-world complexity — logistics, scheduling, resource allocation, and systems under constraint.",
    "Trekker & Outdoorsman: Comfortable navigating ambiguity and difficult terrain, on mountain trails and in engineering decisions alike.",
    "Lifelong Learner: Consistently self-directed — currently deepening expertise in distributed systems design and applied ML integration patterns.",
    "Charcoal Artist: Practitioner of light, shadow, and composition — a discipline that sharpens visual and spatial reasoning carried into UI work.",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ContactMeta() {
    return (
        <div className="cv-header-meta">
            <div className="cv-header-meta-right">
                {CONTACT_LINKS.map(({ label, href }) => (
                    <div key={label} className="cv-header-meta-row">
                        {href ? (
                            <a rel="noopener noreferrer" target="_blank" href={href}>
                                {label}
                            </a>
                        ) : (
                            <span>{label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function WorkExperienceItem({ company, date, website, position, summary, bullets }) {
    return (
        <div className="cv-timeline-row p-experience h-event">
            <div className="cv-timeline-side">
                <div className="cv-timeline-company">{company}</div>
                <div className="cv-timeline-date">{date}</div>
                <a href={website.href} rel="noopener noreferrer" target="_blank" className="cv-timeline-website">
                    {website.label}
                </a>
            </div>
            <div className="cv-timeline-body p-summary">
                <h4 className="cv-timeline-position p-name">{position}</h4>
                <p>{summary}</p>
                <ul>
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CurriculumVitae() {
    return (
        <>
            <AsideMenu />
            <div className="cv-page">

                {/* Header */}
                <div className="cv-section cv-header p-contact h-card">
                    <div className="cv-header-text">
                        <h1 className="cv-header-name p-name">Vishal Gautam</h1>
                        <h2 className="cv-header-subname p-title">
                            Senior Frontend Engineer — Optimization & Data-Intensive Systems | TypeScript · React · Node.js · Optimization Systems · Real-Time Infrastructure
                        </h2>

                    </div>
                    <ContactMeta />
                    <DownloadButton
                        style={{ display: "flex", alignItem: "left" }}
                    />
                </div>

                {/* About */}
                <div className="cv-section">
                    <h3 className="cv-section-title">About Me</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <p>
                            Senior Frontend Engineer with 7+ years of experience building production systems at the intersection
                            of complex data, real-time infrastructure, and high-stakes operational software. I have designed and
                            owned frontend architectures for enterprise optimization platforms — supply chain planners, AI-driven
                            scheduling engines, and logistics simulators — where correctness, performance, and sub-second
                            interactivity are non-negotiable. Alongside that, I have built real-time video collaboration infrastructure
                            from the ground up, including WebRTC signalling layers and ML-powered content moderation pipelines.
                            I work best on hard, constraint-heavy problems where the software directly shapes decisions made
                            by operators, analysts, and planners — the kind of work that matters.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Skills</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul>
                            {SKILLS.map((skill) => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Work Experience</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            {WORK_EXPERIENCE.map((job) => (
                                <WorkExperienceItem key={job.company} {...job} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Education</h3>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row p-education h-event">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">Rajasthan Technical University</div>
                                    <div className="cv-timeline-date">Bachelor of Technology</div>
                                    <div className="cv-timeline-date">2011 – 2015</div>
                                    <a href="https://www.rtu.ac.in" target="_blank" rel="noopener noreferrer" className="cv-timeline-website">
                                        www.rtu.ac.in
                                    </a>
                                </div>
                                <div className="cv-timeline-body p-summary">
                                    <div className="cv-timeline-position p-name">Electronics & Communication Engineering</div>
                                    <ul>
                                        <li>Developed strong analytical and systems-thinking foundations in signal processing, control systems, and applied mathematics — disciplines that directly inform rigorous engineering judgment in complex software systems today.</li>
                                        <li>Technical Trainee Intern, Kalisindh Thermal Power Plant (Feb 2013 – Sep 2013): gained first-hand exposure to large-scale operational infrastructure, monitoring systems, and the cost of reliability failures in mission-critical environments.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Beyond the Code */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Beyond the Code</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul>
                            {BEYOND_CODE.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}