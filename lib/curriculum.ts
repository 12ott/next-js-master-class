import { BookOpen, Code, Layers, Zap, CheckCircle, PlayCircle, Terminal } from 'lucide-react';

export type Lesson = {
  id: string;
  title: string;
  description: string;
  type: 'concept' | 'component' | 'workshop' | 'best-practice';
  duration: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  icon: any;
  lessons: Lesson[];
};

export const curriculum: Module[] = [
  {
    id: 'concepts',
    title: 'Core Concepts',
    description: 'Understand the fundamental philosophy of Next.js',
    icon: BookOpen,
    lessons: [
      { id: 'what-is-nextjs', title: 'What is Next.js?', description: 'The React Framework for the Web', type: 'concept', duration: '5 min' },
      { id: 'server-vs-client', title: 'Server vs Client', description: 'Understanding rendering environments', type: 'concept', duration: '10 min' },
      { id: 'app-router', title: 'The App Router', description: 'File-system based routing', type: 'concept', duration: '8 min' },
    ]
  },
  {
    id: 'components',
    title: 'Building Blocks',
    description: 'Learn about the essential Next.js components',
    icon: Layers,
    lessons: [
      { id: 'pages-layouts', title: 'Pages & Layouts', description: 'Structuring your application', type: 'component', duration: '12 min' },
      { id: 'link-navigation', title: 'Link & Navigation', description: 'Moving between pages', type: 'component', duration: '8 min' },
      { id: 'images-fonts', title: 'Images & Fonts', description: 'Optimizing assets', type: 'component', duration: '10 min' },
    ]
  },
  {
    id: 'workshop',
    title: 'Interactive Workshop',
    description: 'Hands-on practice with real code scenarios',
    icon: Terminal,
    lessons: [
      { id: 'first-page', title: 'Your First Page', description: 'Create a simple landing page', type: 'workshop', duration: '15 min' },
      { id: 'dynamic-routes', title: 'Dynamic Routes', description: 'Handling variable URLs', type: 'workshop', duration: '20 min' },
      { id: 'fetching-data', title: 'Fetching Data', description: 'Getting data from APIs', type: 'workshop', duration: '25 min' },
    ]
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Writing clean, performant Next.js code',
    icon: Zap,
    lessons: [
      { id: 'seo-metadata', title: 'SEO & Metadata', description: 'Ranking higher in search', type: 'best-practice', duration: '10 min' },
      { id: 'project-structure', title: 'Project Structure', description: 'Organizing for scale', type: 'best-practice', duration: '8 min' },
    ]
  }
];
