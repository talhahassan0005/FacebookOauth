import React from 'react';
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user info from local storage or state
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div>
      <nav>
        <a href="/privacy-policy">Privacy Policy</a>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <h1>Welcome to the Welcome Page</h1>
    </div>
  );
};

export default Welcome;
