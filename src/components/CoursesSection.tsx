import { ExternalLink, Users, Clock, Star } from 'lucide-react';

const courses = [
  {
    title: 'Think in a Redux way',
    platform: 'Learn With Sumit',
    students: '5,000+',
    duration: '20+ hours',
    rating: '4.9',
    description: 'Master Redux from scratch with real-world projects and best practices.',
    link: 'https://learnwithsumit.com',
    image: '🔄',
  },
  {
    title: 'Reactive Accelerator',
    platform: 'Learn With Sumit',
    students: '8,000+',
    duration: '40+ hours',
    rating: '4.8',
    description: 'Complete React.js course covering hooks, context, and advanced patterns.',
    link: 'https://learnwithsumit.com',
    image: '⚛️',
  },
  {
    title: 'JavaScript for Beginners',
    platform: 'Learn With Sumit',
    students: '15,000+',
    duration: '30+ hours',
    rating: '4.9',
    description: 'Learn JavaScript fundamentals with hands-on exercises and projects.',
    link: 'https://learnwithsumit.com',
    image: '🟨',
  },
  {
    title: 'Node.js Masterclass',
    platform: 'Learn With Sumit',
    students: '3,500+',
    duration: '25+ hours',
    rating: '4.7',
    description: 'Build scalable backend applications with Node.js and Express.',
    link: 'https://learnwithsumit.com',
    image: '💚',
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-4">Courses</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Premium courses I've created to help developers level up their skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="experience-card group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{course.image}</div>
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono">{course.platform}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm font-mono leading-relaxed mt-4 mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1 text-muted-foreground text-xs font-mono">
                    <Users size={14} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs font-mono">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs font-mono">
                    <Star size={14} className="text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <a
                  href={course.link}
                  className="inline-flex items-center gap-1 text-primary text-sm font-mono hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Course <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
