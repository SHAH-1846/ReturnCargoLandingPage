import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        background: 'none',
        border: '2px solid #e2e8f0',
        borderRadius: '50px',
        padding: '8px 16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4b5563',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = '#2563eb';
        e.target.style.color = '#2563eb';
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = '#e2e8f0';
        e.target.style.color = '#4b5563';
      }}
    >
      <span style={{ fontSize: '16px' }}>
        {isDark ? '☀️' : '🌙'}
      </span>
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

export default DarkModeToggle;