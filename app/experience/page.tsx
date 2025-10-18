'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
  runs: number; // Cricket analogy for impact/achievements
  overs: string; // Cricket analogy for duration
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: 'Smart Stream Technologies',
      role: 'Full Stack Intern',
      duration: 'Mar 2025 – May 2025',
      location: 'Remote',
      type: 'Internship',
      runs: 350,
      overs: '3 months',
      achievements: [
        'Built a scalable media pipeline using NestJS, BullMQ, AWS S3, and FFmpeg to compress .mp3 files, reducing file size by up to 75%',
        'Automated the media processing workflow with AmazonMQ and AWS Lambda, reducing manual workload by 90%',
        'Contributed to cross-platform Electron.js desktop application development using React and NestJS',
        'Utilized OpenAI API to extract smart summaries and insights from audio files, increasing metadata richness by 3×'
      ],
      technologies: ['NestJS', 'BullMQ', 'AWS S3', 'FFmpeg', 'AmazonMQ', 'AWS Lambda', 'Electron.js', 'React', 'MongoDB', 'OpenAI API']
    },
    {
      company: 'Fursat.AI',
      role: 'Software Developer Intern',
      duration: 'Jan 2025 – Feb 2025',
      location: 'Remote',
      type: 'Internship',
      runs: 280,
      overs: '2 months',
      achievements: [
        'Engineered a production-ready WhatsApp chatbot using WhatsApp Business API to generate personalized tour packages in under 20 seconds',
        'Embedded OpenAI API and progressively refined prompt logic to enhance customization',
        'Reduced manual effort by 80% through intelligent automation',
        'Delivered seamless user experience with rapid response times'
      ],
      technologies: ['WhatsApp Business API', 'OpenAI API', 'Node.js', 'Express.js', 'JavaScript']
    }
  ];

  const responsibilities = [
    {
      title: 'Coordinator, Training and Placement Cell',
      duration: 'Sep 2024 – Present',
      icon: '🎯',
      description: 'Leading placement coordination activities and student career guidance'
    },
    {
      title: 'Coordinator, IoT Wing',
      duration: 'Oct 2023 – May 2024',
      icon: '🔧',
      description: 'Managed IoT projects and technical workshops for students'
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My professional innings - each role representing a different format of the game
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <span className="text-2xl mr-3">🏏</span>
              <span className="text-foreground">Professional Innings</span>
            </h2>
            <p className="text-foreground/70">Each internship was like playing in a different cricket format</p>
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              <Card className="stadium-glow hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground flex items-center">
                        <span className="text-2xl mr-3">🏢</span>
                        {exp.company}
                      </CardTitle>
                      <p className="text-xl font-semibold text-foreground/80 mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-foreground/70">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Cricket Stats */}
                  <div className="flex items-center justify-between p-4 bg-indian-blue/5 rounded-lg">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indian-blue dark:text-indian-orange">{exp.runs}</div>
                        <div className="text-sm text-foreground/70">Impact Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indian-blue dark:text-indian-orange">{exp.overs}</div>
                        <div className="text-sm text-foreground/70">Duration</div>
                      </div>
                    </div>
                    <div className="text-2xl">🏏</div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-foreground" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="text-foreground mt-1">•</div>
                          <span className="text-foreground/80">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                        >
                          <Badge variant="outline" className="px-3 py-1">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <span className="text-2xl mr-3">👨‍💼</span>
              <span className="text-foreground">Leadership Positions</span>
            </h2>
            <p className="text-foreground/70">Playing the captain&apos;s role in various initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="h-full stadium-glow hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{resp.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{resp.title}</h3>
                        <p className="text-foreground/70 mb-3">{resp.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-indian-blue dark:text-indian-orange">
                          <Calendar className="h-4 w-4" />
                          <span>{resp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}