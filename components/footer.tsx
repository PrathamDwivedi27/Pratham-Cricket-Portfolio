'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/PrathamDwivedi27',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/prathamdwivedi',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:pratham27dw@gmail.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      href: 'tel:+919793629039',
      icon: Phone,
    },
  ];

  return (
    <footer className="bg-indian-blue-900 dark:bg-indian-blue-950 border-t border-indian-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                className="text-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                🏏
              </motion.div>
              <h3 className="text-lg font-semibold">Pratham Dwivedi</h3>
            </div>
            <p className="text-white/80">
              Full Stack Developer passionate about building scalable web applications. 
              Just like cricket, my approach is strategic, precise, and consistent.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-white/70 hover:text-indian-orange transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-indian-orange/20 hover:bg-indian-orange/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-indian-blue-800 mt-8 pt-8 text-center text-white/70">
          <p>Built with ❤️ & Cricket Passion using Next.js | © 2024 Pratham Dwivedi</p>
        </div>
      </div>
    </footer>
  );
}