import React from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/Comment';

const PortfolioUI = () => {
  const portfolioProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop",
      title: "DECEUNINCK — FRONTALE 2024",
      hasAccent: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
      title: "ALUPROF — BAU 2025",
      hasAccent: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=450&fit=crop",
      title: "ANWIS — R+T 2024",
      hasAccent: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=450&fit=crop",
      title: "TEKNOS — EXPO 2024",
      hasAccent: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=450&fit=crop",
      title: "VELUX — BUDMA 2025",
      hasAccent: false
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&h=450&fit=crop",
      title: "REHAU — LIGHT 2024",
      hasAccent: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=600&h=450&fit=crop",
      title: "FAKRO — FAIR 2024",
      hasAccent: true
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop",
      title: "KOMMERLING — TRADE 2025",
      hasAccent: false
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=450&fit=crop",
      title: "SALAMANDER — SHOW 2024",
      hasAccent: false
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=450&fit=crop",
      title: "ALIPLAST — EXPO 2025",
      hasAccent: false
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1562113530-57ba0c8e60b4?w=600&h=450&fit=crop",
      title: "CORTIZO — MADRID 2024",
      hasAccent: false
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=450&fit=crop",
      title: "SCHUCO — MESSE 2025",
      hasAccent: true
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=450&fit=crop",
      title: "KAWNEER — HANNOVER 2024",
      hasAccent: false
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop",
      title: "GUARDIAN — GLASS 2025",
      hasAccent: false
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop",
      title: "PILKINGTON — TECH 2024",
      hasAccent: false
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop",
      title: "TREMCO — BUILD 2025",
      hasAccent: false
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1560472355-a9a6ea4a3ffd?w=600&h=450&fit=crop",
      title: "SOUDAL — WARSAW 2024",
      hasAccent: true
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=450&fit=crop",
      title: "HENKEL — INDUSTRY 2025",
      hasAccent: false
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1560472354-36ac5f6e43b5?w=600&h=450&fit=crop",
      title: "MAPEI — CONSTRUCT 2024",
      hasAccent: false
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=450&fit=crop",
      title: "TESA — INNOVATION 2025",
      hasAccent: false
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1560472355-67d8da34e0ca?w=600&h=450&fit=crop",
      title: "BONFIX — SUMMIT 2024",
      hasAccent: false
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=450&fit=crop",
      title: "GEALAN — FUTURE 2025",
      hasAccent: true
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.hasAccent && (
          <div className="absolute top-4 right-4 w-12 h-16 bg-purple-500 rounded opacity-80"></div>
        )}
      </div>
      {project.title && (
        <h3 className="text-lg font-bold text-black">{project.title}</h3>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-6">
        <div className="text-sm font-medium text-gray-600">EXPO</div>
        <div className="text-sm font-medium text-gray-600">+48 61 642 7147</div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8">
        {/* Portfolio Title */}
        <div className="text-center mb-16">
          <h1 className="text-8xl font-bold text-black mb-4">portfolio</h1>
          <p className="text-sm text-gray-600">Smart Design Expo • Portfolio</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            inspirujące stoiska
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            ty projektujesz my budujemy
          </button>
        </div>

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">inspirujące stoiska</h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default PortfolioUI;