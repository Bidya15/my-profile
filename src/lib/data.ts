import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Twitter, Codepen, Code, Database, Server, Smartphone, Palette, Settings } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Get in Touch', href: '#contact' },
];

export interface Skill {
  name: string;
  Icon: LucideIcon;
  level?: number; // Optional: for progress bars, 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', Icon: Code, level: 95 },
      { name: 'CSS3 & Tailwind', Icon: Palette, level: 90 },
      { name: 'JavaScript (ES6+)', Icon: Code, level: 90 },
      { name: 'React & Next.js', Icon: Code, level: 85 },
      { name: 'Vue.js', Icon: Code, level: 75 },
      { name: 'TypeScript', Icon: Code, level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js & Express', Icon: Server, level: 85 },
      { name: 'Python & Django/Flask', Icon: Server, level: 70 },
      { name: 'Java & Spring Boot', Icon: Server, level: 65 },
      { name: 'SQL (PostgreSQL, MySQL)', Icon: Database, level: 80 },
      { name: 'NoSQL (MongoDB, Firebase)', Icon: Database, level: 75 },
      { name: 'REST APIs & GraphQL', Icon: Settings, level: 88 },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', Icon: Smartphone, level: 70 },
      { name: 'Flutter', Icon: Smartphone, level: 60 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', Icon: Github, level: 90 },
      { name: 'Docker', Icon: Settings, level: 70 },
      { name: 'CI/CD', Icon: Settings, level: 65 },
      { name: 'VS Code', Icon: Codepen, level: 95 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Next.js, Stripe, and a custom CMS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates using Firebase.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity app',
    techStack: ['React', 'Firebase', 'Material UI', 'Node.js'],
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing skills and projects, built with Astro and Tailwind CSS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'personal website',
    techStack: ['Astro', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com',
  },
   {
    id: 'project-4',
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard providing real-time weather information using a third-party API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'weather forecast',
    techStack: ['Vue.js', 'OpenWeatherMap API', 'Chart.js'],
    demoUrl: '#',
  },
];

export interface SocialLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bidyarongpi', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bidyarongpi', Icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/bidyarongpi', Icon: Twitter },
  { label: 'Email', href: 'mailto:bidya.rongpi@example.com', Icon: Mail },
];

export const RESUME_PATH = '/resume.pdf'; // Path to your resume in the public folder
