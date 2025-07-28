import React from 'react';

const InstructorCard = ({ instructor }) => (
  <div className="mt-4 flex items-center">
    <img 
      src={instructor.image} 
      alt={instructor.name} 
      className="w-20 h-20 rounded-full object-cover" 
    />
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{instructor.name}</h3>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: instructor.description }}
      />
    </div>
  </div>
);

const InstructorSection = ({ instructors }) => {
  if (!instructors?.length) return null;

  return (
    <section className="mt-8 bg-base-200 px-6 py-4 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-semibold">
        {instructors.length > 1 ? 'Instructors' : 'Instructor'}
      </h2>
      {instructors.map(instructor => (
        <InstructorCard key={instructor.name || instructor.id} instructor={instructor} />
      ))}
    </section>
  );
};

export default InstructorSection;