// ============================================================
// portfolioData.js — Centralized configuration for Saurav Sunil's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Saurav Sunil",
  firstName: "Saurav",
  brandName: "SAURAV SUNIL",
  title: "FULL STACK SOFTWARE DEVELOPER",
  location: "Kerala, India",
  phone: "+971 545276273, +91 8289894550",
  emails: {
    primary: "sauravsunil005@gmail.com",
    secondary: "sauravsunil003e@gmail.com",
  },
  summary:
    "I'm a versatile Software Engineer & Web Application Dev, independent builder passionate about turning complex ideas into reality. With over four years of experience across different domains—like healthcare, fintech, and banking—I love designing autonomous automation tools, algorithmic bots, and scalable platforms that solve real-world problems.",
  resumeUrl: "/Saurav_Sunil_FullStack_Developer_Resume.pdf",
};

export const socialLinks = {
  github: "",
  linkedin: "http://www.linkedin.com/in/sauravsunil003",
  instagram: "https://www.instagram.com/saurrav_",
};

export const heroContent = {
  greeting: "Hi, I'm SAURAV SUNIL",
  titleHighlight: "FULL STACK SOFTWARE ENGINEER",
  subtitle:
    "Adaptive Full Stack Software Engineer & Application Developer. A fast learner driven by curiosity.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sauravsunil005@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Saurav,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Saurav_Sunil_FullStack_Developer_Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me!",
  bio: {
    //before: "Hi, my name is",
    name: "Full-Stack Software Engineer & Application Developer",
    after: "based in Kerala, India. Dedicated to architecting clean, scalable full-stack applications with hands-on experience in LMS(Legal Management System) and EMR(Electronic Medical Record) domains.",
  },
  techStack: ["Django", "ASP.NET MVC ", "Laravel"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Engineering Ideas into Scalable Software Solutions",
  description:
    "",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Start by thoroughly understanding what I am trying to build, including user requirements and technical constraints, to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Draw a rough UI layout to determine where user needs will be met, and then I design a prototype based on that layout.",
    },
    {
      number: "03",
      title: "Develop",
      text: "After the UI is approved, I build scalable backends—ensuring protection against the OWASP Top 10 vulnerabilities and implementing robust user data sanitization—alongside responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Begin by executing unit tests and verifying business logic, Optimize the code for peak performance, and conduct a final Security check before seamlessly deploying to cloud infrastructure and providing ongoing support.",
    },
  ],
  endText: "Ready to launch! 🚀",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Full Stack",
      skills: [

        { name: "HTML", level: 95 },
        { name: "React.Js", level: 70 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "Bootstrap5", level: 95 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", level: 95 },
        { name: "Flask", level: 80 },
        { name: "ASP.NET MVC", level: 95 },
        { name: "Laravel", level: 90 },

      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "MySQL", level: 95 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python3", level: 95 },
        { name: "C#", level: 85 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "PHP", level: 85 },
      ]
    },

    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 95 },
        { name: "Vercel", level: 95 }
      ]
    },
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "SESAME SOFTWARE SOLUTIONS, SPERIDIAN TECHNOLOGIES, INDIA",
    role: "Jr.SOFTWARE ENGINEER",
    duration: "2021 - 2023",
    skills: ["LMS Integration", "Data Analytics",
      "Web Application Development",
      "Data Synchronization",
      "Application Security",
      "Requirement Gathering",
      "L1/L2 Production Support",
      "Technical Documentation",
      "API Integration"],
    tech: ["Django", "MySQL", "JavaScript (ES6+)", "Bootstrap5"]
  },
  {
    organization: "TAFABOT IT INFRASTRUCTURE LLC, DUBAI",
    role: "SOFTWARE ENGINEER",
    duration: "2023 - 2025",
    skills: ["Fintech Development",
      "Algorithmic Trading Infrastructure",
      "API Architecture & Integration",
      "End-to-End Backend Integration",
      "Algorithm Design",
      "Creative Problem Solving",
      "L1 Production Support",
      "System Migration",
      "Polyglot Software Development"
    ],
    tech: ["Laravel",
      "Django (DRF)",
      "RESTful APIs",
      "JavaScript ES6+",
      "digitalocean",
      "MySQL"]
  },
  {
    organization: "EXTERN TECHNOLOGY, KAREOMED, ABU DHABI",
    role: "SOFTWARE ENGINEER",
    duration: "since 2025",
    skills: ["EMR Integration",
      "Data Analytics & Visualization",
      "Application Security (OWASP Top 10)",
      "Vulnerability Remediation",
      "Cross-System Data Exchange",
      "Product Innovation & Prototyping",
      "L1/L2 Production Support",
      "Generative AI & RAG Integration",
      "Polyglot Software Development"],
    tech: ["ASP.NET MVC",
      "JavaScript ES6+",
      "Chart.js",
      "MySQL",
      "Bootstrap5", "Python"
    ]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Curious", icon: "🤔", desc: "Always eager to learn new technologies and explore different domains and experiments." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and technologies" },
  { name: "Creativity", icon: "🎨", desc: "Like to do experiments in creative ways to make it unique " },
  { name: "Time Management", icon: "⏰", desc: "Balancing work and passion, learning new things." }
];

export const projects = [
  {
    id: "foodmesh",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Autonomous Resource Management | Cron Pilot 2026",
    description: `
    【✪】 Architected a developer-centric UI dashboard for real-time log monitoring and precision crontab management, eliminating reliance on external VPS/cloud infrastructure.
    【✪】 Engineered a native bridge between Android and Termux, enabling seamless execution of polyglot binaries (Rust, Go, Python3, Node.js) on mobile ARM hardware as an independent automation node.
    【✪】 Localized system infrastructure to transform mobile ARM hardware into an independent automation node, eliminating reliance on external VPS and cloud server costs.
    【✪】 Built a modular execution engine designed for rapid deployment of new language environments and custom automation workflows.
    【✪】 The upcoming release will introduce advanced GenAI (RAG) capabilities, including an in-app prompt-to-code generator, AI-driven cron schedule recommendations, and a built-in code editor.
    `,
    techTags: [
      "Flutter",
      "Material 3",
      "React (prototype design)",
      "Termux IPC",
      "Prompt Engineering",
      "Android storage",
    ],
    links: {
      demo: 'https://apkpure.net/cronpilot/com.kairosfortis.cronpilot',
    },
    isFlagship: true,
  },
  {
    id: "karigar",
    number: "02",
    badge: null,
    title: "Algorithmic Crypto Trading Bot | Astra 2024",
    description: `
    【✪】 Algorithmic Hedging Strategy: Engineered an automated script that opens simultaneous long (buy) and short (sell) positions to capture profits from short-term market breakouts during consolidation phases.
    【✪】 Volatility-Driven Take-Profits: Implemented a multi-tiered take-profit mechanism targeting a base $5 return per asset, while dynamically scaling profits higher during sudden, high-momentum market movements.
    【✪】 Time-Based Market Analysis: Optimized order execution timing by identifying and targeting specific low-volatility windows (1 AM – 5 AM GST) when market prices consistently moved sideways.
    【✪】 Risk Evaluation & Optimization: Analyzed and documented critical system drawbacks, such as the absence of a hard stop-loss and dealing with negative unrealized PnL, to map out future drawdown protection upgrades.
    【✪】 Live Strategy Validation: Successfully ran the automated bot live for 3 months, scaling a $100 starting capital base to over $600 through disciplined execution of the automated hedging strategy.`,
    techTags: ["Python3", "Binance REST APIs", "MySQL", "DigitalOcean"],
    links: {
      //github: "https://github.com/sauravsunil/Astra",
      //frontendDemo: "https://karigar-frontend.onrender.com",
      //backendApi: "https://karigar-zny2.onrender.com",
    },
    isFlagship: false,
  },
  {
    id: "sentiment-analysis",
    number: "03",
    badge: "🚀 Flagship Project",
    title: "AI-Powered EMR System – CIBERNETICO (2020)",
    description: `
    【✪】 Full-Stack Architecture: Engineered a complete Electronic Medical Record (EMR) system using Django, establishing a secure, scalable web infrastructure for clinic management.
    【✪】 Deep Learning Integration: Built and deployed PyTorch Convolutional Neural Networks (CNN) to automate the detection of pneumonia, lung cancer, and breast cancer from medical imaging data.
    【✪】 Enhanced Diagnostic Accuracy: Reduced diagnostic turnaround times and enhanced overall clinical accuracy by training deep learning models on specialized Kaggle datasets.
    【✪】 Built a responsive frontend dashboard utilizing modern JavaScript (ES6+), Bootstrap 5, and Material Design principles.`,
    techTags: ["Python3", "JavaScript ES6+", "Bootstrap5", "SQLite & PostgreSQL", "Kaggle (Model training)", "REST API"],
    links: {
      // github: "#", // Update when available
    },
    isFlagship: true,
  },
];

export const certificates = {
  featured: [
    {
      name: "Google Cloud Fundamentals: Core Infrastructure 2019",
      issuer: "Google",
      icon: "☁️",
      url: "https://www.coursera.org/account/accomplishments/verify/HSMEJ42CHBKM"
    },
    {
      name: "Bachelor of Technology | BTech, Computer Science 2020",
      issuer: "Ponnaiyah Ramajayam Institute of Science & Technology : 234CEM82061",
      icon: "👨🏻‍🎓",
      url: ""
    },
    {
      name: "Advanced Penetration Tester 2024",
      issuer: "RedTeam Hacker Academy",
      icon: "👨🏻‍💻",
      url: "https://www.khda.gov.ae/KHDASchool/VerificationPages/TI_Attestation_Verfication.aspx?id=OwKRopKOBlSlAgmu0N9rZ0jHWLIrUuY6Efl7bAQwzhdHuImu"
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

// export const education = {
//   degree: "B.Tech – Computer Science & Engineering",
//   institution: "IES College of Technology (RGPV)",
//   cgpa: "8.35",
//   graduation: "2020",
//   twelfth: "12th Science – 81%",
//   tenth: "10th CBSE – 75%",
// };

export const footerContent = {
  taglines: [
    "Full Stack Software Engineer & Web Application Dev",
    "Python · PHP · C# · Polyglot"
  ],
  //credential: "B.Tech Computer Science· ",
  // copyright: `© ${new Date().getFullYear()} sauravsunil | Built with React`,
};

// EmailJS Configuration
// Keys are read exclusively from environment variables.
// Never commit real credentials to source code.
// Copy .env.example to .env and fill in your values.
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};
