import React from 'react';
import ContactForm from '../components/Comment';
import Footer from '../components/Footer';

const ExhibitionPortfolioUI = () => {
  const exhibitionProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop",
      title: "BAU MÜNCHEN — 2024",
      hasAccent: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
      title: "R+T STUTTGART — 2025",
      hasAccent: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=450&fit=crop",
      title: "BUDMA POZNAŃ — 2024",
      hasAccent: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=450&fit=crop",
      title: "GLASSTEC — DÜSSELDORF 2024",
      hasAccent: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=450&fit=crop",
      title: "LIGHT + BUILDING — 2025",
      hasAccent: false
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&h=450&fit=crop",
      title: "ISH FRANKFURT — 2024",
      hasAccent: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=600&h=450&fit=crop",
      title: "HANNOVER MESSE — 2024",
      hasAccent: true
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop",
      title: "EXPO REAL — MÜNCHEN 2025",
      hasAccent: false
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=450&fit=crop",
      title: "CEVISAMA — VALENCIA 2024",
      hasAccent: false
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=450&fit=crop",
      title: "BATIMAT — PARIS 2025",
      hasAccent: false
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1562113530-57ba0c8e60b4?w=600&h=450&fit=crop",
      title: "MADE EXPO — MILANO 2024",
      hasAccent: false
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=450&fit=crop",
      title: "INTERSOLAR — MUNICH 2025",
      hasAccent: true
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=450&fit=crop",
      title: "ARCHITECT@WORK — BERLIN 2024",
      hasAccent: false
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop",
      title: "CLIMATIZACIÓN — MADRID 2025",
      hasAccent: false
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop",
      title: "TARGKIELCE — BUILD 2024",
      hasAccent: false
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop",
      title: "WARSAW BUILD — EXPO 2025",
      hasAccent: false
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1560472355-a9a6ea4a3ffd?w=600&h=450&fit=crop",
      title: "KRAKÓW EXPO — BUILD 2024",
      hasAccent: true
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=450&fit=crop",
      title: "WROCŁAW — CONSTRUCTION 2025",
      hasAccent: false
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1560472354-36ac5f6e43b5?w=600&h=450&fit=crop",
      title: "GDANSK BUILD — FAIR 2024",
      hasAccent: false
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=450&fit=crop",
      title: "LUBLIN — INNOVATION 2025",
      hasAccent: false
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1560472355-67d8da34e0ca?w=600&h=450&fit=crop",
      title: "KATOWICE — SUMMIT 2024",
      hasAccent: false
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=450&fit=crop",
      title: "POZNAŃ — FUTURE 2025",
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
    <div className="min-h-screen bg-gray-50 mt-20 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6">
          <div className="text-sm font-medium text-gray-600">EXPO</div>
          <div className="text-sm font-medium text-gray-600">+48 61 642 7147</div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-8">
          {/* Portfolio Title */}
          <div className="text-center mb-16">
            <h1 className="text-8xl font-bold text-black mb-4">exhibitions</h1>
            <p className="text-sm text-gray-600">Smart Design Expo • Exhibition Portfolio</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-20">
            <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm">
              targi międzynarodowe
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm">
              kompleksowa obsługa
            </button>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-16">targi międzynarodowe</h2>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {exhibitionProjects.map((project) => (
              <div key={project.id} className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default ExhibitionPortfolioUI;