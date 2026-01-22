// src/pages/Expertise.jsx

import { practiceAreas } from '../data/practiceAreasData'; // Import practice areas data

// Reusable card for practice areas
const AreaCard = ({ name, description }) => (
  <div className="bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:border-black">
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
      {name}
    </h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const Expertise = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Areas of Practice
        </h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          At AdvTejasvigoel, we provide comprehensive legal solutions across a wide spectrum of practice areas. Our diverse expertise allows us to cater to the unique needs of individuals, businesses, and institutions, ensuring effective representation and practical outcomes. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area) => (
            <AreaCard
              key={area.name}
              name={area.name}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;