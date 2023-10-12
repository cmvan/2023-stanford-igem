import React from "react";
import Template from "../Template";
import { useState } from "react";
import TableOfContents from "../TableOfContents";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Implementation = () => {
  const [key, setKey] = useState("overview");
  return (
    <Template title="Implementation">
      <div className="row">
        <div className="toc-index col-sm-2">
          <TableOfContents activeKey={key} />
        </div>
        <div className="tab-container col-lg">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab
              eventKey="overview"
              title="Implementation of T7 Sub-Host Specificity"
            >
              <section id="overview">
                <h2 className="content-section" id="implementation-MH-1">
                  Addressing Antibiotic Resistance at Its Core
                </h2>
                <p>
                  While a proof-of-concept is promising, ARC proves most
                  effective in real-world applications. However, transitioning
                  from the benchtop to practical use necessitates close
                  engagement with its end users. This ensures we align the
                  development and application of ARC with society and real-world
                  challenges, ultimately tailoring our technology to meet unique
                  user requirements and aid in{" "}
                  <strong>environmental remediation efforts</strong>.
                </p>
                <p>
                  Through our stakeholders, we identified three key areas of
                  application or improvement:
                </p>
                <ol>
                  <li>Wastewater</li>
                  <li>Safety</li>
                  <li>Agriculture</li>
                </ol>
                <h2 className="content-section" id="implementation-MH-2">
                  An Ideal End User: Wastewater Treatment Plants
                </h2>
                <p>
                  From our{" "}
                  <a
                    href="/stanford/human-practices"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Human Practices
                  </a>{" "}
                  journey, we identified an ideal end-user as wastewater
                  treatment plants. Specifically, our sub-host specific
                  bacteriophages will act as a “failsafe” to further reduce the
                  possibility.
                </p>
                <p>
                  EBMUD’s wastewater treatment, while comprehensive, is not
                  flawless. Wastewater harbors antibiotic resistance, aiding its
                  spread. Improper chlorine disinfection might leave bacteria
                  alive, allowing antibiotic-resistant strains to escape into
                  the wider environment.
                </p>
                <p>
                  After speaking with <strong>Zoe Lake</strong>, we decided to
                  create a wastewater matrix to test our project in a real-world
                  adjacent environment. While considering safety, efficiency,
                  and accessibility, we discussed the following factors:
                </p>
                <ol>
                  <li>
                    <strong>Chlorination</strong>: To reduce its spread into the
                    greater environment, our phages will be added
                    pre-chlorination, effectively killing most lingering phages
                    in effluent.
                  </li>
                  <li>
                    <strong>Time</strong>: Water should be able to sit for an
                    extended period of time to allow for bacteriophages to
                    infect and lyse bacteria.
                  </li>
                  <li>
                    <strong>Sampling</strong>: The physical setup should enable
                    accessible water sampling.
                  </li>
                </ol>
                <p>
                  Ultimately, we decided to add our phage into what EBMUD has
                  colloquially called the <strong>mixed liquor channel</strong>,
                  a channel of bioactive sludge that directly feeds into several
                  1+ million gallon tanks known as <strong>clarifiers</strong>.
                  These tanks are located in secondary treatment, which is
                  described below:
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/oxygen-reactors-and-clarifiers.jpg"
                    alt="Oxygen Reactors and Clarifiers"
                  ></img>
                  <p class="caption">
                    Source: EBMUD Interactive Map: Secondary Treatment
                  </p>
                </div>
                <p>
                  Water sits in the tanks for extended periods of time, allowing
                  time for our phage to propagate, and microorganisms constantly
                  cycle through the basin. While the majority of water will flow
                  into tertiary, or solids, treatment, residual water containing
                  our phage will persist in the container. This component is
                  critical for our <strong>“closed-loop” phage system</strong>,
                  which allows for continual efficacy of ARC with minimal
                  intervention.
                </p>
                <p>
                  Eventually, this water flows into tertiary treatment, where it
                  is chlorinated to minimize escape of phage into the wider
                  environment.
                </p>
                <h3 className="content-section-sh" id="implementation-SH-1">
                  In-Situ Testing in Wastewater
                </h3>
                <p>
                  This experiment will require the cooperation of the EBMUD
                  laboratory, including their Process Optimization team, who
                  would be responsible for the incorporation of ARC into their
                  treatment process.
                </p>
                <p>
                  For our matrix, we will be using a completely isolated section
                  of the clarifier during the dry season, one that is only
                  deployed in cases of surges. First, wastewater will flow into
                  the tank, which will sit for an entire 24 hours to simulate
                  the normal treatment process, where antibiotic resistance
                  genes spread via horizontal gene transfer. Then, we will take
                  samples of the water and isolate potential antibiotic
                  resistant strains, which we will then sequence. Afterward, we
                  will input these sequences into our riboswitch generation
                  software, generating switches that will be stitched into their
                  respective phages to create our “phage cocktail.”
                </p>
                <p>
                  Afterward, we will deploy this cocktail back into the
                  clarifier and allow the phages to act freely for 24, 48, 72,
                  and 168 hours (1 week), 2 weeks, and 1 month. At each
                  timepoint, we will sample the wastewater and observe the phage
                  behavior and their interactions with the bacteria. Afterward,
                  we will simulate a cycle, or “flush,” and the water will
                  undergo isolated chlorination, which we will sample again.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/in-situ-arc-wastewater.jpg"
                    alt="In Situ Experimentation of ARC in Wastewater"
                  ></img>
                  <p class="caption">
                    In Situ Experimentation of ARC in Wastewater
                  </p>
                </div>
                <p>
                  This experiment presents the opportunity to answer several
                  questions raised by our{" "}
                  <a
                    href="/stanford/human-practices"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Human Practices
                  </a>{" "}
                  stakeholders:
                </p>
                <ul>
                  <li>
                    <strong>CDC Biofilm Laboratory, Precision Tool</strong>: We
                    will determine if our sub-host specificity is achieved—that
                    is, if our phages only target and lyse antibiotic resistant
                    bacteria.
                  </li>
                  <li>
                    <strong>Dr. David Relman, Phage Resistance</strong>: We will
                    measure how long it takes for bacteria to develop resistance
                    against our phages, which will indicate switch efficacy and
                    suggest when it is time to resample and generate new
                    switches/cocktails. If need be, we will extend our
                    observation time beyond 1 month.
                  </li>
                  <li>
                    <strong>Dr. Milana Trounce, Biosecurity</strong>: We will
                    determine if the phages are still viable after chlorination,
                    to consider the possibility of our phage interacting with
                    the wider environment.
                  </li>
                  <li>
                    <strong>
                      Dr. David Magnus, Ethics of Wastewater Surveillance
                      Studies
                    </strong>
                    : Depending on the information uncovered from sample
                    analysis, we will further examine the potential ethical
                    ramifications our study will have on the local population
                    and alert the appropriate regulatory bodies with EBMUD’s
                    assistance.
                  </li>
                </ul>
                <p>
                  This experiment marks a crucial step in our journey to develop
                  an effective solution for utilizing ARC for environmental
                  remediation. By collaborating with EBMUD, we will further
                  characterize important parameters and behaviors of our
                  technology within diverse environments to determine its . This
                  study represents a critical phase in our mission to combat
                  antibiotic resistance and paves the way for potential
                  real-world applications of our technology.
                </p>
                <h2 className="content-section" id="implementation-MH-3">
                  Additional Safety Considerations
                </h2>
                <h3 className="content-section-sh" id="implementation-SH-2">
                  Reducing Inflammatory Responses: Phage Purification
                </h3>
                <p>
                  As recommended by <strong>Dr. Paul Bollyky</strong>, we purify
                  our phages using Fast Protein Liquid Chromatography with the
                  ÄKTA Pure Protein Purification System. This will reduce
                  endotoxin concentration, minimizing negative inflammatory
                  responses to our phage.
                </p>
                <div className="full-photos">
                  <img
                    className="med-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/akta.jpg"
                    alt="ӒKTA pure™ chromatography system."
                  ></img>
                  <p class="caption">
                    Source: Cytiva Life Sciences, ӒKTA pure™ chromatography
                    system.<sup>1</sup>
                  </p>
                </div>
                <p>
                  Online manuals describe the use of{" "}
                  <a
                    href="https://cdn.cytivalifesciences.com/api/public/content/digi-16311-pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ӒKTA to purify E. coli proteins
                  </a>
                  . Therefore, we plan to be in further contact with Dr. Bollyky
                  for this process. (He also offered to image our
                  phage—exciting!)
                </p>
                <h3 className="content-section-sh" id="implementation-SH-3">
                  Phage Control Systems: Kill Switch Technology
                </h3>
                <p>
                  As discussed by <strong>Dr. Milana Trounce</strong> and{" "}
                  <strong>Dr. David Relman</strong>, a phage control system is
                  an important environmental safeguard for our technology.
                </p>
                <p>
                  We want to{" "}
                  <strong>ensure our stakeholders’ specific needs</strong> for
                  phage control systems are met—that is, our kill switch must
                  not be evolved out of our phages. However, kill switches is an
                  emerging field itself, and current literature reviews provide
                  limited insights into phage-related advancements.
                </p>
                <p>
                  To this end, we plan to speak with Finn Stirling from the Wyss
                  Institute at Harvard about her design of stable,
                  multi-generational kill switches. Their kill-switch circuit
                  ties host survival directly to the presence of the switch,
                  safeguarding it from evolutionary pressure.<sup>2</sup>
                </p>
                <h2 className="content-section" id="implementation-MH-4">
                  An Ideal End User: The Livestock Industry
                </h2>
                <p>
                  Another ideal end user that we have identified from our Human
                  Practices process is the livestock industry.
                </p>
                <p>
                  Here, the need for precision is crucial in this context, given
                  the intricacy of the gut microbiome. Implementing the
                  <strong>additional safety aspects</strong> outlined above is
                  essential to minimize any adverse reactions.
                </p>
                <p>
                  Testing directly in living organisms is risky. Therefore, our
                  immediate next step is to contact{" "}
                  <strong>Dr. Kerwyn Casey Huang</strong>
                  and/or <strong>Dr. Michael Fischbach</strong>, two professors
                  at Stanford whom <strong>Dr. Relman</strong> had recommended
                  we speak to. Their laboratories both house complex gut
                  microbiome models used to investigate microbial mechanisms at
                  the community and strain levels.
                </p>
                <p>
                  Our goal is to collaborate with these experts to establish a
                  gut microbiome matrix, providing a platform to explore
                  phage-microbial interactions within more intricate and densely
                  populated microbiomes.{" "}
                </p>
                <p>
                  At this stage, we will have implemented a
                  <strong>temperature-dependent kill switch</strong> based on
                  the Stirling’s design.<sup>2</sup> We will optimize the design
                  for phages.
                </p>
                <p>
                  Specifically, we will be able to observe the following
                  parameters:
                </p>
                <ul>
                  <li>
                    <strong>Kill Switch Efficacy</strong>: We will determine if
                    our artificial genetic circuit (kill switch) can activate to
                    terminate phage replication and/or lytic activity under
                    specific temperature conditions. To this end, we will
                    observe phage viability when removed from the warm
                    microbiome matrix. We will also measure how long it will
                    take (in generations) for our phage to evolve to remove our
                    switch.
                  </li>
                  <li>
                    <strong>Sub-Host Specificity</strong>: We will observe if
                    our phage only targets and destroys bacteria with our gene
                    of interest.
                  </li>
                  <li>
                    <strong>Duration of Efficacy</strong>: We will measure how
                    long it takes for the microbial population to develop phage
                    resistance.
                  </li>
                  <li>
                    <strong>Short-Term Impacts</strong>: We will measure any
                    changes in size and virulence of our microbial communities
                    in response to our phage.
                  </li>
                  <li>
                    <strong>Long-Term Impacts</strong>: after removing our
                    phage, we will observe any enduring impacts our phage has
                    made on the microbial communities within the matrix.
                  </li>
                </ul>
                <p>
                  This simulation will closely mimic real-world conditions,
                  offering invaluable insights into phage behavior and efficacy.
                </p>
                <p>
                  Ultimately, we hope to transition from gut microbiome models
                  to in vivo studies, focusing on the gut microbiomes of cows,
                  pigs, and chickens. This progression will allow us to gain a
                  deeper understanding of phage dynamics within livestock,
                  paving the way for the development of tailored solutions that
                  can contribute to improved livestock health and reduced
                  antibiotic use in the industry.
                </p>
                <h2 className="content-section" id="implementation-MH-5">
                  References
                </h2>
                <ol className="small-references">
                  <li>
                    ÄKTA Pure Protein Purification System. (n.d.). Cytiva.
                    Retrieved October 6, 2023, from
                    https://www.cytivalifesciences.com/en/us/shop/chromatography/chromatography-systems/akta-pure-p-05844
                  </li>
                  <li>
                    Kill switches for engineered microbes gone rogue. (2017,
                    November 16). Wyss Institute.
                    https://wyss.harvard.edu/news/kill-switches-for-engineered-microbes-gone-rogue/
                  </li>
                </ol>
              </section>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Template>
  );
};

export default Implementation;
