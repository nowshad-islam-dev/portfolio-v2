'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from './components/navbar';
import ProjectCarousel from './components/project-carousel';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: 'SkipQ',
    description:
      'A full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.',
    images: [
      '/skipq/home.jpg?height=200&width=300&text=E-Commerce+Home',
      '/skipq/login.jpg?height=200&width=300&text=Product+Page',
      '/skipq/tokens.jpg?height=200&width=300&text=Shopping+Cart',
      '/skipq/profile.jpg?height=200&width=300&text=Admin+Dashboard',
      '/skipq/dashboard.jpg?height=200&width=300&text=Admin+Dashboard',
    ],
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    type: 'mobile',
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates and team collaboration features.',
    images: [
      '/placeholder.svg?height=200&width=300&text=Task+Dashboard',
      '/placeholder.svg?height=200&width=300&text=Project+View',
      '/placeholder.svg?height=200&width=300&text=Team+Collaboration',
    ],
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    type: 'web',
    github: '#',
    live: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool using OpenAI API with custom prompts and templates.',
    images: [
      '/placeholder.svg?height=200&width=300&text=AI+Generator+Home',
      '/placeholder.svg?height=200&width=300&text=Content+Editor',
      '/placeholder.svg?height=200&width=300&text=Template+Gallery',
      '/placeholder.svg?height=200&width=300&text=Generated+Content',
    ],
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel AI SDK'],
    type: 'web',
    github: '#',
    live: '#',
  },
];

const experiences = [
  {
    title: 'Backend Engineer',
    company: 'Brokerage',
    period: '2023 - 2024',
    description:
      'Developed existing backend APIs and integrated them with database and added server side caching for faster responses. Implemented microservices architecture and improved system performance by 40%.',
    skills: ['TypeScript', 'Redis', 'Apache', 'MySQL', 'Linux'],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'ShareChat,',
    period: '4 months (2023)',
    description:
      'Built UI elements , added error tracking across the site, improved the notification system by creating standalone notification service and reduced load time by 20%.',
    skills: ['Sentry', 'RabbitMQ', 'JavaScript', 'Svelte', 'Node.js', 'Docker'],
  },
  {
    title: 'SWE Internship',
    company: 'Maxwell Stamp Ltd.',
    period: '2022 - 2023',
    description:
      'Worked with the software dev tem to  build and optimize ui components and pages and added one way sms system.',
    skills: ['Twilio', 'Jquery', 'Redux'],
  },
];

const education = [
  {
    degree: 'B.Sc in Mechatronics Engineering',
    school: 'Rajshahi University Of Engineering and Technology',
    period: '2023 - 2026',
    description:
      'An approach aiming at the synergistic integration of precise mechanics, electronics, control theory, and computer science within product design and manufacturing, in order to improve and optimize its functionality. Mechatronic systems are accurately designed using modeling and simulations, prototyping and hence properly tested by deploying. It relates to the design of systems, devices and products intended to achieving an optimal balance between basic mechanical structure and its overall control.',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'C/C++',
  'React',
  'React Native',
  'Redux',
  'Next.js',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Nginx',
  'GraphQL',
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5" />
        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/me/nowshad-islam.png?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
            />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nowshad Islam
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Full Stack Engineer & DevOps Expert
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. I bring ideas to life through code and design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6">
                  Hello! I'm Nowshad Islam
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate full-stack engineer with over 4+ years of
                  experience creating digital solutions that make a difference.
                  I love turning complex problems into simple, beautiful, and
                  intuitive designs.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I love challenging and creattive tasks where I can grow at a
                  good pace. Proficient in modern technologies, I deliver
                  scalable solutions ensuring seamless integration from
                  front-end to back-end. With strong communication skills and
                  fluency in English, I thrive in collaborative environments and
                  ensure efficient solution of problems provided to me.
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Dhaka, BD</span>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              Experience
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <ProjectCarousel
                      images={project.images}
                      title={project.title}
                      type={project.type}
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              Education
            </motion.h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400">
                          {edu.school}
                        </p>
                      </div>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl font-bold mb-8" variants={fadeInUp}>
              Let's Work Together
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-12"
              variants={fadeInUp}
            >
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>nowshadislam02@gmail.com</span>
              </div>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-6"
              />
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+880 1783367124</span>
              </div>
            </motion.div>

            <motion.div className="mt-12" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Nowshad Islam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
