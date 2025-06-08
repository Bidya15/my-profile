import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Twitter, Codepen, Code, Database, Server, Smartphone, Palette, Settings } from 'lucide-react';
import React from 'react';

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

// Simple Brand Icon Components
const Html5BrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M71.35 460.81L32 0h448l-39.38 460.69L256.14 512zM132 153.29h247.9l7.5-88.64H124.46zm14.33 138.86h89.47l6.63-74.12h-93.5l-8.52-95.09h251.26l-23.82 265.49-114.38 31.96-115.11-32.05z"/></svg>
);

const Css3BrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}><path d="M71.35 460.81L32 0h448l-39.38 460.69L256.14 512zM392.54 153.3H172.46l-8.52-95.09h236.6zM256 429.35l115.11-32.05 15.3-171.21H256z"/></svg>
);

const JavaScriptBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 512 512" {...props}><path fill="#F7DF1E" d="M0 0h512v512H0z"/><path d="M324.28 412.58c8.53 14.07 28.75 24.58 50.15 24.58 17.9 0 29.82-6.9 29.82-17.03 0-12.65-11.93-16.18-32.05-22.82l-13.8-4.6c-34.28-11.92-57.22-34.27-57.22-72.9 0-38.63 29.82-68.95 74.65-68.95 31.18 0 54.12 9.4 71.18 33.4L424.3 325.3c-7.68-12.65-18.78-18.77-33.4-18.77-12.65 0-21.95 6.03-21.95 14.7 0 10.27 9.4 14.7 27.12 21.08l13.8 4.6c40.32 13.8 62.55 35.97 62.55 76.88 0 43.87-34.28 72.02-80.82 72.02-45.7 0-74.65-21.95-88.4-49.28zm-119.85-5.46c6.9 11.05 17.03 19.65 30.32 19.65 13.52 0 21.07-5.15 21.07-24.58V251.1h53.25V424.6c0 43-28.75 62.55-72.9 62.55-39.48 0-66.72-22.82-79.12-44.72z"/></svg>
);

const ReactBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextJsBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 128 128" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM39.5291 101.37L79.0918 45.3213H90.042V101.37H79.0918V57.6787L43.5188 108.749C40.6973 108.355 38.0336 107.576 35.5342 106.435C37.5218 104.912 38.6946 103.204 39.5291 101.37Z" fill="currentColor"/></svg>
);

const TailwindBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 250 250" {...props}><path fill="#38BDF8" d="M125 0C55.964 0 0 55.964 0 125s55.964 125 125 125 125-55.964 125-125S194.036 0 125 0z"/><path fill="#fff" d="M80.178 131.696c-3.134 0-6.036-1.125-8.179-3.268s-3.268-5.045-3.268-8.179c0-3.134 1.125-6.036 3.268-8.179s5.045-3.268 8.179-3.268c3.964 0 7.857 1.571 10.714 4.429s4.429 6.75 4.429 10.714c0 3.964-1.571 7.857-4.429 10.714s-6.75 4.429-10.714 4.429zm89.643 0c-3.134 0-6.036-1.125-8.179-3.268s-3.268-5.045-3.268-8.179c0-3.134 1.125-6.036 3.268-8.179s5.045-3.268 8.179-3.268c3.964 0 7.857 1.571 10.714 4.429s4.429 6.75 4.429 10.714c0 3.964-1.571 7.857-4.429 10.714s-6.75 4.429-10.714 4.429zM125 80.178c-12.375 0-24.286 4.911-33.036 13.661s-13.661 20.661-13.661 33.036c0 12.375 4.911 24.286 13.661 33.036s20.661 13.661 33.036 13.661c12.375 0 24.286-4.911 33.036-13.661s13.661-20.661 13.661-33.036c0-12.375-4.911-24.286-13.661-33.036s-20.661-13.661-33.036-13.661z"/></svg>
);

const NodeJsBrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}><path fill="#339933" d="M11.99 23.952c-.347 0-.694-.047-.98-.14L1.317 20.35c-.933-.31-1.55-1.22-1.55-2.2V5.795c0-.978.617-1.888 1.55-2.198L10.96.136c.59-.205 1.45-.205 2.04 0l9.643 3.46c.933.31 1.55 1.22 1.55 2.198v12.358c0 .978-.617 1.888-1.55 2.198l-9.643 3.46c-.328.093-.635.14-.98.14z"/><path fill="#FFF" d="M12.32 5.346c-1.396 0-2.427.354-3.295 1.063c-.867.708-1.34 1.739-1.34 3.012v4.576c0 1.273.495 2.282 1.383 2.99c.887.708 1.983 1.062 3.273 1.062c1.247 0 2.362-.354 3.19-.998c.828-.644 1.286-1.63 1.286-2.926V9.288h-3.054v5.33c0 .59-.164.998-.495 1.222c-.33.224-.77.336-1.32.336c-.528 0-.97-.112-1.287-.336c-.316-.224-.475-.632-.475-1.222V9.512c0-.612.158-1.019.475-1.223c.316-.204.76-.306 1.287-.306c.55 0 .99.102 1.32.306c.33.204.495.611.495 1.223v1.36h3.054V9.42c0-1.273-.458-2.304-1.286-3.012c-.828-.709-1.943-1.063-3.19-1.063z"/></svg>
);


export interface Skill {
  name: string;
  Icon: LucideIcon;
  level?: number; // Optional: for progress bars, 0-100
  BrandIconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', Icon: Code, level: 95, BrandIconComponent: Html5BrandIcon },
      { name: 'CSS3 & Tailwind', Icon: Palette, level: 90, BrandIconComponent: TailwindBrandIcon },
      { name: 'JavaScript (ES6+)', Icon: Code, level: 90, BrandIconComponent: JavaScriptBrandIcon },
      { name: 'React & Next.js', Icon: Code, level: 85, BrandIconComponent: NextJsBrandIcon },
      { name: 'Vue.js', Icon: Code, level: 75 },
      { name: 'TypeScript', Icon: Code, level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js & Express', Icon: Server, level: 85, BrandIconComponent: NodeJsBrandIcon },
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
      { name: 'React Native', Icon: Smartphone, level: 70, BrandIconComponent: ReactBrandIcon },
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
