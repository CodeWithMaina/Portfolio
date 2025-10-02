import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const experienceData = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    position: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Leading the development of scalable web applications using React, Node.js, and cloud technologies.',
    achievements: [
      'Architected and implemented microservices architecture, improving system performance by 40%',
      'Led a team of 5 developers in building a customer portal serving 100K+ users',
      'Reduced deployment time by 60% through CI/CD pipeline optimization',
      'Mentored junior developers and established coding standards across the team',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    position: 'Full-Stack Developer',
    period: '2021 - 2022',
    location: 'Remote',
    description: 'Developed and maintained web applications for a fast-growing startup in the fintech space.',
    achievements: [
      'Built responsive web applications serving 50K+ monthly active users',
      'Implemented real-time features using WebSockets and Socket.io',
      'Integrated third-party APIs for payment processing and analytics',
      'Collaborated with designers to create pixel-perfect UI components',
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe API'],
  },
  {
    id: 3,
    company: 'Digital Agency Pro',
    position: 'Frontend Developer',
    period: '2020 - 2021',
    location: 'New York, NY',
    description: 'Created interactive websites and web applications for various clients across different industries.',
    achievements: [
      'Developed 20+ responsive websites with modern design principles',
      'Improved page load times by 50% through optimization techniques',
      'Implemented accessibility features meeting WCAG 2.1 AA standards',
      'Worked directly with clients to understand requirements and deliver solutions',
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'WordPress', 'jQuery'],
  },
];

export const ExperienceSection: React.FC = () => {
  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="experience" className="section bg-secondary-light/50 dark:bg-secondary-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.Ref<HTMLDivElement>} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="gradient-text mb-4">
              Professional Experience
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              A journey through my career, highlighting key achievements, 
              technologies mastered, and the impact I've made along the way.
            </Typography>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-light/20 dark:bg-accent-dark/20" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-accent-light dark:bg-accent-dark rounded-full border-4 border-primary-light dark:border-primary-dark z-10" />

                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <Typography variant="h4" className="gradient-text mb-2">
                            {experience.position}
                          </Typography>
                          <Typography variant="body" weight="medium" className="mb-1">
                            {experience.company}
                          </Typography>
                          <Typography variant="caption" color="secondary">
                            {experience.location} • {experience.period}
                          </Typography>
                        </div>
                      </div>

                      <Typography variant="body" color="secondary" className="mb-4">
                        {experience.description}
                      </Typography>

                      {/* Achievements */}
                      <div className="mb-4">
                        <Typography variant="body" weight="medium" className="mb-2">
                          Key Achievements:
                        </Typography>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Icon
                                name="CheckCircle"
                                size={16}
                                className="text-accent-light dark:text-accent-dark mt-0.5 mr-2 flex-shrink-0"
                              />
                              <Typography variant="caption" color="secondary">
                                {achievement}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <Typography variant="body" weight="medium" className="mb-2">
                          Technologies:
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    3+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Years of Experience
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    50+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Projects Completed
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    15+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Technologies Mastered
                  </Typography>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};