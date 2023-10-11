import React, { useEffect, useState } from 'react';

const HomeAnimationLogo = () => {
  const [text, setText] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const animatedText =
      "What if you could eliminate the presence of antibiotic resistance from the environment?";

    const typeText = async () => {
      for (let i = 0; i <= animatedText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setText(animatedText.slice(0, i) + '|');
      }

      // After the loop, clear the text to show only the final result
      setText(animatedText);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Start the fade-out animation by adding the 'fade-out' class
      setShowLogo(true);
    };

    typeText();
  }, []);

  return (
    <div className="animation-container">
      <div className={`text-animation ${showLogo ? 'fade-out' : ''}`}>
        <span>{text}</span>
      </div>
      <img
        src="https://static.igem.wiki/teams/4951/wiki/graphics/phagelogofinal.svg"
        alt="Logo"
        style={{
          display: 'block',
          opacity: showLogo ? 1 : 0, // Use opacity to control the fade-in effect
          transition: 'opacity 4s ease-in-out', // Add a transition for smoother animation
        }}
      />
    </div>
  );
};

export default HomeAnimationLogo;