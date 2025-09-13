import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import NoteVibe from "@/public/NoteVibe (2).png"
import V from "@/public/v.jpeg"
import College from "@/public/college.jpeg"
import codeBunny from "@/public/codeBunny.png"
import radixUI from "@/public/radixUI.jpg"
import Clerk from "@/public/Clerk.jpeg"
import html from '@/public/html.png'
import css from '@/public/css.png'

import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'

import javascript from '@/public/javascript.png'

import java from '@/public/java.png'

import git from '@/public/git.png'

import mysql from '@/public/mysql.png'
import DrawFlow from "@/public/DrawFlow.png"

import videoChat from "@/public/videoChat.png"
import convex from "@/public/convex.jpeg"
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import villa from '@/public/villa.png'
import warriors from '@/public/warriors.png'
import boxd from '@/public/boxd.png'
import atcq from '@/public/atcq.png'
import vercel from '@/public/vercel.png'

import Router from "@/public/Router.png"

import giants from '@/public/giants.png'

import niners from '@/public/49ers.png'
import socketIO from "@/public/socket.IO.png"

import youtubeLite from "@/public/Youtube Lite.png"
import Redux from "@/public/redux.png"

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  // {
  //   hash: '#about',
  //   label: 'About',
  // },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#experience',
    label: 'Experience',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/sankha-subhra-moitra-929428228/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/sankha4567',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:ssankha103@gmail.com',
  },
] as const



export const skills = [
  {
    name: 'TypeScript',
    image: typescript,
  },
  {
    name: 'Clerk',
    image: Clerk,
  },
  {
    name: 'Convex',
    image: convex,
  },

  {
    name: 'Java',
    image: java,
  },
  
  {
    name: 'SQL',
    image: sql,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'Tailwind CSS',
    image: tailwind,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'Javascript',
    image: javascript,
  },
  {
    name: 'Express.js',
    image: express,
  },
  {
    name: 'Node.js',
    image: node,
  },
  {
    name: 'Prisma',
    image: prisma,
  },
  
  {
    name: 'MySQL',
    image: mysql,
  },
  
  
  {
    name: 'Vercel',
    image: vercel,
  },
  {
    name: 'Git',
    image: git,
  },
] as const

export const projects = [
  {
    name: 'NoteVibe Notes App',
    image: NoteVibe,
    description:
      "NoteVibe Notes App – A full-stack collaborative notes application built with Next.js 13, React, Convex, and Tailwind CSS. The platform features real-time database synchronization, Clerk-powered authentication, and secure file management to ensure smooth user experiences. It offers a responsive and theme-switchable UI with dark/light modes, nested document organization, and file recovery options, enhancing usability and improving overall engagement.",
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: next,
        alt: 'next.js',
      },
      {
        src: react,
        alt: 'react',
      },
      { src: tailwind, alt: 'tailwind' },
      {
        src: convex,
        alt: 'Convex',
      },
      {
        src: Clerk,
        alt: 'Clerk',
      },
      {
        src: vercel,
        alt: 'vercel',
      },
    ],
    tags: [],
    link: 'https://notevibing.sankha.space/',
    code: 'https://github.com/sankha4567/NoteVibing',
  },
  {
    name: 'YoutubeLite Video App',
    image: youtubeLite,
    description:
      'YouTube Lite App – A lightweight video streaming platform built with React, Redux Toolkit, and TailwindCSS, featuring real-time video data from the YouTube API, dynamic routing, debounced search, lazy loading with shimmer effects, and a responsive sidebar for seamless navigation and scalable performance.',
    tech: [
      {
        src: react,
        alt: 'react',
      },
      {
        src: javascript,
        alt: 'Javascript',
      },
      {
        src: tailwind,
        alt: 'Tailwind Css',
      },
      {
        src: Redux,
        alt: 'Redux',
      },
      {
        src: Router,
        alt: 'Router',
      },
    ],
    tags: [],
    link: 'https://youtubelite.sankha.space/',
    code: 'https://github.com/sankha4567/YoutubeLite',
  },
  {
    name: 'Video Chat Platform',
    image: videoChat,
    description:
      'Video Chat Platform – A real-time communication app built with Next.js, WebRTC, and Socket.IO, enabling one-click video calls, seamless screen sharing, and stable peer-to-peer connections with perfect negotiation.',
    tech: [
      {
        src: next,
        alt: 'Next.js',
      },
      {
        src: typescript,
        alt: 'TypeScript',
      },
      {
        src: node,
        alt: 'Node.js',
      },
      {
        src: tailwind,
        alt: 'Tailwind Css',
      },
      {
        src: socketIO,
        alt: 'socket.IO',
      }
    ],
    link: 'https://videochat.sankha.space/',
    code: 'https://github.com/sankha4567/Video-Chat-Platform',
  },
  {
    name: 'DrawFlow',
    image: DrawFlow,
    description:
      'Drawflow – A real-time collaborative drawing tool built with React, Vite, Express, and Socket.IO, featuring intuitive diagramming with shapes, layers, color customization, opacity control, zooming, undo/redo, export/import, and seamless multi-user collaboration.',
    tech: [
      {
        src: react,
        alt: 'React',
      },
      {
        src: node,
        alt: 'Node.js',
      },
      {
        src: express,
        alt: 'Express.js',
      },
      {
        src: javascript,
        alt: 'JavaScript',
      },
      {
        src: socketIO,
        alt: 'socket.IO',
      }
    ],
    link: 'https://drawflow.sankha.space/',
    code: 'https://github.com/sankha4567/Drawflow',
  },
  {
    name: 'codeBunny - Code Formatter',
    image: codeBunny,
    description:
      'codeBunny transforms your source code into stunning, shareable images with customizable themes, fonts, and backgrounds—perfect for developers and tutorials.',
    tech: [
      {
        src: typescript,
        alt: 'typescript',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: next,
        alt: 'next',
      },
      {
        src: tailwind,
        alt: 'tailwind',
      },
      {
        src: radixUI,
        alt: 'Radix UI',
      },
    ],
    link: 'https://codebunny.sankha.space/',
    code: 'https://github.com/sankha4567/CodeBunny',
  }
]

export const experiences = [
  
  {
    title: 'Software Engineer Intern',
    subtitle: ' Versality Pvt Ltd ',
   
    //   {
    //     src: python,
    //     alt: 'python',
    //   },
    //   {
    //     src: typescript,
    //     alt: 'typescript',
    //   },
    //   {
    //     src: next,
    //     alt: 'next.js',
    //   },
    //   {
    //     src: react,
    //     alt: 'react',
    //   },
    //   {
    //     src: mongodb,
    //     alt: 'mongodb',
    //   },
    // ],
    tags: [
      'Full-Stack Web Development',
      'API Design',
      
      'UX Design',
    ],
    image: V,
    dates: 'Jan. 2025 - July. 2025',
    description:
      'Engineered scalable, responsive, and accessible web interfaces using React.js, Tailwind CSS, and modern ES6+ JavaScript; optimized performance by 35% via code-splitting, memoization, and re-render minimization; and integrated REST APIs with asynchronous data fetching, boosting data flow efficiency and user experience by 30%.',
    emphasized: true,
  },
  {
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: "St. Thomas' College of Engineering and Technology",
    image: College,
    dates: 'Jul. 2021 - Jul. 2025',
    description:
      'Led diverse teams on various software development projects, utilizing SDLC methodologies to deliver high-quality solutions.',
    gpa: 8.56,
  },
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/sankha-subhra-moitra-929428228/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/sankha4567',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:ssankha103@gmail.com',
  },
] as const
