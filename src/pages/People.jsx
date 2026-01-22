// src/pages/People.jsx

import { team } from '../data/teamData'; // Import team data

// Reusable card component for each partner
const PartnerCard = ({ name, title, description }) => (
  <div className="bg-white border border-gray-200 p-8">
    <h3 className="text-2xl font-semibold text-black mb-1">{name}</h3>
    <p className="text-lg font-medium text-gray-700 mb-4">{title}</p>
    
    {/* Split description into paragraphs for better reading */}
    <div className="text-gray-600 space-y-4">
      {description.split('. ').map((paragraph, index, arr) => (
        <p key={index}>
          {paragraph}
          {index < arr.length - 1 && '.'}
        </p>
      ))}
    </div>
  </div>
);

const People = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Team
        </h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          At AdvTejasvigoel, we are proud of the diverse expertise and dedication our team brings to the table. Each of our partners is committed to delivering practical, reliable, and result-driven legal solutions. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {team.map((partner) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              title={partner.title}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;