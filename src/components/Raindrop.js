import React, { useEffect, useState } from 'react';

const Raindrop = () => {
  const [showRaindrop, setShowRaindrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.querySelector('.next-section');
      if (nextSection) {
        const nextSectionTop = nextSection.getBoundingClientRect().top + 3200;
        const nextSectionBottom = nextSectionTop + nextSection.clientHeight + 1000;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= nextSectionTop && scrollPosition <= nextSectionBottom) {
          // Show the raindrop if you're within the correct div
          setShowRaindrop(true);
        } else {
          // Hide the raindrop when not in the correct div
          setShowRaindrop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to check the state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const raindropStyle = {
    position: 'fixed',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    opacity: showRaindrop ? 1 : 0,
    transition: 'opacity 0.5s ease',
    width: '20%',
  };

  return (
    <div className="raindrop-container">
      <img
        src="https://static.igem.wiki/teams/4951/wiki/graphics/raindrop.svg"
        alt="Raindrop"
        style={raindropStyle}
      />
    </div>
  );
};

export default Raindrop;
