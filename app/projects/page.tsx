'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Deployed';
  type: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  runs: number; // Cricket analogy for project impact
  wickets: number; // Cricket analogy for problems solved
  achievements: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'RepoAssist',
      description: 'AI-powered codebase QA platform with intelligent insights and collaboration features',
      longDescription: 'A comprehensive platform that revolutionizes how developers interact with codebases. Using advanced AI technologies, it provides intelligent code analysis, automated minutes of meeting, and seamless collaboration tools.',
      technologies: ['Next.js', 'TRPC', 'PostgreSQL', 'LangChain', 'AssemblyAI', 'Gemini-2.5 flash', 'Stripe', 'Cloudinary', 'Clerk', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PrathamDwivedi27/RepoAssist',
      liveUrl: 'https://www.youtube.com/watch?v=muqiaW39XhE&ab_channel=PrathamDwivedi',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Developed AI-powered codebase QA feature using LangChain and RAG, reducing manual repo exploration time by 60%',
        'Implemented credit-based billing system with Stripe and secure auth via Clerk',
        'Generated AI summaries for top 15 Git commits, improving repo insights and version clarity',
        'Enabled real-time repo sharing supporting 10+ concurrent users per repository',
        'Leveraged AssemblyAI for voice transcription and meeting summaries in under 2 minutes'
      ]
    },
    {
      title: 'Collabio',
      description: 'AI-powered codebase QA platform with intelligent insights and collaboration features',
      longDescription: 'Collabio is a real-time collaboration platform designed for creativity and productivity. It provides an infinite canvas space where you can unleash your imagination using various tools such as pencil, rectangle, ellipse, sticky notes, and more. ',
      technologies: ['Next.js', 'Liveblocks', 'PostgreSQL', 'Stripe', 'Cloudinary', 'Clerk', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PrathamDwivedi27/Collabio',
      liveUrl: 'https://www.youtube.com/watch?v=2kQdNODxtAo&ab_channel=PrathamDwivedi',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Create, design, and collaborate without boundaries. Draw, sketch, or write on an unlimited workspace.',
        'Use tools like pencil, rectangle, ellipse, and sticky notes to bring your ideas to life. Customize your strokes with different colors.',
        'Get real-time notifications for actions like board invites, ensuring you stay informed.',
      ]
    },
    {
      title: 'Kiddie Tales',
      description: 'Kiddie Tales is an innovative platform for generating personalized, engaging, and educational stories for children.',
      longDescription: 'Kiddie Tales is an innovative platform for generating personalized, engaging, and educational stories for children. Powered by AI and advanced recommendations, Kiddie Tales tailors each story based on the childs preferred subject, story type, age group, and image style. ',
      technologies: ['Next.js', 'Gemini-2.5-flash', 'PostgreSQL', 'Paypal', 'Clerk', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PrathamDwivedi27/TinyTales',
      liveUrl: 'https://www.youtube.com/watch?v=fACrZ0zM6Zo&ab_channel=PrathamDwivedi',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Generate personalized stories based on the subject, story type, age group, and image style.',
        'A beautiful paper-flipping UI simulating the experience of reading a physical book.',
        'Let the voice assistant read the story aloud with beautiful narration.',
        'Get started with free credits. Once your credits run out, you can easily upgrade to premium with PayPal integration.',
      ]
    },
    {
      title: 'KrishiSeva',
      description: 'KrishiSeva is an advanced agricultural platform designed to support farmers by integrating technology and AI-driven solutions. This project offers a variety of tools to enhance productivity and streamline farming activities.',
      longDescription: 'KrishiSeva is an advanced agricultural platform designed to support farmers by integrating technology and AI-driven solutions. This project offers a variety of tools to enhance productivity and streamline farming activities.',
      technologies: ['Node.js', 'Firebase', 'MongoDB', 'Gemini-2.5-flash', 'React', 'Google-Map', 'Web-Scraping'],
      githubUrl: 'https://github.com/PrathamDwivedi27/KisanSeva',
      liveUrl: 'https://www.youtube.com/watch?v=C-0z3uda0-s&ab_channel=AyushmanSingh',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Utilizes Gemini AI to accurately detect and manage crop diseases, helping farmers take preventive actions early.',
        'Suggests the most suitable crops based on soil type, weather conditions, and regional factors for improved yield.',
        'Enables farmers to seamlessly buy and sell crops, with transaction tracking for their last 10 buyers.',
      ]
    },
    {
      title: 'Smart Docs.AI',
      description: 'Smart Docs.AI is an innovative platform that combines cutting-edge AI technologies to revolutionize how you interact with your documents. The app allows you to upload PDFs, tokenize their content, and extract meaningful insights using Langchain and Gemini AI. ',
      longDescription: 'Smart Docs.AI is an innovative platform that combines cutting-edge AI technologies to revolutionize how you interact with your documents. The app allows you to upload PDFs, tokenize their content, and extract meaningful insights using Langchain and Gemini AI. ',
      technologies: ['Next.js', 'RAG', 'PostgreSQL', 'Stripe', 'Cloudinary', 'Clerk', 'Gemini-2.5-flash'],
      githubUrl: 'https://github.com/PrathamDwivedi27/SmartDocs.ai',
      liveUrl: 'https://smart-docs-ai.vercel.app/',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Uses LangChain and Gemini AI to tokenize PDFs, generate vector embeddings, and deliver intelligent question answering and summarization.',
        'Allows users to highlight text, format content, and adjust alignment directly within uploaded PDF documents.',
        'Provides lifetime premium access and unlimited uploads through secure PayPal-based payment integration.',
      ]
    },
    {
      title: 'LiveDocs',
      description: 'Live Docs is a real-time document creation and collaboration platform. With seamless authentication via Clerk, you can create and edit documents with advanced features like text formatting (bold, italic, etc.) using JS-M Editor.',
      longDescription: 'Live Docs is a real-time document creation and collaboration platform. With seamless authentication via Clerk, you can create and edit documents with advanced features like text formatting (bold, italic, etc.) using JS-M Editor. ',
      technologies: ['Next.js', 'Liveblocks', 'PostgreSQL', 'Stripe', 'Cloudinary', 'Clerk', 'JS-M Editor'],
      githubUrl: 'https://github.com/PrathamDwivedi27/Live_Docs',
      liveUrl: 'https://www.youtube.com/watch?v=EDQ50Q9EWgo&ab_channel=PrathamDwivedi',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Create professional documents with a powerful text editor that supports rich text formatting such as bold, italic, and more. The JS-M Editor makes document creation fast, intuitive, and visually engaging.',
        'Collaborate with others in real-time on your document. Thanks to LiveBlocks, multiple people can access and edit the document simultaneously, making it easier than ever to work on shared projects. ',
        'Enhance collaboration with Flying Comments, allowing users to leave targeted comments on specific sections of the document in real time.',
      ]
    },
    {
      title: 'Event Management API',
      description: 'The Event Management System is designed to provide a seamless solution for creating, managing, and attending events. The application is built with Node.js, Express, MongoDB, and JWT authentication, ensuring a robust and scalable platform for event organizers and participants. This system supports user registration, role-based access, event registration, analytics, notifications, and more',
      longDescription: 'The Event Management System is designed to provide a seamless solution for creating, managing, and attending events. The application is built with Node.js, Express, MongoDB, and JWT authentication, ensuring a robust and scalable platform for event organizers and participants. This system supports user registration, role-based access, event registration, analytics, notifications, and more',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Postman'],
      githubUrl: 'https://github.com/PrathamDwivedi27/event_management_assignment',
      liveUrl: 'https://documenter.getpostman.com/view/39632752/2sAYQXpDfK',
      featured: true,
      status: 'Completed',
      type: 'Backend',
      runs: 450,
      wickets: 8,
      achievements: [
        'Indexing to increase performance Indexes are created based on fields like email and attendees to enhance the speed of search queries.',
        'Optimised search Query Search queries are optimized, such as those used in analytics endpoints, to improve efficiency',
        'Validations Various validations, such as authMiddleware, are written to ensure that unauthorized users cannot access data, thereby maintaining security.',
      ]
    },
    {
      title: 'ChitChat',
      description: 'The Event Management System is designed to provide a seamless solution for creating, managing, and attending events. The application is built with Node.js, Express, MongoDB, and JWT authentication, ensuring a robust and scalable platform for event organizers and participants. This system supports user registration, role-based access, event registration, analytics, notifications, and more',
      longDescription: 'ChitChat is a robust and efficient real-time chat application designed for seamless communication. Built with scalability and performance in mind, ChitChat integrates cutting-edge technologies like Socket.IO, Redis, and Apache Kafka to deliver a lightning-fast and reliable messaging experience',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Web-Sockets', 'Redis','Apache Kafka'],
      githubUrl: 'https://github.com/PrathamDwivedi27/ChitChat',
      liveUrl: 'https://www.youtube.com/watch?v=n7FJMeJCQgU&ab_channel=PrathamDwivedi',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Powered by Socket.IO for instant, bidirectional communication between users with zero latency.',
        'Utilizes Apache Kafka to efficiently manage and distribute high volumes of chat data across users and servers.',
        'Implements Redis caching to ensure quick message retrieval, smooth synchronization, and minimal server load.',
      ]
    },
    {
      title: 'StayEase',
      description: 'StayEase is a platform for seamless home sharing and vacation rentals. Users can list properties, explore diverse accommodations, and book stays effortlessly with advanced filters and an intuitive calendar interface, making travel planning easy and enjoyable.',
      longDescription: 'StayEase is a platform for seamless home sharing and vacation rentals. Users can list properties, explore diverse accommodations, and book stays effortlessly with advanced filters and an intuitive calendar interface, making travel planning easy and enjoyable.',
      technologies: ['Next.js', 'Google Maps', 'MongoDB','Cloudinary'],
      githubUrl: 'https://github.com/PrathamDwivedi27/StayEase',
      liveUrl: 'https://www.youtube.com/watch?v=ScUenENFpRE',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Allows users to list properties with detailed information, pricing, and Cloudinary-powered image uploads for a smooth hosting experience.',
        'Enables users to search and filter listings by location, amenities, and dates, with an interactive Leaflet map for easy exploration.',
        'Features a calendar-based reservation system with disabled booked dates and tools to manage bookings and favorites effortlessly.',
      ]
    },
    {
      title: 'VoyageVista',
      description: 'VoyageVista is a travel planning application that leverages cutting-edge technologies to provide users with a seamless and personalized travel experience. With VoyageVista, you can discover new places, generate itineraries, explore live location data, and create your travel journey with ease.',
      longDescription: 'VoyageVista is a travel planning application that leverages cutting-edge technologies to provide users with a seamless and personalized travel experience. With VoyageVista, you can discover new places, generate itineraries, explore live location data, and create your travel journey with ease.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Gemini-2.5-flash', 'Leaflet'],
      githubUrl: 'https://github.com/PrathamDwivedi27/VoyageVista',
      liveUrl: 'https://www.youtube.com/watch?v=GEW1X0MQWMM',
      featured: true,
      status: 'Completed',
      type: 'Full Stack',
      runs: 450,
      wickets: 8,
      achievements: [
        'Keep track of all your past adventures with the MyTrips feature. VoyageVista allows you to revisit your previous trips, view detailed itineraries, and reflect on your travel experiences.',
        'Using Gemini AI, VoyageVista generates personalized travel itineraries based on your preferences. Choose your destinations, and let Gemini suggest the best activities, routes, and timelines to make the most of your trip.',
        'With Google Maps integration, you can easily visualize the exact locations of hotels, tourist attractions, and places on your travel itinerary.',
      ]
    },
    {
      title: 'Media Processing Pipeline',
      description: 'Scalable audio file compression and processing system with cloud integration',
      longDescription: 'Enterprise-level media pipeline built during Smart Stream Technologies internship, handling thousands of audio files with intelligent compression and metadata extraction.',
      technologies: ['NestJS', 'BullMQ', 'AWS S3', 'FFmpeg', 'AmazonMQ', 'AWS Lambda', 'MongoDB', 'OpenAI API'],
      featured: false,
      status: 'Deployed',
      type: 'Backend',
      runs: 380,
      wickets: 10,
      achievements: [
        'Reduced file sizes by up to 75% using advanced compression',
        'Automated workflow reducing manual workload by 90%',
        'Processed 1000+ audio files with intelligent categorization',
        'Implemented smart summaries using OpenAI API'
      ]
    },
    {
      title: 'WhatsApp Tour Bot',
      description: 'AI-powered chatbot generating personalized tour packages via WhatsApp Business API',
      longDescription: 'Production-ready WhatsApp chatbot that revolutionizes tour planning by providing instant, personalized travel packages based on user preferences.',
      technologies: ['WhatsApp Business API', 'OpenAI API', 'Node.js', 'Express.js', 'MongoDB'],
      featured: false,
      status: 'Deployed',
      type: 'Backend',
      runs: 220,
      wickets: 5,
      achievements: [
        'Generated tour packages in under 20 seconds',
        'Reduced manual effort by 80%',
        'Implemented intelligent prompt refinement',
        'Delivered seamless user experience'
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Each project is like a cricket match - strategic planning, precise execution, and delivering results
          </p>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 mr-3 text-yellow-500" />
              <span className="text-foreground">Featured Matches</span>
            </h2>
            <p className="text-foreground/70">My most impactful projects that made the highlight reel</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <GitBranch className="h-8 w-8 mr-3 text-primary" />
              <span className="text-foreground">Other Notable Innings</span>
            </h2>
            <p className="text-foreground/70">Additional projects showcasing my versatility</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card className={`h-full stadium-glow hover:shadow-lg transition-all duration-300 scoreboard-flip group ${
      featured ? 'border-primary/20' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl flex items-center">
              <span className="text-xl mr-2">🎯</span>
              {project.title}
              {featured && <Star className="h-5 w-5 ml-2 text-yellow-500" />}
            </CardTitle>
            <div className="flex items-center space-x-4 mt-2">
              <Badge variant="secondary">{project.type}</Badge>
              <Badge variant={project.status === 'Deployed' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Cricket Scoreboard */}
        <div className="flex items-center justify-between p-4 bg-indian-blue/5 rounded-lg">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indian-blue dark:text-indian-orange">{project.runs}</div>
              <div className="text-xs text-foreground/70">Impact Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indian-blue dark:text-indian-orange">{project.wickets}</div>
              <div className="text-xs text-foreground/70">Problems Solved</div>
            </div>
          </div>
          <div className="text-2xl">🏏</div>
        </div>

        {/* Description */}
        <div>
          <p className="text-foreground/80 mb-4">
            {featured ? project.longDescription : project.description}
          </p>
        </div>

        {/* Key Achievements */}
        {featured && (
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <span className="text-sm mr-2">🏆</span>
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {project.achievements.slice(0, 3).map((achievement, index) => (
                <li key={index} className="text-sm text-foreground/80 flex items-start">
                  <span className="text-indian-blue dark:text-indian-orange mr-2 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, featured ? 8 : 6).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > (featured ? 8 : 6) && (
              <Badge variant="outline" className="text-xs px-2 py-1">
                +{project.technologies.length - (featured ? 8 : 6)} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 pt-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank" className="flex items-center space-x-1">
                <Github className="h-4 w-4" />
                <span>Code</span>
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild className="bg-indian-orange hover:bg-indian-orange/90 text-white">
              <Link href={project.liveUrl} target="_blank" className="flex items-center space-x-1">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}