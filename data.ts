import { Film, Clapperboard, Layers, Users } from 'lucide-react';
import type { Service, PortfolioItem, Testimonial, BlogPost } from './types';

export const services: Service[] = [
  {
    icon: Film,
    title: '2d Animation',
    description: 'Bringing your ideas to life with stunning 2D and 3D animations that captivate and engage your audience.',
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    description: 'Crafting compelling narratives through expert video editing, color grading, and post-production services.',
  },
  {
    icon: Layers,
    title: 'Motion Graphics',
    description: 'Elevating your brand with dynamic motion graphics for explainers, social media, and product showcases.',
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Building and nurturing vibrant Web3 communities through strategic content and active engagement.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'DeFi Explainer Video', 
    category: 'Animation', 
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    detailedDescription: 'This explainer video was created for a leading DeFi platform to simplify complex concepts like liquidity pools and yield farming for new users. We used a combination of 2D and 3D animation to create an engaging and educational narrative that resulted in a 40% increase in user onboarding.',
    client: 'QuantumLeap DeFi',
    testimonial: {
      quote: "Nexus Creative turned our complex vision into a stunning animation that perfectly captured our brand's essence. Their creativity is unmatched.",
      author: 'Alex Chen, Founder',
    },
  },
  { 
    id: 2, 
    title: 'NFT Marketplace Promo', 
    category: 'Motion Graphics', 
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    detailedDescription: 'We produced a high-energy promotional video for a new NFT marketplace launch. The video utilized fast-paced motion graphics and a custom soundtrack to highlight the platform\'s unique features and artist collaborations. The campaign generated over 1 million impressions in its first week.',
    client: 'PixelVerse NFTs',
    testimonial: {
      quote: 'The promo video was a viral hit! The team at Nexus is professional, responsive, and incredibly talented.',
      author: 'Samantha Rao, CMO',
    },
  },
  { 
    id: 3, 
    title: 'Gaming Guild Sizzle Reel', 
    category: 'Video Editing', 
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    detailedDescription: 'This sizzle reel was designed to attract new players to a top-tier Web3 gaming guild. By editing epic gameplay footage and incorporating dynamic visual effects, we crafted a compelling showcase of the guild\'s community and achievements, boosting their recruitment numbers by over 300%.',
    client: 'Astral Guild',
    testimonial: {
      quote: 'They captured the spirit of our guild perfectly. Working with Nexus felt like a true partnership from start to finish.',
      author: 'Ben Carter, CEO',
    },
  },
  { 
    id: 4, 
    title: 'Layer-2 Protocol Launch', 
    category: 'Animation', 
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    detailedDescription: 'For the launch of a groundbreaking Layer-2 scaling solution, we created a suite of animated content that explained the technology in an accessible way. The animations were used across their website, social media, and investor presentations, playing a key role in securing their initial funding round.',
    client: 'Momentum Protocol',
    testimonial: {
      quote: 'Their ability to translate highly technical concepts into beautiful, simple animations is world-class. A vital partner for any tech launch.',
      author: 'Dr. Evelyn Reed, Lead Dev',
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Nexus Creative turned our complex vision into a stunning animation that perfectly captured our brand's essence. Their creativity is unmatched.",
    name: 'Alex Chen',
    company: 'Founder, QuantumLeap DeFi',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: 'The video content they produced for our launch campaign was instrumental in our success. Professional, responsive, and incredibly talented team.',
    name: 'Samantha Rao',
    company: 'CMO, PixelVerse NFTs',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote: "Working with Nexus felt like a true partnership. They understood the nuances of the Web3 space and helped us build a thriving community.",
    name: 'Ben Carter',
    company: 'CEO, Astral Guild',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Storytelling in Web3 Marketing',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/seed/blog1/800/600',
    authorName: 'Jane Doe',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    date: 'Oct 12, 2023',
    excerpt: 'Discover how narrative-driven content is shaping the future of decentralized brand building and community engagement.'
  },
  {
    id: 2,
    title: 'Why Motion Graphics are a Game-Changer for DeFi',
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/blog2/800/600',
    authorName: 'John Smith',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
    date: 'Oct 05, 2023',
    excerpt: 'Learn how dynamic visuals can simplify complex financial concepts and build trust with your users.'
  },
  {
    id: 3,
    title: 'Building Authentic Communities in the Metaverse',
    category: 'Community',
    imageUrl: 'https://picsum.photos/seed/blog3/800/600',
    authorName: 'Emily White',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
    date: 'Sep 28, 2023',
    excerpt: 'Explore strategies for fostering genuine connections and long-term engagement in virtual worlds.'
  },
];