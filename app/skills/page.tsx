'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  RadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

export default function Skills() {
  const battingSkills = [
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Language' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  ];

  const bowlingSkills = [
    { name: 'Node.js', level: 95, category: 'Backend' },
    { name: 'Express.js', level: 95, category: 'Backend' },
    { name: 'NestJS', level: 80, category: 'Backend' },
    { name: 'RESTful APIs', level: 90, category: 'Backend' },
    { name: 'Sockets', level: 80, category: 'Backend' }
  ];

  const fieldingSkills = [
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'Redis', level: 85, category: 'Database' },
    { name: 'Prisma', level: 85, category: 'ORM' },
  ];

  const wicketKeepingSkills = [
    { name: 'AWS', level: 82, category: 'Cloud' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'CI/CD', level: 75, category: 'DevOps' },
    { name: 'Git/GitHub', level: 92, category: 'Version Control' },
    { name: 'Prometheus', level: 70, category: 'Monitoring' }
  ];

  const languages = [
    { name: 'C++', level: 90, experience: '2+ years' },
    { name: 'JavaScript', level: 92, experience: '2+ years' },
    { name: 'TypeScript', level: 85, experience: '1+ years' },
    { name: 'Python', level: 80, experience: '0.5+ years' },
    { name: 'SQL', level: 85, experience: '2+ years' }
  ];

  const radarData = [
    { subject: 'Frontend', A: 75, fullMark: 100 },
    { subject: 'Backend', A: 90, fullMark: 100 },
    { subject: 'Database', A: 80, fullMark: 100 },
    { subject: 'Cloud/DevOps', A: 69, fullMark: 100 },
    { subject: 'Problem Solving', A: 90, fullMark: 100 },
    { subject: 'System Design', A: 70, fullMark: 100 }
  ];

  const achievementData = [
    { platform: 'CodeChef', rating: 1680, rank: 97 },
    { platform: 'Codeforces', rating: 1300, rank: 1200 },
    { platform: 'LeetCode', rating: 1860, rank: 136 },
    { platform: 'GeeksforGeeks', rating: 1500, rank: 500 }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Like a complete cricketer, I&apos;ve mastered different aspects of the development game
          </p>
        </motion.div>

        {/* Overall Performance Radar */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="stadium-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center">
                <span className="text-2xl mr-3">📊</span>
                <span className="text-foreground">Performance Analysis</span>
              </CardTitle>
              <p className="text-foreground/70">Overall skill distribution across different domains</p>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="hsl(var(--chart-primary))"
                      fill="hsl(var(--chart-primary))"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Batting (Frontend) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🏏</span>
                  <span className="text-foreground">Batting (Frontend)</span>
                </CardTitle>
                <p className="text-foreground/70">Creating beautiful, responsive user interfaces</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {battingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Bowling (Backend) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  <span className="text-foreground">Bowling (Backend)</span>
                </CardTitle>
                <p className="text-foreground/70">Building robust, scalable server-side applications</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {bowlingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Fielding (Databases) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="h-full stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  <span className="text-foreground">Fielding (Databases)</span>
                </CardTitle>
                <p className="text-foreground/70">Managing and optimizing data storage solutions</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {fieldingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Wicket Keeping (DevOps/Cloud) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="h-full stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-3">☁️</span>
                  <span className="text-foreground">Wicket Keeping (DevOps/Cloud)</span>
                </CardTitle>
                <p className="text-foreground/70">Deployment, monitoring, and infrastructure management</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {wicketKeepingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Programming Languages */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="stadium-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center">
                <span className="text-2xl mr-3">💻</span>
                <span className="text-foreground">Programming Languages</span>
              </CardTitle>
              <p className="text-foreground/70">My arsenal of programming languages and proficiency levels</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="secondary">{lang.experience}</Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={lang.level} className="h-2" />
                      <div className="text-sm text-foreground/70 text-right">
                        {lang.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Competitive Programming Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="stadium-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center">
                <span className="text-2xl mr-3">🏆</span>
                <span className="text-foreground">Competitive Programming Stats</span>
              </CardTitle>
              <p className="text-foreground/70">My performance across various coding platforms</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Platform Rankings</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={achievementData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="platform" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="rating" fill="hsl(var(--chart-primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Key Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <span className="text-foreground">Problems Solved</span>
                      <Badge variant="default" className="text-lg px-3 py-1 bg-indian-blue dark:bg-indian-orange">2000+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <span className="text-foreground">Codeforces Rating</span>
                      <Badge variant="default" className="text-lg px-3 py-1 bg-indian-blue dark:bg-indian-orange">1300</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <span className="text-foreground">CodeChef Rating</span>
                      <Badge variant="default" className="text-lg px-3 py-1 bg-indian-blue dark:bg-indian-orange">1680</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                      <span className="text-foreground">LeetCode Rating</span>
                      <Badge variant="default" className="text-lg px-3 py-1 bg-indian-blue dark:bg-indian-orange">1860</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

function SkillBar({ skill, index }: { skill: { name: string; level: number; category: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
      <Badge variant="outline" className="border-indian-blue/30 text-indian-blue dark:text-indian-blue-300">{skill.category}</Badge>
      </div>
      <div className="space-y-1">
        <Progress value={skill.level} className="h-2" />
        <div className="text-sm text-foreground/70 text-right">
          {skill.level}%
        </div>
      </div>
    </motion.div>
  );
}