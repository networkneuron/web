import type React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  detailedDescription: string;
  client: string;
  testimonial: {
    quote: string;
    author: string;
  };
  videoUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  authorName: string;
  authorAvatarUrl: string;
  date: string;
  excerpt: string;
}