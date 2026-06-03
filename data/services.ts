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

export interface Service {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  tagline: string
  overview: string
  deliverables: string[]
  priceRange: string
  timeline: string
  features: ServiceFeature[]
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
  icon: string
  gradient: string
  tech: string[]
}

export const services: Service[] = [
  // ── 1. Web Development Australia ─────────────────────────────────────────
  {
    slug: "web-development-australia",
    title: "Web Development Services Australia",
    metaTitle: "Web Developer Australia | Custom Website Development | Asif Hossain",
    metaDescription:
      "Professional web developer based in Wollongong, Australia. Custom websites, web apps, and digital products built with React, Next.js, and Node.js. Fast delivery, 5-star rated.",
    keywords: [
      "web developer Australia",
      "website developer Wollongong",
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
      "I build custom websites and web applications for businesses across Australia  from Wollongong and Sydney to Melbourne and beyond. Every project is built from scratch using modern technologies like React.js and Next.js, optimised for performance, mobile responsiveness, and Google search rankings. Whether you need a business website, a customer portal, or a full web application, I deliver production-ready solutions with clean code and measurable results.",
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
    priceRange: "AUD $1,200 – $8,000",
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
        q: "How much does a website cost in Australia?",
        a: "A professional custom website typically costs between AUD $1,200 for a simple business site and AUD $8,000+ for a complex web application. The price depends on the number of pages, custom features, and integrations required. I provide a detailed quote after a free discovery call.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Most business websites take 2 to 4 weeks from design approval to launch. More complex web applications with custom functionality can take 4 to 8 weeks. I provide a clear project timeline before we start.",
      },
      {
        q: "Do you work with clients outside Wollongong?",
        a: "Yes. I work with clients across Australia  Sydney, Melbourne, Brisbane, Perth, and beyond  entirely remotely. All communication is handled via video call, email, and shared project management tools.",
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
    relatedSlugs: [
      "nextjs-react-developer-australia",
      "ecommerce-development-australia",
      "api-development-integrations",
    ],
    icon: "🌐",
    gradient: "from-blue-500 via-indigo-600 to-violet-700",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
  },

  // ── 2. Next.js / React Developer Australia ───────────────────────────────
  {
    slug: "nextjs-react-developer-australia",
    title: "Next.js & React Developer Australia",
    metaTitle: "Next.js Developer Australia | React.js Expert | Asif Hossain",
    metaDescription:
      "Experienced Next.js and React developer in Australia. Server-side rendering, App Router, TypeScript, and Tailwind CSS. Fast, SEO-optimised frontends delivered on time.",
    keywords: [
      "Next.js developer Australia",
      "React developer Australia",
      "hire Next.js developer",
      "React.js developer Wollongong",
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
    priceRange: "AUD $1,500 – $10,000",
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
    relatedSlugs: [
      "web-development-australia",
      "ai-powered-web-applications",
      "api-development-integrations",
    ],
    icon: "⚛️",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
  },

  // ── 3. n8n Automation Australia ──────────────────────────────────────────
  {
    slug: "n8n-automation-australia",
    title: "n8n Workflow Automation Australia",
    metaTitle: "n8n Automation Consultant Australia | Workflow Automation | Asif Hossain",
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
      "automation consultant Wollongong",
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
    priceRange: "AUD $800 – $5,000",
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
        a: "Most clients save 5 to 20 hours of manual work per week after automation. At an average team cost of AUD $40/hour, a $2,000 automation project typically pays for itself within 2 to 5 weeks.",
      },
    ],
    relatedSlugs: [
      "ai-integration-developer",
      "ai-powered-web-applications",
      "api-development-integrations",
    ],
    icon: "⚙️",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tech: ["n8n", "Webhooks", "REST APIs", "PostgreSQL", "Claude AI", "OpenAI", "Docker"],
  },

  // ── 4. AI Integration Developer ──────────────────────────────────────────
  {
    slug: "ai-integration-developer",
    title: "AI Integration Developer Australia",
    metaTitle: "AI Integration Developer Australia | LLM API Integration | Asif Hossain",
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
    priceRange: "AUD $2,000 – $12,000",
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
    relatedSlugs: [
      "ai-powered-web-applications",
      "n8n-automation-australia",
      "api-development-integrations",
    ],
    icon: "🤖",
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
    tech: ["Anthropic API", "OpenAI API", "LangChain", "LlamaIndex", "Vercel AI SDK", "pgvector"],
  },

  // ── 5. AI-Powered Web Applications ──────────────────────────────────────
  {
    slug: "ai-powered-web-applications",
    title: "AI-Powered Web Application Development",
    metaTitle: "AI Web App Developer Australia | AI-Powered Applications | Asif Hossain",
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
    priceRange: "AUD $5,000 – $25,000",
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
    relatedSlugs: [
      "ai-integration-developer",
      "nextjs-react-developer-australia",
      "n8n-automation-australia",
    ],
    icon: "✨",
    gradient: "from-amber-500 via-orange-600 to-rose-700",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Claude API", "OpenAI API", "Stripe", "Drizzle ORM"],
  },

  // ── 6. E-Commerce Development Australia ─────────────────────────────────
  {
    slug: "ecommerce-development-australia",
    title: "E-Commerce Development Australia",
    metaTitle: "E-Commerce Developer Australia | Online Store Development | Asif Hossain",
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
      "ecommerce development Wollongong",
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
    priceRange: "AUD $3,000 – $15,000",
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
    relatedSlugs: [
      "web-development-australia",
      "api-development-integrations",
      "ai-powered-web-applications",
    ],
    icon: "🛍️",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Drizzle ORM", "Resend"],
  },

  // ── 7. API Development & Integrations ───────────────────────────────────
  {
    slug: "api-development-integrations",
    title: "API Development & Integration Services",
    metaTitle: "API Developer Australia | REST API & Third-Party Integration | Asif Hossain",
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
    priceRange: "AUD $1,500 – $10,000",
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
    relatedSlugs: [
      "web-development-australia",
      "n8n-automation-australia",
      "cloud-devops-australia",
    ],
    icon: "🔌",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Drizzle ORM", "Docker"],
  },

  // ── 8. Cloud & DevOps Australia ──────────────────────────────────────────
  {
    slug: "cloud-devops-australia",
    title: "Cloud & DevOps Services Australia",
    metaTitle: "Cloud & DevOps Engineer Australia | AWS, Docker, CI/CD | Asif Hossain",
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
    priceRange: "AUD $800 – $6,000",
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
    relatedSlugs: [
      "api-development-integrations",
      "web-development-australia",
      "n8n-automation-australia",
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
