import { useState } from 'react';
import { 
  Code, Briefcase, GraduationCap, Award, Globe, 
  Mail, Linkedin, MapPin, Phone, ChevronRight,
  Server, Database, GitBranch, Cloud, Layers,
  Users, Zap, Target, TrendingUp
} from 'lucide-react';

export  function AboutMe() {
  const [activeTab, setActiveTab] = useState('experience');

  const skills = {
    frontend: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Redux', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'Rust', level: 75 },
      { name: 'Passport.js', level: 85 }
    ],
    database: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'DynamoDB', level: 78 }
    ],
    devops: [
      { name: 'AWS (EC2, S3)', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 90 },
      { name: 'GitHub Actions', level: 87 }
    ]
  };

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Wybrid Technologies Pvt Ltd',
      period: 'Aug 2024 - Present',
      icon: <Briefcase className="w-5 h-5" />,
      highlights: [
        'Led frontend and backend teams, driving product improvements',
        'Built scalable REST APIs with Express, MongoDB',
        'Deployed apps on AWS (EC2, S3, CloudFront, Route 53)',
        'Streamlined CI/CD with GitHub Actions and Docker'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Pace Wisdom Solutions Pvt Ltd',
      period: 'Sept 2021 - Aug 2024',
      icon: <Code className="w-5 h-5" />,
      highlights: [
        'Built responsive web apps using React.js, Next.js, Node.js',
        'Led cross-functional teams, improved code quality',
        'Designed UIs and custom Figma plugins',
        'Implemented automated testing, reducing production bugs'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Remote | Bangalore',
      period: 'Feb 2020 - Jan 2021',
      icon: <Layers className="w-5 h-5" />,
      highlights: [
        'Built real estate property listing web app',
        'Designed furniture shop showcase with Figma',
        'Created interactive restaurant menu app',
        'Developed local news website'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Valuable Employee of the Year',
      company: 'Pace Wisdom',
      date: 'April 2023',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Best Employee of the Month',
      company: 'Conrad Bengaluru',
      date: 'Jan 2019',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Projects Delivered', value: '50+', icon: <Target className="w-5 h-5" /> },
    { label: 'Technologies', value: '20+', icon: <Code className="w-5 h-5" /> },
    { label: 'Team Members Led', value: '10+', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">
                  JD
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Jeevan Dsouza
                </h1>
                <p className="text-xl md:text-2xl text-blue-400 mb-4">
                  Full Stack Developer | MERN Stack Expert
                </p>
                <p className="text-gray-300 text-lg mb-6 max-w-3xl">
                  Accomplished Full Stack Developer with 5+ years transforming business needs into innovative technical realities. Passionate about creating scalable solutions and exceptional user experiences.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="mailto:jeevandsouza94@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-gray-300 hover:text-white">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="tel:+919901992861" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-gray-300 hover:text-white">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-all duration-300 text-blue-400 hover:text-blue-300">
                    <Linkedin className="w-4 h-4" />
                    <a href='https://www.linkedin.com/in/jeevan-dsouza-2214a6110/' target='_blank' className="text-sm">LinkedIn</a>
                  </a>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Mangaluru, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['experience', 'skills', 'achievements', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-blue-400 font-semibold">{exp.company}</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Database</h3>
              </div>
              <div className="space-y-4">
                {skills.database.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">DevOps & Tools</h3>
              </div>
              <div className="space-y-4">
                {skills.devops.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-orange-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{achievement.company}</p>
                    <p className="text-gray-400">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['English', 'Hindi', 'Kannada', 'Tulu', 'Konkani'].map((lang, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelors of Computer Science</h3>
                  <p className="text-blue-400 font-semibold mb-2">Bangalore University, Karnataka</p>
                  <p className="text-gray-300">Foundation in computer science principles, algorithms, and software engineering</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Diploma in Mechatronics</h3>
                  <p className="text-green-400 font-semibold mb-2">SNMP Moodbidire</p>
                  <p className="text-gray-300">Technical foundation in automation, control systems, and programming</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}