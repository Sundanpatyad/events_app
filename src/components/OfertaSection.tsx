import React from 'react';

const OfertaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light mb-12">
            Oferta
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Funkcjonalność spotyka się u nas z pięknem i estetyką. Projektujemy i budujemy stoiska targowe na 
              całym świecie. Kompleksowo prowadzimy Twój projekt, przez co oszczędzisz mnóstwo czasu i energii na 
              szukanie wykonawców.
            </p>
          </div>
        </div>

        {/* Services Grid - Exact UI from image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Projekt */}
          <div className="relative group overflow-hidden">
            <div 
              className="h-96 md:h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop")',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-8 left-8">
                <h3 className="text-white text-4xl md:text-5xl font-light">Projekt</h3>
              </div>
            </div>
          </div>

          {/* Produkcja */}
          <div className="relative group overflow-hidden">
            <div 
              className="h-96 md:h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop")',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-8 left-8">
                <h3 className="text-white text-4xl md:text-5xl font-light">Produkcja</h3>
              </div>
            </div>
          </div>

          {/* Realizacja */}
          <div className="relative group overflow-hidden">
            <div 
              className="h-96 md:h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop")',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-8 left-8">
                <h3 className="text-white text-4xl md:text-5xl font-light">Realizacja</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;