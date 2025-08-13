import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5x text-8xl font-bold md:text-9xl font-bold md:text-7xl lg:text-8xl font-light mb-8">
            O tym się<br />
            mówi<span className="text-4xl">.../</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Kiedy nie chwalisz się światu swoim sukcesem, to zostaje on tylko wewnętrznym powodem do radości.
              My swoją radość przekazujemy dalej. Firmy, dla których tworzymy projekty stoisk targowych regularnie 
              zdobywają nagrody a nasi projektanci goszczą na łamach branżowej prasy w roli ekspertów.
            </p>
            <button className="text-black hover:text-gray-600 transition-colors">
              rozwiń <span className="ml-1">▼</span>
            </button>
          </div>
        </div>

        {/* Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="mb-6">
              <div 
                className="w-48 h-48 mx-auto bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop")',
                }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 mb-2">16 — 2025 NAGRODA</div>
            <h3 className="text-xl font-semibold mb-4">Smart Design Expo z kolejnym A'Design Award!</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Z radością dzielimy się wiadomością, że zdobyliśmy srebrną nagrodę w prestiżowym 
              konkursie A'Design Award. To już nasze piąte wyróżnienie, tym razem za projekt autorstwa 
              Marzeny Michalskiej - stoisko dla marki Wiśniowski.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div 
                className="w-48 h-48 mx-auto bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop")',
                }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 mb-2">09 — 2022 NAGRODA</div>
            <h3 className="text-xl font-semibold mb-4">Smart Design Expo — Silver A'design Award 2022</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Srebrna nagroda A'design Award 2022 dla 
              stoiska zaprojektowanego i zbudowanego na 
              targach KBIS dla polskiej marki Marmite.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div 
                className="w-48 h-48 mx-auto bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop")',
                }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 mb-2">05 — 2019 NAGRODA</div>
            <h3 className="text-xl font-semibold mb-4">Smart Design Expo — Exhibit Design Award 2018</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Projekt stoiska targowego dla firmy Drulex na 
              targach Frontale 2018 otrzymał srebrną 
              nagrodę Exhibit Design Award w kategorii 
              stoisko piętrowe.
            </p>
          </div>
        </div>

        {/* Publications Link */}
        <div className="text-center">
          <button className="text-black hover:text-gray-600 transition-colors text-lg font-medium border-b border-black hover:border-gray-600">
            Zobacz wszystkie publikacje
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;