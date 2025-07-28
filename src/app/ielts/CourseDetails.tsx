import React from 'react';

const CourseDetails = ({ items, title = "কোর্স সম্পর্কে বিস্তারিত" }) => {
  if (!items?.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2"
        >
          <input
            type="checkbox"
            defaultChecked={index === 0}
          />
          <div
            className="collapse-title font-semibold"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <div
            className="collapse-content text-sm prose"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </section>
  );
};

export default CourseDetails;