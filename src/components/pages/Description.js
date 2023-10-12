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
                                <p>Antibiotics are the most common method for treating bacterial infections, but they directly contribute to the proliferation of ARB, even when used correctly. However, antibiotics are often over prescribed and used incorrectly. This misuse further accelerates the spread of ARB. Furthermore, new classes of antibiotics have not been discovered in the last 20 years.<sup>12</sup> Without new classes of antibiotics, even slow ARB proliferation under correct use of antibiotics will eventually outpace our antibiotic’s ability to treat infections.</p>
                                <p>Bacteriophages, or “phages,” are viruses that invade and destroy only bacteria. This targeted specificity and evolutionarily built-in antibacterial viability have prompted investigation into their application for combating antibiotic resistance.<sup>9</sup> However, their strain-specific host range causes them to attack both normal and ARB indiscriminately.<sup>10</sup></p>
                                <p>In short, there lacks a solution to antibiotic resistance that:</p>
                                <ol>
                                    <li>Minimizes disruption to symbiotic microbiota and ecosystems,</li>
                                    <li>Poses minimal human health risks, and</li>
                                    <li>Does not readily broaden the antibiotic resistance spectrum.</li>
                                </ol>
                                <h2 className="content-section" id="our-solution-1">Our Solution—ARC!</h2>
                                <h2 className="content-section" id="future-outlook-1">Future Outlook</h2>
                                <h2 className="content-section" id="description-ihp-1">Background</h2>
                                <h2 className="content-section" id="References">Integrated Human Practices</h2>
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default Description