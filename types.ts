import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface ChartData {
  name: string;
  knowledge: number;
  performance: number;
  engagement: number;
}