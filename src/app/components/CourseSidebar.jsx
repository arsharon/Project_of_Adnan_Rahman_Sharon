import React from 'react';
import CourseChecklist from './CourseChecklist';

const CourseSidebar = ({ checklist }) => {
  return (
    <div className='w-full md:w-1/3'>
      <CourseChecklist items={checklist} />
    </div>
  );
};

export default CourseSidebar;