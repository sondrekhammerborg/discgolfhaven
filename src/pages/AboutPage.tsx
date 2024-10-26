import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const AboutPage: React.FC = () => {
  const position: [number, number] = [40.7128, -74.0060];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Disc Golf Haven</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
            Welcome to Disc Golf Haven, your premier destination for all things disc golf. 
            Founded by passionate disc golf enthusiasts, we've made it our mission to provide 
            players of all skill levels with the finest selection of discs and accessories.
          </p>
          
          <p className="text-gray-700">
            Our team consists of experienced disc golfers who understand the nuances of the sport 
            and can provide expert guidance on choosing the right equipment for your playing style. 
            Whether you're just starting out or competing at a professional level, we're here to 
            help you elevate your game.
          </p>
          
          <p className="text-gray-700">
            At Disc Golf Haven, we believe in building a strong disc golf community. We regularly 
            host events, clinics, and tournaments to bring players together and grow the sport. 
            Our store isn't just a retail space – it's a gathering place for disc golf enthusiasts 
            to share their passion and experiences.
          </p>
        </div>
        
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer 
            style={{ height: '100%', width: '100%' }}
            center={position}
            zoom={13} 
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Disc Golf Haven <br /> Store location coming soon!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;