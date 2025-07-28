import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const LearningPoints = ({ points, title = "কোর্সটি করে যা শিখবেন", limit = 5 }) => {
  if (!points?.length) return null;

  const displayPoints = limit ? points.slice(0, limit) : points;

  return (
    <section className="mt-8 bg-base-200 shadow-2xl rounded-2xl px-6 py-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="mt-2">
        {displayPoints.map(point => (
          <div className='flex gap-2 items-center mt-2' key={point.id}>
            <IoMdCheckmark className="text-green-500 flex-shrink-0" />
            <li>{point.text}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default LearningPoints;