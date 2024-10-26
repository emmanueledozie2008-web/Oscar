import React, { useEffect, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import logoAnime from '../assets/Animation - 1726743766102.json';

const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    // Check if the splash screen has been shown before
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');

    if (!hasSeenSplash) {
      setShowSplash(true); // Show splash screen for first-time visitors
      const timer = setTimeout(() => {
        setShowSplash(false);
        // Set flag in localStorage so the splash screen doesn't show again
        localStorage.setItem('hasSeenSplash', 'true');
      }, 2000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false); // Skip the splash if the flag is already set
    }
  }, []);

  return (
    <>
      {showSplash && (
        <style>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}

      {showSplash && (
        <div className="bg-black flex items-center justify-center min-h-screen w-full fixed top-0 z-50">
          <Player
            autoplay
            loop
            src={logoAnime}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      )}
    </>
  );
};

export default SplashScreen;
