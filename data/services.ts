const BASE_URL = "https://asifhossain.dev"

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceFeature {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
}

// A way of working together intentionally has no prices
export interface EngagementModel {
  title: string
  description: string
  bestFor: string
}

export interface ServiceCaseStudy {
  title: string
  summary: string
  results: string[]
  // Optional link to the full project page (/projects/[slug])
  projectSlug?: string
}

export interface Service {
  slug: string
  title: string
  // Short label used in footer / compact link lists
  shortTitle: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  tagline: string
  overview: string
  deliverables: string[]
  timeline: string
  // Date the page content was last meaningfully updated (used in sitemap.xml)
  lastUpdated: string
  features: ServiceFeature[]
  faqs: ServiceFAQ[]
  // ── Optional long-form content sections (rendered only when present) ──
  // Extra overview paragraphs shown below the main overview
  overviewExtended?: string[]
  // "How I Work" numbered steps
  processSteps?: ProcessStep[]
  // "Ways to Work Together" cards (no prices)
  engagementModels?: EngagementModel[]
  // Real project example with measurable results
  caseStudy?: ServiceCaseStudy
  // Paragraphs about serving specific Australian regions
  localAreas?: string[]
  relatedSlugs: string[]
  // Blog post slugs shown as "Further reading" on the service page
  relatedPostSlugs?: string[]
  icon: string
  gradient: string
  tech: string[]
}

export const services: Service[] = [
  // ── 1. Web Development Australia ─────────────────────────────────────────
  {
    slug: "web-development-australia",
    title: "Web Development Services Australia",
    shortTitle: "Web Development",
    metaTitle: "Web Developer Australia | Custom Website Development",
    metaDescription:
      "Professional web developer based in Australia. Custom websites, web apps, and digital products built with React, Next.js, and Node.js. Fast delivery, 5-star rated.",
    keywords: [
      "web developer Australia",
      "website developer Australia",
      "web development services Australia",
      "freelance web developer NSW",
      "custom website development Australia",
      "web developer Sydney",
      "website design and development Australia",
      "professional web developer",
      "hire web developer Australia",
      "web developer near me Australia",
    ],
    tagline: "Fast, scalable, and SEO-ready websites built for Australian businesses",
    overview:
      "I build custom websites and web applications for businesses across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond. Every project is built from scratch using modern technologies like React.js and Next.js, optimised for performance, mobile responsiveness, and Google search rankings. Whether you need a business website, a customer portal, or a full web application, I deliver production-ready solutions with clean code and measurable results.",
    deliverables: [
      "Fully custom-designed website (no page-builder templates)",
      "Mobile-responsive layout across all devices",
      "SEO-optimised structure (meta tags, Open Graph, sitemap, robots.txt)",
      "Fast Core Web Vitals scores (LCP, CLS, FID)",
      "Contact forms with email integration",
      "Google Analytics or Vercel Analytics setup",
      "Deployment to Vercel, AWS, or your preferred host",
      "30 days of post-launch support",
    ],
    lastUpdated: "2026-06-13",
    timeline: "2 – 6 weeks",
    features: [
      {
        icon: "⚡",
        title: "Performance-First Build",
        description:
          "Every site is built for speed. Server-side rendering, image optimisation, and lazy loading combine to deliver sub-2s load times that Google rewards.",
      },
      {
        icon: "📱",
        title: "Mobile-First Design",
        description:
          "Over 60% of Australian web traffic is mobile. Every layout is designed mobile-first and tested across iOS and Android devices.",
      },
      {
        icon: "🔍",
        title: "SEO-Ready from Day One",
        description:
          "Semantic HTML, structured data (JSON-LD), canonical URLs, and a clean sitemap give your site the foundation to rank on Google from launch.",
      },
      {
        icon: "🛡️",
        title: "Secure & Scalable",
        description:
          "Built with security best practices: HTTPS, environment variable isolation, input validation, and scalable architecture that grows with your business.",
      },
      {
        icon: "🔗",
        title: "Third-Party Integrations",
        description:
          "Stripe payments, CRM connections, booking systems, email platforms, and social login  integrated cleanly into your site.",
      },
      {
        icon: "🚀",
        title: "CI/CD Deployment",
        description:
          "Automated deployment pipelines mean updates go live in minutes, not hours. GitHub Actions, Vercel, or AWS  your choice.",
      },
    ],
    faqs: [
      {
        q: "Do you redesign existing websites?",
        a: "Yes. If your current site looks dated, loads slowly, or does not rank on Google, I can rebuild it on a modern stack while preserving your content and existing search rankings. Redesigns include proper 301 redirects so you do not lose the SEO value your old pages have earned.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Every site I build ships with the technical SEO foundation Google expects: semantic HTML, structured data, fast Core Web Vitals, a clean sitemap, and correct canonical tags. Rankings also depend on your content and competition, so I advise on page structure and keywords during the build and can help with ongoing SEO after launch.",
      },
      {
        q: "How much does a website cost in Australia?",
        a: "The cost of a website in Australia depends on the number of pages, custom features, and integrations required. A simple business site sits at the lower end, while a complex web application with custom functionality costs more. I provide a detailed, fixed-price quote after a free discovery call, so you know exactly what you are paying before any work begins.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Most business websites take 2 to 4 weeks from design approval to launch. More complex web applications with custom functionality can take 4 to 8 weeks. I provide a clear project timeline before we start.",
      },
      {
        q: "Do you work with clients across all of Australia?",
        a: "Yes. I work with clients in Sydney, Melbourne, Brisbane, Perth, Adelaide, and everywhere in between  entirely remotely. All communication is handled via video call, email, and shared project management tools. Australian timezone, no offshore delays.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Every website I build is mobile-first and tested across iOS and Android. Mobile responsiveness is not an add-on  it is a core requirement of every project.",
      },
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes. All projects include 30 days of post-launch support. I also offer monthly maintenance packages for updates, security patches, and content changes.",
      },
    ],
    overviewExtended: [
      "A website is only worth building if it actually brings in business. That is why every site I deliver starts with your goals more enquiries, more bookings, more sales and works backwards to the design and code. You get semantic HTML that Google can read, page speeds that keep visitors from bouncing, and a content structure planned around the search terms your customers actually type. No bloated page builders, no recycled templates, no plugins that break six months later.",
      "I work as a single point of contact from the first call to launch day. You will always know what stage your project is at, what has been finished, and what is coming next. After launch, I do not disappear: every build includes a support window, and I offer ongoing care plans for businesses that want their site to keep improving instead of slowly going stale.",
    ],
    processSteps: [
      {
        title: "Free discovery call",
        description:
          "We talk through your business, your customers, and what the website needs to achieve. You get honest advice on scope including whether you actually need everything you think you need.",
      },
      {
        title: "Fixed-scope proposal",
        description:
          "You receive a written proposal with deliverables, timeline, and a fixed quote. No hourly surprises, no scope creep changes are agreed in writing before they happen.",
      },
      {
        title: "Design & build",
        description:
          "I design mobile-first and build with React and Next.js. You see staging previews throughout, so there is never a 'big reveal' that misses the mark.",
      },
      {
        title: "Review & polish",
        description:
          "We test across devices and browsers, tune Core Web Vitals, and check SEO fundamentals meta tags, structured data, sitemap before anything goes live.",
      },
      {
        title: "Launch & support",
        description:
          "Your site goes live with analytics configured and a post-launch support window included. I hand over documentation so you are never locked in.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Project",
        description:
          "A defined website or web app delivered for an agreed quote and timeline. Scope, deliverables, and milestones are documented up front.",
        bestFor: "Businesses that want a new website with a clear budget and deadline.",
      },
      {
        title: "Ongoing Retainer",
        description:
          "A set number of hours each month for improvements, new pages, content updates, security patches, and performance monitoring.",
        bestFor: "Businesses whose website is a living sales channel, not a one-off brochure.",
      },
      {
        title: "Hourly Consulting",
        description:
          "Targeted help with a specific problem a slow page, a broken integration, an SEO audit, or advice before you commit to a bigger build.",
        bestFor: "Teams that need expert input without a full project engagement.",
      },
    ],
    caseStudy: {
      title: "Medical Supplier Management System 60% less admin work",
      summary:
        "Mendoza Brothers Holdings needed to replace manual spreadsheets and email chains with one system for supplier orders, staff, and workflows. I built a full-stack web application with React.js, Node.js, and MongoDB, including real-time chat, Excel bulk import/export, and role-based access control.",
      results: [
        "Around 60% reduction in admin workload after rollout",
        "Real-time chat replaced scattered email threads between staff and suppliers",
        "Excel bulk import/export removed hours of manual data entry every week",
        "Secure role-based access control for staff, managers, and administrators",
      ],
      projectSlug: "medical-supplier-management-system",
    },
    localAreas: [
      "I work with businesses across Australia  Sydney, Melbourne, Brisbane, Perth, Adelaide, and regional areas. The entire process, from discovery calls and staging previews to launch, runs smoothly over video calls and shared project boards. You get an Australian-based developer in your timezone with clear communication and no offshore delays.",
      "Wherever you are in Australia, you get the same fixed quotes, the same communication, and the same quality of build. Being Australian-based means overlapping working hours, fast response times, and a developer who understands the local business landscape.",
    ],
    relatedSlugs: [
      "nextjs-react-developer-australia",
      "ecommerce-development-australia",
      "api-development-integrations",
    ],
    relatedPostSlugs: [
      "website-cost-australia-2026",
      "do-i-need-a-website-for-my-small-business",
      "fullstack-developer-wollongong-nsw",
      "case-study-medical-management-system",
    ],
    icon: "🌐",
    gradient: "from-blue-500 via-indigo-600 to-violet-700",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
  },

  // ── 2. Next.js / React Developer Australia ───────────────────────────────
  {
    slug: "nextjs-react-developer-australia",
    title: "Next.js & React Developer Australia",
    shortTitle: "Next.js & React Development",
    metaTitle: "Next.js Developer Australia | React.js Expert",
    metaDescription:
      "Experienced Next.js and React developer in Australia. Server-side rendering, App Router, TypeScript, and Tailwind CSS. Fast, SEO-optimised frontends delivered on time.",
    keywords: [
      "Next.js developer Australia",
      "React developer Australia",
      "hire Next.js developer",
      "React.js developer Australia",
      "Next.js App Router developer",
      "TypeScript React developer Australia",
      "frontend developer Australia",
      "React developer Sydney",
      "Next.js freelancer Australia",
      "hire React developer Australia",
    ],
    tagline: "Expert Next.js and React development for modern, high-performance web applications",
    overview:
      "I specialise in building fast, scalable frontends with Next.js and React. From simple landing pages to complex multi-page applications with App Router, server components, and TypeScript, I write clean, maintainable code that performs well in production. With 3+ years of React experience and 50+ delivered projects, I bring both technical depth and practical delivery speed to every engagement.",
    deliverables: [
      "Next.js App Router or Pages Router application",
      "TypeScript throughout  no loose types",
      "Tailwind CSS responsive layout",
      "Server-side rendering (SSR) and static generation (SSG) where appropriate",
      "API routes or integration with external backend",
      "Component library setup (shadcn/ui, Radix, or custom)",
      "Framer Motion animations",
      "Lighthouse performance score 90+",
    ],
    lastUpdated: "2026-06-13",
    timeline: "2 – 8 weeks",
    features: [
      {
        icon: "🏗️",
        title: "App Router Architecture",
        description:
          "Full Next.js 14/15 App Router with server components, streaming, and layouts for maximum performance and developer experience.",
      },
      {
        icon: "🔷",
        title: "TypeScript-First",
        description:
          "Every project is written in strict TypeScript. Fewer runtime bugs, better IDE support, and codebases that are easy to hand over.",
      },
      {
        icon: "🎨",
        title: "Polished UI with Animations",
        description:
          "Framer Motion animations, smooth transitions, and pixel-perfect Tailwind CSS designs that match your brand and impress users.",
      },
      {
        icon: "⚙️",
        title: "State Management",
        description:
          "Zustand, TanStack Query, or React Context  I choose the right tool for your data complexity, not the most fashionable one.",
      },
      {
        icon: "🔗",
        title: "API Integration",
        description:
          "REST APIs, GraphQL, Stripe, Firebase, Supabase, or your existing backend  cleanly integrated with typed service layers.",
      },
      {
        icon: "📊",
        title: "Analytics & Monitoring",
        description:
          "Vercel Analytics, Google Analytics 4, or PostHog  built in from day one so you can measure what matters.",
      },
    ],
    faqs: [
      {
        q: "Can you migrate my existing site or app to Next.js?",
        a: "Yes. I handle migrations from plain React (Create React App or Vite), WordPress, and other frameworks to Next.js. Migrations are done incrementally where possible, with redirects and SEO preserved, so your traffic does not drop during the transition.",
      },
      {
        q: "Why is Next.js better for SEO than plain React?",
        a: "Plain React renders in the browser, so search engines may see an empty page before JavaScript loads. Next.js renders pages on the server or at build time, meaning Google receives complete HTML with your content, metadata, and structured data immediately. Combined with automatic image optimisation and fast load times, that gives Next.js sites a real ranking advantage.",
      },
      {
        q: "What is the difference between Next.js and React?",
        a: "React is a UI library for building component-based interfaces. Next.js is a full-stack framework built on top of React that adds server-side rendering, file-based routing, API routes, and built-in optimisations. For most production web apps, Next.js is the better choice.",
      },
      {
        q: "Should I use the Next.js App Router or Pages Router?",
        a: "For new projects, I recommend the App Router introduced in Next.js 13. It enables server components, parallel routes, and better layouts. For existing Pages Router projects, I can maintain or gradually migrate them.",
      },
      {
        q: "Can you work with an existing React codebase?",
        a: "Yes. I regularly join projects mid-way  refactoring components, adding features, improving performance, or migrating from Create React App to Next.js.",
      },
      {
        q: "Do you write tests?",
        a: "Yes. I write unit tests with Jest and React Testing Library, and can set up end-to-end tests with Playwright or Cypress depending on project requirements.",
      },
    ],
    overviewExtended: [
      "Next.js is my daily driver, not a framework I dabble in. I work with the App Router, server components, streaming, and static generation every week, which means I know where the sharp edges are hydration mismatches, caching surprises, bundle bloat and how to avoid them before they cost you performance or SEO. The result is an application that scores well on Lighthouse on day one and stays fast as it grows.",
      "If you already have a React codebase, I can join it rather than rewrite it. That might mean migrating Pages Router to App Router incrementally, untangling a slow component tree, introducing TypeScript gradually, or adding server-side rendering to a client-only app that Google struggles to index. You get senior-level code review habits and a codebase your next developer will thank you for.",
    ],
    processSteps: [
      {
        title: "Technical scoping",
        description:
          "We review your requirements or your existing codebase and agree on architecture: rendering strategy, data fetching, state management, and deployment target.",
      },
      {
        title: "Foundation setup",
        description:
          "Project scaffolding with TypeScript, linting, Tailwind CSS, and CI checks from the first commit, so quality is enforced automatically rather than by memory.",
      },
      {
        title: "Iterative builds",
        description:
          "Features ship in small, reviewable increments with staging previews on every push. You see progress continuously instead of waiting for a final delivery.",
      },
      {
        title: "Performance pass",
        description:
          "Bundle analysis, image optimisation, lazy loading, and Core Web Vitals tuning targeting Lighthouse scores of 90+ before launch.",
      },
      {
        title: "Handover",
        description:
          "Documented code, a deployment runbook, and a walkthrough session so your team can maintain and extend the app confidently.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Project",
        description:
          "A complete Next.js application or feature set delivered against an agreed specification, timeline, and quote.",
        bestFor: "New builds and well-defined features with a clear deadline.",
      },
      {
        title: "Ongoing Retainer",
        description:
          "Reserved monthly capacity for feature development, refactoring, dependency upgrades, and performance work on your React codebase.",
        bestFor: "Product teams that ship continuously and want a reliable senior contributor.",
      },
      {
        title: "Hourly Consulting",
        description:
          "Code reviews, architecture advice, App Router migration planning, or debugging a specific performance problem.",
        bestFor: "Teams with in-house developers who need targeted Next.js expertise.",
      },
    ],
    caseStudy: {
      title: "TourHill production travel booking platform on Next.js 15",
      summary:
        "TourHill sells curated skip-the-line tickets and guided tours across Spain. I built the platform end-to-end with Next.js 15, TypeScript, PostgreSQL, Redis, and Stripe including multi-language support, server-side rendering for SEO, and automated deployments with GitHub Actions.",
      results: [
        "Live in production at tourhill.com, serving real bookings",
        "Server-rendered pages indexed by Google across multiple languages",
        "Stripe payment flow with PostgreSQL and Drizzle ORM on the backend",
        "Automated CI/CD pipeline with GitHub Actions, PM2, and Nginx",
      ],
      projectSlug: "tourhill-europe-tour-booking-platform",
    },
    localAreas: [
      "I work with clients across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond  as well as international teams. Australian clients get overlapping working hours, clear written communication, and no timezone relay delays. All work is delivered remotely with the same quality and communication standards regardless of location.",
    ],
    relatedSlugs: [
      "web-development-australia",
      "ai-powered-web-applications",
      "api-development-integrations",
    ],
    relatedPostSlugs: [
      "nextjs-react-web-development-australia",
      "nextjs-performance-optimization-2026",
      "typescript-vs-javascript-2026",
    ],
    icon: "⚛️",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
  },

  // ── 3. n8n Automation Australia ──────────────────────────────────────────
  {
    slug: "n8n-automation-australia",
    title: "n8n Workflow Automation Australia",
    shortTitle: "n8n Automation",
    metaTitle: "n8n Automation Consultant Australia | Workflow Automation",
    metaDescription:
      "n8n workflow automation specialist in Australia. Automate repetitive business processes, connect apps, and build AI-powered pipelines. Save hours every week with custom n8n automation.",
    keywords: [
      "n8n automation Australia",
      "n8n consultant Australia",
      "workflow automation Australia",
      "business process automation Australia",
      "n8n developer",
      "no-code automation Australia",
      "n8n integration specialist",
      "automate business processes Australia",
      "n8n workflow builder",
      "automation consultant Australia",
    ],
    tagline: "Automate repetitive business processes and save hours every week with n8n",
    overview:
      "n8n is the most powerful open-source workflow automation platform available  and I build custom n8n pipelines that connect your apps, automate your processes, and eliminate manual work. From simple two-app integrations to complex AI-powered workflows with conditional logic, webhooks, and database operations, I design automation systems that run reliably in the background so your team can focus on what matters.",
    deliverables: [
      "Custom n8n workflow design and build",
      "Integration with your existing apps (CRM, email, Slack, databases)",
      "AI agent nodes with Claude or GPT integration",
      "Webhook setup and error handling",
      "Self-hosted n8n setup on your server (optional)",
      "Workflow documentation and handover",
      "Testing and monitoring configuration",
      "Training session for your team",
    ],
    lastUpdated: "2026-06-13",
    timeline: "1 – 4 weeks",
    features: [
      {
        icon: "🔄",
        title: "End-to-End Process Automation",
        description:
          "Connect your CRM, email, spreadsheets, databases, and SaaS tools into a single automated workflow. No more copy-pasting between apps.",
      },
      {
        icon: "🤖",
        title: "AI-Powered Workflows",
        description:
          "Embed Claude or GPT directly into your n8n workflows  classify incoming emails, generate reports, summarise data, or make intelligent routing decisions automatically.",
      },
      {
        icon: "🔔",
        title: "Real-Time Webhook Triggers",
        description:
          "Trigger workflows instantly on form submissions, payment events, database changes, or API callbacks  no polling, no delays.",
      },
      {
        icon: "🛡️",
        title: "Error Handling & Alerts",
        description:
          "Production-grade workflows include retry logic, error branches, and Slack or email alerts so you always know when something needs attention.",
      },
      {
        icon: "🏠",
        title: "Self-Hosted or Cloud",
        description:
          "Run n8n on your own server for full data control, or use n8n Cloud. I set up either option with SSL, authentication, and automatic backups.",
      },
      {
        icon: "📈",
        title: "Scalable Architecture",
        description:
          "Workflows built to handle volume  queue-based execution, worker nodes, and database-backed storage for high-throughput automation.",
      },
    ],
    faqs: [
      {
        q: "Should I use n8n Cloud or self-host it?",
        a: "n8n Cloud is the fastest way to start no servers to manage. Self-hosting costs less at higher volumes and keeps all data on infrastructure you control, which suits businesses with privacy or compliance requirements. I set up both and will recommend the right option based on your workflow volume and data sensitivity.",
      },
      {
        q: "Can you fix or extend n8n workflows someone else built?",
        a: "Yes. I regularly take over existing n8n instances fixing workflows that fail silently, adding error handling, restructuring tangled logic, and extending automations as the business grows. A short audit of your current setup is usually the best starting point.",
      },
      {
        q: "What is n8n and why is it better than Zapier?",
        a: "n8n is an open-source workflow automation platform that offers more flexibility, lower cost, and self-hosting capability compared to Zapier. You own your workflows and data, and there are no per-task pricing limits. For complex or high-volume automations, n8n is significantly more cost-effective.",
      },
      {
        q: "What kinds of processes can be automated with n8n?",
        a: "Almost any repetitive digital task: lead capture and CRM entry, invoice generation, email responses, social media posting, report generation, data synchronisation between systems, customer onboarding sequences, and AI-powered content processing.",
      },
      {
        q: "Do I need technical knowledge to use the workflows after they're built?",
        a: "No. I design workflows to run automatically and build simple monitoring dashboards so you can see what's running. I also provide a training session and documentation so your team can make minor changes if needed.",
      },
      {
        q: "Can n8n connect to my existing software?",
        a: "n8n has 400+ native integrations including HubSpot, Salesforce, Google Workspace, Airtable, Notion, Slack, Stripe, PostgreSQL, MySQL, and more. If your tool has an API, n8n can connect to it.",
      },
      {
        q: "How much can I save by automating my processes?",
        a: "Most clients save 5 to 20 hours of manual work per week after automation. Because the time savings compound every week, a typical automation project pays for itself within the first one to two months. I can estimate the expected return for your specific workflow during a free discovery call.",
      },
    ],
    overviewExtended: [
      "Most businesses lose hours every week to work a machine should be doing: copying data between systems, sending the same follow-up emails, generating reports, updating spreadsheets. n8n fixes that without locking you into per-task pricing the way Zapier does. Because n8n can be self-hosted, your data stays on infrastructure you control, and workflows can grow as complex as your business actually needs branching logic, AI steps, custom code nodes, and direct database access.",
      "I do not just build the workflow and leave. Every automation project includes error handling (so failures alert you instead of silently dropping data), documentation of how each workflow operates, and a handover session so your team understands what is running and why. When something in your stack changes a new CRM, a new API version workflows are structured so they can be updated rather than rebuilt.",
    ],
    processSteps: [
      {
        title: "Process audit",
        description:
          "We map the manual work eating your team's time and identify which processes give the best return when automated usually the boring, repetitive, high-volume ones.",
      },
      {
        title: "Workflow design",
        description:
          "I design the automation on paper first: triggers, steps, edge cases, and what happens when something fails. You approve the design before any build starts.",
      },
      {
        title: "Build & test",
        description:
          "Workflows are built in n8n with proper error handling and tested against real-world data, including the messy edge cases that break naive automations.",
      },
      {
        title: "Deploy & monitor",
        description:
          "Deployment to n8n Cloud or a self-hosted instance on your infrastructure, with failure alerts so problems surface immediately instead of weeks later.",
      },
      {
        title: "Handover & training",
        description:
          "Documentation plus a walkthrough session so your team can monitor, tweak, and extend the workflows without depending on me for every change.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Automation",
        description:
          "A defined set of workflows designed, built, tested, and deployed for an agreed quote from a single integration to a multi-step business process.",
        bestFor: "Businesses automating a specific, well-understood process.",
      },
      {
        title: "Automation Retainer",
        description:
          "Ongoing monthly capacity to build new workflows, maintain existing ones, and keep integrations working as your tools and APIs evolve.",
        bestFor: "Companies steadily automating more of their operations over time.",
      },
      {
        title: "Workflow Rescue & Consulting",
        description:
          "Fixing broken or half-finished n8n workflows, reviewing automation architecture, or advising on self-hosting and scaling.",
        bestFor: "Teams already using n8n who need expert help with specific problems.",
      },
    ],
    caseStudy: {
      title: "LinkedIn content automation from idea to published post, hands-free",
      summary:
        "I built a two-workflow n8n system that generates LinkedIn posts with AI via OpenRouter, creates matching images, stores drafts in Google Sheets for human review, and publishes approved posts on a schedule. The full build is documented step-by-step on my blog.",
      results: [
        "AI post generation with structured outputs, so formatting never breaks",
        "Human-in-the-loop approval via Google Sheets before anything is published",
        "Scheduled, hands-free publishing through a community node",
        "Complete write-up available as a tutorial on the blog",
      ],
    },
    localAreas: [
      "I work with Australian businesses nationwide  Sydney, Melbourne, Brisbane, Perth, Adelaide, and regional areas  delivering the same quality of service remotely. Self-hosted n8n deployments can run on Australian cloud regions, which matters if your data needs to stay onshore for compliance or privacy reasons. Australian timezone means fast communication and no offshore delays.",
    ],
    relatedSlugs: [
      "ai-integration-developer",
      "ai-powered-web-applications",
      "api-development-integrations",
    ],
    relatedPostSlugs: [
      "n8n-linkedin-automation-openrouter-google-sheets",
      "ai-tools-fullstack-developers-2026",
    ],
    icon: "⚙️",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tech: ["n8n", "Webhooks", "REST APIs", "PostgreSQL", "Claude AI", "OpenAI", "Docker"],
  },

  // ── 4. AI Integration Developer ──────────────────────────────────────────
  {
    slug: "ai-integration-developer",
    title: "AI Integration Developer Australia",
    shortTitle: "AI Integration",
    metaTitle: "AI Integration Developer Australia | LLM API Integration",
    metaDescription:
      "Expert AI integration developer in Australia. Connect Claude, GPT-4, and Gemini to your web apps. Build AI chatbots, RAG systems, and intelligent features that work in production.",
    keywords: [
      "AI integration developer Australia",
      "LLM integration developer",
      "Claude API developer Australia",
      "OpenAI API developer Australia",
      "AI developer Australia",
      "hire AI developer Australia",
      "AI chatbot developer",
      "LangChain developer Australia",
      "AI integration services Australia",
      "artificial intelligence developer",
    ],
    tagline: "Connect frontier AI models to your business systems and ship intelligent features",
    overview:
      "I integrate large language models  Claude, GPT-4o, Gemini, and Groq  directly into your web applications and business systems. From AI chatbots and document Q&A systems to intelligent data processing pipelines, I build production-ready AI features with proper error handling, cost control, prompt caching, and monitoring. AI integration is not a side interest  it is a core specialisation backed by real delivered projects.",
    deliverables: [
      "LLM API integration (Claude, GPT-4o, Gemini, or Groq)",
      "Prompt engineering and system prompt design",
      "RAG (Retrieval-Augmented Generation) pipeline with vector search",
      "Streaming responses for real-time UX",
      "Prompt caching to reduce API costs",
      "Token usage monitoring and cost dashboard",
      "Fallback handling and rate limit management",
      "Production deployment with environment security",
    ],
    lastUpdated: "2026-06-13",
    timeline: "2 – 8 weeks",
    features: [
      {
        icon: "🧠",
        title: "Multi-Model Support",
        description:
          "Claude 4 (Anthropic), GPT-4o (OpenAI), Gemini (Google), and Groq  I select the right model for your use case and budget, or build multi-model routing.",
      },
      {
        icon: "📚",
        title: "RAG Systems",
        description:
          "Retrieval-Augmented Generation connects your AI to your own documents, knowledge bases, or databases  so it answers questions with your data, not generic training data.",
      },
      {
        icon: "💬",
        title: "AI Chatbots & Assistants",
        description:
          "Customer support bots, internal knowledge assistants, sales qualification agents  built with proper conversation memory, guardrails, and escalation paths.",
      },
      {
        icon: "⚡",
        title: "Streaming & Real-Time UX",
        description:
          "Token-by-token streaming responses make AI features feel instant and responsive, dramatically improving user experience over batch responses.",
      },
      {
        icon: "💰",
        title: "Cost Optimisation",
        description:
          "Prompt caching, model routing, and token budgeting keep API costs low. I build cost dashboards so you always know what you're spending.",
      },
      {
        icon: "🔒",
        title: "Production Security",
        description:
          "API keys isolated in server-side environment variables, input sanitisation, rate limiting, and PII handling  AI features built safely for production.",
      },
    ],
    faqs: [
      {
        q: "Is my business data safe when using AI APIs?",
        a: "It depends on the provider and configuration, and I treat this as a first-class design constraint. Major providers offer API tiers that do not train on your data, and sensitive fields can be stripped or anonymised before anything leaves your systems. For stricter requirements, self-hosted open models keep everything on your own infrastructure.",
      },
      {
        q: "How long does a typical AI integration take?",
        a: "A focused integration say, an AI assistant answering questions from your documents typically takes a few weeks including production hardening. A quick prototype to validate quality on your real data can be ready much sooner, and is usually the right first step before committing to a full build.",
      },
      {
        q: "Which AI model should I use  Claude, GPT-4, or Gemini?",
        a: "It depends on your use case. Claude excels at long-document analysis, coding assistance, and nuanced instruction-following. GPT-4o is strong for multimodal tasks. Gemini has a massive context window. I recommend the right model after understanding your requirements  or build multi-model routing to use the best model for each task.",
      },
      {
        q: "What is RAG and do I need it?",
        a: "RAG (Retrieval-Augmented Generation) lets AI answer questions using your specific documents, database, or knowledge base  rather than just its training data. If you want AI that knows your products, policies, or internal data, you need RAG.",
      },
      {
        q: "How do you control AI API costs?",
        a: "I implement prompt caching (supported by Claude and GPT-4), compress context windows intelligently, use cheaper models for simple tasks, and build token usage monitoring dashboards. Most projects see 40-70% lower API costs compared to naive implementations.",
      },
      {
        q: "Can you add AI features to my existing web app?",
        a: "Yes. I regularly integrate AI into existing React, Next.js, and Node.js applications  adding chatbots, document processing, content generation, or intelligent search without rebuilding the whole application.",
      },
    ],
    overviewExtended: [
      "AI integration is more than calling an API. The difference between a demo and a production feature is everything around the model: prompt design that produces consistent results, structured outputs your code can rely on, retries and fallbacks when a provider has a bad day, cost controls so a traffic spike does not become a billing surprise, and evaluation so you know quality is holding up. That production layer is what I build.",
      "I work across the major providers Anthropic's Claude, OpenAI, and open models via OpenRouter and recommend the model based on your task, latency budget, and data requirements rather than hype. Where your use case needs your own knowledge to power answers, I build RAG pipelines with embeddings and vector search so the AI responds from your documents instead of guessing.",
    ],
    processSteps: [
      {
        title: "Use-case scoping",
        description:
          "We identify where AI genuinely adds value in your product or operations and where a simpler, cheaper non-AI solution would honestly serve you better.",
      },
      {
        title: "Model & architecture selection",
        description:
          "Choosing the right provider, model size, and pattern (direct calls, RAG, agents) for your accuracy, latency, privacy, and cost requirements.",
      },
      {
        title: "Prototype",
        description:
          "A working proof-of-concept against your real data, so we validate quality and cost-per-request before committing to a full build.",
      },
      {
        title: "Production hardening",
        description:
          "Streaming, error handling, rate limiting, prompt versioning, cost monitoring, and guardrails the unglamorous work that makes AI features dependable.",
      },
      {
        title: "Launch & iterate",
        description:
          "Deployment with usage analytics, then iteration on prompts and retrieval quality based on how real users actually interact with the feature.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Integration",
        description:
          "A defined AI feature chatbot, document analysis, content pipeline, RAG search built into your product for an agreed quote.",
        bestFor: "Adding a specific AI capability to an existing product.",
      },
      {
        title: "AI Retainer",
        description:
          "Ongoing capacity for prompt tuning, model upgrades, new AI features, and keeping pace as providers ship new capabilities.",
        bestFor: "Products where AI is core and quality must keep improving.",
      },
      {
        title: "AI Strategy Consulting",
        description:
          "An audit of where AI fits your business, model and architecture recommendations, and a realistic build-vs-buy assessment.",
        bestFor: "Leaders deciding where to invest in AI before committing budget.",
      },
    ],
    caseStudy: {
      title: "AI content pipeline with OpenRouter structured, reviewed, automated",
      summary:
        "For my LinkedIn automation system, I integrated LLMs via OpenRouter to generate post copy with structured JSON outputs, paired with AI image generation, and wrapped it in an n8n pipeline with human review via Google Sheets before publishing. It is a working example of AI integration done properly: structured outputs, human-in-the-loop, and full automation around the model.",
      results: [
        "Structured outputs guarantee parseable, consistently formatted AI responses",
        "Human approval step keeps quality control without manual writing",
        "AI image generation matched to each post automatically",
        "Full architecture documented publicly on the blog",
      ],
    },
    localAreas: [
      "I work with businesses across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond. For Australian companies with data-residency concerns, I design AI integrations where your documents and customer data stay in Australian cloud regions, with only the minimum necessary context sent to model providers  and I will tell you plainly what each provider does with your data.",
    ],
    relatedSlugs: [
      "ai-powered-web-applications",
      "n8n-automation-australia",
      "api-development-integrations",
    ],
    relatedPostSlugs: [
      "ai-tools-fullstack-developers-2026",
      "build-ai-web-app-nextjs-claude-api-2026",
    ],
    icon: "🤖",
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
    tech: ["Anthropic API", "OpenAI API", "LangChain", "LlamaIndex", "Vercel AI SDK", "pgvector"],
  },

  // ── 5. AI-Powered Web Applications ──────────────────────────────────────
  {
    slug: "ai-powered-web-applications",
    title: "AI-Powered Web Application Development",
    shortTitle: "AI Web Applications",
    metaTitle: "AI Web App Developer Australia | AI-Powered Applications",
    metaDescription:
      "Build AI-powered web applications in Australia. Full-stack apps with embedded LLMs, intelligent search, and automation built on Next.js, Node.js, and the Anthropic API.",
    keywords: [
      "AI web app developer Australia",
      "AI-powered web application",
      "build AI application Australia",
      "AI SaaS developer",
      "intelligent web application developer",
      "AI full-stack developer Australia",
      "Next.js AI application",
      "AI startup developer Australia",
      "custom AI software Australia",
      "AI product developer",
    ],
    tagline: "Full-stack web applications with AI built into the core, not bolted on after",
    overview:
      "I design and build complete AI-powered web applications  from architecture to deployment. These are not chatbot widgets added to existing sites. They are purpose-built products where AI is a core feature: intelligent search, automated workflows, natural language interfaces, document processing, and AI-driven personalisation. Built on Next.js, Node.js, PostgreSQL, and frontier AI APIs.",
    deliverables: [
      "Full-stack Next.js application with AI features",
      "Backend API with LLM integration",
      "User authentication and role-based access",
      "Database schema and ORM setup",
      "AI feature: chatbot, search, summarisation, generation",
      "Admin dashboard and usage analytics",
      "Stripe billing integration (for SaaS products)",
      "Production deployment with CI/CD pipeline",
    ],
    lastUpdated: "2026-06-13",
    timeline: "4 – 16 weeks",
    features: [
      {
        icon: "🏗️",
        title: "Full-Stack Architecture",
        description:
          "Next.js App Router frontend, Node.js API, PostgreSQL database, and AI API layer  designed as a cohesive system, not stitched-together parts.",
      },
      {
        icon: "🧠",
        title: "AI as a Core Feature",
        description:
          "AI is integrated at the architecture level  not a floating chatbot widget. Intelligent search, auto-classification, content generation, or natural language queries built into the product.",
      },
      {
        icon: "👤",
        title: "Auth & Multi-Tenancy",
        description:
          "Secure authentication (JWT, OAuth), user roles, and multi-tenant data isolation for SaaS products that serve multiple clients.",
      },
      {
        icon: "💳",
        title: "SaaS Billing Ready",
        description:
          "Stripe subscriptions, usage-based billing, and free trial flows  ready to monetise your AI product from day one.",
      },
      {
        icon: "📊",
        title: "Analytics & Monitoring",
        description:
          "Usage dashboards, AI cost tracking, error monitoring, and user analytics give you full visibility into how your product is performing.",
      },
      {
        icon: "🚀",
        title: "Production Deployment",
        description:
          "CI/CD pipelines, environment separation, database migrations, and hosting setup  so your product ships and stays running.",
      },
    ],
    faqs: [
      {
        q: "Which AI providers do you work with?",
        a: "Anthropic (Claude), OpenAI, and open-source models via OpenRouter, plus vector databases for retrieval-augmented generation. The provider is chosen per product based on quality for your task, latency, cost at your expected scale, and data-handling requirements not brand loyalty.",
      },
      {
        q: "Do I need my own AI team to maintain the product after launch?",
        a: "No. The AI layer is built with the same maintainability standards as the rest of the codebase documented prompts, versioned configurations, and monitoring dashboards. A general full-stack developer can maintain it, and I offer ongoing development if you would rather keep me involved.",
      },
      {
        q: "What kinds of AI-powered products can you build?",
        a: "SaaS tools with AI writing or analysis features, internal tools that process documents or emails with AI, customer-facing chatbots connected to your knowledge base, AI-powered search and recommendation engines, and automation dashboards that combine AI decisions with workflow execution.",
      },
      {
        q: "How long does it take to build an AI web application?",
        a: "A focused MVP with a single core AI feature typically takes 4 to 8 weeks. A more complete SaaS product with billing, user management, and multiple AI features takes 8 to 16 weeks. I recommend starting with an MVP to validate the concept before scaling.",
      },
      {
        q: "Can you build the whole product or just the AI part?",
        a: "Both. I can build the entire product end-to-end  design, frontend, backend, database, AI integration, billing, and deployment  or I can join your team to handle just the AI integration layer if you have other developers covering the rest.",
      },
      {
        q: "What happens after launch?",
        a: "I provide 30 days of post-launch support for bug fixes and minor changes. For ongoing feature development or maintenance, I offer retainer arrangements. I also write thorough documentation so your team can take ownership confidently.",
      },
    ],
    overviewExtended: [
      "An AI-powered product is still a product: it needs solid authentication, a fast interface, sensible data models, and infrastructure that does not fall over plus the AI layer on top. Because I build full-stack with Next.js, Node.js, and TypeScript and integrate AI models daily, you get one developer responsible for the whole thing, instead of a web team and an AI team negotiating across a gap.",
      "The AI layer gets the same engineering discipline as the rest of the stack: streaming responses so users are not staring at spinners, structured outputs so the UI never breaks on a malformed response, cost tracking per user and per feature, and graceful fallbacks when a model provider has an outage. The goal is a product that feels reliable, not a demo that impresses once.",
    ],
    processSteps: [
      {
        title: "Product scoping",
        description:
          "We define the core user problem, the role AI plays in solving it, and the smallest version of the product that proves the idea with real users.",
      },
      {
        title: "Architecture design",
        description:
          "Full-stack plan covering the web app, data models, AI provider strategy, and how costs scale with usage agreed before code is written.",
      },
      {
        title: "MVP build",
        description:
          "The complete application built with Next.js and TypeScript: auth, database, payments if needed, and the AI features wired in with streaming and structured outputs.",
      },
      {
        title: "Quality & cost tuning",
        description:
          "Prompt iteration against real usage, response-quality evaluation, latency optimisation, and per-feature cost monitoring before public launch.",
      },
      {
        title: "Launch & evolve",
        description:
          "Production deployment with analytics, then iterative improvements driven by how users actually engage with the AI features.",
      },
    ],
    engagementModels: [
      {
        title: "MVP Build",
        description:
          "Your AI product idea taken from concept to a launched, working application with a defined feature set and timeline.",
        bestFor: "Founders validating an AI product idea with real users.",
      },
      {
        title: "Ongoing Development",
        description:
          "Continuous feature development, model upgrades, and scaling work after launch, with reserved monthly capacity.",
        bestFor: "Launched products growing their user base and feature set.",
      },
      {
        title: "AI Feature Sprint",
        description:
          "A focused engagement adding one well-defined AI capability to your existing application, end to end.",
        bestFor: "Existing products adding their first AI feature.",
      },
    ],
    localAreas: [
      "I build AI products for clients across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond. Australian founders get a developer in their own timezone for daily communication, and applications are deployed to Australian or regional cloud infrastructure when latency or data residency matters to your users.",
    ],
    relatedSlugs: [
      "ai-integration-developer",
      "nextjs-react-developer-australia",
      "n8n-automation-australia",
    ],
    relatedPostSlugs: [
      "build-ai-web-app-nextjs-claude-api-2026",
      "ai-tools-fullstack-developers-2026",
    ],
    icon: "✨",
    gradient: "from-amber-500 via-orange-600 to-rose-700",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Claude API", "OpenAI API", "Stripe", "Drizzle ORM"],
  },

  // ── 6. E-Commerce Development Australia ─────────────────────────────────
  {
    slug: "ecommerce-development-australia",
    title: "E-Commerce Development Australia",
    shortTitle: "E-Commerce Development",
    metaTitle: "E-Commerce Developer Australia | Online Store Development",
    metaDescription:
      "Custom e-commerce development for Australian businesses. Fast, SEO-optimised online stores with Stripe payments, inventory management, and admin dashboards. No Shopify required.",
    keywords: [
      "ecommerce developer Australia",
      "online store developer Australia",
      "custom ecommerce development",
      "ecommerce website Australia",
      "Stripe payment integration Australia",
      "ecommerce developer Sydney",
      "build online store Australia",
      "ecommerce development Melbourne",
      "custom online shop developer",
      "ecommerce website design Australia",
    ],
    tagline: "Custom online stores built for Australian businesses  fast, secure, and SEO-ready",
    overview:
      "I build custom e-commerce platforms tailored to your business  no bloated Shopify themes, no page-builder limitations. Your store is built from scratch with Next.js for fast page loads, Stripe for secure payments, and a full admin dashboard for managing products, orders, and customers. Every store is SEO-optimised to rank for your product categories and drive organic traffic.",
    deliverables: [
      "Custom-designed product catalogue with search and filters",
      "Secure checkout with Stripe (card, Apple Pay, Google Pay)",
      "Order management and customer accounts",
      "Admin dashboard for products, orders, and inventory",
      "Email notifications for orders and shipping",
      "SEO-optimised product and category pages",
      "Mobile-optimised shopping experience",
      "Integration with shipping providers (Australia Post, etc.)",
    ],
    lastUpdated: "2026-06-13",
    timeline: "4 – 10 weeks",
    features: [
      {
        icon: "🛒",
        title: "Custom Shopping Experience",
        description:
          "Product listings, variant selection, cart, and checkout designed specifically for your brand  not a generic template.",
      },
      {
        icon: "💳",
        title: "Stripe Payments",
        description:
          "Secure card payments, Apple Pay, Google Pay, and BNPL options (Afterpay, Klarna)  with full webhook handling for reliable order processing.",
      },
      {
        icon: "📦",
        title: "Inventory & Order Management",
        description:
          "Track stock levels, manage orders, process refunds, and update product information from a clean admin interface.",
      },
      {
        icon: "🔍",
        title: "SEO-Optimised Product Pages",
        description:
          "Schema markup for products (price, availability, reviews), structured URLs, fast page loads, and sitemap generation  so your products appear in Google Shopping.",
      },
      {
        icon: "📧",
        title: "Transactional Emails",
        description:
          "Automated order confirmation, shipping updates, and abandoned cart emails with your brand's look and feel.",
      },
      {
        icon: "📊",
        title: "Sales Analytics",
        description:
          "Revenue dashboards, top-selling products, conversion tracking, and Google Analytics 4 e-commerce events  built in from the start.",
      },
    ],
    faqs: [
      {
        q: "How long does an e-commerce build take?",
        a: "A focused store with a straightforward catalogue typically launches in a few weeks; larger builds with custom integrations, complex shipping rules, or big catalogues take longer. You get a concrete timeline in the proposal, with the catalogue and checkout prioritised so the revenue-critical path ships first.",
      },
      {
        q: "Can you integrate Australian shipping carriers?",
        a: "Yes. Shipping rates and label generation can be integrated with Australia Post and major couriers, with rules for free-shipping thresholds, regional pricing, and click-and-collect if you have a physical location.",
      },
      {
        q: "Why build a custom store instead of using Shopify?",
        a: "A custom store gives you full control over design, performance, and costs. Shopify charges monthly fees plus 0.5-2% transaction fees on top of payment processing  that adds up quickly. A custom store has a higher upfront cost but lower ongoing costs and no platform lock-in.",
      },
      {
        q: "Can you integrate with my existing inventory system?",
        a: "Yes. I can integrate with Xero, MYOB, warehouse management systems, and supplier feeds to keep your inventory synchronised automatically.",
      },
      {
        q: "Do you handle GST and Australian tax rules?",
        a: "Yes. The checkout calculates GST correctly, and the admin dashboard can generate GST-ready sales reports. I recommend pairing with Xero for full accounting integration.",
      },
      {
        q: "Can you migrate my existing Shopify or WooCommerce store?",
        a: "Yes. I can migrate your product catalogue, customer data, and order history from Shopify, WooCommerce, or other platforms to your new custom store.",
      },
    ],
    overviewExtended: [
      "An online store lives or dies on two things: whether customers can find it on Google, and whether the checkout converts. Custom-built e-commerce with Next.js wins on both server-rendered product pages with structured data that show up in search and Google Shopping, and a fast, distraction-free checkout flow designed around how your customers actually buy. No theme limitations, no per-transaction platform fees stacking up as you grow.",
      "Every store is built for Australian conditions: GST handling, Australian payment preferences through Stripe, shipping rules that match how local carriers actually work, and pricing displayed the way Australian customers expect. If you are currently on Shopify or WooCommerce and hitting the platform's ceiling, I migrate stores without losing your products, customers, or search rankings.",
    ],
    processSteps: [
      {
        title: "Store strategy",
        description:
          "We map your catalogue, customer journey, payment and shipping requirements, and what is not working with your current setup if you have one.",
      },
      {
        title: "Catalogue & checkout design",
        description:
          "Product structure, search and filtering, cart behaviour, and a checkout flow designed to minimise abandonment agreed before the build.",
      },
      {
        title: "Build & integrate",
        description:
          "The store built with Next.js and Stripe, integrated with your inventory, email, and accounting tools so orders flow without manual re-entry.",
      },
      {
        title: "SEO & performance pass",
        description:
          "Product schema markup, fast page loads, clean URLs, and sitemap generation so products can appear in Google Search and Shopping results.",
      },
      {
        title: "Launch & grow",
        description:
          "Live deployment with analytics and conversion tracking, plus a support window and ongoing development as your catalogue and traffic grow.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Store Build",
        description:
          "A complete e-commerce store catalogue, cart, checkout, admin delivered for an agreed quote and timeline.",
        bestFor: "Businesses launching or replatforming their online store.",
      },
      {
        title: "Growth Retainer",
        description:
          "Monthly capacity for new features, conversion optimisation, integrations, and keeping the store fast as the catalogue grows.",
        bestFor: "Stores in active growth that ship improvements continuously.",
      },
      {
        title: "Migration Project",
        description:
          "Moving your store off Shopify, WooCommerce, or a legacy platform with products, customers, and SEO preserved.",
        bestFor: "Stores that have outgrown their current platform.",
      },
    ],
    caseStudy: {
      title: "Auto Parts E-Commerce Platform full-stack store with Stripe",
      summary:
        "A feature-rich e-commerce platform for auto parts with product catalogue, cart management, Stripe payment integration, order tracking, and an admin dashboard. Built with Next.js for fast server-side rendering and SEO, with Node.js and MongoDB powering the backend.",
      results: [
        "Complete catalogue, cart, and Stripe checkout flow",
        "Order tracking for customers and an admin dashboard for the owner",
        "Server-side rendering for fast loads and indexable product pages",
        "Built on Next.js, Node.js, and MongoDB end to end",
      ],
      projectSlug: "auto-parts-ecommerce-platform",
    },
    localAreas: [
      "I build online stores for retailers across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond. All work is delivered remotely with the same quality and communication standards. Stores are configured for Australian GST, local shipping carriers, and hosting close to your customers.",
    ],
    relatedSlugs: [
      "web-development-australia",
      "api-development-integrations",
      "ai-powered-web-applications",
    ],
    relatedPostSlugs: [
      "website-cost-australia-2026",
      "do-i-need-a-website-for-my-small-business",
    ],
    icon: "🛍️",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Drizzle ORM", "Resend"],
  },

  // ── 7. API Development & Integrations ───────────────────────────────────
  {
    slug: "api-development-integrations",
    title: "API Development & Integration Services",
    shortTitle: "API Development",
    metaTitle: "API Developer Australia | REST API & Third-Party Integration",
    metaDescription:
      "Professional API developer in Australia. Custom REST APIs, third-party integrations, and backend systems built with Node.js, Express.js, and PostgreSQL. Fast, secure, well-documented.",
    keywords: [
      "API developer Australia",
      "REST API development Australia",
      "backend developer Australia",
      "Node.js developer Australia",
      "API integration specialist Australia",
      "third-party API integration",
      "Express.js developer Australia",
      "backend development services Australia",
      "API consultant Australia",
      "Node.js backend developer",
    ],
    tagline: "Robust REST APIs and third-party integrations that power your applications",
    overview:
      "I design and build production-grade REST APIs and backend systems for web and mobile applications. Whether you need a new API from scratch, integration with third-party services like Stripe, Twilio, or HubSpot, or a backend to power your existing frontend, I deliver well-structured, documented, and tested code that your team can maintain and extend.",
    deliverables: [
      "RESTful API design following industry conventions",
      "Authentication: JWT, OAuth 2.0, API keys",
      "Third-party service integrations (Stripe, Twilio, HubSpot, etc.)",
      "Database schema design and ORM setup",
      "Input validation and error handling",
      "Rate limiting and security middleware",
      "API documentation (OpenAPI / Swagger)",
      "Unit and integration tests",
    ],
    lastUpdated: "2026-06-13",
    timeline: "2 – 8 weeks",
    features: [
      {
        icon: "🏛️",
        title: "Clean API Architecture",
        description:
          "Controller-service-repository pattern, consistent error responses, and RESTful conventions  APIs built to be maintained, not just to work once.",
      },
      {
        icon: "🔐",
        title: "Secure Authentication",
        description:
          "JWT access/refresh token flows, OAuth 2.0 with Google/GitHub, role-based access control, and API key management for external clients.",
      },
      {
        icon: "🔗",
        title: "Third-Party Integrations",
        description:
          "Stripe, Twilio, SendGrid, HubSpot, Xero, AWS S3, and more  integrated cleanly with webhook handling and retry logic.",
      },
      {
        icon: "📝",
        title: "Full API Documentation",
        description:
          "OpenAPI / Swagger documentation generated from your code so your frontend team, mobile developers, and external partners always have accurate API references.",
      },
      {
        icon: "🧪",
        title: "Tested & Reliable",
        description:
          "Unit tests for business logic and integration tests against a real test database  so you can deploy with confidence and catch regressions early.",
      },
      {
        icon: "⚡",
        title: "Performance Optimised",
        description:
          "Database query optimisation, Redis caching for hot paths, connection pooling, and pagination  APIs built to stay fast under load.",
      },
    ],
    faqs: [
      {
        q: "Do you build webhook integrations?",
        a: "Yes both consuming webhooks from third-party services (payments, CRMs, form tools) and exposing webhooks from your own systems so other software can react to your events. Webhook endpoints are built with signature verification, idempotency, and retry handling, because real-world webhook traffic is messy.",
      },
      {
        q: "Can you take over an existing API another developer built?",
        a: "Yes. I start with an audit mapping endpoints, reviewing security and error handling, and documenting what exists then stabilise the riskiest areas before adding new features. You end up with documentation and tests even if the original developer left none.",
      },
      {
        q: "What tech stack do you use for APIs?",
        a: "My primary stack is Node.js with Express.js or Fastify, TypeScript, PostgreSQL with Drizzle ORM or Prisma, and Redis for caching. For simpler projects, Next.js API routes can replace a standalone backend. I choose the stack based on your project's needs and what your team can maintain.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Yes. I regularly integrate with CRMs (HubSpot, Salesforce), accounting software (Xero, MYOB), payment providers (Stripe, PayPal), communication tools (Twilio, SendGrid), and any service with a documented API.",
      },
      {
        q: "Do you provide API documentation?",
        a: "Yes. Every API project includes OpenAPI (Swagger) documentation with request/response examples, authentication instructions, and error code references. I can also set up interactive documentation hosted alongside your API.",
      },
      {
        q: "How do you handle API security?",
        a: "Rate limiting on all endpoints, JWT with short expiry windows, refresh token rotation, input validation with Zod, parameterised queries to prevent SQL injection, CORS configuration, and HTTPS enforcement  standard practice on every project.",
      },
    ],
    overviewExtended: [
      "APIs are the plumbing of modern business software and like plumbing, you only notice them when they leak. I build REST and GraphQL APIs with Node.js and TypeScript that are versioned, documented, monitored, and secured from the first endpoint, so the systems that depend on them your website, mobile app, partners, internal tools can rely on them for years.",
      "Integration work is just as common as greenfield APIs: connecting your CRM to your billing system, syncing inventory between your store and your warehouse software, or wrapping a legacy system in a clean modern interface. I handle authentication schemes, rate limits, webhooks, retries, and the inevitable quirks of third-party APIs so data flows reliably between the tools you already use.",
    ],
    processSteps: [
      {
        title: "Integration mapping",
        description:
          "We document which systems need to talk to each other, what data flows where, and what happens today when it does not the manual workarounds tell us where the value is.",
      },
      {
        title: "API design",
        description:
          "Endpoint structure, authentication, data contracts, and error behaviour designed and reviewed before implementation, so consumers know exactly what to expect.",
      },
      {
        title: "Build & document",
        description:
          "Implementation in Node.js and TypeScript with automated tests and OpenAPI/Swagger documentation generated alongside the code.",
      },
      {
        title: "Security & load review",
        description:
          "Authentication, input validation, rate limiting, and load behaviour verified before anything is exposed to production traffic.",
      },
      {
        title: "Deploy & monitor",
        description:
          "Production deployment with logging, alerting, and uptime monitoring, so failures are caught by dashboards rather than by your customers.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope API Project",
        description:
          "A defined API or integration designed, built, documented, and deployed for an agreed quote.",
        bestFor: "A specific integration or a new API for your product.",
      },
      {
        title: "Integration Retainer",
        description:
          "Ongoing capacity for new integrations, API maintenance, and adapting to third-party API changes before they break your workflows.",
        bestFor: "Businesses whose operations depend on many connected systems.",
      },
      {
        title: "API Audit & Rescue",
        description:
          "Reviewing an existing API for security, performance, and reliability problems then fixing them.",
        bestFor: "Teams inheriting an undocumented or fragile API.",
      },
    ],
    caseStudy: {
      title: "Medical Supplier Management System APIs and integrations at the core",
      summary:
        "The supplier management platform I built for Mendoza Brothers Holdings runs on REST APIs with JWT authentication, real-time communication over Socket.io, and Excel bulk import/export integration. The API layer connects suppliers, staff, and administrators around a single source of truth.",
      results: [
        "REST API with JWT auth and role-based access control",
        "Real-time messaging via Socket.io integrated alongside the REST layer",
        "Excel import/export integration eliminated weekly manual data entry",
        "Contributed to a roughly 60% reduction in admin workload",
      ],
      projectSlug: "medical-supplier-management-system",
    },
    localAreas: [
      "Serving teams across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond  I work with the Australian SaaS tools your business already runs on: accounting, CRM, logistics. Built in your timezone, with documentation your team can pick up without a handover meeting.",
    ],
    relatedSlugs: [
      "web-development-australia",
      "n8n-automation-australia",
      "cloud-devops-australia",
    ],
    relatedPostSlugs: [
      "build-ai-web-app-nextjs-claude-api-2026",
      "case-study-medical-management-system",
    ],
    icon: "🔌",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Drizzle ORM", "Docker"],
  },

  // ── 8. Cloud & DevOps Australia ──────────────────────────────────────────
  {
    slug: "cloud-devops-australia",
    title: "Cloud & DevOps Services Australia",
    shortTitle: "Cloud & DevOps",
    metaTitle: "Cloud & DevOps Engineer Australia | AWS, Docker, CI/CD",
    metaDescription:
      "Cloud and DevOps services for Australian businesses. AWS setup, Docker containerisation, CI/CD pipelines, and production infrastructure. Reliable deployments with zero downtime.",
    keywords: [
      "DevOps engineer Australia",
      "cloud engineer Australia",
      "AWS developer Australia",
      "CI/CD pipeline Australia",
      "Docker deployment Australia",
      "DevOps consultant Australia",
      "cloud infrastructure Australia",
      "GitHub Actions CI/CD",
      "VPS setup Australia",
      "server deployment Australia",
    ],
    tagline: "Reliable cloud infrastructure and automated deployments for Australian businesses",
    overview:
      "I set up and manage the cloud infrastructure and deployment pipelines that keep your applications running reliably. From AWS EC2 and S3 configuration to Docker containerisation, GitHub Actions CI/CD pipelines, and Nginx reverse proxy setup  I build the DevOps foundation that lets your development team ship fast and your users stay happy. Every setup includes monitoring, alerting, and clear runbooks.",
    deliverables: [
      "AWS or VPS server setup and hardening",
      "Docker containerisation of your application",
      "GitHub Actions CI/CD pipeline (test, build, deploy)",
      "Nginx reverse proxy with SSL (Let's Encrypt)",
      "Environment variable management",
      "Database backup automation",
      "Uptime monitoring and alerting setup",
      "Documentation and runbook for your team",
    ],
    lastUpdated: "2026-06-13",
    timeline: "1 – 4 weeks",
    features: [
      {
        icon: "☁️",
        title: "AWS Infrastructure",
        description:
          "EC2, S3, RDS, Lambda, CloudFront  the right AWS services for your workload, configured securely and cost-efficiently.",
      },
      {
        icon: "🐳",
        title: "Docker Containerisation",
        description:
          "Your application packaged into Docker containers for consistent environments from development to production  no more 'works on my machine'.",
      },
      {
        icon: "🔄",
        title: "CI/CD Pipelines",
        description:
          "GitHub Actions workflows that run tests, build your app, and deploy automatically on every merge to main  with rollback on failure.",
      },
      {
        icon: "🔒",
        title: "SSL & Security Hardening",
        description:
          "Free SSL certificates via Let's Encrypt, firewall configuration, SSH key authentication, and security group rules  servers locked down from day one.",
      },
      {
        icon: "📊",
        title: "Monitoring & Alerts",
        description:
          "Uptime monitoring, error rate tracking, and CPU/memory alerts via UptimeRobot, Datadog, or AWS CloudWatch  you know about problems before your users do.",
      },
      {
        icon: "💾",
        title: "Automated Backups",
        description:
          "Daily database backups with point-in-time recovery, stored in S3 with lifecycle policies  so data loss is never a concern.",
      },
    ],
    faqs: [
      {
        q: "Do you offer ongoing server maintenance?",
        a: "Yes. Managed maintenance covers system updates, security patches, backup verification, certificate renewals, and responding to monitoring alerts. You get a monthly summary of what was done and the current health of the infrastructure.",
      },
      {
        q: "Can you reduce my hosting costs?",
        a: "Often, yes. Common wins include right-sizing over-provisioned servers, moving suitable workloads to managed platforms, adding caching so smaller infrastructure handles the same traffic, and eliminating services you are paying for but not using. An infrastructure review will show what is realistic for your setup before you commit to anything.",
      },
      {
        q: "Which cloud provider do you recommend?",
        a: "For most projects, AWS offers the best balance of features, reliability, and Australian region availability (Sydney). For simpler deployments, a Namecheap or DigitalOcean VPS is often more cost-effective. I recommend based on your budget, traffic, and team's familiarity.",
      },
      {
        q: "Can you migrate my existing server to a new setup?",
        a: "Yes. I regularly migrate applications from shared hosting to VPS, from VPS to AWS, or from uncontainerised deployments to Docker  with minimal downtime using blue-green or rolling deployment strategies.",
      },
      {
        q: "Do you set up SSL certificates?",
        a: "Yes. SSL is standard on every project  using Let's Encrypt for free certificates with automatic renewal, or AWS Certificate Manager for load-balanced setups.",
      },
      {
        q: "What happens if the server goes down?",
        a: "I configure uptime monitoring with immediate alerts so you (and I, during the support period) know within 60 seconds of any outage. I also document the recovery procedure clearly so your team can act quickly.",
      },
    ],
    overviewExtended: [
      "Good infrastructure is invisible: deployments happen in minutes without drama, the site stays up during traffic spikes, and nobody is SSH-ing into a server at midnight to restart something. I set up cloud hosting, CI/CD pipelines, and monitoring so your application ships continuously and fails loudly in staging instead of quietly in production.",
      "I am pragmatic about platforms. Many projects belong on Vercel or a managed platform where the operational burden disappears entirely; others need a VPS or AWS setup with Nginx, PM2, and a proper database server for cost or control reasons. I recommend based on your traffic, budget, and team and I will tell you when the boring, cheaper option is the right one.",
    ],
    processSteps: [
      {
        title: "Infrastructure review",
        description:
          "We look at what you run today hosting, deployments, backups, monitoring and identify the gaps that will hurt first as you grow.",
      },
      {
        title: "Platform recommendation",
        description:
          "A clear proposal for where your application should live and why, including realistic running-cost expectations across the options.",
      },
      {
        title: "Pipeline setup",
        description:
          "CI/CD with GitHub Actions: automated tests, preview deployments, and one-click (or fully automatic) production releases.",
      },
      {
        title: "Hardening",
        description:
          "SSL, firewalls, environment secrets management, automated backups, and uptime monitoring with alerts that reach you before customers notice.",
      },
      {
        title: "Handover & runbook",
        description:
          "Documentation of the entire setup plus a runbook for common operations, so your infrastructure is never a black box only I understand.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Setup",
        description:
          "Your hosting, deployment pipeline, and monitoring designed, built, and documented as a one-off project.",
        bestFor: "Teams putting proper infrastructure under an existing application.",
      },
      {
        title: "Managed Maintenance",
        description:
          "Ongoing monthly care: updates, security patches, backup verification, and being the person who responds when monitoring alerts fire.",
        bestFor: "Businesses that want infrastructure handled without hiring for it.",
      },
      {
        title: "Migration Project",
        description:
          "Moving your application between providers to the cloud, between clouds, or off an expensive setup with minimal downtime.",
        bestFor: "Applications outgrowing or overpaying for their current hosting.",
      },
    ],
    caseStudy: {
      title: "TourHill production infrastructure for a live booking platform",
      summary:
        "TourHill runs in production serving real bookings, on infrastructure I set up end to end: GitHub Actions for CI/CD, PM2 process management behind Nginx, PostgreSQL and Redis for data and caching, and automated deployments so changes reach production safely.",
      results: [
        "Automated CI/CD pipeline with GitHub Actions from commit to production",
        "Nginx + PM2 serving a Next.js 15 application reliably in production",
        "PostgreSQL and Redis configured for data persistence and caching",
        "Live platform at tourhill.com running on this setup today",
      ],
      projectSlug: "tourhill-europe-tour-booking-platform",
    },
    localAreas: [
      "I support Australian businesses nationwide, deploying to Australian cloud regions (AWS Sydney and equivalents) when latency for local users or data residency matters. Being in your timezone means infrastructure questions get answered during your working day  not the next morning.",
    ],
    relatedSlugs: [
      "api-development-integrations",
      "web-development-australia",
      "n8n-automation-australia",
    ],
    relatedPostSlugs: [
      "nextjs-performance-optimization-2026",
      "case-study-medical-management-system",
    ],
    icon: "☁️",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    tech: ["AWS", "Docker", "GitHub Actions", "Nginx", "PM2", "Let's Encrypt", "PostgreSQL"],
  },
]

export function getService(slug: string): Service | null {
  return services.find((s) => s.slug === slug) ?? null
}

export const BASE = BASE_URL
