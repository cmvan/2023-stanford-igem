import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Description from './components/pages/Description';
import Home from './components/pages/Home';
import Engineering from './components/pages/Engineering';
import Implementation from './components/pages/Implementation';
import Results from './components/pages/Results';
import PartCollection from './components/pages/PartsCollection';
import Experiments from './components/pages/Experiments';
import Safety from './components/pages/Safety';
import Notebook from './components/pages/Notebook';
import HumanPractices from './components/pages/IntegratedHumanPractices';
import Education from './components/pages/Education';
import Team from './components/pages/Team';
import Attributions from './components/pages/Attributions';
import Contribution from './components/pages/Contribution';


function App() {
  const location = useLocation();

  // Scroll to the top of the page when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
      <Route path="/engineering" element={<Engineering />} />
      <Route path="/implementation" element={<Implementation />} />
      <Route path="/results" element={<Results />} />
      <Route path="/parts-collection" element={<PartCollection />} />
      <Route path="/experiments" element={<Experiments />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/notebook" element={<Notebook />} />
      <Route path="/human-practices" element={<HumanPractices />} />
      <Route path="/education" element={<Education />} />
      <Route path="/team" element={<Team />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/contribution" element={<Contribution />} />
    </Routes>
  );
}

export default App;