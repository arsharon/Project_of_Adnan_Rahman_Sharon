export const processCourseData = (sections) => {
  return sections?.reduce((acc, section) => {
    acc[section.type] = section.values;
    return acc;
  }, {}) || {};
};