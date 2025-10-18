'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const quickStats = [
    { label: 'Months of Experience', value: '4+', icon: '🎯' },
    { label: 'Projects Completed', value: '12+', icon: '🏆' },
    { label: 'Technologies Mastered', value: '10+', icon: '⚡' },
    { label: 'Problem Solving Rank', value: '2000+', icon: '🧠' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pitch-lines">
        <div className="absolute inset-0 cricket-field-bg opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated Cricket Ball */}
            <motion.div
              className="inline-block text-6xl cricket-ball-bounce"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              🏏
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indian-blue to-indian-orange dark:from-indian-orange dark:to-indian-orange bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Pratham Dwivedi
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Just like cricket, my career is about{' '}
                <span className="font-semibold text-indian-blue dark:text-indian-orange">strategy</span>,{' '}
                <span className="font-semibold text-indian-blue dark:text-indian-orange">precision</span>, and{' '}
                <span className="font-semibold text-indian-blue dark:text-indian-orange">consistency</span>
              </motion.p>

              <motion.p
                className="text-lg text-foreground/70 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Full Stack Developer | IIIT Ranchi | Building scalable web applications with modern technologies
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-3 stadium-glow">
                <Link href="/projects" className="flex items-center space-x-2">
                  <span>Explore Projects</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-indian-orange text-indian-orange hover:bg-indian-orange hover:text-white">
                <a href="/resume.pdf" target="_blank" className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Cricket Bat */}
        <motion.div
          className="absolute bottom-20 right-10 text-4xl cricket-bat-swing hidden md:block"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 0.3, rotate: -45 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          🏏
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-indian-blue-50 dark:bg-indian-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Career Scorecard</h2>
            <p className="text-xl text-foreground/70">A quick look at my professional innings</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="text-center p-6 stadium-glow hover:shadow-lg transition-shadow duration-300 scoreboard-flip">
                  <CardContent className="space-y-4">
                    <div className="text-4xl">{stat.icon}</div>
                    <div className="text-3xl font-bold text-indian-blue dark:text-indian-orange">{stat.value}</div>
                    <p className="text-foreground/80 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Recent Highlights</h2>
            <p className="text-xl text-foreground/70">My latest achievements on the field</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recent Project */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full stadium-glow hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">🎯</div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="https://github.com/PrathamDwivedi27" target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">RepoAssist</h3>
                    <p className="text-foreground/70">
                      AI-powered codebase QA platform with LangChain and RAG implementation
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'TRPC', 'PostgreSQL', 'LangChain'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-indian-blue/10 dark:bg-indian-orange/10 text-indian-blue dark:text-indian-orange text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Card className="h-full stadium-glow hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Best Beginner Team</h3>
                    <p className="text-foreground/70">
                      Won the Best Beginner Team Award at Hack This Fall 4.0 Hackathon (MLH Sponsored)
                    </p>
                  </div>
                  <div className="text-sm text-indian-blue dark:text-indian-blue-300 font-medium">Recent Achievement</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Card className="h-full stadium-glow hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Stack Intern</h3>
                    <p className="text-foreground/70">
                      Smart Stream Technologies - Building scalable media pipelines with modern tech stack
                    </p>
                  </div>
                  <div className="text-sm text-indian-blue dark:text-indian-orange font-medium">Mar 2025 - May 2025</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}