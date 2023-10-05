import React from 'react'
import Template from '../Template'
import TableOfContents from '../TableOfContents';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Experiments(){
    const [key, setKey] = useState('overview');

    return ( 
        <Template title="Experiments">
            <div className="row"> 
                <div className="toc-index col-sm-2"> 
                    <TableOfContents activeKey={key}/>
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
                                <h2 className="content-section" id="experiments-MH-1">Molecular Biology Protocols</h2>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">Experiment Name</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Polymerase Chain Reaction</td>
                                        <td>Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA</td>
                                        </tr>
                                        <tr>
                                        <td>Gel Electrophoresis</td>
                                        <td>Gel Purification, PCR Product Analysis, DNA Ladder Determination</td>
                                        </tr>
                                        <tr>
                                        <td>PCR Purification</td>
                                        <td>Removal of Contaminants in PCR Product</td>
                                        </tr>
                                        <tr>
                                        <td>Gel Purification</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>NEBuilder HiFi DNA Assembly</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Enzyme Digestion</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Isopropanol DNA Precipitation</td>
                                        <td>the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>      
                                <h2 className="content-section" id="experiments-MH-2">Cloning Protocols</h2>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">Experiment Name</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Electroporation Transformation</td>
                                        <td>Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA</td>
                                        </tr>
                                        <tr>
                                        <td>Heat Shock Electroporation</td>
                                        <td>Gel Purification, PCR Product Analysis, DNA Ladder Determination</td>
                                        </tr>
                                        <tr>
                                        <td>Plasmid DNA Extraction Miniprep</td>
                                        <td>Removal of Contaminants in PCR Product</td>
                                        </tr>
                                        <tr>
                                        <td>Making Electrocompetent Cells</td>
                                        <td>the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>    
                                <h2 className="content-section" id="experiments-MH-3">Phage Engineering</h2>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">Experiment Name</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Propagating Phage</td>
                                        <td>Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA</td>
                                        </tr>
                                        <tr>
                                        <td>Filtering Phage Lysates</td>
                                        <td>Gel Purification, PCR Product Analysis, DNA Ladder Determination</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration I – Polyethylene Glycol</td>
                                        <td>Removal of Contaminants in PCR Product</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration II – Acetone</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Phage DNA Extraction II – Phenol:Chloroform</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Phage DNA Extraction III – Potassium Iodide</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration and Storage</td>
                                        <td>the Bird</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Plaque Assay</td>
                                        <td>the Bird</td>
                                        </tr>
                                    </tbody>
                                </table>  
                                <h2 className="content-section" id="experiments-MH-4">Cell-Free Switch Testing</h2>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">Experiment Name</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Polymerase Chain Reaction</td>
                                        <td>Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA, Amplification of DNA</td>
                                        </tr>
                                    </tbody>
                                </table>  
                            </section>
                            
                        </Tab>
                        <Tab eventKey="program" title="Molecular Biology Protocols">
                            <section id="program">
                                <h2 className="content-section" id="molecular-bio-h1"> Molecular Biology Protocols</h2>
                                <h3 className="content-section-sh" id="molecular-bio-1"> Polymerase Chain Reaction</h3>
                                <ol type="1">
                                <li>
                                    Preparing Primer Stocks
                                    <ol type="a">
                                        <li>Resuspend primers at 100 uM in Tris-EDTA (TE)</li>
                                            <ol type="i">
                                            <li>Prevents freeze-thaw cycles</li>
                                            </ol>
                                        <li>Store at –20℃</li>
                                    </ol>
                                </li>
                                    <li>Thaw Primers, KOD Xtreme Hot Start DNA Polymerase, 2X Xtreme Buffer, and dNTPs (Master Mix components) on ice </li>
                                    <li>Gently vortex and briefly centrifuge Master Mix components</li>
                                    <li>Dilutions
                                        <ol type="a">
                                        <li>5’ Primer: Dilute small portion to 10 uM</li>
                                        <li>3’ Primer: Dilute small portion to 10 uM</li>
                                        <li>Phage DNA: Dilute to 5–10 ng / µL</li>
                                        </ol>
                                    </li>
                                    <li>Standard Reaction Setup: Prepare in 0.2 mL PCR tube on ice
                                    <ol type="a">
                                        <li>2X Xtreme Buffer: 25 µL</li>
                                        <li>dNTPs (2 mM each): 10 µL</li>
                                        <li>PCR Grade Water: 10 µL</li>
                                        <li>5’ Primer (10 uM): 1.5 µL</li>
                                        <li>3’ Primer (10 uM): 1.5 µL</li>
                                        <li>KOD Xtreme Hot Start DNA Polymerase (1 U / µL): 1 µL</li>
                                        <li>Template DNA (10 ng phage DNA): 1 µL</li>
                                        <li><b>Total: 50 µL</b></li>
                                        </ol>
                                    </li>
                                    <li>Gently vortex and spin down reaction sample</li>
                                    <li>Cycling Parameters
                                        <ol type="a">
                                        <li>Polymerase Activation: 94℃ for 2 minutes</li>
                                        <li>Denature: 98℃ for 10 seconds</li>
                                        <li>Annealing: Lowest Primer Tm℃ (59.2) for 30 seconds</li>
                                        <li>Extension: 68℃ for 1 minute / kbp (861 = 1 minute)</li>
                                        <li>Repeat Steps <b>b</b> through <b>d</b> for 20–40 cycles</li>
                                        </ol>
                                        </li>
                                    <li>Store PCR Product at –20℃ until evaluation</li>
                                </ol>
                                <h3 className="content-section-sh" id="molecular-bio-2"> Gel Electrophoresis </h3>
                                <ol type="1">
                                <li>
                                    Pouring a 1% Agarose Gel:
                                    <ol type="a">
                                        <li>Suspend 1g agarose in 100 µL 1X TAE buffer. Microwave and swirl until dissolved.</li>
                                        <li>Add 10 µL SYBR Safe DNA Gel Stain and mix into molten agarose.</li>
                                        <li>Pour the gel into the tray and add comb with 8 wells. Allow the gel to solidify.</li>
                                        <li>Place the gel into the gel box and fill with 1x TAE buffer until covered.</li>
                                        </ol>
                                </li>
                                    <li>Mix the remainder (approx. 10 µL) of each respective PCR product with 2 µL 6x Purple Loading Dye. </li>
                                    <li>Load 12 µL of Thermo Scientific™ GeneRuler 1 kb DNA Ladder in the first well. Load the prepared DNA samples into each well numerically.</li>
                                    <li>Run the gel at 75 V for 45 min until the dye line is 60–75% of the way down the gel.</li>
                                    <li>Image the gel against blue light.</li>
                                </ol>
                                <h3 className="content-section-sh" id="molecular-bio-3"> PCR Purification </h3>
                                <ol type="1">
                                    <li>Add 5 volumes of binding buffer to 1 volume of PCR sample and mix.</li>
                                    <li>Dispense solution into a Zymo-Spin I column inserted into a 1.5 ml Eppendorf tube, and centrifuge for 1 min. Aspirate flow-through</li>
                                    <li>Add 500 μl of PE wash buffer, and centrifuge for 1 min. Aspirate flow-through.</li>
                                    <li>Repeat step 3.</li>
                                    <li>Transfer column to new 1.5 ml Eppendorf tube, and add 10–50 μl of elution buffer. Dispense elution buffer directly onto the column, let sit for 6 min, and then centrifuge for 1 min.</li>
                                    <li>Nanodrop</li>
                                </ol>
                                <h3 className="content-section-sh" id="molecular-bio-4"> Gel Purification </h3>
                                <ol type="1">
                                    <li>Weigh gel fragment (write weight on tube), then add 3X volume of QG buffer (yellow). Gel was cut into smaller pieces to ensure that agarose is fully dissolved to maximize yields.</li>
                                    <li>Incubate in the shaker at 50 °C for ~3–5 min at 1000 RPM.</li>
                                    <li>Add 1 gel volume of isopropyl alcohol (IPA).</li>
                                    <li>Dispense solution into a Qiaquick Spin Column and centrifuge at 13,300 RPM for 1 min.</li>
                                    <li>Add 500 μl of PE wash buffer, and centrifuge for 30sec.</li>
                                    <li>Repeat Step 5.</li>
                                    <li>Transfer column to new 1.5 ml Eppendorf tube, and add 20 μl of elution buffer directly onto the column, let sit for 4 min, and then centrifuge for 1 min.</li>
                                </ol>
                                <h3 className="content-section-sh" id="molecular-bio-5"> NEBuilder HiFi DNA Assembly </h3>
                                <h3 className="content-section-sh" id="molecular-bio-6"> Enzyme Digestion </h3>
                                <h3 className="content-section-sh" id="molecular-bio-7"> Isopropanol DNA Precipitation </h3>
                                <ol type="1">
                                    <li>Add sodium acetate (3.0 M, pH 5.2) to the DNA solution to a final concentration of 0.3 M.</li>
                                    <li>Add 0.6–0.7 volume of isopropanol at room temperature, and mix well.</li>
                                    <li>Mark the outside of the tube to allow the pellet to be located. Centrifuge the sample immediately for 20–30 min in a microcentrifuge tube at 4°C. Centrifugation at 4°C prevents the sample from overheating.</li>
                                    <li>Carefully decant the supernatant fluid into a fresh labeled tube. Store the supernatant until the recovery of the precipitated DNA is confirmed.</li>
                                    <li>Wash the DNA pellet with ethanol to remove residual isopropanol. Residual isopropanol hinders the redissolution of the DNA.</li>
                                    <li>Centrifuge the sample for 20–30 min in a microcentrifuge tube at 4°C.</li>
                                    <li>Remove the supernatant carefully as aspiration, and allow the DNA pellet to dry, but not completely.</li>
                                    <li>Dissolve the pellet in an appropriate volume of TE (pH 8.0).</li>
                                </ol>
                            </section>
                        </Tab>
                        <Tab eventKey="game" title="Phil's Laberia">
                            <section id="game">
                                <h2 className="content-section" id="overview-6"> Overview </h2>
                                <h3 className="content-section" id="test-1"> Hi</h3>
                                <h2 className="content-section" id="overview-1-2"> Overview </h2>
                            </section>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Template>
    )
}

export default Experiments