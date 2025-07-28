import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const CourseChecklist = ({ items, title = "What's included?" }) => {
  if (!items?.length) return null;

  return (
    <section className="bg-base-200 p-5 shadow-2xl rounded-b-2xl">
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      <ul className="mt-3">
        {items.map(item => (
          <div className='flex gap-2 items-center mb-2' key={item.id}>
            <IoMdCheckmark className="text-green-500 flex-shrink-0" />
            <li>{item.text}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default CourseChecklist;