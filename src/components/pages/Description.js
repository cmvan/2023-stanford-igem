import React from 'react'
import Template from '../Template'
import { useState } from 'react';
import TableOfContents from '../TableOfContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Description = () => {
    const [key, setKey] = useState('overview');
    return ( 
        <Template title="Project Description">
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
                        <Tab eventKey="overview" title="Description">
                            <section id="overview">
                                <h2 className="content-section" id="background-1">Background</h2>
                                <p>Antibiotics have long been the cornerstone of treating bacterial infections and, at times, are the only effective care option available. However, once bacteria gain antibiotic resistance, our choices become severely limited. Rising antibiotic use in developing nations has sped up the decline of conventional antibiotic effectiveness against infections.<br></br><br></br>

                                By 2050, experts predict roughly 10 million annual deaths and $100 trillion in global economic losses due to drug-resistant bacteria.<sup>1</sup> Therefore, addressing antibiotic resistance is a critical, time-sensitive crisis.<br></br><br></br>

                                Resistance spreads significantly through environmental contamination. Antibiotics and antibiotic resistant bacteria (ARB) enter water bodies through sources such as sewage contamination and livestock runoff. Bacteria then share resistance traits via horizontal gene transfer, spreading resistance widely. This happens everywhere, from urban water systems to natural areas, underscoring the need for a proactive strategy against this environmental contamination.
                                </p>
                                <h2 className="content-section" id="problem-1">Our Problem: Lake Merritt, Oakland, CA</h2>
                                <p>Lake Merritt is a large tidal lagoon located in the heart of Oakland, CA. The “Crown Jewel” of the city is home to a vibrant ecosystem, teeming with wildlife.<br></br><br></br>

                                Two iGEM members, Katie and Julia, are Bay Area locals who have grown up enjoying—admittedly, just the sight, not the smell— Lake Merritt. Both have fond childhood memories of strolling down the shores with their families.
                                </p>

                                <div className="full-photos"><img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-katie.jpg" alt="Katie and Family"></img>
                                <p class="caption">Picture of Katie and her family</p>
                                </div>

                                <p>However, in recent years Lake Merritt has suffered from deteriorating water quality, exacerbated by two sources of ARB that flow into the lake: <b>1) sewage effluent</b> and <b>2) the livestock industry</b></p>

                                <div className='row info-boxes spacer'>
                                    <div class="centered-container">
                                        <article className="quote-box">
                                            <h5 className="center"><b>Sewage Effluent</b></h5>
                                            <img className="box-photo-small" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-beach-closed-sewage-spill.jpeg" alt="Beach Closed Due to Sewage Spill"></img>
                                            <p className="center">Source: U.S. Dept. of Agriculture, Flickr<sup>3</sup></p>
                                        </article>
                                        <article className="quote-box">
                                            <h5 className="center"><b>Livestock Practices</b></h5>
                                            <img className="box-photo-small" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-livestock.jpg" alt="Cattle/Livestock"></img>
                                            <p className="center">Source: San Francisco Baykeeper<sup>2</sup></p>
                                        </article>
                                    </div>
                                </div>
                                <p>ARB within a prominent city landmark within a densely populated city has significant impacts. In particular, we have identified three main impacts that a solution would have on the City of Oakland: <b>1) ecosystem health and safety</b>, <b>2) the local economy</b>, and <b>3) civic pride</b>.</p>

                                <div className='row info-boxes spacer'>
                                    <article className="info-box"><h5 className="center"><b>Ecosystem Health+Safety</b></h5>
                                    <img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-lm-wild-duck-refuge.jpeg" alt="Birds at Lake"></img><p className="center">Source: Sanfranman59, Wikimedia Commons<sup>4</sup></p></article>
                                    <article className="info-box"><h5 className="center"><b>Local Economy </b></h5>
                                    <img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-gondola-on-lake-merritt.jpeg" alt="Lake Merrit"></img><p className="center">Source: Chamberednautilus, Wikimedia Commons<sup>5</sup></p></article>
                                    <article className="info-box"><h5 className="center"><b>Civic Pride</b></h5>
                                    <img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/project-description/54-pd-lake-merritt-at-night.jpg" alt="Lake Merrit"></img><p className="center">Source: Hitchster, Flickr<sup>6</sup></p></article>
                                </div>

                                <h2 className="content-section" id="current-solutions-1">Current Solutions & Shortcomings</h2>
                                <p>Prominent solutions for fighting ARB include novel or combinations of antibiotics and bacteriophages. However, these strategies all have significant limitations in application, efficacy, or safety.<sup>8</sup></p>

                                <p>The discovery of novel antibiotics may treat immediate bacterial infections, but these new classes broaden the overall antibiotic resistance spectrum, even when used correctly. Normally, antibiotics are often over prescribed and used incorrectly. This misuse further accelerates the spread of ARB. Furthermore, new classes of antibiotics have not been discovered in the last 20 years.<sup>12</sup> Without new classes of antibiotics, even slow ARB proliferation under correct use of antibiotics will eventually outpace our antibiotic’s ability to treat infections.

                                Bacteriophages, or “phages,” are viruses that invade and destroy only bacteria. This targeted specificity and evolutionarily built-in antibacterial viability have prompted investigation into their application for combating antibiotic resistance.<sup>9</sup> However, their strain-specific host range causes them to attack both normal and ARB indiscriminately.<sup>10</sup>
                                </p>
                                <p>In short, there lacks a solution to antibiotic resistance that:</p>
                                <ol>
                                    <li>Minimizes disruption to symbiotic microbiota and ecosystems,</li>
                                    <li>Poses minimal human health risks, and</li>
                                    <li>Does not readily broaden the antibiotic resistance spectrum.</li>
                                </ol>
                                <h2 className="content-section" id="description-ihp-1"> Integrated Human Practices </h2>
                                <p>To craft a people-oriented solution, we continuously fine-tuned our project with stakeholder input, ensuring the project’s practicality and real-world relevance.<br></br><br></br>

                                First, we contacted researchers studying Lake Merritt to understand antibiotic resistance in a local context and identify sources of contamination. Then, we collaborated with stakeholders, such as the East Bay Municipal Utility District and the Oakland Public Works Department, to incorporate our phage into local environmental matrices. Experts at Stanford University provided technical guidance and biosafety insights.<br></br><br></br>

                                For more information, please visit our <a href="/stanford/human-practices" target="_blank" rel="noreferrer">Integrated Human Practices Page</a>.
                                </p>

                                <h2 className="content-section" id="solution-1">Our Solution—ARC!</h2>
                                <p>Our project, Antibiotic Resistance Control (ARC), addresses the limitations of bacteriophages in fighting ARB. ARC achieves sub-host specificity in bacteriophages—that is, we will further narrow the phage host’s range from strain-specific to individual bacterium. This enables precise targeting of bacteria harboring antibiotic resistance in a diverse range of environments.<br></br><br></br>

                                Strategies to enhance the host specificity of bacteriophages to precisely target bacteria include using gene circuits to detect host RNA and triggering reporter genes.6 We also drew inspiration from past iGEM teams, particularly <a href="https://2019.igem.org/Team:Stockholm" target="_blank" rel="noreferrer">2019 Stockholm</a>, <a href="https://2020.igem.org/Team:Ionis_Paris" target="_blank" rel="noreferrer">2020 Ionis Paris</a>, and <a href="https://2022.igem.wiki/aboa/" target="_blank" rel="noreferrer">2022 Aboa</a>. Their projects aimed to enhance bacteriophage specificity with the goal of combating some manifestation of AR, with varying levels of success. Our project builds on their accomplishments while adding our own unique spin with custom-designed RNA switches.
                                </p>

                                <h3 className="content-section-sh" id="solution-1-1">Toehold Switches and Riboswitches</h3> <p>Toehold switches are synthetic genetic elements that regulate gene expression, often called riboregulators. When a gene is converted to mRNA, a toehold assumes the OFF position, preventing gene expression by sequestering the ribosome binding site. Upon binding of an arbitrary target mRNA sequence, the toehold assumes the ON position and allows gene expression.</p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/phagetoehold.gif" alt="Gif of Toehold in Phage Mechanism"></img>
                                <p class="caption">Gif of Toehold in Phage Mechanism</p>
                                </div>

                                <p>By targeting specific mRNA sequences, toehold switches can regulate some output with respect to an organism’s own DNA. This allows us to tie functionality to important genes of interest, such as antibiotic resistance genes.<br></br><br></br>

                                Riboswitches represent a further development of riboregulators from toeholds. They also assume the OFF position when the gene is converted to mRNA and assume the ON position upon binding to a target mRNA sequence. However, while toeholds are generated in a fixed structure, with the same number of bases and the same pairing structure in all switches, riboswitches can assume many different configurations, such as AND or OR, to best maximize ON/OFF ratios in the presence of target mRNA. This feature provides greater flexibility in targeting genes of interest.
                                </p>

                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/project-description/and-or-gate-diagram.png" alt="Riboswitch Different Configurations"></img>
                                <p class="caption">Riboswitch Different Configurations</p>
                                </div>

                                <p>Riboswitches were made in collaboration with Christian Choe, a graduate fellow in the Rhiju Das and Possu Huang Labs at Stanford University.</p>

                                <h3 className="content-section-sh" id="solution-1-2">Riboregulators in Bacteriophages</h3>
                                <p>ARC differs from previous research in that we aim to create a functional killing response to a signal by integrating custom riboregulators to enhance target precision and control lytic activity. If a target gene is not present, the bacteriophage is unable to lyse the target bacteria and propagate, thus creating phage sub-host specificity.</p>

                                <p>Our process involves:</p>
                                <ol>
                                    <li><b>Designing Switches:</b> Design of custom riboregulators to regulate translation of essential bacteriophage genes</li>
                                    <li><b>Engineering the Phage Genome:</b> Creation of a template T7 phage genome by removing all relevant restriction sites and adding a SapI/EcoRI site flanked insert to create a modular restriction swap-based system for either type of switches</li>
                                    <li><b>Cell-Free Switch Testing:</b> Verification of switch efficacy via cell-free PURE testing system</li>
                                    <li><b>Switch Testing within Phage:</b> Testing of switches within T7 phages via plaque assay with background selection</li>  
                                </ol>
                                <p>Ultimately, we limited phage integration and lytic activity to antibiotic resistance mRNA presence, minimizing harm to symbiotic microbiomes and targeting malignant bacteria without broadening the antibiotic resistance spectrum.</p>
                                
                                <h2 className="content-section" id="future-outlook-1">Future Outlook</h2>
                                <p>ARC offers a practical resolution to a significant hurdle in the use of bacteriophages. Achieving sub-host specificity in phage would minimize the spread of drug-resistant bacteria in a diverse range of niche environments while preserving the delicate and complex microbial communities that exist in both ecological and human biotas.<br></br><br></br>

                                Additionally, we hope that our open-source software will provide a platform for scientists globally to address the “good bacteria gone bad” in their own local environments, laying the groundwork for phages as a pragmatic, appealing solution to the antibiotic resistance crisis and contamination from synthetic biology.
                                </p>
                                <h2 className="content-section" id="references">References</h2>
                                <ol className="small-references">
                                    <li>UNEP. (2023, February 7). Bracing for Superbugs: Strengthening environmental action in the One Health response to antimicrobial resistance. UN Environment Programme. https://www.unep.org/resources/superbugs/environmental-action </li>
                                    <li>San Francisco Baykeeper (2019). New report confirms that Oakland’s sewage system stinks. baykeeper.org/blog/new-report-confirms-oakland%E2%80%99s-sewage-system-stinks</li>
                                    <li>U.S. Department of Agriculture (2016). 20160521-RD-LSC-0925. Flickr, flickr.com/photos/usdagov/27106056663</li>
                                    <li>Sanfranman59 (2009). Lake Merritt Wild Duck Refuge (Oakland, CA), Wikimedia Commons, commons.wikimedia.org/wiki/File:Lake_Merritt_Wild_Duck_Refuge_(Oakland,_CA).JPG</li>
                                    <li>Chamberednautilus (2015). Gondola on Lake Merritt, Oakland, CA, USA. Wikimedia Commons, commons.wikimedia.org/wiki/File:Gondola_on_Lake_Merritt.jpg</li>
                                    <li>Hitchster (2008). Lake Merritt at night. Flickr, flickr.com/photos/hitchster/3091637074</li>
                                    <li>City of Oakland. (2002). Measure DD (2002) Text. https://www.oaklandca.gov/resources/measure-dd-2002-text</li>
                                    <li>Uchil, R. R., Kohli, G. S., Katekhaye, V. M., & Swami, O. C. (2014). Strategies to combat antimicrobial resistance. Journal of clinical and diagnostic research : JCDR, 8(7), ME01–ME4. https://doi.org/10.7860/JCDR/2014/8925.4529</li>
                                    <li>Sharma, S., Chatterjee, S., Datta, S., Prasad, R., Dubey, D., Prasad, R. K., & Vairale, M. G. (2017). Bacteriophages and its applications: an overview. Folia microbiologica, 62(1), 17–55. https://doi.org/10.1007/s12223-016-0471-x</li>
                                    <li>Loc-Carrillo, C., & Abedon, S. T. (2011). Pros and cons of phage therapy. Bacteriophage, 1(2), 111–114. https://doi.org/10.4161/bact.1.2.14590</li>
                                    <li>Slomovic, S., Pardee, K., & Collins, J. J. (2015). Synthetic biology devices for in vitro and in vivo diagnostics. Proceedings of the National Academy of Sciences of the United States of America, 112(47), 14429–14435. https://doi.org/10.1073/pnas.1508521112</li>
                                    <li>Coates, A. R., Halls, G., & Hu, Y. (2011). Novel classes of antibiotics or more of the same?. British journal of pharmacology, 163(1), 184–194. https://doi.org/10.1111/j.1476-5381.2011.01250.x</li>
                                </ol>
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default Description