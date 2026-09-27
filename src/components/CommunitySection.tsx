import { Users, MessageSquare, Video, BookOpen, Mic } from 'lucide-react';

const communityActivities = [
  {
    icon: Video,
    title: 'YouTube Tutorials',
    description: 'Over 500+ free programming tutorials in Bangla reaching millions of developers.',
    stats: '1M+ Subscribers',
  },
  {
    icon: Users,
    title: 'Developer Community',
    description: 'Leading one of the largest programming communities in Bangladesh with active discussions.',
    stats: '50K+ Members',
  },
  {
    icon: Mic,
    title: 'Tech Talks & Events',
    description: 'Regular speaker at WordCamp, freeCodeCamp conferences, and local tech meetups.',
    stats: '100+ Talks',
  },
  {
    icon: BookOpen,
    title: 'Technical Writing',
    description: 'Publishing articles on web development, best practices, and emerging technologies.',
    stats: '200+ Articles',
  },
  {
    icon: MessageSquare,
    title: 'Open Source',
    description: 'Contributing to and maintaining open-source projects used by developers worldwide.',
    stats: '50+ Projects',
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-6">Community Contributions</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Giving back to the developer community through education and collaboration
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityActivities.map((activity, index) => (
              <div
                key={index}
                className="experience-card hover:border-primary transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <activity.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-3">
                  {activity.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono font-medium">
                  {activity.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
