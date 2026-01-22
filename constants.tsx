import React from 'react';
import { 
  Monitor, 
  ShoppingBag, 
  Layout, 
  RefreshCw, 
  ShieldCheck, 
  Briefcase,
  Code2,
  Palette,
  Rocket,
  MessageSquare
} from 'lucide-react';
import { Service } from './types';

// Using a high-quality abstract tech image similar to the user's 3D background request
export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"; 

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Business Website',
    description: 'Professional digital presence for your company to build trust and authority.',
    icon: 'briefcase',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'Showcase your work creatively with stunning galleries and layouts.',
    icon: 'layout',
  },
  {
    id: '3',
    title: 'Landing Page',
    description: 'High-converting single pages designed for specific marketing campaigns.',
    icon: 'rocket',
  },
  {
    id: '4',
    title: 'E-commerce Website',
    description: 'Secure and scalable online stores to sell your products globally.',
    icon: 'shopping-bag',
  },
  {
    id: '5',
    title: 'Website Redesign',
    description: 'Modernize your outdated site with better UI/UX and performance.',
    icon: 'refresh-cw',
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: 'Regular updates, security checks, and backups to keep you safe.',
    icon: 'shield-check',
  },
];

export const TECH_STACK = [
  { name: 'HTML5', icon: <Code2 className="w-6 h-6" /> },
  { name: 'CSS3', icon: <Palette className="w-6 h-6" /> },
  { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
  { name: 'React', icon: <Monitor className="w-6 h-6" /> },
  { name: 'Next.js', icon: <Rocket className="w-6 h-6" /> },
  { name: 'Node.js', icon: <Code2 className="w-6 h-6" /> },
  { name: 'MongoDB', icon: <Layout className="w-6 h-6" /> },
];

// Helper to render icons dynamically
export const getIcon = (name: string) => {
  switch (name) {
    case 'briefcase': return <Briefcase className="w-8 h-8" />;
    case 'layout': return <Layout className="w-8 h-8" />;
    case 'rocket': return <Rocket className="w-8 h-8" />;
    case 'shopping-bag': return <ShoppingBag className="w-8 h-8" />;
    case 'refresh-cw': return <RefreshCw className="w-8 h-8" />;
    case 'shield-check': return <ShieldCheck className="w-8 h-8" />;
    default: return <Monitor className="w-8 h-8" />;
  }
};