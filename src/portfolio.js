/* Personal Portfolio config for Ethan Pacheco */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: false,           // set true if you want the intro animation
  animation: splashAnimation,
  duration: 2000
};

// Summary & Greeting
const illustration = { animated: true };

const greeting = {
  username: "Ethan Pacheco",
  title: "Hi, I'm Ethan",
  subTitle: emoji(
    "UCF IT senior building Android apps in Android Studio, shipping AWS labs (EC2/VPC/IAM/CloudFormation), and writing C/C++ compilers/VMs."
  ),
  // Option A: external resume link (Google Drive, etc.), OR
  // Option B: leave empty and upload src/containers/greeting/resume/resume.pdf
  resumeLink: "https://drive.google.com/file/d/1wLQgB_IS6lVue1ZtdYconOyuNdsBFQ89/view?usp=sharing",
  displayGreeting: true
};

// Social links (fill what you use; blanks are fine)
const socialMediaLinks = {
  github: "https://github.com/et432108",
  linkedin: "www.linkedin.com/in/ethan-pacheco-a7795b220",
  gmail: "ethanpacheco.elmp@gmail.com",
  twitter: "", instagram: "", facebook: "", gitlab: "", medium: "", stackoverflow: "",
  display: true
};

// Skills
const skillsSection = {
  title: "What I do",
  subTitle: "Android • Cloud • Systems",
  skills: [
    emoji("⚡ Build Android apps with Android Studio"),
    emoji("⚡ Design and deploy AWS labs: EC2, VPC, IAM, SGs, CloudWatch, CloudFormation"),
    emoji("⚡ Systems programming in C/C++ (VMs, parsers, tiny compiler projects)")
  ],
  softwareSkills: [
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Central Florida",
      subHeader: "B.S. in Information Technology",
      duration: "Aug 2021 – Present",
      desc: "Coursework: Mobile Dev (Android), Cyber Defense, Web Development, AWS Academy.",
      descBullets: ["Figma, project-based coursework, cloud labs"]
    }
  ]
};

// Proficiency bars
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Android (Java/Kotlin)", progressPercentage: "80%" },
    { Stack: "Cloud / AWS", progressPercentage: "70%" },
    { Stack: "C/C++ & Systems", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work Experience (turn on later if you have logos/descriptions)
const workExperiences = { display: false, experience: [] };

// GitHub pinned projects on the home page
const openSource = { showGithubProfile: "true", display: true };

// Big Projects (hide for now to avoid image assets; enable when ready)
const bigProjects = { title: "Projects", subtitle: "", projects: [], display: false };

// Achievements / Blogs / Talks / Podcast — hidden by default
const achievementSection = { title: "", subtitle: "", achievementsCards: [], display: false };
const blogSection = { title: "", subtitle: "", displayMediumBlogs: "false", blogs: [], display: false };
const talkSection = { title: "", subtitle: "", talks: [], display: false };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };

// Resume section toggle
const resumeSection = { title: "Resume", subtitle: "Download my resume", display: true };

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate or just say hi?",
  number: "", // optional
  email_address: "ethanpacheco.elmp@gmail.com"
};

// Twitter widget
const twitterDetails = { userName: "", display: false };

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
