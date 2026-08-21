// ============================================================
// PORTFOLIO DATA - Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Rafin",
  role: "Full-Stack Developer & AI Automation Engineer",
  tagline: "Building production web apps and intelligent automation systems with modern AI",
  email: "asifhrafin31@gmail.com",
  location: "Australia",
  github: "https://github.com/Rafin31",
  linkedin: "https://www.linkedin.com/in/rafin-h-6982b81ba/",
  fiverr: "https://www.fiverr.com/rafin_31",
  bio: `I'm a Full-Stack Developer and AI Engineer with 3+ years of professional experience building scalable web applications and intelligent automation systems. I recently completed my Master's in Computer Science (Software Engineering) at the University of Wollongong, combining academic depth with real-world engineering delivery.

On the development side, I specialise in React.js, Next.js, Node.js, and cloud infrastructure. I've delivered 50+ client projects on Fiverr with 100% satisfaction, and built a full-scale Medical Supplier Management System that cut admin workload by 60% through automation.

On the AI side, I build with Claude Code, the Anthropic API, and LangChain to ship AI-powered features, from intelligent chatbots and RAG systems to workflow automation with n8n. I use AI not just as a tool but as a core part of how I architect and deliver solutions faster.

I thrive on hard problems, agile teams, and shipping things that actually work in production.`,
}

// ============================================================
// SKILLS
// ============================================================
export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "tools"

export interface Skill {
  name: string
  icon?: string // react-icons name (for display)
}

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "tools", label: "Tools" },
]

export const skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript (ES6+)" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "TailwindCSS" },
    { name: "Bootstrap" },
    { name: "Responsive Design" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Python" },
    { name: "RESTful APIs" },
    { name: "Microservices" },
    { name: "JWT Auth" },
    { name: "OAuth 2.0" },
    { name: "RBAC" },
  ],
  database: [
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Firebase" },
    { name: "SQL" },
  ],
  devops: [
    { name: "AWS EC2" },
    { name: "AWS S3" },
    { name: "AWS Lambda" },
    { name: "Docker" },
    { name: "GitHub Actions" },
    { name: "CI/CD" },
    { name: "Netlify" },
    { name: "Heroku" },
    { name: "Railway" },
    { name: "CPanel" },
  ],
  tools: [
    { name: "Git" },
    { name: "Jira" },
    { name: "Postman" },
    { name: "Jest" },
    { name: "Linux/Ubuntu" },
    { name: "Agile/Scrum" },
    { name: "SDLC" },
    { name: "Unit Testing" },
    { name: "Integration Testing" },
    { name: "Web3.js" },
    { name: "Socket.io" },
    { name: "Solidity" },
  ],
}

// ============================================================
// EXPERIENCE
// ============================================================
export interface Experience {
  id: number
  role: string
  company: string
  location: string
  duration: string
  type: string
  // One-line summary shown in the collapsed row (before expanding)
  summary: string
  // Marks the current/present role — gets a pulsing "live" dot instead of a static one
  current?: boolean
  description: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "TourHill",
    location: "Remote, Barcelona, Spain",
    duration: "Apr 2026 – Present",
    type: "Contract",
    current: true,
    summary: "Full-stack tour & travel booking platform, live at tourhill.com",
    description: [
      "Used Claude Code and Cursor to speed up boilerplate, API scaffolding, and test case generation, reviewing and rewriting every AI-generated suggestion before committing to keep code quality in check",
      "Owned DevOps for the project end to end, from provisioning and configuring the Railway infrastructure to setting up GitHub Actions CI/CD pipelines for automated testing and deployment, plus environment and secrets management across services",
      "Shipped and continue to run the platform in production, currently taking live bookings and processing real payments",
      "Deployed the platform on Railway across multiple backend services with background jobs, rate limiting, and proxy routing, and enforced fail-fast configuration by validating all environment variables with Zod at startup",
      "Designed the full PostgreSQL database schema and backend architecture, building backend services and APIs with full CRUD coverage across booking, product, and availability modules",
      "Integrated Stripe payments and webhooks with dynamic cancellation policy logic, plus live and email notifications for booking status changes",
      "Built a fully manageable admin panel with a dynamic Next.js and TypeScript frontend, using server- and client-side rendering, reusable UI components, photo compression, and a live calendar with dynamic slot availability",
      "Built a RAG-based travel concierge chatbot, embedding product, ticket, and FAQ data into pgvector on Postgres and retrieving with LangChain to generate customer-facing answers through Claude",
      "Built a review intelligence system that generates AI summaries of pros, cons, and sentiment on product pages, alongside a job that flags fake or anomalous reviews",
      "Designed a secure booking flow with live review display, preventing double booking on the same slot through real-time availability checks",
      "Built reusable Next.js components across the customer-facing site, admin panel, and calendar system, shared between server- and client-rendered pages",
      "Prevented duplicate bookings under concurrent requests by implementing atomic slot reservation with Redis Lua scripts, closing a race condition that standard read-then-write logic would miss",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "LangChain", "pgvector", "Railway", "GitHub Actions", "Zod", "Claude Code", "Cursor"],
  },
  {
    id: 2,
    role: "Customer Solution Specialist",
    company: "Probe CX",
    location: "Wollongong, Australia",
    duration: "Dec 2025 – Mar 2026",
    type: "Full-time",
    summary: "MyAged Care CRM support — call handling and escalation ownership",
    description: [
      "Learned the MyAged Care systems and CRM workflows quickly during onboarding, reaching full call handling capacity ahead of the standard ramp-up period",
      "Took ownership of complex or escalated calls rather than passing them off, working through the issue with the caller until it was resolved or correctly escalated with full context",
      "Applied judgement on when a call needed to follow the standard script versus when it needed a different approach, based on the caller's situation and urgency",
    ],
    tech: ["CRM", "MyAged Care", "Customer Support"],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Mendoza Brothers Holdings LLC",
    location: "Florida, USA (Remote)",
    duration: "Dec 2022 – Jun 2024",
    type: "Contract",
    summary: "Enterprise medical supplier management platform — architecture to production",
    description: [
      "Designed the full frontend, backend architecture, and database schema from scratch, covering order tracking, staff management, and supplier workflows, while solely owning requirement analysis and client communication throughout the project",
      "Maintained CI/CD pipelines and Git workflow throughout the project, deploying first to Heroku and later migrating to Azure",
      "Integrated Stripe and other third-party APIs, enabling subscription billing and order payments across the platform",
      "Deployed the platform on Azure, leveraging its cloud services for scalability and reliability, ensuring 99.9% uptime during peak booking periods",
      "Implemented JWT authentication, multi-factor authentication, role-based access control, and automated email notifications, strengthening account security",
      "Built a library of reusable React and Material UI components, cutting new feature build time across the admin dashboard and client-facing screens",
      "Automated bulk dataset upload and download with Excel integration, reducing administrative workload by 60 percent",
      "Built a real-time notification and chat system using Node.js and Socket.io, reducing issue resolution time by 35 percent",
      "Improved usability and accessibility across the platform through redesigned layouts and consistent interaction patterns",
    ],
    tech: ["React.js", "Material UI", "Node.js", "Socket.io", "JWT", "RBAC", "Stripe", "Heroku", "Azure", "Excel Integration"],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Fiverr",
    location: "Remote",
    duration: "Feb 2021 – Sep 2023",
    type: "Freelance",
    summary: "50+ client projects, 100% satisfaction across full-stack web apps",
    description: [
      "Completed 50+ client projects with 100 percent satisfaction and consistent 5-star reviews",
      "Used DynamoDB and S3 for data storage and file handling across projects, and wrote AWS Lambda functions for serverless tasks",
      "Deployed and managed multiple projects on AWS, setting up EC2 instances to run the applications in production",
      "Built 10+ full-stack web applications covering React.js, Next.js, Node.js, Express, MongoDB, and PostgreSQL",
      "Integrated RESTful APIs, Firebase authentication, and secure payment gateways including Stripe and PayPal",
      "Implemented CI/CD pipelines using GitHub Actions, Netlify, Heroku, and Railway for fast and stable deployments",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "AWS", "DynamoDB", "S3", "Lambda", "GitHub Actions"],
  },
  {
    id: 5,
    role: "IT Support Analyst",
    company: "Trenza Softwares",
    location: "Dhaka, Bangladesh",
    duration: "Jun 2021 – Aug 2021",
    type: "Part-time",
    summary: "IT support & endpoint management internship — Intune rollout across 150+ devices",
    description: [
      "Reduced average device provisioning time by 40% by deploying and configuring Microsoft Intune for automated enrollment and compliance policy enforcement across 150+ Windows 10 endpoints",
      "Delivered end-user support across phone, email, and face-to-face channels by resolving Windows 10 and Microsoft 365 issues for a 200+ user base, maintaining 98% SLA compliance",
      "Equipped new and existing staff with functional hardware by assisting in the deployment, setup, and configuration of laptops, mobile phones, and other technology equipment",
      "Cut recurring helpdesk tickets by 25% by standardizing Windows 10 imaging and troubleshooting runbooks for common hardware and connectivity issues",
      "Improved first-contact resolution rate to 85% by managing user access, licensing, and mailbox configuration across Microsoft 365 (Exchange Online, SharePoint, Teams)",
      "Strengthened endpoint security posture by rolling out conditional access and compliance policies via Intune, reducing non-compliant device incidents by 30%",
    ],
    tech: ["Microsoft Intune", "Windows 10", "Microsoft 365", "Exchange Online", "SharePoint", "Teams"],
  },
  {
    id: 6,
    role: "Teaching Assistant – Computer Science",
    company: "AIUB",
    location: "Dhaka, Bangladesh",
    duration: "Sept 2021 – Dec 2021",
    type: "Internship",
    summary: "Mentored 30+ undergraduate students in coding fundamentals and debugging",
    description: [
      "Mentored 30+ undergraduate students in coding fundamentals and debugging techniques",
      "Assisted in lab sessions for programming courses",
      "Helped students understand algorithms, data structures, and software development concepts",
    ],
    tech: ["C", "C++", "Java", "Algorithms", "Data Structures"],
  },
]

// ============================================================
// PROJECTS
// ============================================================
export type ProjectCategory = "all" | "fullstack" | "blockchain" | "freelance" | "frontend" | "backend"

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  tech: string[]
  github: string
  demo: string
  gradient: string // Tailwind gradient classes for fallback / detail hero
  highlight?: string // Featured text
  featured?: boolean // Show "Featured" badge on the card
  ongoing?: boolean // Show pulsing "Ongoing" badge  project is actively in development
  imagekitFolder?: string // Subfolder name in ImageKit "Portfolio Projects Images"  all images auto-discovered
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "medical-supplier-management-system",
    title: "Medical Supplier Management System",
    description: "Full-stack web app for managing medical supplier orders, staff, and workflows with real-time chat.",
    longDescription:
      "Built for Mendoza Brothers Holdings, this enterprise-grade system streamlines supplier workflows, order tracking, and staff management. Features real-time chat, Excel bulk import/export, and secure RBAC.",
    category: ["fullstack"],
    tech: ["Node.js", "React.js", "MongoDB", "JWT", "REST APIs", "Socket.io", "Excel Integration"],
    github: "https://github.com/Rafin31/DME-Client",
    demo: "https://www.fiverr.com/users/rafin_31/portfolio/NjQ2NjA4OGY1OWYxNzUwMDAxNWIxNDY2",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    highlight: "60% admin workload reduction",
    imagekitFolder: "Medical Management System",
  },
  {
    id: 2,
    slug: "assert-blockchain-prediction-platform",
    title: "ASSERT Prediction Platform",
    description: "Blockchain-based sports prediction platform with Solidity smart contracts and real-time token transactions.",
    longDescription:
      "A decentralised sports prediction platform powered by Ethereum smart contracts. Users earn daily reward tokens, boosting engagement by 40%. Features real-time blockchain transactions and a seamless Web3 UI.",
    category: ["blockchain", "fullstack"],
    tech: ["Solidity", "Node.js", "Web3.js", "React.js", "Ganache", "MongoDB", "Firebase", "JWT"],
    github: "https://github.com/Rafin31/Assert-Frontend",
    demo: "https://github.com/Rafin31/Assert-Frontend",
    gradient: "from-purple-600 via-violet-700 to-indigo-800",
    highlight: "+40% user engagement",
    imagekitFolder: "Assert",
  },
  {
    id: 3,
    slug: "auto-parts-ecommerce-platform",
    title: "Auto Parts E-Commerce Platform",
    description: "Full-stack e-commerce store with Stripe payments, product management, and order tracking.",
    longDescription:
      "A feature-rich e-commerce platform with product catalogue, cart management, Stripe payment integration, order tracking, and admin dashboard. Built with Next.js for fast SSR and SEO.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    github: "https://github.com/Rafin31/autoPartsClient",
    demo: "https://github.com/Rafin31/autoPartsClient",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    imagekitFolder: "auto-parts"
  },
  {
    id: 4,
    slug: "game-coach-platform",
    title: "Game Coach Platform",
    description: "React-Firebase Application. Here users can Login and Sign up using email password or Google. Users can see services and can purchase them and the quantity of that service will automatically be updated. Admin can Add and Update services.",
    longDescription:
      "React-Firebase Application. Here users can Login and Sign up using email password or Google. Users can see services and can purchase them and the quantity of that service will automatically be updated. Admin can Add and Update services. Increased online orders by 40%.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["React.js", "Node.js", "Firebase", "Firebase Auth"],
    github: "https://github.com/Rafin31/React-firebase-app",
    demo: "https://github.com/Rafin31/React-firebase-app",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    highlight: "+40% online orders",
    imagekitFolder: "Game-Coach-Platform"
  },
  {
    id: 5,
    slug: "figma-to-react-conversion",
    title: "Figma to React js",
    description: "Converted Client's Figma Design into React js and Tailwind CSS with Firebase Authentication and Functions. ",
    longDescription:
      "Converted Client's Figma Design into React js and Tailwind CSS with Firebase Authentication and Functions",
    category: ["freelance", "frontend"],
    tech: ["React.js", "Tailwind css", "firebase", "AWS S3"],
    github: "#",
    demo: "https://www.fiverr.com/users/rafin_31/portfolio/NjQ2NjEyZmMxNjhkYTAwMDAxOTAyZjE4",
    gradient: "from-blue-500 via-sky-600 to-indigo-700",
    imagekitFolder: "Figma-react",
  },
  {
    id: 6,
    slug: "pocket-class-platform",
    title: "Pocket Class",
    description: "PocketClass connects students to freelance instructors in sports, music, and the arts, streamlining scheduling, secure payments, and administrative tasks into one seamless experience.",
    longDescription:
      "Founded by a team who personally experienced the challenges of finding qualified instructors, from countless online searches to messy payment processes, we set out to build a better way. PocketClass connects students to freelance instructors in sports, music, and the arts, streamlining scheduling, secure payments, and administrative tasks into one seamless experience.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Firebase"],
    github: "#",
    demo: "https://www.pocketclass.ca/",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    highlight: "+100% customer Satisfaction",
    imagekitFolder: "PocketClass",
  },
  {
    id: 7,
    slug: "claude-stats",
    title: "Claude Stats Dashboard",
    description: "A local dashboard for tracking Claude Code token usage, costs, and session history in real time. Built with Next.js, Recharts, and chokidar.",
    longDescription:
      "A self-hosted developer tool that gives you a live view of your Claude Code token consumption, session history, and estimated API costs. Built with Next.js App Router, Recharts for data visualisation, and chokidar for file watching  no config needed, it auto-detects your Claude data directory.",
    category: ["fullstack"],
    tech: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Recharts", "chokidar"],
    github: "https://github.com/Rafin31/claude-stats",
    demo: "https://github.com/Rafin31/claude-stats",
    gradient: "from-indigo-500 via-violet-600 to-purple-700",
    highlight: "Real-time token tracking",
    imagekitFolder: "Claude-States",
  },
  {
    id: 8,
    slug: "inventory-management-system",
    title: "Inventory-Management-System",
    description: " A Product Inventory System where users can enlist their products with Price, quantity, seller name and it will automatically calculate the total price according to price and quantity. Also, it can track record how many products have been sold and how much profit or loss have occurred",
    longDescription:
      "A Product Inventory System where users can enlist their products with Price, quantity, seller name and it will automatically calculate the total price according to price and quantity. Also, it can track record how many products have been sold and how much profit or loss have occurred",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["React.js", "PHP", "SQL", "REST API"],
    github: "#",
    demo: "https://github.com/Rafin31/Inventory-Management-System",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    imagekitFolder: "Inventory-Management-System"
  },
  {
    id: 9,
    slug: "tourhill-europe-tour-booking-platform",
    title: "TourHill  Europe Tour & Travel Booking Platform",
    description: "Production travel booking platform for curated skip-the-line tickets and expert guided tours across Spain. Built with Next.js 15 and live at tourhill.com.",
    longDescription:
      "TourHill is a live, production-grade travel booking web application helping tourists discover and book skip-the-line tickets and expert guided tours across Spain's top destinations, starting with Barcelona. Built with Next.js 15 App Router, strict TypeScript, Zustand for state management, TanStack Query for server-state, Zod for form validation, and Framer Motion for animations. Supports multi-language (i18n) for international reach and is fully optimised for Core Web Vitals, SEO, and conversion.",
    category: ["fullstack", "freelance"],
    tech: ["Next.js 15", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "Drizzle ORM", "Stripe", "Tailwind CSS", "Redux", "TanStack Query", "Zod", "Framer Motion", "GitHub Actions", "PM2", "Nginx", "i18n"],
    github: "https://github.com/Rafin31/Europe-Tour-Attraction",
    demo: "https://www.tourhill.com/",
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    highlight: "Live production platform",
    featured: true,
    ongoing: true,
    imagekitFolder: "europe-tour-attraction",
  },
  {
    id: 10,
    slug: "quickfinance-tools-personal-finance-calculators",
    title: "QuickFinance Tools  Personal Finance Calculators",
    description: "Free personal finance calculator suite for freelancers, gig workers, and retirement planners. Clear numbers, zero jargon.",
    longDescription:
      "QuickFinance Tools is a free web-based finance calculator suite built for real-life financial decisions. Whether you freelance, drive for rideshare, or want to plan your retirement, it gives you clear and honest numbers without the financial jargon. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Monetised with Google AdSense and SEO-optimised for US and European search traffic.",
    category: ["fullstack", "frontend"],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel Analytics", "Google AdSense"],
    github: "https://github.com/Rafin31/quickfinance-tools",
    demo: "https://quickfinance.tools",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    highlight: "5+ free calculators, zero sign-up",
    imagekitFolder: "quickfinance-tools",
  },
]

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "blockchain", label: "Blockchain" },
  { id: "freelance", label: "Freelance" },
]

// ============================================================
// TESTIMONIALS
// ============================================================
export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  rating: number
  initials: string
  avatarGradient: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Rafin delivered exactly what we needed, on time and with great attention to detail. Our medical management system runs flawlessly. He understood complex business requirements and translated them into elegant code. Great work and prompt service. What more can you ask for. I hope to work with Rafin again in the future to continue development.",
    name: "James Mendoza",
    role: "CEO",
    company: "Mendoza Brothers Holdings",
    rating: 5,
    initials: "JM",
    avatarGradient: "from-amber-400 to-orange-600",
  },
  {
    id: 2,
    quote:
      "He's very good at what he does. Has helped me a lot with learning the mechanics of backend engineering. A pleasure doing business with.",
    name: "senor_kyle",
    role: "Entrepreneur",
    company: "UK-based Startup",
    rating: 5,
    initials: "SK",
    avatarGradient: "from-pink-400 to-rose-600",
  },
  {
    id: 3,
    quote:
      "Rafin is very helpful and accommodating. It's clear that he knows the game inside out. If you have a problem he'll solve it right away without any uncertainties. He was a pleasure doing business with.",
    name: "senor_kyle",
    role: "Property Manager",
    company: "Chen Properties",
    rating: 5,
    initials: "SK",
    avatarGradient: "from-blue-400 to-indigo-600",
  },
  {
    id: 4,
    quote:
      "Great experience with Rafin.",
    name: "thegandrew",
    role: "Owner",
    company: "Sharma's Restaurant",
    rating: 5,
    initials: "TH",
    avatarGradient: "from-emerald-400 to-teal-600",
  },
  {
    id: 5,
    quote:
      "very good work. did what i described to him and communicated well. would recommend!",
    name: "popeyesbiscuit",
    role: "Founder",
    company: "Tech Startup",
    rating: 5,
    initials: "DP",
    avatarGradient: "from-violet-400 to-purple-600",
  },
  {
    id: 6,
    quote:
      "The seller was very nice, very helpful, and extremely fast. As soon as I wrote, he started working and did an excellent job. I also have to highlight his professionalism. 200 points out of 100. Definitely recommend",
    name: "matadamovic",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "MA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 8,
    quote:
      "Fast and satisfactory... highly recommended.",
    name: "zawad11",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "ZA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 9,
    quote:
      "Very intelligent! He was able to get it done really well",
    name: "babafemi97",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "BA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 10,
    quote:
      "Challenging request completed with usual professionalism.",
    name: "fh9977",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "FH",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 11,
    quote:
      "Good service , I highly recommend !",
    name: "camaraal",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "CA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 12,
    quote:
      "One of the best sellers in fiverr, he has amazing communication and very hardworking seller. would 100% recommend him",
    name: "adilaamjad4",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "AD",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 13,
    quote:
      "He's very helpful and accommodating. It's clear that he knows the game inside out. If you have a problem he'll solve it right away without any uncertainties. He was a pleasure doing business with.",
    name: "senor_kyle",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "SE",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 14,
    quote:
      "Rafin is just so brilliant and a great teacher, his explanations are so good and easily understandable!",
    name: "aniqtanwir589",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "AN",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
]

// ============================================================
// EDUCATION
// ============================================================
export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  duration: string
  details?: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science (Software Engineering)",
    institution: "University of Wollongong",
    location: "Wollongong, NSW, Australia",
    duration: "07/2023 – 07/2025",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "American International University – Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    duration: "01/2018 – 01/2022",
    details: "Dean's List Honors – GPA 3.86/4.00",
  },
]

// ============================================================
// ACHIEVEMENTS
// ============================================================
export const achievements = [
  {
    id: 1,
    title: "Dean's List Honors",
    description: "GPA 3.86/4.00 at American International University – Bangladesh",
    icon: "trophy",
  },
  {
    id: 2,
    title: "SJ Innovation Hackathon",
    description: "1st Runner-Up, competing against 10+ teams",
    icon: "medal",
  },
  {
    id: 3,
    title: "50+ Projects Delivered",
    description: "All with 5-star ratings and 100% client satisfaction on Fiverr",
    icon: "star",
  },
]

// ============================================================
// STATS (Hero section)
// ============================================================
export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
]

// ============================================================
// AI SKILLS
// ============================================================
export type AISkillCategory = "tools" | "apis" | "techniques" | "automation"

export const aiSkillCategories: { id: AISkillCategory; label: string }[] = [
  { id: "tools", label: "AI Tools" },
  { id: "apis", label: "APIs & SDKs" },
  { id: "techniques", label: "Techniques" },
  { id: "automation", label: "Automation" },
]

export interface AISkill {
  name: string
}

export const aiSkills: Record<AISkillCategory, AISkill[]> = {
  tools: [
    { name: "Claude Code" },
    { name: "Claude AI" },
    { name: "ChatGPT" },
    { name: "GitHub Copilot" },
    { name: "Cursor IDE" },
    { name: "Windsurf" },
    { name: "v0 by Vercel" },
    { name: "Bolt.new" },
    { name: "Loveable" },
    { name: "Perplexity AI" },
  ],
  apis: [
    { name: "Anthropic API" },
    { name: "OpenAI API" },
    { name: "Gemini API" },
    { name: "Groq" },
    { name: "Vercel AI SDK" },
    { name: "LangChain" },
    { name: "LlamaIndex" },
    { name: "Hugging Face" },
    { name: "Ollama" },
    { name: "Replicate" },
  ],
  techniques: [
    { name: "Prompt Engineering" },
    { name: "RAG Systems" },
    { name: "AI Agents" },
    { name: "Multi-Agent Systems" },
    { name: "MCP Integration" },
    { name: "Vibe Coding" },
    { name: "Chain-of-Thought" },
    { name: "Fine-tuning" },
    { name: "Context Management" },
    { name: "AI Code Review" },
  ],
  automation: [
    { name: "n8n" },
    { name: "Make.com" },
    { name: "Zapier" },
    { name: "Claude Code Hooks" },
    { name: "AI Pipelines" },
    { name: "Webhook Automation" },
    { name: "Scheduled Agents" },
    { name: "LLM Routing" },
  ],
}

export const aiCapabilities = [
  {
    id: 1,
    title: "AI-Powered Web Apps",
    description: "Full-stack apps with embedded AI chatbots, smart search, and intelligent content generation.",
    color: "violet" as const,
  },
  {
    id: 2,
    title: "Workflow Automation",
    description: "End-to-end automation pipelines with n8n, Make.com, and AI agents that replace manual processes.",
    color: "cyan" as const,
  },
  {
    id: 3,
    title: "Vibe Coding",
    description: "Use AI as a pair programmer to ship production-quality features 10× faster.",
    color: "amber" as const,
  },
  {
    id: 4,
    title: "LLM API Integration",
    description: "Connect Claude, GPT-4o, Gemini, and Groq to web apps through clean, scalable service layers.",
    color: "emerald" as const,
  },
]

// ============================================================
// NAV LINKS
// ============================================================
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

// Page route links (Blog, Hire Me - rendered as <Link> not scroll anchors)
export const pageLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/hire-me", label: "Hire Me" },
]
