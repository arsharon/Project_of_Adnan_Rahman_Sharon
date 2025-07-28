import React from 'react';

const FeatureItem = ({ feature }) => (
  <div className="flex items-start">
    <img src={feature.icon} alt="" className="w-8 h-8 mr-2" />
    <div>
      <h3 className="font-semibold">{feature.title}</h3>
      <p className='text-sm mt-2'>{feature.subtitle}</p>
    </div>
  </div>
);

const FeaturesSection = ({ features, title = "Course Layout" }) => {
  if (!features?.length) return null;

  return (
    <section className="mt-8 bg-gradient-to-r from-blue-950 to-blue-800 px-6 py-10 text-white rounded-2xl">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {features.map(feature => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;