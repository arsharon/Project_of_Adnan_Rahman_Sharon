import React from 'react';
import CourseHeader from './CourseHeader';

const fetchCourseData = async () => {
  const res = await fetch(
    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en',
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

export default async function IELTSCourse() {
  const json = await fetchCourseData();
  const data = json.data;

  const sections = data.sections?.reduce((acc, section) => {
    acc[section.type] = section.values;
    return acc;
  }, {}) || {};

  return (
    <div>
      <main className="w-full md:w-10/12 mx-auto">
        <CourseHeader
          title={data.title}
          description={data.description}
          media={data.media}
          ctaText={data.cta_text}
          price="৳1000"
        />

      </main>
    </div>
  );
}