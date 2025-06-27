import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React Basics', description: 'Learn about components, props, and state.' },
  { id: 2, title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.' },
];

const CourseList = () => {
  return (
    <div>
      <h2 className="mb-4">📚 Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-6 mb-4" key={course.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/quiz/${course.id}`} className="btn btn-primary">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
