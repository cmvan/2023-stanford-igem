import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Description from './components/pages/Description';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
import Engineering from './components/pages/Engineering';
import Implementation from './components/pages/Implementation';
import Results from './components/pages/Results';
import PartCollection from './components/pages/PartCollection';
import Parts from './components/pages/Parts';
import Experiments from './components/pages/Experiments';
import Safety from './components/pages/Safety';
import Notebook from './components/pages/Notebook';
import HumanPractices from './components/pages/IntegratedHumanPractices';
import Communication from './components/pages/Communication';
import SustainableDevelopment from './components/pages/SustainableDevelopment';
import Education from './components/pages/Education';
import Team from './components/pages/Team';
import Attributions from './components/pages/Attributions';
import Contribution from './components/pages/Contribution';
import Awards from './components/pages/Awards';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
      <Route path="/design" element={<Design />} />
      <Route path="/engineering" element={<Engineering />} />
      <Route path="/implementation" element={<Implementation />} />
      <Route path="/results" element={<Results />} />
      <Route path="/part-collection" element={<PartCollection />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/experiments" element={<Experiments />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/notebook" element={<Notebook />} />
      <Route path="/human-practices" element={<HumanPractices />} />
      <Route path="/communication" element={<Communication />} />
      <Route path="/sustainable" element={<SustainableDevelopment />} />
      <Route path="/education" element={<Education />} />
      <Route path="/team" element={<Team />} />
      <Route path="/attributions" element={<Attributions />} />
      <Route path="/contribution" element={<Contribution />} />
      <Route path="/awards" element={<Awards />} />
    </Routes>
  );
}

export default App;