import React from 'react';
import CourseHeader from './CourseHeader';
import InstructorSection from './InstructorSection';
import CourseFeatures from './CourseFeatures';
import LearningPoints from './LearningPoints';
import ExclusiveFeatures from './ExclusiveFeatures';
import CourseDetails from './CourseDetails';
import CourseSidebar from './CourseSidebar';
import { processCourseData } from './utils/courseDataProcessor';

const fetchCourseData = async () => {
  const res = await fetch(
    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn',
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        accept: 'application/json',
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error('Failed to fetch course data');
  return res.json();
};

export const metadata = {
  title: 'IELTS Course - 10 Minute School',
  description: 'Best IELTS course in Bengali and English.',
};

export default async function page() {
  const json = await fetchCourseData();
  const data = json.data;

  const sections = processCourseData(data.sections);

  return (
    <main className="w-full md:w-10/12 mx-auto">
      <CourseHeader
        title={data.title}
        description={data.description}
        media={data.media}
        ctaText={data.cta_text}
        price="৳1000"
      />

      <div className='flex flex-col-reverse md:flex-row gap-9 pr-9 pl-9'>
        <div className='w-full md:w-2/3'>
          <InstructorSection instructors={sections.instructors} />
          <CourseFeatures features={sections.features} />
          <LearningPoints points={sections.pointers} />
          <CourseDetails items={sections.about} />
          <ExclusiveFeatures features={sections.feature_explanations} />
        </div>

        <CourseSidebar checklist={data.checklist} />
      </div>
    </main>
  );
}