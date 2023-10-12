import React from 'react'
import Template from '../Template'
import { useState } from 'react';
import TableOfContents from '../TableOfContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Results = () => {
    const [key, setKey] = useState('overview');
    return ( 
        <Template title="Results">
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
                        <Tab eventKey="overview" title="Results">
                            <section id="overview">
                                <h2 className="content-section" id="results-1"> Phage Genome Assembly</h2>
                                <article className="big-overview-block spacer">
                                    <p><b>Successfully tested a new method for editing phage genomes to remove SapI sites, eliminating the need for traditional Golden Gate Assembly</b></p>
                                </article>
                                <p>In a significant scientific breakthrough, we have achieved a pioneering milestone by successfully developing a novel method for editing and assembling a domesticated phage genome without SapI sites, all accomplished without relying on the traditional Golden Gate Assembly techniques. Previous work in literature utilized Golden Gate to construct a T7 genome from 52 data-optimized fragments (Pryor et al.) However, in addition to seamless and scarless assembly, our utilization of Gibson Assembly to construct our modified genome requires fewer cloning steps by eliminating the need for Type IIS restriction enzymes to create “overhangs.” This streamlined approach to editing the phage genome is a pivotal advancement that empowers scientists to explore the phage genome with unprecedented precision and flexibility, paving the way for groundbreaking discoveries and transformative innovations in the bioengineering field.</p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-5-12-00-pm.png" alt="Assembling T7 with Gibson Assembly"></img>
                                <p class="caption">Novel Method for Phage Genome Assembly</p>
                                </div>
                                
                                <h2 className="content-section" id="results-2"> RNA Switch Generation </h2>
                                <article className="big-overview-block spacer">
                                    <p><b>Developed 14 (4 AmpR and 10 KanR) toeholds using NUPACK Version 4.0 and 12 riboswitches, which were tested using cell-free methods</b></p>
                                </article>
                                <p>We developed Toehold Switches using the NUPACK nucleic acid sequence design package (Version 4.0). Initially, Dr. José Barboza-Corona provided a template script in NUPACK Version 3.0, which we modified to Version 4.0 syntax for execution in a Jupyter Notebook environment. Our code, accessible on GitHub (https://github.com/zealousplatypus/iGEM), was designed to create multiple switches from a single antibiotic resistance gene, which we synthesized and tested in laboratory settings. The process involves specifying switch generation conditions, defining variables, and structuring domains, switches, and complexes based on established designs. Each iteration of the code produces test tubes containing trigger-switch complexes, allowing individual switch activity assessment. We implemented a Crosstalk tube to enforce distinctiveness among generated switches and applied constraints, including specific gene subsections in trigger sequences and prevention of repetitive nucleotide runs. To adapt the switches for different genes, users can modify the constraining gene sequence and the number of switches generated as needed.<br></br><br></br>

                                Utilizing a cell-free switch testing system that we have developed following multiple engineering cycles, we tested a library of computationally designed and optimized RNA toehold switches designed against the KanR and AmpR gene respectively. Through the following in vitro testing, we were able to design a streamlined and optimized method of determining the effectiveness of our designed switches in regulating transcription.
                                </p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/thumbnail-png-image-2.jpg" alt="Cell-Free Testing"></img>
                                </div>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/thumbnail-img-7988.png" alt="Cell-Free Testing"></img>
                                </div>
                                <p>Through our IHP outreach initiatives, we collaborated with Christian Choe, a graduate fellow in the labs of Rhiju Das and Possu Huang at Stanford University, who is dedicated to pioneering novel RNA switches called riboswitches through computational development. Leveraging Christian's methodology and software, we crafted a series of innovative RNA switches aimed at the AmpR gene, akin to second-generation toeholds. These riboswitches, distinct from toeholds, shift from an OFF to an ON state when the gene converts to mRNA and binds with a specific mRNA sequence. Unlike toeholds, which have a fixed structure, riboswitches can adopt various configurations like AND or OR, optimizing ON/OFF ratios concerning the target mRNA. This adaptability offers enhanced precision in targeting genes of interest.</p>

                                <h2 className="content-section" id="results-3">Controlling Phage Lytic Activity</h2>
                                <article className="big-overview-block spacer">
                                    <p><b>Preliminary findings indicate that phages evolved to eliminate our inserted RNA switch, suggesting the need for additional research</b></p>
                                </article>
                                <p>From our preliminary sequencing results obtained from the DNA extracted from plaques of the edited phage genome, we discovered that the phages have evolved to remove our inserted RNA switch. This highlights the dynamic interplay between synthetic modifications and natural evolutionary processes. While the RNA switch offered precise control over phage lytic activity, enabling sub-host specific targeting, it inadvertently impeded the transcription of a crucial gene within the phage genome. This created a selective pressure for the phages to adapt, mutate, and ultimately shed our switch, revealing the complexity of genetic engineering within living systems and the need for a deeper understanding of evolutionary dynamics to optimize our synthetic biology approaches effectively.<br></br><br></br>

                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/img-2740.jpg" alt="Plaque Assay Results"></img>
                                <p class="caption">Plaque Assay from Phage Genome with inserted RNA Switch (sequencing indicated switch was mutated out)</p>
                                </div>

                                However, these findings are preliminary and represent a snapshot in our ongoing research journey. Financial and time constraints have limited our exploration to this stage. Despite these challenges, we are committed to refining our methodology. Our team is currently fine-tuning our experimental setup to address these unexpected outcomes and developing an alternative model system that is more aligned with the real-world environmental application of our technology. Despite setbacks, our technology remains a potent tool for editing the phage genome for sub-host specificity. These unforeseen mutations have provided valuable insights into the resilience of T7 phages, opening new avenues of inquiry. As we navigate deeper into our research, we remain dedicated to advancing both the boundaries of science and our understanding of phage biology and genetic engineering.
                                </p>
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default Results