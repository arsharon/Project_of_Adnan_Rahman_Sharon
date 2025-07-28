import React from 'react';

const CourseHeader = ({ title, description, media, ctaText, price = '৳1000' }) => {
  const videoMedia = media?.find(m => m.resource_type === 'video');

  return (
    <div className='flex flex-col md:flex-row gap-10 items-center bg-gradient-to-b from-blue-950 to-blue-800 px-9 pt-5 text-white rounded-2xl shadow-2xl'>
      <div className='w-full md:w-2/3'>
        <h1 className="text-3xl mt-10 md:text-5xl md:mt-0 font-bold mb-4">{title}</h1>
        <section
          className="prose mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className='w-full md:w-1/3 bg-base-200 p-5 shadow-2xl rounded-t-2xl'>
        {videoMedia && (
          <section className="mt-6">
            <iframe
              className="w-full h-64"
              src={`https://www.youtube.com/embed/${videoMedia.resource_value}`}
              title="Course trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>
        )}

        <button className="btn w-full mt-6 bg-blue-600 text-white rounded-full hover:border-blue-600 hover:bg-white hover:text-blue-600">
          {ctaText?.name ?? 'Enroll'} – {price}
        </button>
      </div>
    </div>
  );
};

export default CourseHeader;