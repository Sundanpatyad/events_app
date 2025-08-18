import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section with logo and certifications */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-8 border-b border-gray-700">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm mb-2">SMART DESIGN EXPO SP. Trade fair stands. Z. O. O.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg tracking-wider">ESSA</span>
              <span className="text-xs">Member</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs">member of</span>
              <span className="text-white font-bold text-lg tracking-wider">IFES</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs">Unia Europejska</span>
              <div className="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <div className="w-6 h-4 bg-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-px">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1 - Interior Design Services */}
          <div className="space-y-2">
            <div className="text-xs leading-relaxed">
              <p>Interior designer Białystok</p>
              <p>Interior design Toruń</p>
              <p>Interior designer Sosnowiec</p>
              <p>Interior design Radom</p>
              <p>Interior designer Zabrze</p>
              <p>Interior design Bielsko-Biała</p>
              <p>Interior designer Rzeszów</p>
              <p>Interior design Rybnik</p>
              <p>Interior designer Olsztyn</p>
              <p>Interior design Dąbrowa Górnicza</p>
              <p>Interior designers Opole</p>
              <p>Interior design Gdańsk</p>
              <p>Interior designer Poznań</p>
              <p>Interior design Wałbrzych</p>
              <p>Interior design Chorzów</p>
              <p>Interior designers Tarnów</p>
              <p>Interior designer Zielona Góra</p>
              <p>Interior design Nowy Sącz</p>
              <p>Interior designer Jelenia Góra</p>
              <p>Interior designers Swidnica</p>
              <p>Interior designer Pila</p>
              <p>Interior designer Stalowa</p>
              <p>Interior designer Grudziądz</p>
              <p>Interior designers Słupsk</p>
              <p>Interior designers Jaworzno</p>
              <p>Trade fair stands Wrocław</p>
              <p>Trade fair stands Częstochowa</p>
              <p>Trade fair stands Toruń</p>
              <p>Kraków trade fair stands</p>
              <p>Wrocław trade fair stands</p>
            </div>
          </div>

          {/* Column 2 - Trade Fair Services */}
          <div className="space-y-2">
            <div className="text-xs leading-relaxed">
              <p>Trade fair stands Warszawa</p>
              <p>Stuttgart Fair</p>
              <p>Trade fair stands Poznań</p>
              <p>London trade fair stands</p>
              <p>Fair design Gdańsk</p>
              <p>Hamburg fair stands</p>
              <p>Hamburg trade fair stands</p>
              <p>Geneva Fair</p>
              <p>Munich trade fair</p>
              <p>Düsseldorf Fair</p>
              <p>Ostrava Fair</p>
              <p>Sosnowiec Fair</p>
              <p>Rzeszów Fair</p>
              <p>Kielce Fair</p>
              <p>Trade fair stands Bydgoszcz</p>
              <p>Paris trade fair stands</p>
              <p>Amsterdam trade fair stands</p>
              <p>Nice trade fair stands</p>
              <p>Munich Trade fair stands</p>
              <p>Milan trade fair stands</p>
              <p>Trade fair stands Berlin</p>
              <p>Poznań Fair</p>
              <p>Cologne Fair</p>
              <p>Barcelona trade fair stands</p>
              <p>Stockholm trade fair stands</p>
              <p>Trade fair stands Łódź</p>
              <p>Fair design Szczecin</p>
              <p>R+T trade fair stand</p>
              <p>ICM trade fair stand</p>
              <p>SCRC R+I trade fair stand</p>
            </div>
          </div>

          {/* Column 3 - Exhibition Services */}
          <div className="space-y-2">
            <div className="text-xs leading-relaxed">
              <p>Exhibition trade fair stands</p>
              <p>Company for building trade fair stands</p>
              <p>Interior finishing</p>
              <p>Exhibition stand design</p>
              <p>Grand exhibition stands</p>
              <p>Steel exhibition stands</p>
              <p>Copper trade fair stands</p>
              <p>Gold trade fair stands</p>
              <p>Silver trade fair stands</p>
              <p>Trade fair stands made of material</p>
              <p>Openwork trade fair stands</p>
              <p>Concrete trade fair stands</p>
              <p>Glass trade fair stands</p>
              <p>Metal trade fair stands</p>
              <p>Leading trade fair stands</p>
              <p>Corner trade fair stands</p>
              <p>Simple trade fair stands</p>
              <p>Original trade fair stands</p>
              <p>Advertising walls</p>
              <p>Designer trade fair stands</p>
              <p>Modern trade fair stands</p>
              <p>Promotional trade fair stands</p>
              <p>Individual exhibition stands</p>
              <p>Exhibition exhibition stands</p>
              <p>Luxury exhibition stands</p>
              <p>BAU trade fair stand</p>
              <p>TRAAKO trade fair stand</p>
              <p>BUDMA trade fair stand</p>
              <p>IFA trade fair stand</p>
              <p>PLASTPOL trade fair stand</p>
              <p>INNOTRANS trade fair stand</p>
              <p>Europe Fair</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 sm:mb-0">
            <a href="#" className="text-xs hover:text-white transition-colors">Cookie policy</a>
            <a href="#" className="text-xs hover:text-white transition-colors">GDPR Clause</a>
          </div>
          
          <div className="text-xs">
            <span>Development by </span>
            <a href="#" className="hover:text-white transition-colors">dFresh</a>
            <span> · Administered by </span>
            <a href="#" className="hover:text-white transition-colors">NiceWebsite.eu</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;