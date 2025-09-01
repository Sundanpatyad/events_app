import React, { useState } from 'react';
import { ChevronDown, Phone, Instagram, Facebook, Linkedin, Users, Filter } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/Comment';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  photo: string;
  bio?: string;
  expanded?: boolean;
}

const teamMembers: TeamMember[] = [
  // Owners
  {
    name: 'Darek Kaczmarek',
    role: 'owner',
    department: 'owners',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'He is a real runner. He\'s not afraid of the weather, distance. It doesn\'t matter whether it\'s cross-country running, on asphalt or after terrain. He always definitely takes steps and rushes to gain more kilometers, which are already difficult to count! These smooth steps also translate into:'
  },
  {
    name: 'Lukas Jerzmanowski',
    role: 'owner',
    department: 'owners',
    photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Passionate about music and good sound. Founder of a promising rock band. It used to be the greatest Polish hope of the FIFA World Cup, but we feel that it will still be talked about. Who knows, maybe it will finally breathe some emotion into the Polish league? Between these classes, decide'
  },
  {
    name: 'Michael Ogrzewalski',
    role: 'owner',
    department: 'owners',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'A true master of mastery. If you think you can throw him off balance, you\'re wrong! He never loses his cold blood. Peace is one of its greatest advantages. Like his sense of humor and his incredible ability to release a tense atmosphere'
  },
  {
    name: 'Michael Ogrzewalski',
    role: 'owner',
    department: 'owners',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'A true master of mastery. If you think you can throw him off balance, you\'re wrong! He never loses his cold blood. Peace is one of its greatest advantages. Like his sense of humor and his incredible ability to release a tense atmosphere'
  },

  // Sales and Project Management
  {
    name: 'Julia King',
    role: 'head of sales and marketing',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Agnes Skin',
    role: 'head of project management',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Przemyslaw Pawlik',
    role: 'estimating manager',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Caroline Chabal',
    role: 'project manager',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Patryk Chodecki',
    role: 'account manager',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Mariana Polna',
    role: 'graphic designer',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Ivan martynov',
    role: 'video content specialist',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Barbara Morkowska',
    role: 'marketing communication specialist',
    department: 'sales and project management',
    photo: 'https://images.pexels.com/photos/3763853/pexels-photo-3763853.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },

  // Designers
  {
    name: 'Marzena Michalska',
    role: 'art director & designer',
    department: 'designers',
    photo: 'https://images.pexels.com/photos/3763807/pexels-photo-3763807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Joan Dittmar',
    role: 'designer',
    department: 'designers',
    photo: 'https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Lukas Zaremba',
    role: 'designer',
    department: 'designers',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Bartosz Lugowski',
    role: 'designer',
    department: 'designers',
    photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },

  // Technical Department
  {
    name: 'Monica Stefanska',
    role: 'technical manager',
    department: 'technical department',
    photo: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Pavel Podemsky',
    role: 'graphic designer',
    department: 'technical department',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Aleksandra Tomaszewska',
    role: 'technical manager',
    department: 'technical department',
    photo: 'https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Michalina Balcerzewska',
    role: 'dtp specialist',
    department: 'technical department',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },

  // Finance and Logistics
  {
    name: 'Finance Team Member 1',
    role: 'financial analyst',
    department: 'finance and logistics department',
    photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Finance Team Member 2',
    role: 'logistics coordinator',
    department: 'finance and logistics department',
    photo: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Finance Team Member 3',
    role: 'financial manager',
    department: 'finance and logistics department',
    photo: 'https://images.pexels.com/photos/3763853/pexels-photo-3763853.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    name: 'Finance Team Member 4',
    role: 'accounting specialist',
    department: 'finance and logistics department',
    photo: 'https://images.pexels.com/photos/3763807/pexels-photo-3763807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },

  // Developers
  {
    name: 'Alex Rodriguez',
    role: 'senior full-stack developer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Passionate about creating scalable web applications with modern technologies. Specializes in React, Node.js, and cloud architecture. Always eager to learn new frameworks and share knowledge with the team.'
  },
  {
    name: 'Sarah Chen',
    role: 'frontend developer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Expert in creating beautiful, responsive user interfaces. Loves working with React, TypeScript, and modern CSS frameworks. Focused on performance optimization and accessibility.'
  },
  {
    name: 'David Thompson',
    role: 'backend developer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Specializes in building robust APIs and database systems. Expert in Python, PostgreSQL, and microservices architecture. Passionate about clean code and system reliability.'
  },
  {
    name: 'Emma Wilson',
    role: 'mobile developer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Creates amazing mobile experiences for iOS and Android. Skilled in React Native and Flutter. Focuses on user experience and performance optimization for mobile platforms.'
  },
  {
    name: 'James Park',
    role: 'devops engineer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Ensures smooth deployment and infrastructure management. Expert in AWS, Docker, and CI/CD pipelines. Passionate about automation and system reliability.'
  },
  {
    name: 'Lisa Zhang',
    role: 'qa engineer',
    department: 'developers',
    photo: 'https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Dedicated to ensuring product quality through comprehensive testing strategies. Expert in automated testing, performance testing, and quality assurance processes.'
  },

  // Customer Success
  {
    name: 'Rachel Green',
    role: 'customer success manager',
    department: 'customer success',
    photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Ensures our clients achieve their goals and have exceptional experiences. Builds strong relationships and provides ongoing support to maximize customer satisfaction.'
  },
  {
    name: 'Tom Anderson',
    role: 'support specialist',
    department: 'customer success',
    photo: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Provides technical support and guidance to our clients. Expert in troubleshooting and helping customers get the most out of our products and services.'
  },
  {
    name: 'Maria Santos',
    role: 'client relations coordinator',
    department: 'customer success',
    photo: 'https://images.pexels.com/photos/3763853/pexels-photo-3763853.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Manages client communications and ensures smooth project delivery. Coordinates between different teams to meet client expectations and deadlines.'
  },

  // Operations
  {
    name: 'Robert Kim',
    role: 'operations manager',
    department: 'operations',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Oversees daily operations and ensures efficient workflow across all departments. Focuses on process optimization and team coordination.'
  },
  {
    name: 'Jennifer Lee',
    role: 'hr specialist',
    department: 'operations',
    photo: 'https://images.pexels.com/photos/3763807/pexels-photo-3763807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Manages talent acquisition, employee development, and workplace culture. Passionate about creating a positive work environment for all team members.'
  },
  {
    name: 'Mark Johnson',
    role: 'office manager',
    department: 'operations',
    photo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Ensures smooth office operations and maintains a productive work environment. Handles facilities management and administrative coordination.'
  }
];

const departmentDescriptions = {
  'owners': 'They set goals and standards',
  'sales and project management': 'Team deploy-ideas-in-life',
  'designers': 'enthusiasts of good design',
  'technical department': 'team "we know-how-to-do"',
  'finance and logistics department': 'team always on time',
  'developers': 'building the future with code',
  'customer success': 'dedicated to client satisfaction',
  'operations': 'keeping everything running smoothly'
};

function App() {
  const [viewMode, setViewMode] = useState<'filtered' | 'all'>('all');
  const [activeFilter, setActiveFilter] = useState<string>('owners');
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());

  const filteredMembers = viewMode === 'all' ? teamMembers : teamMembers.filter(member => member.department === activeFilter);

  const toggleExpanded = (memberName: string) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(memberName)) {
      newExpanded.delete(memberName);
    } else {
      newExpanded.add(memberName);
    }
    setExpandedMembers(newExpanded);
  };

  const formatDepartmentTitle = (department: string) => {
    if (department === 'technical department') return 'Technical Department';
    if (department === 'finance and logistics department') return 'Finance and Logistics Department';
    return department;
  };

  const getMembersByDepartment = () => {
    const departments = Object.keys(departmentDescriptions);
    return departments.map(dept => ({
      department: dept,
      members: teamMembers.filter(member => member.department === dept)
    }));
  };

  const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div className="text-center group">
      {/* Profile Photo */}
      <div className="relative mb-8">
        <div className="w-56 h-56 mx-auto rounded-full overflow-hidden bg-black shadow-2xl">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-black tracking-tight">
          {member.name}
        </h3>
        <p className="text-gray-500 text-sm tracking-wide">
          {member.role}
        </p>

        {/* Expand Button and Bio */}
        {member.bio && (
          <div className="mt-6">
            <button
              onClick={() => toggleExpanded(member.name)}
              className="flex items-center justify-center mx-auto text-sm text-gray-500 hover:text-black transition-colors duration-300 group"
            >
              <span className="mr-2 tracking-wide">expand</span>
              <ChevronDown 
                className={`w-4 h-4 transition-all duration-300 group-hover:scale-110 ${
                  expandedMembers.has(member.name) ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedMembers.has(member.name) && (
              <div className="mt-6 p-6 bg-gray-50 rounded-2xl text-left transform transition-all duration-500 ease-out">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-32 bg-white">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main header */}
          <div className="py-16 text-center">
            <h1 className="text-8xl font-black text-black mb-6 tracking-tight">
              team
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">Smart Design Expo → Team</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1">
           
            <button
              onClick={() => setViewMode('all')}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === 'all'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              View All Team
            </button>
            <button
              onClick={() => setViewMode('filtered')}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                viewMode === 'filtered'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter by Department
            </button>
          </div>
        </div>

        {/* Filter Buttons - Only show in filtered mode */}
        {viewMode === 'filtered' && (
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {Object.keys(departmentDescriptions).map((department) => (
              <button
                key={department}
                onClick={() => setActiveFilter(department)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === department
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:shadow-sm'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        )}

        {/* Filtered View - Single Department */}
        {viewMode === 'filtered' && (
          <>
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-black mb-6 tracking-tight">
                {formatDepartmentTitle(activeFilter)}
              </h2>
              <p className="text-gray-500 text-base italic">
                {departmentDescriptions[activeFilter as keyof typeof departmentDescriptions]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20">
              {filteredMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </>
        )}

        {/* All View - All Departments */}
        {viewMode === 'all' && (
          <div className="space-y-32 pb-20">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black text-black mb-6 tracking-tight">
                Our Complete Team
              </h2>
              <p className="text-gray-500 text-base italic">
                Meet everyone who makes our company amazing
              </p>
            </div>

            {getMembersByDepartment().map(({ department, members }) => (
              <div key={department} className="space-y-16">
                {/* Department Header */}
                <div className="text-center">
                  <h3 className="text-4xl font-black text-black mb-4 tracking-tight">
                    {formatDepartmentTitle(department)}
                  </h3>
                  <p className="text-gray-500 text-base italic">
                    {departmentDescriptions[department as keyof typeof departmentDescriptions]}
                  </p>
                </div>

                {/* Department Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                  {members.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                  ))}
                </div>

                {/* Department Separator */}
                <div className="flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;