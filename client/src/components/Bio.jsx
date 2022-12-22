import React from 'react';
import profilePic from '../assets/react.svg';

function Bio() {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '3.5rem',
      }}
    >
      <img
        src={profilePic}
        alt={`Samaksh Grover`}
        style={{
          marginRight: '.87rem',
          marginBottom: 0,
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
        }}
      />
      <p style={{ maxWidth: 410 }}>
        Personal blog by{' '}
        <a href="https://twitter.com/samaksh_grover">Samaksh Grover</a>.{' '}
        I&nbsp;what's in my mind and heart.
      </p>
    </div>
  );
}

export default Bio;
