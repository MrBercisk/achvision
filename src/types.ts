export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Institutional';
  description: string;
  image: string;
  year: string;
  location: string;
  size: string;
  status: string;
  challenge: string;
  solution: string;
  architecturalStyle: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  benefits: string[];
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  iconName: string;
  description: string;
  longDescription: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Service' | 'Process' | 'Pricing' | 'General';
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  budget: string;
  timeframe: string;
}

export interface CostEstimateInput {
  propertyType: 'Residential' | 'Commercial' | 'Interior Fit-out';
  totalArea: number; // in sqm
  standard: 'Standard' | 'Premium luxury' | 'Ultra-high-end';
  ecoFriendly: boolean;
  smartHome: boolean;
}

export interface CostEstimateResult {
  minEstimate: number;
  maxEstimate: number;
  durationMonths: number;
  breakdown: {
    design: number;
    structural: number;
    interior: number;
    landscaping: number;
  };
}
