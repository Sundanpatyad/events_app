import React, { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  files: File[];
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    files: [],
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen ">
      {/* Top Section - White Background */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-8xl md:text-9xl lg:text-10xl font-black mb-5">Contact</h1>
          </div>
          
          <div className="flex justify-between gap-20 items-center">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-2">ul. Szparagowa 12</p>
              <p className="text-gray-600 leading-relaxed mb-2">62-081 Highly prepared</p>
              <p className="text-gray-600 leading-relaxed mb-8">Przeźmierowo, Poland</p>
              
              <div className="mt-8">
                <p className="text-gray-600 leading-relaxed mb-2">tel.: +48 61 642 7147</p>
                <p className="text-gray-600 leading-relaxed mb-2">email: office@smartdesign-expo.com</p>
                <p className="text-gray-600 leading-relaxed">NIP: 781-18-75-078</p>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-gray-600 mb-8 leading-relaxed">
                tell us more<br />
                about your expectations
              </p>
              
              <div className="space-y-4">
                <a href="#" className="block text-gray-900 font-bold text-base hover:underline">
                  fill brief
                </a>
                <a href="#" className="block text-gray-900 font-bold text-base hover:underline">
                  download the stand portfolio
                </a>
                <a href="#" className="block text-gray-900 font-bold text-base hover:underline">
                  download the lighting catalog
                </a>
                <a href="#" className="block text-gray-900 font-bold text-base hover:underline">
                  download the equipment catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Black Background */}
      <div className="bg-black text-white py-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-3">HOW CAN WE HELP YOU?</h2>
            <h3 className="text-3xl font-normal text-gray-300">CONTACT US</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex gap-10 mb-10">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none border-b border-gray-700 text-white text-base py-4 outline-none focus:border-gray-500 placeholder-gray-600"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none border-b border-gray-700 text-white text-base py-4 outline-none focus:border-gray-500 placeholder-gray-600"
                />
              </div>
            </div>
            
            <div className="flex gap-10 mb-10">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none border-b border-gray-700 text-white text-base py-4 outline-none focus:border-gray-500 placeholder-gray-600"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-none border-b border-gray-700 text-white text-base py-4 outline-none focus:border-gray-500 placeholder-gray-600"
                  required
                />
              </div>
            </div>
            
            <div className="my-16">
              <label className="block text-gray-600 text-sm mb-4">
                Add files:<br />
                (brief, inspiration photos,<br />
                photos of previous stands, design in PDF)
              </label>
              <div className="border border-dashed border-gray-700 bg-transparent p-20 text-center cursor-pointer hover:border-gray-500 transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-5xl text-gray-700 mb-5">+</div>
                </label>
              </div>
            </div>
            
            <div className="my-10">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 scale-125"
                  required
                />
                <p className="text-xs text-gray-600 leading-relaxed">
                  I consent to the processing of my personal data by Smart Design Expo Sp. z o.o. based in Wysogotów at Szparagowa St. 62, 
                  62-081 Przeźmierowo for the form of art 6 sec. 1 point a of the GDPR to my address in order to send me marketing information regarding products / services 
                  offered by Smart Design Expo Sp. z o.o. using electronic means of communication, in particular to the content of the 
                  provisions of Art. 10 section 1 and 2 of the Act on the provision of electronic services. I have read the content of information 
                  on the processing of personal data for <a href="#" className="text-gray-600 underline">GDPR</a>
                </p>
              </div>
            </div>
            
            <div className="flex justify-end mb-16">
              <button
                type="submit"
                className="bg-transparent text-white border border-gray-700 px-10 py-4 text-base font-bold cursor-pointer hover:bg-white hover:text-black transition-all"
              >
                SEND
              </button>
            </div>
            
            <div className="flex justify-between items-start mt-20 pt-10 border-t border-gray-700">
              <div className="flex-1">
                <div className="mb-8">
                  <a href="#" className="text-white font-bold block mb-2 hover:underline">fill brief</a>
                  <a href="#" className="text-white font-bold block mb-2 hover:underline">
                    download<br />
                    stand portfolio &gt;
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-2">ul. Szparagowa 12</p>
                  <p className="text-gray-600 mb-2">62-081 Highly prepared</p>
                  <p className="text-gray-600">Przeźmierowo, Poland</p>
                </div>
              </div>
              
              <div className="flex-1 text-right">
                <p className="text-gray-600 mb-2">tel.: +48 61 642 7147</p>
                <p className="text-gray-600 mb-2">email: office@smartdesign-expo.com</p>
                <p className="text-gray-600">NIP: 781-18-75-078</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;