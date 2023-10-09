import React, { useEffect } from 'react';
import Template from '../Template';

const Attributions = () => {
  useEffect(() => {
    // Listen to size change and update form height
    const handleMessage = (e) => {
      try {
        const { type, data } = JSON.parse(e.data);
        if (type === 'igem-attribution-form') {
          const element = document.getElementById('igem-attribution-form');
          element.style.height = data + 50 + 'px';
        }
      } catch (error) {
        // Handle non-JSON messages or JSON parsing errors gracefully
        console.error('Error parsing JSON:', error);
      }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Template title="Attributions">
      <div className="row mt-4">
        <iframe
          id="igem-attribution-form"
          src="https://attributions.igem.org?team=Stanford&year=2023"
          title="iGEM Attributions Form"
        ></iframe>
      </div>
    </Template>
  );
};

export default Attributions;
