
import React from 'react';

const CourseDetails = () => {
  const course = {
    name: "React Development",
    duration: "8 weeks",
    level: "Intermediate",
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>Course Details</h3>
      <p><strong>Name:</strong> {course.name}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Level:</strong> {course.level}</p>
    </div>
  );
};

export default CourseDetails;