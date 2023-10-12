import React from "react";
import Template from "../Template";
import { useState } from "react";
import TableOfContents from "../TableOfContents";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Contribution = () => {
  const [key, setKey] = useState("overview");
  return (
    <Template title="Contribution">
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
            <Tab eventKey="overview" title="Overview">
              <section id="overview">
                <p>
                  We are passionate about contributing to both future iGEM teams
                  and the field of synthetic biology as a whole. We are excited
                  to present our contributions for the 2023 iGEM competition and
                  future iGEM teams, detailed below:{" "}
                </p>
                <ul>
                  <li>
                    <strong>An Innovative Phage Assembly Technique</strong>: We
                    pioneered a phage genome assembly method that utilized PCR
                    amplification and homology arms for linkage, a simpler
                    alternative to the pre-existing Golden Gate Assembly
                    technique in literature.
                  </li>
                  <li>
                    <strong>Toehold and Riboswitch Generation</strong>: We
                    designed toehold insertion regions that regulate the
                    expression of essential T7 gene 2.5; then, we refined their
                    approach with a second, multi-restriction site insert.
                  </li>
                  <li>
                    <strong>Bioengineering Laboratory Simulation Game</strong>:
                    We developed a free, accessible, and comprehensive game that
                    teaches wet lab experimentation to budding STEM scientists
                    of all backgrounds.
                  </li>
                  <li>
                    <strong>Bioengineering Research Program</strong>: We
                    developed a four-week program to make Bioengineering more
                    accessible for high school students, covering a wide variety
                    of introductory topics in Bioengineering.
                  </li>
                </ul>
                <h2 className="content-section" id="contribution-MH-1">
                  An Innovative Phage Assembly Technique
                </h2>
                <p>
                  Our objective was to genetically engineer a phage to
                  selectively target and eradicate antibiotic resistant
                  bacteria. To achieve this, we eliminated restriction sites and
                  strategically integrated flanking enzyme restriction sites
                  between the T7 gene 2.5 open reading frame and its respective
                  promoter, where we then inserted a specialized switch into the
                  phage genome. To manage the complexity and size of these
                  genetic modifications, we strategically split the phage into
                  six fragments, ensuring an efficient and accurate integration
                  of each modified segment. Now, we had to reassemble the
                  fragments together into the genome.
                </p>
                <p>
                  Previous literature on phage genome assembly had utilized
                  Golden Gate Assembly, which required many different Type IIS
                  sites. <sup>1</sup> However, we pioneered a different
                  approach: Gibson Assembly. Unlike Golden Gate Assembly, which
                  relied on many specific Type IIS sites, our method involved
                  the PCR amplification of the phage genome with homology arms
                  to facilitate efficient assembly. This innovative assembly
                  technique represents a novel contribution to the field of
                  synthetic biology, specifically within those of phage
                  engineering and targeted antibiotic resistance. Successful
                  implementation of this assembly approach paves the way for
                  future iGEM teams through means of offering insights and
                  methodologies to expedite the development of phages with
                  precise targeting capabilities while encouraging them to
                  experiment unconventionally based on the characteristics of
                  their specific project. To read more about this process, visit
                  our{" "}
                  <a
                    href="/stanford/engineering"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Engineering Page
                  </a>
                  .
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-5-12-00-pm.png"
                    alt="Assembling T7 Genome with Gibson Assembly"
                  ></img>
                  <p class="caption">
                    Steps to Assemble T7 Genome with Gibson Assembly
                  </p>
                </div>
                <h2 className="content-section" id="contribution-MH-2">
                  Toehold and Riboswitch Generation
                </h2>
                <p>
                  We designed toehold insertion regions in the phage genome with
                  a single segment to be spliced during digestion. First, we
                  engineered an insert to regulate the expression of gene 2.5,
                  which is critical for phage lytic activity and T7 DNA
                  replication. Then, we inserted our switch between the T7
                  promoter and the open reading frame of gene 2.5, enabling it
                  to function as a ribosome binding site. Additionally, to
                  streamline switch testing in the T7 phage genome, we designed
                  the “insert” with flanking Type IIS restriction sites,
                  contributing to a more seamless and precise integration
                  experience.{" "}
                </p>
                <p>
                  To further refine our initial design, we designed a second
                  insert with a different restriction site, replacing the second
                  SapI site in the first design. However, this led to repetitive
                  challenges with mutagenesis. To address this, we utilized a
                  Type IIS restriction enzyme that is not found in the T7
                  genome—EcoRI. By leveraging EcoRI’s overhangs after digestion,
                  we achieved a seemingly scarless editing of the T7 genome,
                  minimizing the editing process. By 1) developing innovative
                  use of common restriction enzymes for precise genetic
                  modifications and 2) documenting our toehold insertions on the
                  Wiki, we not only enhance the precision and efficiency of
                  toehold insertion techniques but also encourage future teams
                  to explore alternative options beyond what is found within the
                  direct systems their project is involved in. To read more
                  about this process, visit our{" "}
                  <a
                    href="/stanford/engineering"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Engineering Page
                  </a>
                  .
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/thumbnail-png-image-2.jpg"
                    alt="Fluorescent output of tested riboswitches compared to
                    controls 1"
                  ></img>
                </div>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/thumbnail-img-7988.png"
                    alt="Fluorescent output of tested riboswitches compared to
                    controls 2"
                  ></img>
                  <p class="caption">
                    Fluorescent output of tested riboswitches compared to
                    controls
                  </p>
                </div>
                <h2 className="content-section" id="contribution-MH-3">
                  Bioengineering Laboratory Simulation Game
                </h2>
                <p>
                  We recognized a widespread issue in high schools around the
                  world, especially in <strong>underserved communities</strong>:
                  a lack of physical laboratory facilities, which has even
                  personally impacted many of our team members. To address this
                  issue and make Bioengineering education accessible to{" "}
                  <strong>all students</strong>, we aimed to increase
                  accessibility to lab spaces by developing and designing{" "}
                  <strong>Phil’s Laberia</strong>, a virtual game that makes
                  Bioengineering education enjoyable and accessible for all
                  backgrounds. Phil’s Laberia provides a step-by-step simulation
                  of wet lab protocols, including DNA extraction, GFP PCR, gel
                  electrophoresis, Gibson assembly, E. coli plating, liquid
                  culture preparation, transformations, minipreps, and more.{" "}
                </p>
                <p>
                  Phil’s Laberia is a free educational resource available
                  through all digital platforms, enabling students with no
                  access to a physical laboratory to learn and experience the
                  standard experiments utilized in the field of Bioengineering;
                  moreover, its intuitive and user-friendly interface makes it
                  appealing to a wide audience. Already, Phil’s Laberia has been
                  utilized over 1,200 times, which we anticipate will grow
                  exponentially with continued outreach. Phil’s Laberia truly
                  empowers students with a head start in understanding and
                  practicing wet lab procedures, requiring nothing more than an
                  internet connection to begin their journey. In terms of
                  <strong>advancing other iGEM teams</strong>, it allows other
                  teams to be inspired to pursue education efforts beyond the
                  standard virtual and/or physical lecture session based on
                  their individual passions, utilizing the increasing boundaries
                  of education technological advancement. To learn more about
                  Phil’s Laberia, visit the{" "}
                  <a
                    href="/stanford/education"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Education Page
                  </a>
                  .
                </p>
                <h2 className="content-section" id="contribution-MH-4">
                  Bioengineering Research Program
                </h2>
                <p>
                  We wanted to make Bioengineering more accessible for high
                  school students through a four-week long program.
                  Bioengineering is often not taught at the high school level,
                  thus, we aspired to provide students with the opportunity to
                  have a thorough learning experience with lectures, interact
                  with expert guest speakers in the field, and engage in
                  personalized mentorship. We designed a program from scratch
                  that was jam-packed with all the knowledge provided at an
                  Introduction to Bioengineering class. In fact, we received
                  guidance from Professor Drew Endy, one of the instructors of
                  such a course at Stanford University titled BIOE 80:
                  Introduction to Bioengineering.
                </p>
                <p>
                  Students in this program were required to complete a project
                  in which they developed a technology/innovation/application
                  utilizing Bioengineering or Synthetic Biology concepts. Some
                  examples of student projects include “Combating Mosquito
                  Disease Transmission: Strengthening Anopheles’ Salivary Duct
                  Walls to Reduce the Transmission of Plasmodium Parasites,”
                  “Improving Endometrial Cancer Tracking: Implantable Sensors
                  for Tumor Monitoring,” and more!
                </p>
                <p>
                  We have included some of our teaching materials in our Wiki,
                  such as the syllabus, which delineates introductory topics to
                  Bioengineering. Future iGEM teams can use these materials to
                  plan education initiatives or programs that are friendly to
                  budding STEM scientists of all backgrounds. To access these
                  materials, refer to the{" "}
                  <a
                    href="/stanford/education"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Education Page
                  </a>
                  , in the BioE Research Program tab.
                </p>
                <h2 className="content-section" id="contribution-MH-5">
                  Conclusion
                </h2>
                <p>
                  The legacy of iGEM lies in its Contributions component, which
                  ensures existing and newly developing knowledge merge and
                  persist. Our mission was not just to compete but to
                  collaborate, leaving a lasting impact on the ever-growing iGEM
                  family. Our contributions encompassed a spectrum of
                  innovation—from 1) pioneering a novel phage assembly technique
                  to 2) engineering toeholds and riboswitches, 3) enhancing
                  parts documentation, 4) introducing a Bioengineering lab
                  simulation game, and 5) establishing a comprehensive
                  Bioengineering research program. These diverse contributions
                  cater to various aspects, from laboratory-based endeavors to
                  computational tools and educational resources. By embracing
                  this versatility, we aimed to empower present and future iGEM
                  teams in their unique journeys within the realm of synthetic
                  biology.
                </p>
                <h2 className="content-section" id="contribution-MH-6">
                  References
                </h2>
                <ol className="small-references">
                  <li>
                    Pryor, J. M., Potapov, V., Bilotti, K., Pokhrel, N., &
                    Lohman, G. J. S. (2022). Rapid 40 kb Genome Construction
                    from 52 Parts through Data-optimized Assembly Design. ACS
                    Synthetic Biology, 11(6), 2036-2042.
                    https://doi.org/10.1021/acssynbio.1c00525
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

export default Contribution;
