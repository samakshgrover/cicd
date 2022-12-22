import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        marginTop: '4.375rem',
        paddingTop: '1.75rem',
      }}
    >
      <div style={{ float: 'right' }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
      <a
        href="https://twitter.com/samaksh_grover"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{' '}
      &bull;{' '}
      <a
        href="https://github.com/samakshgrover"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>{' '}
      &bull;{' '}
      <a
        href="https://stackoverflow.com/users/19298297/samakshgrover"
        target="_blank"
        rel="noopener noreferrer"
      >
        stack overflow
      </a>
    </footer>
  );
}

export default Footer;
