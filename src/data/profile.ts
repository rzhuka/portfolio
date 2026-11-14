import type { Profile } from "../types/profile";

/** Single source of truth for the website AND the generated ATS CV. */
export const profile: Profile = {
  name: "Renalda Zhuka",
  role: "Senior Frontend Engineer & Frontend Discipline Lead",
  location: "Naxos, Greece",
  email: "zhukarenalda1@gmail.com",
  phone: "+30 694 466 1810",
  socials: {
    github: "https://github.com/rzhuka",
    linkedin: "https://www.linkedin.com/in/renalda-zhuka/",
  },
  tagline:
    "I build scalable React and Next.js applications with real-time data, secure authentication and a strong design system mindset.",
  summary:
    "Senior Frontend Engineer and Frontend Discipline Lead with 8+ years of experience in banking/payments, fintech and gaming. Lead code reviews and mentoring for the frontend team, and specialize in React, TypeScript, RxJS, Redux Toolkit, design systems, real-time UIs and i18n. Experienced in turning Figma designs into polished, responsive interfaces.",

  experience: [
    {
      company: "SISAL SPA",
      title: "Senior Frontend Developer",
      period: "Jul 2021 - Present",
      bullets: [
        "Lead the frontend discipline (past 2 years): conduct structured code reviews, mentor developers and monitor code quality, consistency and standards across the frontend team.",
        "Own frontend architecture, structure and implementation of applications built from scratch with React, TypeScript and Next.js.",
        "Design reusable, scalable component architectures and component libraries, ensuring UI consistency and maintainable code.",
        "Integrate REST APIs, gRPC and real-time data streams into responsive user interfaces.",
        "Implement Keycloak and Microsoft Entra ID authentication and authorization: token management, protected routes, roles, permissions and SSO.",
        "Translate Figma designs into responsive, production-ready interfaces and create UI designs independently when needed.",
        "Contribute to technical decisions, application maintenance and Jest unit testing across production applications.",
      ],
    },
    {
      company: "Macropay, LTD - Malta",
      title: "Frontend Engineer (Contractor, part-time)",
      period: "Dec 2021 - Sep 2025",
      location: "Malta",
      bullets: [
        "Built frontends for a payment gateway and a separate platform for PSPs and merchants, gaining hands-on knowledge of the banking and payments industry.",
        "Built scalable frontend applications with React, TypeScript and Next.js.",
        "Applied Atomic Design and advanced Redux Toolkit architecture to deliver reusable, maintainable code across multiple applications.",
        "Integrated REST APIs and WebSockets for real-time functionality and live data updates.",
        "Implemented Keycloak and Microsoft Entra ID authentication, including tokens, protected routes, roles, permissions and SSO.",
        "Contributed to Kubernetes deployments: YAML manifests, Ingress and Nginx configuration and secrets.",
        "Collaborated with backend engineers, designers and product teams to design API contracts and ship production-ready features.",
      ],
    },
    {
      company: "Business Information Technology (BIT)",
      title: "Software Developer",
      period: "Apr 2018 - Jul 2021",
      bullets: [
        "Developed and maintained web applications with a focus on maintainability and performance.",
        "Designed and implemented features across the full development and delivery cycle.",
        "Worked with cross-functional technical teams.",
      ],
    },
  ],

  projects: [
    {
      name: "Payment gateway frontend",
      description: "Frontend for a payment gateway in a banking and payments environment.",
      stack: ["React", "Next.js", "TypeScript", "Redux Toolkit"],
      highlights: [
        "Secure, role-based interfaces with Keycloak and Microsoft Entra ID authentication.",
        "Close collaboration with backend engineers on API contracts and data flows.",
      ],
    },
    {
      name: "PSP and merchant platform",
      description: "Separate platform for payment service providers and their merchants.",
      stack: ["React", "TypeScript", "Redux Toolkit", "Atomic Design"],
      highlights: [
        "Reusable component architecture shared across multiple applications.",
        "Figma designs translated into responsive, production-ready interfaces.",
      ],
    },
    {
      name: "Betting and lottery admin panels",
      description:
        "Admin panels used to configure betting and lottery products, with live configuration updates.",
      stack: ["React", "TypeScript", "gRPC", "REST"],
      highlights: [
        "Real-time configuration updates delivered to the UI through gRPC.",
        "Complex configuration forms and state management for non-technical operators.",
      ],
    },
    {
      name: "Video Cropper (open-source contribution)",
      description: "Open-source desktop tool for trimming videos, built with Angular and Tauri.",
      stack: ["Angular", "TypeScript", "Tauri"],
      highlights: [
        "Contributor to an open-source Angular application (MIT license).",
        "Source code: github.com/dmitrychurkin/video-cropper.",
      ],
    },
    {
      name: "Personal projects (GitHub: rzhuka)",
      description: "Free-time projects built to practise and explore frontend development.",
      stack: ["TypeScript", "JavaScript"],
      highlights: [
        "movieApp and bookStore (TypeScript), ecommerce and personality-test-app (JavaScript).",
        "Source code available at github.com/rzhuka.",
      ],
    },
  ],

  skills: [
    {
      group: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "RxJS",
        "React Hooks",
        "Context API",
        "Redux / Redux Toolkit",
        "Atomic Design",
        "i18n",
      ],
    },
    {
      group: "Architecture",
      items: [
        "Frontend Architecture",
        "Component Architecture",
        "Design Systems",
        "Performance Optimization",
        "Code Review",
        "Mentoring",
        "Banking and Payments Domain",
      ],
    },
    {
      group: "APIs and Auth",
      items: ["REST", "WebSockets", "gRPC", "Keycloak", "Microsoft Entra ID", "OAuth/SSO", "RBAC"],
    },
    {
      group: "Testing and Tools",
      items: ["Jest", "Git", "CI/CD", "Kubernetes", "YAML", "Nginx", "Figma"],
    },
  ],

  education: [
    {
      school: "Canadian Institute of Technology",
      degree: "MSc in Computer Engineering",
      period: "2018 - 2020",
      note: "Advanced specialization in software architecture, distributed systems, and modern software development practices.",
    },
    {
      school: "University of Tirana",
      degree: "BEng in Math and Informatics Engineering",
      period: "2014 - 2017",
      note: "Strong knowledge of software engineering, algorithms, data structures, and computational problem solving.",
    },
  ],
};
