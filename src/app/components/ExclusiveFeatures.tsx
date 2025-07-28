import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const ExclusiveFeatureCard = ({ features }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
    {features.map((feature, index) => (
      <div key={feature.id}>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800 mb-4">{feature.title}</h3>
              
              <div className="space-y-3">
                {feature.checklist?.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <IoMdCheckmark className="text-green-500 text-lg flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-48">
              <img 
                src={feature.file_url} 
                alt={feature.title}
                className="rounded-xl w-full h-32 lg:h-40 object-cover"
              />
            </div>
          </div>
        </div>
        
        {index < features.length - 1 && (
          <div className="border-b border-gray-200 mx-4"></div>
        )}
      </div>
    ))}
  </div>
);

const ExclusiveFeatures = ({ features, title = "Course Exclusive Feature" }) => {
  if (!features?.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <ExclusiveFeatureCard features={features} />
    </section>
  );
};

export default ExclusiveFeatures;