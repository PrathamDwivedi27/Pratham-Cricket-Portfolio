'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, GraduationCap, Calendar, Trophy } from 'lucide-react';

export default function About() {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Gorakhpur, Uttar Pradesh' },
    { icon: GraduationCap, label: 'Education', value: 'IIIT Ranchi - CSE' },
    { icon: Calendar, label: 'Graduation', value: '2026' },
    { icon: Trophy, label: 'CGPA', value: '9.07' },
  ];

  const interests = [
    'Backend Development',
    'Scalable Systems',
    'Data Structures & Algorithms',
    'Reading Novels',
    'Watching Anime',
    'Listening to Music',
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            In cricket, adaptability is key — the same applies to my design & development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="stadium-glow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl">👨‍💻</div>
                  <h2 className="text-2xl font-semibold">My Journey</h2>
                </div>
                
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Just like a cricket match requires strategy, adaptability, and consistent performance, 
                    my approach to software development follows the same principles. Every project is a new 
                    innings where I bring my best game forward.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Currently pursuing Computer Science Engineering at IIIT Ranchi with a CGPA of 9.07, 
                    I&apos;ve been honing my skills across the full technology stack. From building scalable 
                    backend systems to crafting intuitive user interfaces, I play every position on the tech field.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground/80">
                    My recent internships at Smart Stream Technologies and Fursat.AI have been like playing 
                    in different formats - each requiring unique skills and strategies. Whether it&apos;s building 
                    media pipelines that handle thousands of files or creating AI-powered chatbots, I&apos;ve 
                    learned to adapt my game plan to win in any scenario.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Beyond coding, I&apos;m passionate about competitive programming - it&apos;s my net practice sessions 
                    where I sharpen my problem-solving reflexes. With over 2000+ problems solved across various 
                    platforms, I&apos;ve developed the mental stamina needed for the long format games of software development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="stadium-glow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl">🎯</div>
                  <h2 className="text-2xl font-semibold">Areas of Interest</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Badge variant="secondary" className="px-4 py-2 text-sm">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Player Card */}
            <Card className="stadium-glow">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-4xl text-white font-bold">
                    PD
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Pratham Dwivedi</h3>
                    <p className="text-foreground/70">Full Stack Developer</p>
                  </div>
                  <div className="text-sm text-foreground/60">
                    Player ID: #2027
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card className="stadium-glow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="text-xl mr-2">📋</div>
                  Player Stats
                </h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <info.icon className="h-5 w-5 text-foreground" />
                      <div>
                        <p className="text-sm text-foreground/60">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="stadium-glow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="text-xl mr-2">🏆</div>
                  Career Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Best Ranking</span>
                    <span className="font-medium text-foreground">Rank 97 (CodeChef)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Problems Solved</span>
                    <span className="font-medium text-foreground">2000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Hackathon Wins</span>
                    <span className="font-medium text-foreground">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Years Active</span>
                    <span className="font-medium text-foreground">3+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}