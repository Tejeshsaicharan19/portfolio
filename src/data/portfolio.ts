// ============================================================
// Portfolio content. Edit this file to update the website.
// PLACEHOLDER values are marked and safe to replace.
// ============================================================

import deloitte from "@/assets/certificates/deloitte-data-analytics.jpg.asset.json";
import tata from "@/assets/certificates/tata-genai-data-analytics.jpg.asset.json";
import jnj from "@/assets/certificates/jnj-robotics-controls.jpg.asset.json";
import eduskillsData from "@/assets/certificates/eduskills-data-analytics-python.jpg.asset.json";
import eduskillsFullstack from "@/assets/certificates/eduskills-python-fullstack.jpg.asset.json";
import rapidminer from "@/assets/certificates/rapidminer-applications-use-cases.jpg.asset.json";

import androidVi from "@/assets/certificates/android-developer-internship.jpg.asset.json";
import cyberVi from "@/assets/certificates/cybersecurity-internship.jpg.asset.json";
import ethicalVi from "@/assets/certificates/ethical-hacking-internship.jpg.asset.json";
import aimlVi from "@/assets/certificates/ai-ml-internship.jpg.asset.json";
import cloudGameVi from "@/assets/certificates/cloud-game-development-internship.jpg.asset.json";
import nptel from "@/assets/certificates/nptel-joy-of-computing-python.jpg.asset.json";
import quantum from "@/assets/certificates/apssdc-quantum-computing.jpg.asset.json";
import pitchNight from "@/assets/certificates/google-pitch-night.jpg.asset.json";
import dcSql from "@/assets/certificates/datacamp-intro-sql.jpg.asset.json";
import dcPython from "@/assets/certificates/datacamp-intro-python.jpg.asset.json";
import dcViz from "@/assets/certificates/datacamp-data-visualization.jpg.asset.json";
import dcRelational from "@/assets/certificates/datacamp-relational-databases-sql.jpg.asset.json";
import dcCloud from "@/assets/certificates/datacamp-cloud-computing.jpg.asset.json";
import dcWarehouse from "@/assets/certificates/datacamp-data-warehousing.jpg.asset.json";
import dcDecision from "@/assets/certificates/datacamp-data-driven-decision-sql.jpg.asset.json";
import dcRedshift from "@/assets/certificates/datacamp-intro-redshift.jpg.asset.json";
import dcPytorch from "@/assets/certificates/datacamp-deep-learning-pytorch.jpg.asset.json";
import dcApplyingSql from "@/assets/certificates/datacamp-applying-sql.jpg.asset.json";
import dcPostgres from "@/assets/certificates/datacamp-postgresql-databases.jpg.asset.json";
import dcLlama from "@/assets/certificates/datacamp-llama-3.jpg.asset.json";
import dcDbt from "@/assets/certificates/datacamp-intro-dbt.jpg.asset.json";
import dcOop from "@/assets/certificates/datacamp-intermediate-oop-python.jpg.asset.json";


export const profile = {
  firstName: "PEDAPUDI",
  lastName: "TEJESH SAI CHARAN",
  title: "Computer Science & Engineering Student",
  focus: ["AI", "Data Analytics", "Python", "Software Development"],
  intro:
    "Motivated and enthusiastic Computer Science student with a strong foundation in technology and problem-solving, passionate about building intelligent applications and solving real-world problems through technology.",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "pedapuditejesh@gmail.com",
  phone: "+91 9676678919",
  // PLACEHOLDER — replace with your real profile URLs
  github: "#github-placeholder",
  linkedin: "#linkedin-placeholder",
  // PLACEHOLDER — put your resume PDF in the public folder as resume.pdf
  resume: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I am pursuing a B.Tech in Computer Science & Engineering at Dadi Institute of Engineering and Technology, Visakhapatnam. My interests sit at the intersection of Artificial Intelligence, Data Analytics and practical software development.",
    "I learn by building. My work spans an IoT study environment, an agentic AI resume analyzer and a Flutter personal finance app — each one an exercise in taking an idea from problem statement to working product.",
    "Alongside coursework I complete virtual internships and industry job simulations, publish conference abstracts, earn technical certifications and stay active in community and campus initiatives.",
  ],
  highlights: [
    { label: "B.Tech CSE Student", value: "2023 – Present" },
    { label: "Major Projects", value: "3" },
    { label: "Virtual Internships", value: "6" },
    { label: "Industry Job Simulations", value: "3" },
    { label: "Conference Publications", value: "2" },
    { label: "Technical Certifications", value: "20+" },
  ],
};

export const skillGroups = [
  {
    name: "Programming Languages",
    items: ["Python", "Java", "HTML"],
  },
  {
    name: "Frameworks & Libraries",
    items: ["Pandas", "NumPy", "Keras", "PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    name: "AI & Data Tooling",
    items: ["Streamlit", "LangGraph", "LangChain", "Gemini API", "FAISS", "Power BI"],
  },
  {
    name: "Mobile & Backend",
    items: ["Flutter", "Dart", "Firebase", "REST API", "Android Studio"],
  },
  {
    name: "Tools & Platforms",
    items: ["MySQL", "Git", "VS Code", "MS Office"],
  },
  {
    name: "Hardware & IoT",
    items: ["Arduino", "IoT Sensors"],
  },
];

export type Project = {
  name: string;
  subtitle?: string;
  duration?: string;
  description: string;
  tech: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    name: "Smart Study Desk",
    duration: "February – March 2026",
    description:
      "An innovative IoT-based system designed to enhance productivity, comfort, and focus for students and professionals. By integrating multiple sensors and real-time feedback mechanisms, the desk creates an intelligent study environment that adapts to the user's needs.",
    tech: [
      "Arduino Uno",
      "DHT11",
      "LDR",
      "Ultrasonic Sensor HC-SR04",
      "IR Sensor",
      "OLED/LCD",
      "Buzzer",
      "LEDs",
      "IoT",
    ],
    repo: "#repository-placeholder",
  },
  {
    name: "Resume Analyzer",
    subtitle: "AI-Powered Agentic Resume Analyzer",
    duration: "April – May 2026",
    description:
      "Developed a multi-agent AI application that performs ATS scoring, resume parsing, skill gap analysis, RAG-based question answering, and ML-powered shortlisting prediction through an interactive Streamlit interface.",
    tech: ["Python", "Streamlit", "LangGraph", "LangChain", "Gemini API", "FAISS", "Scikit-learn"],
    repo: "#repository-placeholder",
  },
  {
    name: "WalletGuard",
    subtitle: "Android App for Efficient Personal Finance Tracking and Performance Evaluation",
    description:
      "An AI-powered personal finance management mobile application that helps users securely track income and expenses, monitor spending habits, and receive intelligent financial insights.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Ollama",
      "REST API",
      "Android Studio",
      "VS Code",
      "Git",
    ],
    repo: "#repository-placeholder",
  },
];

export const experience = [
  {
    role: "AI-ML Virtual Internship",
    org: "Google for Developers",
    period: "October – December 2024",
  },
  {
    role: "Cybersecurity Virtual Internship",
    org: "Palo Alto Networks",
    period: "January – March 2025",
  },
  {
    role: "Ethical Hacking Virtual Internship",
    org: "EduSkills",
    period: "April – June 2025",
  },
  {
    role: "Android Developer Virtual Internship",
    org: "Google for Developers",
    period: "July – September 2025",
  },
  {
    role: "Cloud Game Development Virtual Internship",
    org: "AWS",
    period: "October – December 2025",
  },
  {
    role: "Python Full-Stack Developer Virtual Internship",
    org: "EduSkills",
    period: "January – March 2026",
  },
];

export const certificateCategories = [
  "Industry Job Simulations",
  "Internships",
  "Technical Certifications",
  "Courses",
  "Competitions / Participation",
] as const;

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  category: (typeof certificateCategories)[number];
  // Optional image of the certificate. Add files to public/certificates/
  // and set image: "/certificates/your-file.jpg"
  image?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "March 3, 2026",
    category: "Industry Job Simulations",
    image: deloitte.url,
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    date: "April 8, 2026",
    category: "Industry Job Simulations",
    image: tata.url,
  },
  {
    title: "Robotics and Controls Job Simulation",
    issuer: "Johnson & Johnson MedTech / Forage",
    date: "June 28, 2026",
    category: "Industry Job Simulations",
    image: jnj.url,
  },
  {
    title: "Data Analytics with Python — Internship Certificate",
    issuer: "EduSkills",
    date: "8-week program",
    category: "Internships",
    image: eduskillsData.url,
  },
  {
    title: "Python Full-Stack — Internship Certificate",
    issuer: "EduSkills",
    date: "10-week program",
    category: "Internships",
    image: eduskillsFullstack.url,
  },
  {
    title: "Applications & Use Cases Professional Certification",
    issuer: "RapidMiner (An Altair Company)",
    date: "Professional level",
    category: "Technical Certifications",
    image: rapidminer.url,
  },

  {
    title: "Android Developer Virtual Internship",
    issuer: "National Internship Portal / EduSkills",
    date: "July – September 2025",
    category: "Internships",
    image: androidVi.url,
  },
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "National Internship Portal / EduSkills",
    date: "January – March 2025",
    category: "Internships",
    image: cyberVi.url,
  },
  {
    title: "Ethical Hacking Virtual Internship",
    issuer: "National Internship Portal / EduSkills",
    date: "April – June 2025",
    category: "Internships",
    image: ethicalVi.url,
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "National Internship Portal / EduSkills",
    date: "October – December 2024",
    category: "Internships",
    image: aimlVi.url,
  },
  {
    title: "Cloud Game Development Virtual Internship",
    issuer: "National Internship Portal / EduSkills",
    date: "October – December 2025",
    category: "Internships",
    image: cloudGameVi.url,
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "July – October 2025",
    category: "Technical Certifications",
    image: nptel.url,
  },
  {
    title: "Quantum Computing",
    issuer: "APSSDC / Skill AP",
    date: "February 9 – 13, 2026",
    category: "Technical Certifications",
    image: quantum.url,
  },
  {
    title: "Pitch Night Edition",
    issuer: "Google Student Ambassador Program",
    date: "May 23, 2026",
    category: "Competitions / Participation",
    image: pitchNight.url,
  },
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    date: "August 26, 2026",
    category: "Courses",
    image: dcSql.url,
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "August 27, 2026",
    category: "Courses",
    image: dcPython.url,
  },
  {
    title: "Understanding Data Visualization",
    issuer: "DataCamp",
    date: "August 27, 2026",
    category: "Courses",
    image: dcViz.url,
  },
  {
    title: "Introduction to Relational Databases in SQL",
    issuer: "DataCamp",
    date: "August 27, 2026",
    category: "Courses",
    image: dcRelational.url,
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcCloud.url,
  },
  {
    title: "Data Warehousing Concepts",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcWarehouse.url,
  },
  {
    title: "Data-Driven Decision Making in SQL",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcDecision.url,
  },
  {
    title: "Introduction to Redshift",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcRedshift.url,
  },
  {
    title: "Introduction to Deep Learning with PyTorch",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcPytorch.url,
  },
  {
    title: "Applying SQL to Real-World Problems",
    issuer: "DataCamp",
    date: "August 28, 2026",
    category: "Courses",
    image: dcApplyingSql.url,
  },
  {
    title: "Creating PostgreSQL Databases",
    issuer: "DataCamp",
    date: "August 29, 2026",
    category: "Courses",
    image: dcPostgres.url,
  },
  {
    title: "Working with Llama 3",
    issuer: "DataCamp",
    date: "August 29, 2026",
    category: "Courses",
    image: dcLlama.url,
  },
  {
    title: "Introduction to dbt",
    issuer: "DataCamp",
    date: "August 30, 2026",
    category: "Courses",
    image: dcDbt.url,
  },
  {
    title: "Intermediate Object-Oriented Programming in Python",
    issuer: "DataCamp",
    date: "August 30, 2026",
    category: "Courses",
    image: dcOop.url,
  },
];


export const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    school: "Dadi Institute of Engineering and Technology",
    period: "2023 – Present",
    score: "CGPA: 7.11",
  },
  {
    degree: "Intermediate – MPC",
    school: "Ascent Junior College",
    period: "2021 – 2023",
    score: "Percentage: 55.2%",
  },
  {
    degree: "10th Class – SSC",
    school: "Sri Chaitanya Techno Curriculum",
    period: "2023",
    score: "Percentage: 99.3%",
  },
];

export const achievements = [
  {
    title: "Best Volunteer of the Department",
    org: "Presented by Computer Society of India (CSI)",
    date: "March 2026",
  },
];

export const publications = [
  {
    title: "Smart Task Delegator",
    detail: "Published as an abstract at the national conference NCTCT-2K26.",
  },
  {
    title: "Hydraulic Elevator",
    detail: "Published as an abstract at the national conference NCTCT-2K25.",
  },
];

export const volunteering = [
  {
    title: "Community Service Project — Food Habits",
    period: "April & May 2025",
    detail: "Conducted an 8-week Food Habits awareness camp.",
  },
  {
    title: "DIET Volunteer Club (DVC)",
    period: "College Event Member",
    detail: "Supporting the planning and execution of college-level events and activities.",
  },
  {
    title: "Vizag Volunteer",
    period: "Active Member",
    detail: "Contributing to community service and social outreach initiatives in Visakhapatnam.",
  },
];

export const membership = {
  org: "Computer Society of India (CSI)",
  role: "Event Analyst Member",
  responsibilities: [
    "Event analysis",
    "Report preparation",
    "Designing Google Forms for data collection",
  ],
};

export const hobbies = ["Listening to music", "Watching movies", "Travelling", "Photography"];
export const languages = ["English", "Telugu", "Hindi"];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "publications", label: "Publications" },
  { id: "volunteering", label: "Volunteering" },
  { id: "contact", label: "Contact" },
];
