import { useEffect, useState } from 'react';

const BACKEND_URL = "https://expp-zefs.onrender.com";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        // This 'pings' Render to start the spin-up process
        await fetch(BACKEND_URL);
        setIsReady(true);
      } catch (error) {
        console.error("Waking up...", error);
        // Retry logic can go here if needed
      }
    };

    wakeUpBackend();
  }, []);

  if (!isReady) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h2>Waking up EventVault...</h2>
        <p>Please wait a moment while we prepare the server.</p>
        <div className="spinner"></div> 
      </div>
    );
  }

  return <MainDashboard />; // Your actual app content
}