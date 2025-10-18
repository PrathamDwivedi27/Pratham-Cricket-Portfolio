'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pratham27dw@gmail.com',
      href: 'mailto:pratham27dw@gmail.com',
      color: 'text-indian-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9793629039',
      href: 'tel:+919793629039',
      color: 'text-indian-orange'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gorakhpur, Uttar Pradesh',
      href: '#',
      color: 'text-golden-yellow'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      color: 'text-indian-blue'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/PrathamDwivedi27',
      username: '@PrathamDwivedi27'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/prathamdwivedi',
      username: '@prathamdwivedi'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;


    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Pratham Dwivedi',
      subject: formData.subject,
      message: formData.message,
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    alert("✅ Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('Email sending error:', error);
    alert('❌ Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start a new innings together? Let&apos;s discuss your next project!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="stadium-glow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                  <span className="text-foreground">Let&apos;s Start the Conversation</span>
                </CardTitle>
                <p className="text-foreground/70">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full stadium-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-xl mr-2">📞</span>
                  <span className="text-foreground">Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <info.icon className={`h-5 w-5 ${info.color} dark:text-indian-orange`} />
                    <div className="flex-1">
                      <p className="text-sm text-foreground/70">{info.label}</p>
                      {info.href !== '#' ? (
                        <Link 
                          href={info.href}
                          className="font-medium text-foreground hover:text-indian-orange transition-colors"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="stadium-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-xl mr-2">🌐</span>
                  <span className="text-foreground">Connect With Me</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <social.icon className="h-5 w-5 text-foreground group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-foreground/70">{social.username}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Cricket Quote */}
            <Card className="stadium-glow bg-gradient-to-br from-indian-blue/5 to-indian-orange/10">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🏏</div>
                <blockquote className="text-lg italic mb-4 text-foreground/90">
                  &quot;In cricket, as in development, the best partnerships are built on 
                  communication, trust, and a shared vision for success.&quot;
                </blockquote>
                <p className="text-sm text-foreground/70">- Pratham Dwivedi</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <Card className="max-w-2xl mx-auto stadium-glow">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Your Next Project?</h2>
              <p className="text-foreground/70 mb-6">
                Whether you need a full-stack web application, want to discuss a collaboration, 
                or just want to chat about cricket and code, I&apos;m here to help!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-indian-blue hover:bg-indian-blue/90">
                  <Link href="mailto:pratham27dw@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-indian-orange text-indian-orange hover:bg-indian-orange hover:text-white">
                  <Link href="/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}