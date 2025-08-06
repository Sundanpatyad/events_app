import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-light mb-8">
            portfolio<span className="text-4xl">/</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Kreujemy przestrzeń od prawie 18 lat - projektując i budując stoiska targowe na całym świecie. Nasi 
              projektanci przenoszą nawet najbardziej szalone pomysły ze sfery marzeń do rzeczywistości. Dzięki 
              własnej stolarni i produkcji nie musisz tracić czasu i szukać różnych podwykonawców do realizacji
            </p>
            <button className="text-black hover:text-gray-600 transition-colors">
              rozwiń <span className="ml-1">▼</span>
            </button>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-black text-white p-8">
            <h3 className="text-3xl font-light mb-6">Wiśniowski</h3>
            <div className="space-y-2 text-sm">
              <p>stoisko targowe</p>
              <p>Monachium</p>
              <p>BAU 2023</p>
              <p>527 m2</p>
            </div>
          </div>
          <div 
            className="h-80 lg:h-auto bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/6186574/pexels-photo-6186574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop")',
            }}
          ></div>
        </div>

        {/* Main Portfolio Image */}
        <div className="relative mb-12">
          <div 
            className="h-96 md:h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/6186568/pexels-photo-6186568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
          
          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-black font-medium">Zobacz portfolio</span>
            <div className="text-right">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-gray-500">8</div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-4xl font-light">20</span>
            </div>
            <p className="text-sm text-gray-600">lat doświadczenia</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-4xl font-light">200</span>
            </div>
            <p className="text-sm text-gray-600">projektów rocznie</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-4xl font-light">150</span>
            </div>
            <p className="text-sm text-gray-600">osób na pokładzie</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
              <span className="text-4xl font-light">30</span>
            </div>
            <p className="text-sm text-gray-600">prestiżowych nagród i publikacji</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;