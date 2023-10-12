import React, { useEffect, useState } from 'react';
import Template2 from '../Template2';
import HomeAnimationLogo from '../HomeAnimationLogo';
import Raindrop from '../Raindrop';

const Home = () => {
  const [countedNumbers, setCountedNumbers] = useState({
    statistic1: 0,
    statistic2: 0,
    statistic3: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const revealThreshold = window.innerHeight / 3; // Adjust this threshold as needed
      const scrollPosition = window.scrollY;

      const elements = document.querySelectorAll('.hidden-text');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition - revealThreshold < window.innerHeight) {
          element.classList.add('visible-text');
        }
      });

      // Calculate revealThreshold for number section
      const numberRevealThreshold = window.innerHeight / 10; // Adjust this threshold as needed

      const numberSection = document.querySelector('.number-section');
      if (!numberSection) return;

      const elementPosition = numberSection.getBoundingClientRect().top;

      if (scrollPosition >= elementPosition - numberRevealThreshold) {
        startNumberCounting();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const startNumberCounting = () => {
    const endCount1 = 10; // Final number for Statistic 1
    const endCount2 = 2.8; // Final number for Statistic 2
    const endCount3 = 4.6; // Final number for Statistic 3

    const increment1 = 0.1;
    const increment2 = 0.04;
    const increment3 = 0.05;

    let currentCount1 = 0;
    let currentCount2 = 0;
    let currentCount3 = 0;

    const updateNumbers = () => {
      currentCount1 = Math.min(currentCount1 + increment1, endCount1);
      currentCount2 = Math.min(currentCount2 + increment2, endCount2);
      currentCount3 = Math.min(currentCount3 + increment3, endCount3);

      setCountedNumbers({
        statistic1: currentCount1,
        statistic2: currentCount2,
        statistic3: currentCount3,
      });

      if (
        currentCount1 < endCount1 ||
        currentCount2 < endCount2 ||
        currentCount3 < endCount3
      ) {
        requestAnimationFrame(updateNumbers);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(updateNumbers);
    }, 1000); // Adjust the delay time as needed
  };
  return (
    <Template2 title="Home">
      <div className="home-header-top">
        <HomeAnimationLogo />
        <div className="wave"></div>
      </div>
      <div className="home-statistics center extra-space">
        <h1 className="hidden-text">
          Antibiotic resistance in the environment harms human health and creates ecological imbalances.<br></br><br></br>At Stanford iGEM, we aim to control the lytic activity of bacteriophages by integrating synthetic RNA switches to selectively target bacteria containing an antibiotic resistance gene in order to maintain the native microbiota.
        </h1>
      </div>
      <div className="home-flex center">
        <div className="flex-item">
          <h2>Lake Merritt – a vast tidal lagoon located just in our backyards, Oakland, CA – has been plagued by deteriorating water quality, exacerbated by antibiotic resistance contamination.</h2>
        </div>
        <div className="flex-item">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/arbacteria.svg" alt="AR Bacteria" />
        </div>
        <div className="flex-item" id="pin-drawing">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/pinlocation.svg" alt="Lake" />
        </div>
        <div className="flex-item">
          <h2>Lake Merritt serves as a microcosm of a critical, time-sensitive challenge…</h2>
        </div>
        <div className="flex-item">
          <h2>The global rise in antibiotic resistance is an urgent public health crisis that demands innovative solutions. The consequences of inaction are dire.</h2>
        </div>
        <div className="flex-item">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/upwardgraph4.svg" alt="Upward Trend" />
        </div>
      </div>
      <div className="home-statistics center number-section">
        <div className="statistic-column">
          <div className="number">
            <span className="hidden-number">
              {countedNumbers.statistic1 >= 10
                ? countedNumbers.statistic1.toFixed(0) // Display as integer when >= 10
                : countedNumbers.statistic1.toFixed(1)} {/* Display as decimal when < 10 */}
            </span>
            <p className="unit">million deaths</p>
          </div>
          <p className="description">are expected to be caused by antibiotic resistant bacterial infections globally by 2050.<sup>1</sup></p>
        </div>
        <div className="statistic-column">
          <div className="number">
            <span className="hidden-number">{countedNumbers.statistic2.toFixed(1)}</span>
            <p className="unit">million cases</p>
          </div>
          <p className="description">of antibiotic resistant infections occur in the U.S. alone each year.<sup>2</sup></p>
          </div>
          <div className="statistic-column">
            <div className="number">
              <span className="hidden-number">${countedNumbers.statistic3.toFixed(1)}</span>
              <p className="unit">billion</p>
            </div>
            <p className="description">in US health care cost annually from treating infections for antibiotic resistance threats.<sup>3</sup></p>
          </div>
      </div>
      <div className="home-flex center next-section">
        <div className="center spacer">
          <h2>Once present in water sources, antibiotic resistance rapidly spreads throughout an environment through horizontal gene transfer, making it a persistent and difficult problem to address. Antibiotic-resistant bacteria is introduced to the environment through</h2>
        </div>
        <Raindrop />
        <div className="flex-item">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/cow.svg" alt="Cow" />
        </div>
        <div className="flex-item">
          <h2>overuse of antibiotics in livestock and agriculture,</h2>
        </div>
        <div className="flex-item">
          <h2>urban storm water runoff, </h2>
        </div>
        <div className="flex-item">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/sewage1.svg" alt="Wastewater" />
        </div>
        <div className="flex-item">
          <img src="https://static.igem.wiki/teams/4951/wiki/graphics/medicine2-01.svg" alt="Medicine" />
        </div>
        <div className="flex-item">
          <h2>and hospital wastewater...</h2>
        </div>
      </div>
      <div className="bottom-wave"></div>
      <div className="home-statistics center extra-space">
        <h1>
          and all of these sources of contamination end up in<br></br>bodies of water like Lake Merritt.
        </h1>
      </div>
      <div className="home-section">
        <h1 className="d-header center spacer">
          <b>Our Solution: Introducing Antibiotic Resistance Control (ARC)</b>
        </h1>
        <h2 className="center spacer">ARC leverages synthetic biology to address the urgent problem of antibiotic resistance in the environment by harnessing the natural killing abilities of bacteriophages to selectively target bacteria containing the antibiotic resistance gene. By creating sub-host specificity through the implementation of a novel RNA switch, we effectively aim to create a selective pressure against the presence of antibiotic resistance in the environment while minimizing harm to the native microbiota.</h2>
        <div class="column-container spacer">
        <div class="column center">
            <h2><b>Phage Genome Assembly</b></h2>
            <p>We developed a novel method for editing and assembling a domesticated T7 phage genome without SapI restriction sites, all accomplished without relying on the traditional Golden Gate Assembly techniques for cloning purposes.</p>
          </div>
          <div class="column center">
            <h2><b>Controlling Lytic Activity</b></h2>
            <p>By utilizing an RNA switch, we control the transcription of genes essential for phage assembly, selectively targeting bacteria with the antibiotic resistance gene to lyse and kill.</p>
          </div>
          <div class="column center">
            <h2><b>Novel RNA Switches</b></h2>
            <p>In addition to in-house toehold switches, we designed novel RNA “riboswitches” which act as OR-gate to trigger RNA sequences, increasing target mRNA sensitivity and lowering activation concentration.</p>
          </div>
        </div>
        
        <div className="center video-container">
          <h1 className="d-header center spacer">
            <b>Check out Stanford's 2023 iGEM Promotional Video!</b>
          </h1>
          <iframe title="Stanford: ARC: Antibiotic Resistance Control - Engineering T7 Phage for Sub-Host... (2023) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/f1732326-5f3c-44eb-91e9-f973897793c5" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
        </div>
      </div>
      <div className="references spacer">
          <h3>
            <b>References</b>
          </h3>
          <ol>
            <li>“Antibiotic Resistance.” Centers for Disease Control and Prevention, National Center for Emerging and Zoonotic Infectious Diseases (NCEZID), 9 Mar. 2022, www.cdc.gov/ncezid/what-we-do/2021-highlights/antibiotic-resistance.html</li>
            <li>“To Reduce Superbugs, World Must Cut down Pollution.” United Nations Environment Programme, 7 Feb. 2023, www.unep.org/news-and-stories/press-release/reduce-superbugs-world-must-cut-down-pollution</li>
            <li>“National Estimates for Antibiotic Resistance.” Centers for Disease Control and Prevention, National Center for Emerging and Zoonotic Infectious Diseases (NCEZID), Division of Healthcare Quality Promotion (DHQP), 13 Dec. 2021, www.cdc.gov/drugresistance/national-estimates.html </li>
          </ol>
        </div>
    </Template2>
  );
};

export default Home;
