import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { ProjectCard } from '../molecules/ProjectCard';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack React application with Node.js backend, featuring user authentication, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    image: '/project-1.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
    image: '/project-2.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API', 'Framer Motion'],
    image: '/project-3.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'API Gateway',
    description: 'Microservices API gateway with rate limiting, authentication, and request/response transformation capabilities.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    image: '/project-4.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
    category: 'Backend',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and TypeScript, featuring smooth animations and responsive design.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/project-5.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with WebSocket connections, user rooms, and file sharing capabilities.',
    technologies: ['Socket.io', 'React', 'MongoDB', 'Express'],
    image: '/project-6.jpg',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
    category: 'Full-Stack',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full-Stack'];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="gradient-text mb-4">
              Featured Projects
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              A selection of my recent work, showcasing various technologies and 
              problem-solving approaches across different domains.
            </Typography>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto">
              <Typography variant="h4" className="gradient-text mb-4">
                Interested in Collaborating?
              </Typography>
              <Typography variant="body" color="secondary" className="mb-6">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together.
              </Typography>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start a Project
                <Icon name="arrow-right" size={16} className="ml-2" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};