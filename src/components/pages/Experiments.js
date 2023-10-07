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
                                        <td>amplification of DNA, produce fusion DNA fragments</td>
                                        </tr>
                                        <tr>
                                        <td>Gel Electrophoresis</td>
                                        <td>visualization and analysis of DNA fragments, confirming the success of PCR reactions, assessing fragment sizes, verifying the purity of DNA samples</td>
                                        </tr>
                                        <tr>
                                        <td>PCR Purification</td>
                                        <td>isolate and purify DNA fragments obtained through Polymerase Chain Reaction (PCR) amplification</td>
                                        </tr>
                                        <tr>
                                        <td>Gel Purification</td>
                                        <td>extract and purify DNA fragments from agarose gels</td>
                                        </tr>
                                        <tr>
                                        <td>NEBuilder HiFi DNA Assembly</td>
                                        <td>assembly of multiple DNA fragments, seamless joining of DNA fragments without the need for restriction enzymes and ligases</td>
                                        </tr>
                                        <tr>
                                        <td>Enzyme Digestion</td>
                                        <td>cleave DNA at specific recognition sites by using restriction enzymes</td>
                                        </tr>
                                        <tr>
                                        <td>Isopropanol DNA Precipitation</td>
                                        <td>selectively precipitate DNA from a solution</td>
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
                                        <td>introduce foreign DNA into bacterial cells using an electric field</td>
                                        </tr>
                                        <tr>
                                        <td>Heat Shock Electroporation</td>
                                        <td>introduce plasmid DNA into bacterial cells by subjecting the cells to a brief heat shock</td>
                                        </tr>
                                        <tr>
                                        <td>Plasmid DNA Extraction Miniprep</td>
                                        <td>isolate plasmid DNA from bacterial cultures</td>
                                        </tr>
                                        <tr>
                                        <td>Making Electrocompetent Cells</td>
                                        <td>prepare bacterial cells that are highly efficient in taking up foreign DNA through electroporation</td>
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
                                        <td>grow bacteriophages using E. coli as a bacterial host</td>
                                        </tr>
                                        <tr>
                                        <td>Filtering Phage Lysates</td>
                                        <td>filter and sterilize phage lysates, ensuring the removal of bacterial cells and debris from the lysate</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration I – Polyethylene Glycol</td>
                                        <td>concentrate phage lysate using polyethylene glycol (PEG) precipitation</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration II – Acetone</td>
                                        <td>concentrate phage lysate using acetone precipitation and subsequently digest any remaining nucleic acids</td>
                                        </tr>
                                        <tr>
                                        <td>Phage DNA Extraction II – Phenol:Chloroform</td>
                                        <td>separates DNA from proteins, lipids, and other contaminants present in the phage lysate, resulting in purified phage DNA</td>
                                        </tr>
                                        <tr>
                                        <td>Phage DNA Extraction III – Potassium Iodide</td>
                                        <td>isolate pure DNA from phage particles by utilizing the properties of potassium iodide</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Concentration and Storage</td>
                                        <td>concentrate and purify phage lysate using an Amicon filter device</td>
                                        </tr>
                                        <tr>
                                        <td>Phage Plaque Assay</td>
                                        <td>quantify the number of viable phage particles in a given sample through plaque-forming units (PFUs)</td>
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
                                        <td>Cell Free Extract Switch Testing</td>
                                        <td>test the functionality of different switches and triggers using the PURE EXPRESS kit</td>
                                        </tr>
                                        <tr>
                                        <td>759 Lysate Preparation</td>
                                        <td>creating and testing a 759 lysate for cell free testing</td>
                                        </tr>
                                    </tbody>
                                </table>  
                            </section>
                            
                        </Tab>
                        <Tab eventKey="molecularbio" title="Molecular Biology Protocols">
                            <section id="molecularbio">
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
                                <ol type="1">
                                <li>
                                    Purify insert and vector DNA fragments using appropriate methods (e.g., gel extraction or PCR purification) to remove contaminants and enzymes.
                                    <ol type="a">
                                        <li>Quantify DNA fragments using a spectrophotometer or fluorometer.</li>
                                    </ol>
                                </li>
                                    <li>Set up the following reaction on ice:
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>2–3 Fragment Assembly</td>
                                                <td>4–6 Fragment Assembly</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Recommended DNA Molar Ratio</td>
                                                <td>vector:insert = 1:2</td>
                                                <td>vector:insert = 1:1</td>
                                            </tr>
                                            <tr>
                                                <td>Total Amount of Fragment DNA</td>
                                                <td>0.03–0.2 pmols * X μl</td>
                                                <td>0.2–0.5 pmols** X μl</td>
                                            </tr>
                                            <tr>
                                                <td>NEBuilder HiFi DNA Assembly Master Mix</td>
                                                <td>10 μL</td>
                                                <td>10 μL</td>
                                            </tr>
                                            <tr>
                                                <td>Deionized H2O</td>
                                                <td>10 – X μL</td>
                                                <td>10 – X μL</td>
                                            </tr>
                                            <tr>
                                                <th>Total Volume</th>
                                                <th>20 μl</th>
                                                <th>20 μl</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </li>
                                    <li>Incubate samples in a thermocycler at 50°C for 15 minutes (when 2 or 3 fragments are being assembled) or 60 minutes (when 4–6 fragments are being assembled). Following incubation, store samples on ice or at –20°C for subsequent transformation.</li>
                                    <li>Transform DH10β with 1–2 μl of the chilled assembled product, following the electroporation protocol.</li>
                                </ol>
                                <h3 className="content-section-sh" id="molecular-bio-6"> Enzyme Digestion </h3>
                                <ol type="1">
                                <li>
                                    Add components to a clean tube in the order shown:
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Reagents</th>
                                                <th>Volume (µL)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>SapI (1U / µL)</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>EcoRI (2U / µL)</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Template DNA (3000 ng)</td>
                                                <td>X</td>
                                            </tr>
                                            <tr>
                                                <td>10 x Cut Smart Buffer</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <td>dH2O</td>
                                                <td>82 – X</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <th>100</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                                    <li>Incubate the reaction at digestion temperature (37 °C) for 1 hour.</li>
                                    <li>Stop the digestion by incubating at 65°C for 15 minutes.</li>
                                </ol>
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
                        <Tab eventKey="cloning" title="Cloning Protocols">
                            <section id="cloning">
                                <h2 className="content-section" id="cloning-h0">Cloning Protocols</h2>
                                <h3 className="content-section-sh" id="cloning-1"> Electroporation Transformation</h3>
                                <ol type="1">
                                    <li>Thaw 50 µL electrocompetent cells on ice</li>
                                    <li>Pre-cool electroporation cuvette</li>
                                    <li>Cool DNA on ice</li>
                                    <li>
                                        Set up electroporator as follows:
                                        <ol type="a">
                                            <li>Set to 2.5kv/resistance mode</li>
                                            <li>Set voltage to 1400V (1.40kV)</li>
                                            <li>Set Capacitance to 50uF</li>
                                            <li>Set R5 to 129 ohms</li>
                                        </ol>
                                    </li>
                                    <li>Mix 1 µL DNA into competent cells and move to electroporation cuvette and place back on ice</li>
                                    <li>Wipe the cuvette quickly to dry, then place it into the holster. Close the chamber and hit the pulse button to electroporate</li>
                                    <li>Remove the cuvette and quickly place SOC media (150 µL) into the cuvette and mix </li>
                                    <li>Remove media and cell into labeled tube</li>
                                    <li>Shake for 5–60 min at 37°C to recover</li>
                                    <li>Plate into LB + Antibiotic plate and incubate at 37°C overnight</li>
                                </ol>
                                <h3 className="content-section-sh" id="cloning-2"> Heat Shock Electroporation </h3>
                                <ol type="1">
                                    <li>Allow competent cells to thaw completely on ice before proceeding</li>
                                    <li>Aliquot 50 µL of competent cells into three 1.5 mL microfuge tubes</li>
                                        <ol type="a">
                                                <li>Label with the corresponding Twist plasmid</li>
                                        </ol>
                                    <li>Transfer 50 ng of corresponding plasmid DNA into each microfuge tube</li>
                                    <li>Let DNA-cell suspension sit on ice for 20 minutes</li>
                                    <li>Heat shock suspension by placing in 42℃ water bath for exactly 30 seconds</li>
                                    <li>Add 150 µL of SOC Media to each tube</li>
                                    <li>Place cells in shaking incubator at 37℃ and 250 RPM for 15 minutes</li>
                                    <li>Plate cells on antibiotic plates</li>
                                    <li>Store remaining transformation mixture at 4℃</li>
                                </ol> 
                                <h3 className="content-section-sh" id="cloning-3"> Plasmid DNA Extraction Miniprep </h3>
                                <ol type="1">
                                    <li>Add 1.5 mL liquid culture into two microfuge tubes.</li>
                                    <li>Centrifuge at max settings (13,300 RPM) for 2 minutes.</li>
                                    <li>Using a two-flask aspiration setup, aspirate the supernatant, carefully leaving the cell pellet in the microcentrifuge tube.</li>
                                    <li>Add more of the pRFP_ChlorR liquid culture and repeat steps 1–3 until all bacteria from all overnight liquid cultures have been pelleted.</li>
                                    <li>
                                        Using the QIAGEN Miniprep Kit's protocols, add Buffer P1, Buffer P2, and Buffer N3 in the following order:
                                        <ol type="a">
                                            <li>Add 250 µL of P1 and resuspend the cell pellet by pipetting up and down.</li>
                                            <li>Add 250 µL of P2 and mix by inverting the tubes 4–6 times. Set a timer for 3 minutes and allow reaction to occur.</li>
                                            <li>Add 350 µL of N3 and mix by inverting the tube 4–6 times until the solution is cloudy.</li>
                                            <li>Centrifuge for 10 minutes at max speed.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        Wash the column, using the following protocol:
                                        <ol type="a">
                                            <li>Add approximately 800 µL of the supernatant from the two microcentrifuge tubes to a single spin column. Add 800 µL of water to another microcentrifuge tube as a counterweight. Centrifuge the spin columns for one minute at max speed. Aspirate the flow–through. Repeat with the other microfuge tube into the same spin column.</li>
                                            <li>Bind the DNA to the column with 500 µL of Buffer PB and centrifuge for one minute at max speed. Discard the flow-through.</li>
                                            <li>Wash the column with 750 µL of Buffer PE and centrifuge for one minute at max speed. Discard the flow-through, and place the collection tube back under the column after. Centrifuge again for one minute to remove the residual PE buffer.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        Elute the DNA, using the following protocol:
                                        <ol type="a">
                                            <li>Place the blue columns in the microcentrifuge tubes and add 40 µL of milli-Q purified water to wet the white column material.</li>
                                            <li>Let sit for one minute.</li>
                                            <li>Centrifuge again for one minute at max speed.</li>
                                        </ol>
                                    </li>
                                    <li>Record plasmid concentration using Nanodrop spectrophotometer.</li>
                                </ol>
                                <h3 className="content-section-sh" id="cloning-4"> Making Electrocompetent Cells </h3>
                                <ol type="1">
                                    <li>
                                        Add three 4 mL overnight cultures into 100 mL LB in an Erlenmeyer.
                                    </li>
                                    <li>Incubate at 37 C for 1 hr in a shaking incubator.</li>
                                    <li>Monitor the OD600 until it reaches 0.50 and let it grow for 5 minutes more.</li>
                                    <li>Aliquot the liquid cultures into 50 mL conical tubes and centrifuge at 10,000 RPM for 10 minutes at 4 C.
                                        <ol type="a">
                                        <li>Pour off excess LB.</li>
                                        </ol>
                                    </li>
                                    <li>Resuspend each of the conicals in 25 mL of sterile 10% glycerol and centrifuge at 10,000 RPM for 10 min at 4 C.
                                        <ol type="a">
                                            <li>Pour off excess supernatant.</li>      
                                        </ol>
                                    </li>
                                    <li>Combine all of the pellets and resuspend in 25 mL of sterile 10% glycerol.</li>
                                    <li>Aliquot the liquid cultures into 1.5 mL Eppendorf tubes on ice.</li>
                                    <li>Centrifuge at 10,000 RPM for 6 minutes at RT.
                                        <ol type="a">
                                            <li>Aspirate supernatant.</li>
                                            <li>Resuspend in 500 µL of sterile 10% glycerol.</li>
                                        </ol>
                                    </li>
                                    <li>Repeat step 8 until the cells have been washed 5 times.</li>
                                    <li>Freeze dry the cells with dry ice and ethanol.</li>
                                    <li>Attempt to electroporate one of the samples with DNA to check time constant.</li>
                                </ol>
                            </section>
                        </Tab>
                        <Tab eventKey="phage" title="Phage Engineering">
                            <section id="phage">
                                <h2 className="content-section" id="phage-h0">Phage Engineering Protocols</h2>
                                <h3 className="content-section-sh" id="phage-1">Propagating Phage</h3>
                                    <ol type="1">
                                        <li>Grow E. Coli bacterial host in LB broth overnight at 37℃</li>
                                        <li>Prepare 100 mL of sterile LB broth</li>
                                        <li>Spike LB broth with 0.1 volumes of overnight bacterial host</li>
                                            <ol type="a">
                                                <li>Incubate with agitation for 1h at 37℃</li>
                                            </ol>
                                        <li>Add 100 µL of high titer phage lysate (>10^8 PFU / mL)</li>
                                        <li>Incubate at 37℃ and 275 RPM for ~5 hours or until lysate clears</li>
                                        <li>Collect phage lysate and store at 4℃ until clean up</li>
                                    </ol> 
                                <h3 className="content-section-sh" id="phage-2">Filtering Phage Lysates</h3>
                                <ol type="1">
                                        <li>Aliquot phage lysate into 50 mL sterile Falcon centrifuge tubes and centrifuge at 4,000 g for 20 minutes</li>
                                            <ol type="a">
                                                <li>Only one Falcon tube needed; filled to exactly 50 mL</li>
                                            </ol>
                                        <li>Carefully collect supernatant using a serological pipette and transfer into properly labeled sterile Falcon tube</li>
                                        <li>Filter-sterilize the phage supernatant using a 0.22 µm filter to yield a bacterial cell-free phage lysate</li>
                                        <li>Add 0.1 volumes of chloroform to supernatant, vortex, and incubate at room temperature for 10 minutes</li>
                                        <li>Centrifuge at 4,000 g for 5 minutes and transfer supernatant into appropriately sized glass screw cap storage bottle</li>
                                            <ol type="a">
                                                <li>Store at 4℃ until concentration</li>
                                            </ol>
                                    </ol> 
                                <h3 className="content-section-sh" id="phage-3">Phage Concentration I – Polyethylene Glycol </h3>
                                <ol type="1">
                                    <li>Transfer 40 mL of phage lysate (do not include any chloroform) to a new 50 ml tube. Add 5× phage precipitation solution equal to 1/4 the volume of phage lysate and mix well by inverting the tube.</li>
                                    <li>Incubate this mixture for 2 hours to overnight at 4°C.</li>
                                    <li>Centrifuge for 30 min at 10,000×g at 4°C.</li>
                                    <li>Pour off the supernatant. Resuspend in 360 µl of 1× phage resuspension buffer in a 1.7 ml tube.</li>
                                    <li>Add 40 µl of 10×DNAse I buffer (or to final 1× concentration). Mix by gently vortexing or tapping the tube.</li>
                                    <li>Add 1 µL DNase I (2000 U/mL) and 1 µL RNase A (20 mg/mL). Mix by tapping the tube. Incubate for 30 minutes at 37°C. This step is very important for degrading any remaining nucleic acids from lysed bacterial cells!</li>
                                    <li>Add 10 µl of 0.5 M EDTA (pH 8.0) to chelate divalent metals in the buffer. Mix by gently vortexing or tapping the tube.</li>
                                </ol>
                                <h3 className="content-section-sh" id="phage-4"> Phage Concentration II – Acetone </h3>
                                <ol type="1">
                                    <li>Add 16 mL of pure Acetone (pH 5.5) to 4 mL of filtered phage lysate</li>
                                    <li>Shake suspension vigorously for two minutes</li>
                                    <li>Centrifuge for two minutes at 10,000 x g to precipitate phage particles</li>
                                    <li>Decant supernatant</li>
                                    <li>Allow acetone to evaporate at room temperature</li>
                                        <ol type="a">
                                            <li>In fume hood</li>
                                        </ol>
                                    <li>Resuspend in 500 µL of 1x Phage Resuspension Buffer</li>
                                        <ol type="a">
                                            <li>Transfer to 1.5 mL Eppendorf tube</li>
                                        </ol>
                                    <li>Add 1.25 µL DNase I (2000 U / mL) and 1.25 µL RNase A (20 mg / mL)</li>
                                        <ol type="a">
                                            <li>Incubate for 30 minutes at 37°C</li>
                                            <li>Incubate for 20 minutes at 75°C</li>
                                        </ol>
                                </ol>
                                <h3 className="content-section-sh" id="phage-5"> Phage DNA Extraction II – Phenol:Chloroform </h3>
                                <p><b>Materials</b></p>
                                <ul>
                                    <li>5× phage precipitation solution (20% w/v PEG 8000, 2.5 M NaCl)</li>
                                    <li>1× phage resuspension buffer (1M NaCl, 10 mM Tris•HCl pH 7.5, 0.1 mM EDTA)</li>
                                    <li>10× NEB DNase I buffer (10 mM Tris-HCl pH 7.6, 2.5 mM MgCl2, 0.5 mM CaCl2)</li>
                                    <li>DNase I (2,000 U/mL) (New England Biolabs M0303)</li>
                                    <li>RNase A (20 mg/mL) (Invitrogen PureLink™ RNase A #12091021)</li>
                                    <li>0.5 M EDTA pH 8.0</li>
                                    <li>phenol:chloroform:isoamyl alcohol (25:24:1)</li>
                                    <li>3 M sodium acetate</li>
                                    <li>100% and 70% ethanol pre-chilled at –20°C.</li>
                                    <li>10 mM Tris HCl pH 7.5</li>
                                </ul>
                                <p><b>Protocol</b></p>
                                <ol type="1">
                                    <li>Add one volume (~500 µL) of Phenol:Chloroform:Isoamyl Alcohol to resuspended phage precipitation</li>
                                        <ol type="a">
                                            <li>Shake and invert tube by hand for 15 seconds to mix</li>
                                        </ol>
                                    <li>Centrifuge at 16,000 x g for 5 minutes</li>
                                        <ol type="a">
                                            <li>Using a P200, carefully remove aqueous layer to a new microfuge tube</li>
                                        </ol>
                                    <li>Add ~50 µL (1/10 volume) 3 M Sodium Acetate</li>
                                    <li>Add ~1000 µL (2.5 volumes) 100% Ethanol, pre-chilled at –20°C</li>
                                        <ol type="a">
                                            <li>Keep sample in –20°C for 30 minutes to overnight</li>
                                        </ol>
                                    <li>Centrifuge at 14,000 x g and 4°C for 15 minutes</li>
                                        <ol type="a">
                                            <li>Aspirate supernatant</li>
                                        </ol>
                                    <li>Add 500 µL of 70% Ethanol, pre-chilled at –20°C</li>
                                        <ol type="a">
                                            <li>Pipette up and down to dislodge pellet</li>
                                        </ol>
                                    <li>Centrifuge at 14,000 x g and 4°C for 5 minutes</li>
                                        <ol type="a">
                                            <li>Remove all liquid and let air dry</li>
                                        </ol>
                                    <li>Resuspend in 10 mM Tris HCl pH 7.5</li>
                                        <ol type="a">
                                            <li>Nanodrop</li>
                                            <li>Store at –20°C</li>
                                        </ol>
                                </ol>
                                <h3 className="content-section-sh" id="phage-6"> Phage DNA Extraction III – Potassium Iodide </h3>
                                <ol type="1">
                                    <li>Weigh gel fragment (write weight on tube), then add 3X volume of QG buffer (yellow). Gel was cut into smaller pieces to ensure that agarose is fully dissolved to maximize yields.</li>
                                    <li>Incubate in the shaker at 50 °C for ~3–5 min at 1000 RPM.</li>
                                    <li>Add 1 gel volume of isopropyl alcohol (IPA).</li>
                                    <li>Dispense solution into a Qiaquick Spin Column and centrifuge at 13,300 RPM for 1 min.</li>
                                    <li>Add 500 μl of PE wash buffer, and centrifuge for 30sec.</li>
                                    <li>Repeat Step 5.</li>
                                    <li>Transfer column to new 1.5 ml Eppendorf tube, and add 20 μl of elution buffer directly onto the column, let sit for 4 min, and then centrifuge for 1 min.</li>
                                </ol>
                                <h3 className="content-section-sh" id="phage-7"> Phage Concentration and Storage </h3>
                                <ol type="1">
                                    <li>Weigh gel fragment (write weight on tube), then add 3X volume of QG buffer (yellow). Gel was cut into smaller pieces to ensure that agarose is fully dissolved to maximize yields.</li>
                                    <li>Incubate in the shaker at 50 °C for ~3–5 min at 1000 RPM.</li>
                                    <li>Add 1 gel volume of isopropyl alcohol (IPA).</li>
                                    <li>Dispense solution into a Qiaquick Spin Column and centrifuge at 13,300 RPM for 1 min.</li>
                                    <li>Add 500 μl of PE wash buffer, and centrifuge for 30sec.</li>
                                    <li>Repeat Step 5.</li>
                                    <li>Transfer column to new 1.5 ml Eppendorf tube, and add 20 μl of elution buffer directly onto the column, let sit for 4 min, and then centrifuge for 1 min.</li>
                                </ol>
                            </section>
                        </Tab>
                        <Tab eventKey="cellfree" title="Cell Free Switch Testing">
                            <section id="cellfree">
                                <h2 className="content-section" id="cellfree-h0">Cell Free Switch Testing Protocols</h2>
                                <h3 className="content-section-sh" id="cellfree-h1"> Polymerase Chain Reaction</h3>
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
                                <h3 className="content-section-sh" id="cellfree-h2"> Gel Electrophoresis </h3>
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
                            </section>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Template>
    )
}

export default Experiments