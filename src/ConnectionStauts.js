import React, { useEffect, useState } from 'react';
import App from './App';
import './App.css'

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <App/>
      ) : (
        <p>You are offline. Please check your internet connection.</p>
      )}
    </div>
  );
};

export default ConnectionStatus;
