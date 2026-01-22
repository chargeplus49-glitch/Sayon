export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export enum WebsiteType {
  Business = 'Business Website',
  Portfolio = 'Portfolio Website',
  Landing = 'Landing Page',
  Ecommerce = 'E-commerce Website',
  Redesign = 'Website Redesign',
  Maintenance = 'Maintenance & Support',
}

export enum BudgetRange {
  Small = '$500 - $1,000',
  Medium = '$1,000 - $3,000',
  Large = '$3,000 - $10,000',
  Enterprise = '$10,000+',
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  websiteType: WebsiteType;
  budget: BudgetRange;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  websiteType: string;
  budget: string;
  message: string;
}