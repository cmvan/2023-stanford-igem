import React from "react";
import Template from "../Template";
import { useState } from "react";
import TableOfContents from "../TableOfContents";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Safety = () => {
  const [key, setKey] = useState("overview");
  return (
    <Template title="Safety">
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
            <Tab eventKey="overview" title="Safety as a Top Priority">
              <section id="overview">
                <h2 className="content-section" id="safety-MH-1">
                  Prologue
                </h2>
                <p>
                  According to the WHO, “biosafety is a strategic and integrated
                  approach to analyzing and managing relevant risks to human,
                  animal and plant life and health and associated risks for the
                  environment.” It encompasses measures to prevent accidental
                  exposure to potentially harmful biological agents and ensure
                  the safe handling, transport, and disposal of such agents to
                  protect public health and the environment.<sup>1</sup>
                </p>
                <p>
                  Our team aimed to achieve bacteriophage sub-host specificity.
                  Given the uncertainty of phage interactions in uncontrolled
                  environments, containment was vital to prevent any unexpected
                  consequences.
                </p>
                <p>
                  Throughout our iGEM journey, we upheld laboratory safety
                  standards with guidance from safety officers and laboratory
                  directors of the Uytengsu Teaching Lab (UTL) at Stanford
                  University, minimizing risk of injury and illness.
                </p>
                <p>
                  We also recognize that safety extends beyond the laboratory,
                  encompassing public and environmental welfare. Thus, we
                  addressed biosecurity and human interaction considerations
                  with a panel of experts, adjusting our project based on their
                  recommendations.
                </p>
                <p>
                  Overall, our iGEM team embraces a multifaceted approach to
                  safety. Our experimental design and work ethic incorporated
                  safety at every step, contributing positively to synthetic
                  biology efforts while being mindful of biosecurity and general
                  welfare.
                </p>
                <h2 className="content-section" id="safety-MH-2">
                  Laboratory Safety
                </h2>
                <p>
                  All laboratories at Stanford University are in compliance with
                  U.S. federal, California state, County of Santa Clara
                  Municipal, and Palo Alto Municipal codes of regulations as
                  well as national consensus standards, including but not
                  limited to:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.dir.ca.gov/samples/search/query.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      California Code of Regulations (CCR), Title 8, Cal/OSHA
                      Standards
                    </a>
                  </li>
                  <ul>
                    <li>
                      Chapter 7, Subchapter 1. Occupational Injury or Illness
                      Reports and Records (Sections 14000–14400)
                    </li>
                  </ul>
                  <li>
                    County of Santa Clara Municipal Code Section B11,{" "}
                    <a
                      href="https://library.municode.com/ca/santa_clara_county/codes/code_of_ordinances?nodeId=TITBRE_DIVB11ENHE_CHXIIIHAMAST"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chapter XIII: Hazardous Materials Storage
                    </a>
                    , and
                    <a
                      href="https://library.municode.com/ca/santa_clara_county/codes/code_of_ordinances?nodeId=TITBRE_DIVB11ENHE_CHXIVTOGAST"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chapter XIV: Toxic Gas Storage
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cdc.gov/labs/pdf/CDC-BiosafetymicrobiologicalBiomedicalLaboratories-2009-P.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CDC-NIH Biosafety in Microbiological and Biomedical
                      Laboratories, 5th Edition
                    </a>
                  </li>
                </ul>
                <p>
                  Additionally, all iGEM team members completed the following
                  laboratory training modules:
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Module Name</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="https://ehs.stanford.edu/training/ehs-4200-general-safety"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EHS-4200: General Safety and Emergency Preparedness
                        </a>
                      </td>
                      <td>
                        This module covers practices that protect iGEM team
                        members from general injury and illness in the lab.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://ehs.stanford.edu/training/ehs-1900-chemical-safety-labs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EHS-1900: Chemical Safety for Laboratories
                        </a>
                      </td>
                      <td>
                        This course reviews safe handling of chemicals and
                        subsequent waste in the laboratory.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://ehs.stanford.edu/training/ehs-2200-compressed-gas"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EHS-2200: Compressed Gas Safety
                        </a>
                      </td>
                      <td>
                        This class discusses safety procedures for storage,
                        handling, and use of compressed gasses.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://ehs.stanford.edu/training/ehs-1500-biosafety"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EHS-1500: BioSafety
                        </a>
                      </td>
                      <td>
                        This module covers how to handle, dispose, and react to
                        spills of biohazardous agents.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://ehs.stanford.edu/training/ehs-prog-1600-bloodborne-pathogens"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EHS-PROG-1600: Bloodborne Pathogens Safety Training
                        </a>
                      </td>
                      <td>
                        This program discusses bloodborne pathogens and how to
                        prevent accidental exposure.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Finally, all iGEM team members completed in-person training
                  with the lab manager, where we were shown all important
                  laboratory features in the UTL, such as emergency showers and
                  eyewash stations, first-aid items, Safety Data Sheets, special
                  waste bins, hazardous storage areas, and more.
                </p>
                <h2 className="content-section" id="safety-MH-3">
                  General Microorganisms Information
                </h2>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/biosafety-table.jpg"
                    alt="BSL and Environmental Controls Table from Stanford University STARS Training Module EHS-1500-WEB: Biosafety Module"
                  ></img>
                  <p class="caption">
                    Fig 1. Stanford University STARS Training Module
                    EHS-1500-WEB: Biosafety; “BSL and Environmental Controls.”
                    For more information, contact the{" "}
                    <a
                      href="https://ehs.stanford.edu/services/administrative-panel-biosafety-review"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Stanford University Administrative Panel on Biosafety
                    </a>
                    .
                  </p>
                </div>
                <p>
                  The vast majority of microorganisms are classified as Risk
                  Group (RG) 1. They were handled in an RG1 rated laboratory.
                  This includes non-pathogenic <i>Escherichia coli</i> strains
                  (BL21 and DH10B), as well as the yeast strain{" "}
                  <i>Saccharomyces cerevisiae</i>, all of which were handled by
                  personnel with the proper training (see above) in an
                  appropriate BSL-1 facility. In these spaces, we ensured
                  laboratory personnel wore proper protective clothing and
                  gloves at all times. Moreover, for <i>E. coli</i> experiments,
                  we used{" "}
                  <a
                    href="https://structbio.vanderbilt.edu/wisdom/labpro/sterile.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sterile techniques as described here
                  </a>{" "}
                  to reduce contamination between our cultures and the
                  environment.
                </p>
                <p>
                  Our project also involved experimentation with a single RG2
                  categorized species—<i>Escherichia virus T7</i>, or “T7
                  phage”—a bacteriophage that infects multiple strains of{" "}
                  <i>Escherichia coli</i> bacteria. According to the World
                  Health Organization, RG2 agents are considered “moderate
                  individual risk, low community risk.”<sup>1</sup> We handled
                  all phage components, including DNA fragments, in a separate
                  BSL-2 laboratory. This room was dedicated exclusively for all
                  phage experiments. We labeled the room with biohazard signs
                  and tagged every piece of equipment with red tape labeled
                  “phage.” All work was performed with{" "}
                  <a
                    href="https://structbio.vanderbilt.edu/wisdom/labpro/sterile.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sterile techniques
                  </a>
                  .
                </p>
                <p>
                  Fig. 1 provides a description of the BSL-1 and BSL-2
                  facilities used.
                </p>
                <h3 className="content-section-sh" id="safety-SH-1">
                  Waste Disposal
                </h3>
                <p>
                  When disposing of waste contaminated with our microorganisms,
                  we used appropriate disinfectants to clean workbench surfaces
                  and equipment. Bacteria were killed within 5 minutes in 50–70%
                  (v/v) ethanol solutions, and bacteriophages needed 0.5–24
                  hours to be killed by 50–70% (v/v) ethanol solutions.
                </p>
                <h2 className="content-section" id="safety-MH-4">
                  Protection Against Harmful Reagents
                </h2>
                <p>
                  To minimize our exposure to hazardous reagents, we identified
                  some safer alternatives. For example, we used SYBR safe
                  instead of Ethidium Bromide, and blue light as opposed to UV
                  light.
                </p>
                <p>
                  Before using a harmful reagent, all personnel reviewed each
                  safety data sheet (SDS) together. We only used these reagents
                  as necessary. Otherwise, they were stored according to its
                  SDS.
                </p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Function</th>
                      <th scope="col">Usage in Lab</th>
                      <th scope="col">Function</th>
                      <th scope="col">Precautions Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chloramphenicol</td>
                      <td rowspan="2">Antibiotic</td>
                      <td rowspan="2">Bacterial selection</td>
                      <td rowspan="2">
                        May cause serious eye damage and, if ingested, is
                        suspected to cause cancer and reproductive harm
                      </td>
                      <td rowspan="2">
                        PPE worn:
                        <ul>
                          <li>Gloves</li>
                          <li>Lab coat</li>
                          <li>Goggles</li>
                        </ul>
                        We kept it away from our face and avoided spills. We
                        changed our gloves immediately after use.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://www.sigmaaldrich.com/US/pt/sds/sigma/c0378"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Chloramphenicol Safety Data Sheet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Hydrochloric Acid (HCl)</td>
                      <td rowspan="2">Buffer</td>
                      <td rowspan="2">pH stabilization of phage solutions</td>
                      <td rowspan="2">
                        Causes severe skin burns and eye damage. May cause
                        respiratory irritation.
                      </td>
                      <td rowspan="2">
                        PPE worn:
                        <ul>
                          <li>Gloves</li>
                          <li>Lab coat</li>
                          <li>Goggles</li>
                        </ul>
                        We only used this chemical in an active fume hood.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://www.sigmaaldrich.com/US/en/sds/sial/258148"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HCl Safety Data Sheet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Ethanol</td>
                      <td rowspan="4">Disinfectant</td>
                      <td rowspan="2">Sterilizes surfaces and equipment</td>
                      <td rowspan="2">
                        A flammable liquid and vapor. Causes skin irritation,
                        serious eye irritation, damage to organs (central
                        nervous system, optic nerve), and may cause drowsiness
                        or dizziness. Suspected of damaging fertility or the
                        unborn child.
                      </td>
                      <td rowspan="4">
                        PPE worn:
                        <ul>
                          <li>Gloves</li>
                          <li>Lab coat</li>
                          <li>Goggles</li>
                        </ul>
                        Chemicals were used/stored far away from any heat
                        sources.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://www.labchem.com/tools/msds/msds/VT270.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ethanol Safety Data Sheet
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Isopropanol</td>
                      <td rowspan="2">Sterilization; Gel Purification</td>
                      <td rowspan="2">
                        May form explosive mixtures with air. Highly flammable
                        liquid and vapor. Causes serious eye irritation. May
                        cause drowsiness or dizziness.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://www.airgas.com/msds/001105.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ethanol Safety Data Sheet
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="content-section" id="safety-MH-5">
                  Other Considerations
                </h2>
                <p>
                  Our iGEM team has diligently identified several areas of
                  concern that may arise if our modified organism is released
                  beyond the laboratory environment, whether through intentional
                  or accidental means, and we have made adjustments to our
                  project accordingly.
                </p>
                <h3 className="content-section-sh" id="safety-SH-2">
                  Biosecurity
                </h3>
                <p>
                  We had considered the possibility that malicious agents could
                  create “super-phages,” or genetically modified phages that
                  have increased virulency and a wider host range that may
                  encompass humans. The usage of phages in dual-use research
                  could significantly harm public health on a global scale if
                  containment of these “super-phages” fails. <sup>2</sup>
                </p>
                <p>
                  However, we discovered that we can minimize the risks of
                  “super-phages” by integrating control systems within the phage
                  genome. Our insights have been summarized on the Human
                  Practices page.
                </p>
                <h3 className="content-section-sh" id="safety-SH-3">
                  Human–T7 Phage Interactions
                </h3>
                <p>
                  Phages, composed of simple proteins and nucleic acids, are
                  considered inherently non-toxic and pose no documented health
                  risks despite its widespread presence in the human body.
                  <sup>3, 4</sup> While they can interact with the immune
                  system, there is limited evidence to suggest that this is a
                  serious concern. Clinical trials of phage therapies reported
                  that phages in the human body were well-tolerated; serious
                  events were rare, and most patients recovered post-treatment.
                  <sup>5</sup> Regardless, the iGEM team{" "}
                  <strong>1) sought expert opinions</strong> and{" "}
                  <strong>
                    2) took additional safety precautions beyond standard
                    recommendations
                  </strong>
                  .
                </p>
                <ol>
                  <li>
                    First, we consulted <strong>Professor Paul Bollyky</strong>,{" "}
                    <strong>Edze Westra</strong>, and
                    <strong>Vivek Mutalik</strong> for insights on
                    phage-resistant bacteria, phage evolution of host range, and
                    more.{" "}
                  </li>
                  <li>
                    Next, we decided to engineer the T7 phage, which is lytic
                    (and incapable of lysogeny). This reduces the chance of
                    inadvertently spreading antibiotic resistant genes to a
                    person’s microbiota or the environment in the case of
                    ingestion or containment escape, respectively.<sup>6</sup>
                  </li>
                  <li>
                    Additionally, our riboswitch–trigger activation feature,
                    designed with <strong>Christian Choe</strong>, reduces the
                    possibility of phage-induced lysis, even if it manages to
                    infect a human cell, since it is only tailored to activate
                    in antibiotic resistance genes.
                  </li>
                </ol>
                <h3 className="content-section-sh" id="safety-SH-4">
                  Environmental Interactions
                </h3>
                <p>
                  Failure to contain our engineered phage may cause
                  environmental harm, disrupting natural microbiomes critical
                  for ecological balance. Therefore, precise engineering is
                  imperative to preserve these delicate, natural communities.
                  Thus, our riboswitches enable T7{" "}
                  <strong>
                    <u>sub</u>
                  </strong>
                  -host specificity such that only E.coli strains with an
                  antibiotic resistance gene of interest activate and are
                  destroyed by our phage. This brings our precision editing from
                  a strain-specific level to that of individual bacteria.
                </p>
                <p>
                  For our real-world applications, we have placed safeguards in
                  the treatment process, which are described on the
                  Implementation Page.
                </p>
                <h2 className="content-section" id="safety-MH-6">
                  References
                </h2>
                <ol>
                  <li>
                    Laboratory biosafety manual, fourth edition. Geneva: World
                    Health Organization; 2020 (Laboratory biosafety manual,
                    fourth edition and associated monographs). Licence: CC
                    BY-NC-SA 3.0 IGO.
                  </li>
                  <li>
                    Fan, H. (2012). Potential Duel-Use of Bacteriophage Related
                    Technologies in Bioterrorism and Biodefense. Journal of
                    Bioterrorism & Biodefense, 03(03).
                    https://doi.org/10.4172/2157-2526.1000121
                  </li>
                  <li>
                    Łusiak-Szelachowska, M., Weber-Dąbrowska, B., Żaczek, M.,
                    Borysowski, J., & Górski, A. (2020). The Presence of
                    Bacteriophages in the Human Body: Good, Bad or Neutral?.
                    Microorganisms, 8(12), 2012.
                    https://doi.org/10.3390/microorganisms8122012
                  </li>
                  <li>
                    Loc-Carrillo, C., & Abedon, S. T. (2011). Pros and cons of
                    phage therapy. Bacteriophage, 1(2), 111–114.
                    https://doi.org/10.4161/bact.1.2.14590
                  </li>
                  <li>
                    Liu, D., Van Belleghem, J. D., de Vries, C. R., Burgener,
                    E., Chen, Q., Manasherob, R., Aronson, J. R., Amanatullah,
                    D. F., Tamma, P. D., & Suh, G. A. (2021). The Safety and
                    Toxicity of Phage Therapy: A Review of Animal and Clinical
                    Studies. Viruses, 13(7), 1268.
                    https://doi.org/10.3390/v13071268
                  </li>
                  <li>
                    Anomaly J. (2020). The Future of Phage: Ethical Challenges
                    of Using Phage Therapy to Treat Bacterial Infections. Public
                    health ethics, 13(1), 82–88.
                    https://doi.org/10.1093/phe/phaa003
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

export default Safety;
