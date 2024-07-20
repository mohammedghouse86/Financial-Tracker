'use client';

import React, { useState, useEffect } from 'react';
import '../Dashboard.css';

const Page = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log('running useEffect');
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  return (
    <>
      {display && (
        <div className="card">
          <h2 className="card-title">EXPENSES</h2>
          <p className="card-text">THIS IS EXPENSES</p>
        </div>
      )}
    </>
  );
};

export default Page;
