import React from 'react'
import Template from '../Template'
import { Modal, Card } from "react-bootstrap";
import { useState } from 'react';
import TableOfContents from '../TableOfContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IHPInitialTakeAways } from '../data/IHPInitialTakeAways';
import { IHPLakeMerrit } from '../data/IHPLakeMerrit';
import { IHPLabExperts } from '../data/IHPLabExperts';
import { IHPImplement1, IHPImplement2, IHPImplement3 } from '../data/IHPImplementation';

const HumanPractices= () => {
    const [key, setKey] = useState('overview');
    const initialState = Object.fromEntries(
        IHPInitialTakeAways.map((member) => [member.name, false])
      );
    
      const [modalShow, setModalShow] = useState(initialState)
      const toggleShow = (id) =>
        setModalShow((prev) => {
          return { ...prev, [id]: !prev[id] };
        });
    return ( 
        <Template title="Integrated Human Practices">
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
                                <h2 className="content-section" id="ihp-overview-1">Why IHP?</h2>
                                <p>Human practices play a pivotal role in the real-world application of scientific technology, acting as the bridge that connects innovation to the complexities of the world outside. While scientists can meticulously design and develop cutting-edge solutions, it is the human element—the values, perceptions, needs, and behaviors of society—that ultimately determines the impact and success of these innovations. </p>
                                <p>Human practices function as a compass guiding the development and deployment of scientific advancements. An in-depth understanding of the human dimension, achieved through stakeholder engagement, ethical considerations, and practical applications, is fundamental to harnessing scientific innovations for the greater good.</p>

                                <h2 className="content-section" id="ihp-overview-2">Integrated Human Practices Framework</h2>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/ihp-overview/hp-overview-framework.png" alt="Four-Step Approach"></img>
                                </div>
                                <p>For our integrated human practices, we were heavily inspired by <a href="https://2020.igem.org/Team:UNSW_Australia/Human_Practices" target="_blank" rel="noreferrer">2020 UNSW Australia’s</a> comprehensive "Four-Step Approach."</p>
                                <p>In the first stage, we spoke to a variety of experts that have various perspectives—medical, scientific (exploring bio-solutions), and epidemiological—within the scope of antibiotic resistance. Then, we directly engaged with the Lake Merritt community, especially local businesses around the area. Ultimately, we crafted a solution with key tenets that holistically embodied stakeholder values. </p>
                                <p>Afterward, we ideated and designed a solution based on our identified tenets, consulting and incorporating researcher input to design and refine experimental protocol as well as troubleshoot challenges. Ultimately, we engineered a sub-host T7 bacteriophage that activates in the presence of a target mRNA sequence.</p>
                                <p>In exploring real-world applications, we identified two main sources of contamination: <b>wastewater treatment</b> and <b>livestock/agriculture</b>. In response, we developed <a href="/stanford/implementation">Proposed Implementation</a> plans for in-situ testing of our phage technology. Finally, we revisited each of our key tenets and assessed how well our project stakeholder needs and recommendations.</p>

                                <h2 className="content-section" id="ihp-overview-3">Reflective Tool</h2>
                                <p>To build on top of UNSW Australia 2020’s IHP framework, we also included a reflective tool to reflect on stakeholder input.</p>
                                <p>The Atkins and Murphy Model of Reflection (depicted below) is an iterative reflection process that focuses on five steps, summarized into three key processes: stay vigilant in avoiding surface-level answers by clearly recognizing obstacles and presumptions, delve into different possibilities, assess their significance and consequences, and acknowledge the knowledge gained from this process.<sup>1, 2</sup></p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/ihp-overview/overview-hp-atkins-murphy-reflection-model.png" alt="Atkin and Murphy (1993) Model of Reflection"></img>
                                <p class="caption">Atkin and Murphy (1993) Model of Reflection. Made with biorender.com.</p>
                                <p>This ensures that valuable information is effectively utilized and enables us to respond to community needs more efficiently.</p>

                                <h2 className="content-section" id="ihp-overview-4">Science Communication</h2>
                                <p>As opposed to our previous stakeholder interviews, interviews with locals in and around Lake Merritt required us to become <b>science communicators</b> to explain the technicalities of our project and contextualize the issue of antibiotic resistance in Lake Merritt. To this end, we considered the following points:</p>
                                <ul>
                                    <li>Consider our audience and their prior knowledge—age, level of education, scientific knowledge, etc. From here, select the best tone to use for inquiry.</li>
                                    <li>Do not talk too much! Deliver information in <b>chunks</b>, and assess what they understood <b>in between</b>.</li>
                                    <li>When introducing foreign concepts, simplify it as much as possible. For example, instead of using the word “bacteriophages,” we can either use a more universally understood phrase, such as “bacteria killers.”</li>
                                </ul>

                                <h2 className="content-section" id="ihp-overview-5">References</h2>
                                <ol className="small-references">
                                    <li>Atkins, S., & Murphy, K. (1993). Reflection: a review of the literature. Journal of advanced nursing, 18(8), 1188–1192. https://doi.org/10.1046/j.1365-2648.1993.18081188.x</li>
                                    <li>Succeeding in postgraduate study. (n.d.). Succeeding in Postgraduate Study. Retrieved October 10, 2023, from https://www.open.edu/openlearn/mod/oucontent/education-development/succeeding-postgraduate-study</li>
                                </ol>
                                </div>
                            </section>
                        </Tab>
                        <Tab eventKey="design" title="Ideation & Design">
                            <section id="design">
                                <h2 className="content-section" id="ihp-1">Overview of the Problem</h2>
                                <p>Antibiotics revolutionized healthcare, extending average human life by 23 years and curing numerous deadly diseases.<sup>1</sup> However, in the United States alone, antibiotic resistant infections affected 2.8 million people annually, causing 35,000 deaths in 2019.<sup>2</sup> Diseases once conquered by antibiotics are resurging, no longer responsive to our treatments.</p>
                                <p>The rising urgency of the antibiotic resistance crisis is largely attributed to the widespread dissemination of antibiotic resistance genes in the environment, which can easily transfer between bacteria, including those that cause human infections.<sup>3</sup></p>
                                <p>To propose a solution that is both effective and compatible with real-world applications, input and collaboration with a variety of stakeholders from various backgrounds are essential. Only then can we potentially mitigate the antibiotic resistance crisis and safeguard the efficacy of these life-saving medications.</p>

                                <h2 className="content-section" id="ihp-2">What Have We Learned Initially?</h2>
                                <p>From our initial interactions with various stakeholders, we have identified three critical insights:</p>
                                <ol>
                                    <li>Antibiotic resistance is a critical, time-sensitive challenge at a global level.</li>
                                    <li>There is a lack of effective treatments for antibiotic resistance, especially one that does not involve the use of more antibiotics and subsequently increasing the risk of broadening the antibiotic resistance spectrum.</li>
                                    <li>The environment, particularly its microbial populations, is extremely complex. Therefore, our solution must minimize disruption to these communities.</li>
                                </ol>
                                <p>Read more about these stakeholder contributions by clicking the cards below:</p>

                                <div className="ihp-cards">
                                {IHPInitialTakeAways.map((member, key) => {
                                    return (
                                    <div className="ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card" onClick={() => toggleShow(member.title)}>
                                        <div className="ihp-card-photo">
                                            <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                                        </div>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times center">{member.title}</Card.Title>
                                                <Card.Text className="card-role center">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col-4">
                                                <img className="img-fluid" src={member.img.src} alt={member.img.alt} />
                                            </div>
                                            <div className="col-8">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>
                                <div className="photo-grid">
                                <div className="photo-row">
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-dr-trounce.png" alt="Interview" />
                                    </div>
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-dr-mutalik.png" alt="Interview" />
                                    </div>
                                </div>
                                <div className="photo-row">
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-dr-newman.png" alt="Interview" />
                                    </div>
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-cdc-biofilm-lab.png" alt="Interview" />
                                    </div>
                                </div>
                                </div>

                                <h2 className="content-section" id="ihp-3">Lake Merritt Community</h2>
                                <p>Because of our interest in Lake Merritt, we wanted to verify that our project fulfilled specific local needs. As such, we spoke to several stakeholders to verify their needs and values with the lake. For more about our science communication approach, check our <b>Overview</b> page.</p>
                                <p>From the Lake Merritt community, we gathered that:</p>
                                <ol>
                                    <li>The water in the lake is known to be unsanitary, and they try not to interact with it directly. </li>
                                    <li>The Lake’s water quality has direct implications on foot traffic and local businesses in the area.</li>
                                    <li>Reducing antibiotic resistant bacteria in the lake would be beneficial for the overall health and safety of the community as well as nearby businesses that depend on the lake.</li>
                                    <li>A solution to antibiotic resistant bacteria in the lake should also:</li>
                                    <ol type="a">
                                        <li>Not bring any harm to residents and local wildlife.</li>
                                        <li>Improve the water quality, or “cleanliness,” of the lake.</li>
                                    </ol>
                                </ol>
                                <p>Read more about these stakeholder contributions by clicking the cards below:</p>

                                <div className="ihp-cards2">
                                {IHPLakeMerrit.map((member, key) => {
                                    return (
                                    <div className="ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card2" onClick={() => toggleShow(member.title)}>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times">{member.title}</Card.Title>
                                                <Card.Text className="card-role">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>
                                <h2 className="content-section" id="ihp-4">Ideation & Design of Our Solution</h2>
                                <h5 className="center spacer">Integrating Advice & Troubleshooting: Wet Lab and Dry Lab Experts</h5>

                                <div className="ihp-cards">
                                {IHPLabExperts.map((member, key) => {
                                    return (
                                    <div className="ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card" onClick={() => toggleShow(member.title)}>
                                        <div className="ihp-card-photo">
                                            <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                                        </div>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times center">{member.title}</Card.Title>
                                                <Card.Text className="card-role center">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col-4">
                                                <img className="img-fluid" src={member.img.src} alt={member.img.alt} />
                                            </div>
                                            <div className="col-8">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>
                                <h2 className="content-section" id="ihp-5">References</h2>
                                <ol className="small-references">
                                    <li>Hutchings, M. I., Truman, A. W., & Wilkinson, B. (2019). Antibiotics: past, present and future. Current opinion in microbiology, 51, 72–80. https://doi.org/10.1016/j.mib.2019.10.008</li>
                                    <li>Centers for Disease Control and Prevention (U.S.). (2019). Antibiotic resistance threats in the United States, 2019. Centers for Disease Control and Prevention (U.S.). https://doi.org/10.15620/cdc:82532</li>
                                    <li>Inda-Díaz, J. S., Lund, D., Parras-Moltó, M., Johnning, A., Bengtsson-Palme, J., & Kristiansson, E. (2023). Latent antibiotic resistance genes are abundant, diverse, and mobile in human, animal, and environmental microbiomes. Microbiome, 11(1), 44. https://doi.org/10.1186/s40168-023-01479-0</li>
                                    <li>Mutalik, V. K., & Arkin, A. P. (2022). A Phage Foundry Framework to Systematically Develop Viral Countermeasures to Combat Antibiotic-Resistant Bacterial Pathogens. iScience, 25(4), 104121. https://doi.org/10.1016/j.isci.2022.104121</li>
                                    <li>Doorn N. (2022). Wastewater research and surveillance: an ethical exploration. Environmental science : water research & technology, 8(11), 2431–2438. https://doi.org/10.1039/d2ew00127f</li>
                                </ol>
                            </section>
                        </Tab>
                        <Tab eventKey="implementation" title="Implementation & Evaluation">
                            <section id="implementation">
                                <h5>Regarding implementation, we have identified two key areas of application that would aid in halting the spread of ARGs in the environment:</h5>
                                <h2 className="content-section" id="implement-1">Wastewater Treatment Plants</h2>
                                <p>We spoke to <b>Dr. Vivek Mutalik</b>, <b>Dr. Chungheon Shin</b>, and <b>Zoe Lake from EBMUD</b> to contextualize the issue of wastewater treatment plants as a reservoir for antibiotic resistance genes.<br></br><br></br>

                                These efforts led to creating a <b>Wastewater Treatment Matrix</b> in conjunction with <b>Zoe Lake</b> to test the efficacy of our phage in a real-world application as well as the potential for our phage to spread beyond a partially contained environment.<br></br><br></br>

                                For more information on the ideation process and our Wastewater Treatment Matrix, see: <b>3. Be effective in a diverse range of environments</b> and our <a href="/stanford/implementation">Proposed Implementation Page</a>, respectively.
                                </p>
                                <h2 className="content-section" id="implement-2">The Livestock Industry</h2>
                                <p>We initially planned to target hospitals as a real-world application, due to rates of hospital acquired bacteria infections. Based on <b>Dr. Newman</b>’s advice, however, we decided to travel higher up the chain of contamination and focus on the livestock industry.<br></br><br></br>

                                Individuals in this sector did not respond to us for comment regarding this issue. Nevertheless, while we would have valued their input, strong scientific evidence combined with <b>Dr. Newman’s</b> UCSF resolution motivated us to form the basis of an Implementation plan based on the stakeholders we are able to reach.
                                </p>
                                <h3 className="content-section-sh" id="implement-2-1"> Gut Microbiome Matrix </h3>
                                <p>An idea recommended by <b>Dr. Relman</b>, the gut microbiome matrix would serve two purposes: 1) test the safety and efficacy of our phage in case of accidental ingestion 2) assess one method of implementing our technology<br></br><br></br>

                                Phage–human and phage–animal interactions are nearly impossible to prevent. However, we have considered several safety aspects to reduce risk of adverse reactions should their two paths cross. In this aspect, a gut microbiome matrix could better characterize the possible health repercussions of our phage human and non-human animals, if any.<br></br><br></br>

                                Due to limits in time and communication, we were unable to dive deeply into this end-user. However, we have identified an important stakeholder for this step: <b>Dr. Michael Fischbach</b> and his expertise in gut microbiome models.<br></br><br></br>

                                For more information, see our <a href="/stanford/implementation">Proposed Implementation Page</a>.</p>
                                <h2 className="content-section" id="implement-3">Evaluation Of Project Guiding Tenets</h2>
                                <h5><b>1. Impede the spread of antibiotic resistance genes (ARGs) throughout the environment</b> </h5>
                                <p>The spread of ARGs throughout the environment is a pervasive, difficult, and complex issue that requires multiple changes at the scientific, regulatory, and environmental levels to solve completely. Our project, ARC, strives to provide one piece of this intricate puzzle with synthetic biology by creating bacteriophage sub-host specificity to target antibiotic resistant genes in bacteria.<br></br><br></br>

                                Results from our proof-of-concept are promising and indicate that engineering sub-host specific targeting is possible. This aligns with our main tenet, fulfilling stakeholder needs and encouraging us to continue our work, as outlined in <a href="/stanford/implementation">Implementation</a>.
                                </p>
                                <h5><b>2. Pose minimal risk to environmental and user safety</b> </h5>
                                <p>The safety of ARC was a significant part of our project. On top of our decision to add in phage before the chlorination process (see Zoe Lake: EBMUD Wastewater Treatment Plant Tour), we spoke to several stakeholders about safety concerns with our project.</p>
                                <ul>
                                    <li><b>Dr. Paul Bollyky</b> recommended using purification methods to reduce phage-induced inflammatory responses.</li>
                                    <li><b>Dr. Relman</b> verified the merit of kill switch technology in our phage control system.</li>
                                    <li><b>Dr. Magnus</b> warned us of potential concerns regarding data ethics and informed consent with our wastewater surveillance studies.</li>
                                </ul>
                                <div className="ihp-cards">
                                {IHPImplement1.map((member, key) => {
                                    return (
                                    <div className="ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card" onClick={() => toggleShow(member.title)}>
                                        <div className="ihp-card-photo">
                                            <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                                        </div>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times center">{member.title}</Card.Title>
                                                <Card.Text className="card-role center">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col-4">
                                                <img className="img-fluid" src={member.img.src} alt={member.img.alt} />
                                            </div>
                                            <div className="col-8">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>

                                <h5><b>3. Be effective in a diverse range of environments</b> </h5>
                                <p>After consulting multiple experts local to Oakland, we decided to focus on Lake Merritt. However, we acknowledged that to keep the lake clean, we needed a multi-pronged approach to our solution to target a variety of environments. Our switch generation platform has theoretical diversity; however, its efficacy in a real-world context was unknown. With advice from Dr. Mutalik, we explored wastewater applications further. Our resulting interactions with Dr. Chungheon Shin from CR2C and Zoe Lake from EBMUD formed the basis of our idea to test our project in a wastewater matrix.<br></br><br></br>

                                Read more about the development pathway of this treatment in the cards below:
                                </p>
                                <div className="ihp-cards">
                                {IHPImplement2.map((member, key) => {
                                    return (
                                    <div className="ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card" onClick={() => toggleShow(member.title)}>
                                        <div className="ihp-card-photo">
                                            <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                                        </div>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times center">{member.title}</Card.Title>
                                                <Card.Text className="card-role center">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col-4">
                                                <img className="img-fluid" src={member.img.src} alt={member.img.alt} />
                                            </div>
                                            <div className="col-8">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>

                                <h5><b>4. Be continually effective</b> </h5>
                                <p>Long-term efficacy of ARC is imperative for environmental remediation. However, phage evolution is a huge opponent against our switch technology, as it constantly battles to evolve it out. We spoke to stakeholders on how we can ensure a stable and multi-generational technology.</p>

                                <div className="col-sm-4 ihp-cards-a">
                                {IHPImplement3.map((member, key) => {
                                    return (
                                    <div className=" ihp-card-wrapper" key={key}>
                                        <Card className="ihp-card" onClick={() => toggleShow(member.title)}>
                                        <div className="ihp-card-photo">
                                            <Card.Img variant="top" src={member.img.src} alt={member.img.alt} />
                                        </div>
                                        <Card.Body>
                                            <div className="card-content">
                                            <div className="card-text-container">
                                                <Card.Title className="card-title funny-times center">{member.title}</Card.Title>
                                                <Card.Text className="card-role center">{member.role}</Card.Text>
                                            </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Modal
                                        show={modalShow[member.title]}
                                        onHide={() => toggleShow(member.title)}
                                        size="lg"
                                        centered
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            {member.title}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                            <div className="col-4">
                                                <img className="img-fluid" src={member.img.src} alt={member.img.alt} />
                                            </div>
                                            <div className="col-8">
                                                <p><strong>Description:</strong> {member.description}</p>
                                                <p><strong>Contribution:</strong> {member.contribution}</p>
                                                <p><strong>Adjustments + Next Steps:</strong> {member.adjustments}</p>
                                            </div>
                                            </div>
                                        </Modal.Body>
                                        </Modal>
                                    </div>
                                    );
                                })}
                                </div>
                                
                                <div className="photo-grid">
                                <div className="photo-row">
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-dr-magnus.png" alt="Interview" />
                                    </div>
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-codiga-2.jpg" alt="Codiga" />
                                    </div>
                                </div>
                                <div className="photo-row">
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-ebmud.jpg" alt="Oakland Waste Water Treatment Plant" />
                                    </div>
                                    <div className="ihp-photo">
                                    <img src="https://static.igem.wiki/teams/4951/wiki/ihp-interviews/interview-dr-westra.png" alt="Interview" />
                                    </div>
                                </div>
                                </div>

                                <h2 className="content-section" id="implement-4">Conclusion</h2>
                                <p>Throughout our HP journey, we have had the pleasure of collaborating with a diverse range of scientists, businesses, consultants, and individuals to propel ARC’s real-world applications to new heights.<br></br><br></br>

                                Combined with our Education efforts, we honed our skills as effective science communicators, bridging a gap between the scientific community and the public. We fostered discussions among the Lake Merritt community and inspired budding STEM scientists to pursue synthetic biology solutions for global challenges.<br></br><br></br>

                                We have also created a thorough <a href="/stanford/implementation">Proposed Implementation</a> plan with considerations for safety, ethics, efficacy—all thanks to our stakeholder recommendations.<br></br><br></br>

                                In weaving together a multi-faceted solution to combat the antibiotic resistance crisis, we have expanded the reach and relevance of ARC in unprecedented ways. By embracing the principles of collaboration, innovation, and community engagement, we have not only built a bridge toward a future with safer waters but also toward healthier communities, vibrant local businesses, and a more resilient environment. As we continue our journey to make Lake Merritt and the larger environment cleaner, we sow the seeds of positive change, and together, we can look forward to a brighter, more harmonious future for all.<br></br><br></br>
                                </p>

                                <h2 className="content-section" id="implement-5">References</h2>
                                <ol className="small-references">
                                    <li>Hutchings, M. I., Truman, A. W., & Wilkinson, B. (2019). Antibiotics: past, present and future. Current opinion in microbiology, 51, 72–80. https://doi.org/10.1016/j.mib.2019.10.008</li>
                                    <li>Centers for Disease Control and Prevention (U.S.). (2019). Antibiotic resistance threats in the United States, 2019. Centers for Disease Control and Prevention (U.S.). https://doi.org/10.15620/cdc:82532</li>
                                    <li>Inda-Díaz, J. S., Lund, D., Parras-Moltó, M., Johnning, A., Bengtsson-Palme, J., & Kristiansson, E. (2023). Latent antibiotic resistance genes are abundant, diverse, and mobile in human, animal, and environmental microbiomes. Microbiome, 11(1), 44. https://doi.org/10.1186/s40168-023-01479-0</li>
                                    <li>Mutalik, V. K., & Arkin, A. P. (2022). A Phage Foundry Framework to Systematically Develop Viral Countermeasures to Combat Antibiotic-Resistant Bacterial Pathogens. iScience, 25(4), 104121. https://doi.org/10.1016/j.isci.2022.104121</li>
                                    <li>Doorn N. (2022). Wastewater research and surveillance: an ethical exploration. Environmental science : water research & technology, 8(11), 2431–2438. https://doi.org/10.1039/d2ew00127f</li>
                                </ol>
                                
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default HumanPractices