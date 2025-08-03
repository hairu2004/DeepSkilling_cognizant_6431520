// src/App.js
import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('book');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App</h1>
      <p>
        <strong>Viewing: </strong>
        {activeComponent === 'book' && <span>Book Details</span>}
        {activeComponent === 'blog' && <span>Blog Details</span>}
        {activeComponent === 'course' && <span>Course Details</span>}
      </p>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveComponent('book')}> Book</button>
        <button onClick={() => setActiveComponent('blog')}> Blog</button>
        <button onClick={() => setActiveComponent('course')}> Course</button>
      </div>
      {(() => {
        if (activeComponent === 'book') {
          return <BookDetails />;
        } else if (activeComponent === 'blog') {
          return <BlogDetails />;
        } else if (activeComponent === 'course') {
          return <CourseDetails />;
        }
        return null;
      })()}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {isLoggedIn ? (
        <p style={{ color: 'green' }}> Welcome, User!</p>
      ) : (
        <p style={{ color: 'gray' }}> Please log in to continue.</p>
      )}
      {isLoggedIn && (
        <div style={{ marginTop: '10px', border: '1px dashed green', padding: '10px' }}>
          <h4> Exclusive Content</h4>
          <p>This is visible only when logged in.</p>
        </div>
      )}
      <h3>Rendered List with Keys</h3>
      <ul>
        {['Books', 'Blogs', 'Courses'].map((item, index) => (
          <li key={index} style={{ fontWeight: activeComponent === item.toLowerCase() ? 'bold' : 'normal' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;