import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
  ];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4 md:mb-0">
            <Rocket className="w-6 h-6 text-purple-400" />
            Nexus Creative
          </Link>
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexus Creative. All rights reserved.
          </p>
        </div>
         <div className="text-center mt-8">
           <button onClick={scrollToTop} className="text-gray-500 hover:text-purple-400 transition-colors">Back to Top</button>
         </div>
      </div>
    </footer>
  );
};

export default Footer;