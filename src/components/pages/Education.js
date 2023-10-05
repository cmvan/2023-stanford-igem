import React from 'react'
import Template from '../Template'
import TableOfContents from '../TableOfContents';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Education(){
    const [key, setKey] = useState('overview');

    return ( 
        <Template title="Education">
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
                                <h2 className="content-section" id="overview-MH-1"> Our Initiatives </h2>                         
                                <div className="gap row pair">
                                <article className="col-lg-8 overview-block">
                                    <h5><b>Stanford iGEM Bioengineering Research Program (SIBRP)</b></h5>
                                    <p>The Stanford iGEM Bioengineering Research Program introduced high school students to the foundations of synthetic biology and bioengineering through interactive lectures, expert speaker sessions, and personalized mentorship.</p>
                                </article>
                                <img className="col photo" src="https://static.igem.wiki/teams/4951/wiki/education/sibrp-photo.png" alt="SIBRP Cohort"></img>
                                </div>

                                <div className="gap row pair">
                                <img className="col transparent-photo" src="https://static.igem.wiki/teams/4951/wiki/education/labbunnyfront.gif" alt="SWE Cohort with iGEM Team"></img>
                                <article className="col-lg-8 overview-block">
                                    <h5><b>Educational Game: Phil’s Laberia</b></h5>
                                    <p>Developed over the course of two months, “Phil's Laberia” is an innovative bioengineering game and tool that democratizes access to advanced wet lab techniques.</p>
                                </article>
                                </div>
                                <div className="gap row pair">
                                <article className="col-lg-8 overview-block">
                                    <h5><b>Society of Women Engineers (SWE) GetSET Workshop</b></h5>
                                    <p>The Society of Women Engineers (SWE), through the Santa Clara Valley Section, partnered with Stanford iGEM to host a two-day Synthetic Biology Workshop as part of the Get Science, Engineering, and Technology (GetSET) Program.</p>
                                </article>
                                <img className="col photo" src="https://static.igem.wiki/teams/4951/wiki/education/img-20230717-wa0006.jpg" alt="SWE Cohort with iGEM Team"></img>
                                </div>

                                <h2 className="content-section" id="overview-MH-2"> BioE Research Program (SIBRP) </h2>
                                <p>The Stanford iGEM Bioengineering Research Program (SIBRP) is a dynamic and inclusive initiative designed to introduce high school students and incoming college freshmen to the exciting world of synthetic biology and bioengineering. Over the course of four weeks, participants engage in a multifaceted learning experience, consisting of a Synthetic Biology Speaker Series, Lab Webinar, and Mentorship Program. Organized and executed by the Stanford iGEM Team, SIBRP fosters intellectual curiosity, provides hands-on learning opportunities, and inspires the next generation of bioengineers.
                                </p>
                                <h3 className="content-section-sh" id="overview-SIBRP-SH-1"><i>Program Overview</i></h3>
                                <p><b>SIBRP features three main components:</b>
                                <div className='row info-boxes'>
                                    <article className="info-box"><h5><b>Interactive Lab Webinar</b></h5>
                                    <p>The lab webinar comprises two sections: (1) lecture-style sessions, where students explore foundational principles of bioengineering and (2) collaborative workshops, where students have in-depth conversations with peers while creating their own research proposals in teams.</p></article>
                                    <article className="info-box"><h5><b>Speaker Series</b></h5>
                                    <p>Participants also attend a series of engaging talks by experts in the field of synthetic biology. These sessions cover a wide range of topics, from precision medicine start-ups to cutting-edge advancements in optogenetics, offering a comprehensive introduction to the field of bioengineering.</p></article>
                                    <article className="info-box"><h5><b>Mentorship Program</b></h5>
                                    <p>Students are paired with experienced Stanford bioengineers and synthetic biologists who guide them through their journey, offering personalized support and expertise. This mentorship fosters a strong sense of community and ensures that participants receive individualized support.</p></article>
                                </div>
                                <div className="full-photos"><img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/education/ba12e3f5-638c-42f3-ae92-08a6884faa9e.png" alt="Advertisement Poster for SIBRP"></img>
                                <p class="caption">Advertisement Poster for SIBRP</p>
                                </div>
                                </p>
                                
                                <h3 className="content-section-sh" id="overview-SIBRP-SH-2"><i>Impact and Outreach</i></h3>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/map-of-students.png" alt="Map of Applicant Locations"></img>
                                <p class="caption">Map of Applicant Locations</p></div>
                                
                                <h2 className="content-section" id="overview-MH-3"> Educational Game: Phil's Laberia </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                
                                <h2 className="content-section" id="overview-MH-4"> SWE GetSET BioE Workshop </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <h3 className="content-section" id="overview-4-1"> Plan </h3>

                            </section>
                        </Tab>
                        <Tab eventKey="program" title="BioE Research Program">
                            <section id="program">
                                <h2 className="content-section" id="overview-1"> Overview </h2>
                                <h3 className="content-section" id="test-1-1"> Hi</h3>
                                <h2 className="content-section" id="overview-1-1"> Overview </h2>
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

export default Education