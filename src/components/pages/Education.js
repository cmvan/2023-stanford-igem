import React from 'react'
import Template from '../Template'
import TableOfContents from '../TableOfContents';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EducationOverviewCharts from '../data/EducationOverviewCharts';
import EducationOverviewCharts2 from '../data/EducationOverviewCharts2';


function Education(){
    const [key, setKey] = useState('overview');

    return ( 
        <Template title="Education">
            <div className="row"> 
                <div className="toc-index col-sm-2"> 
                    <TableOfContents activeKey={key}/>
                </div>
                <div className="tab-container col">
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
                                <p>The Stanford iGEM Bioengineering Research Program (SIBRP) is a dynamic and inclusive initiative designed to introduce high school students and incoming college freshmen to the exciting world of synthetic biology and bioengineering. Over the course of four weeks, participants engage in a multifaceted learning experience, consisting of a Synthetic Biology Speaker Series, Lab Webinar, and Mentorship Program. Organized and executed by the Stanford iGEM Team, SIBRP fosters intellectual curiosity, allows students to develop their own research proposals, and inspires the next generation of bioengineers.
                                </p>
                                <h3 className="content-section-sh" id="overview-SIBRP-SH-1">Program Overview</h3>
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
                                
                                <h3 className="content-section-sh" id="overview-SIBRP-SH-2">Impact & Outreach</h3>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/map-of-students.png" alt="Map of Applicant Locations"></img>
                                <p class="caption">Map of Applicant Locations</p></div>
                                <h4 className="center">our program reached <b>321</b> applicants hailing from <b>210</b> different institutions in <b>17</b> different countries </h4>
                                <div className='row info-boxes'>
                                    <article className="statistic-box"><h4><b>53.2%</b></h4>
                                    <p>of our applicants identify as first-generation and/or low-income</p></article>
                                    <article className="statistic-box"><h4><b>53.6%</b></h4>
                                    <p>of our applicants identify as an ethnicity that is traditionally underrepresented in STEM</p></article>
                                    <article className="statistic-box"><h4><b>15.1%</b></h4>
                                    <p>of our applicants identify as LGBTQIA+</p></article>
                                    <article className="statistic-box"><h4><b>86.2%</b></h4>
                                    <p>our applicants speak more than one language, building a multilingual and multicultural community</p></article>
                                </div>
                                <h4 className="center">we asked our <b>158 </b>participating students:</h4>
                                <div className='row info-boxes'>
                                    <EducationOverviewCharts />
                                    <EducationOverviewCharts2 />
                                </div>

                                <h3 className="content-section-sh" id="overview-SIBRP-SH-3">Program Benefits</h3>
                                <div className="full-photos"><img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/education/symposium-participants.png" alt="SIBRP Research Symposium Participants"></img>
                                <p class="caption">SIBRP Research Symposium Participants</p></div>
                                <div className='row info-boxes spacer'>
                                    <article className="info-box"><h5><b>Mentorship</b></h5>
                                    <p>The chance to work closely with Stanford faculty and students, gaining valuable insights and guidance.</p></article>
                                    <article className="info-box"><h5><b>Engagement with Experts</b></h5>
                                    <p>Opportunities to interact with prominent entrepreneurs and researchers, opening doors to a network of professionals in the industry.</p></article>
                                    <article className="info-box"><h5><b>Professional Development</b></h5>
                                    <p>Access to workshops and resources to develop crucial skills for a future in bioengineering.</p></article>
                                    <article className="info-box"><h5><b>College Application Consulting</b></h5>
                                    <p>Guidance in the college application process, tailored to students’ aspirations in the field.</p></article>
                                    <article className="info-box"><h5><b>Research Opportunities</b></h5>
                                    <p>Proposals showcased in a virtual symposium, where participants share their findings with a wider audience.</p></article>
                                </div>
                                <div className='row info-boxes spacer'>
                                    <h4 className="center"><b>Some Quotes From Students</b></h4>
                                    <article className="quote-box">
                                    <p>"I enjoyed hearing different speakers talk about their specific fields of study. It really showed how much bioengineering can range from and the <mark>opportunities of research are endless.</mark>"</p></article>
                                    <article className="quote-box">
                                    <p>"I like the diverse range of guest speakers and the specific fields. Based on each presentation, hundreds of questions pop up in my mind. The series has definitely <mark>inspired me to dig deeper in bioengineering.</mark>"</p></article>
                                    <article className="quote-box">
                                    <p>"I've never considered bioengineering as an option for me since I wasn't really a biology person, but after this program I'm definitely considering it. I didn't know it had <mark>so many applications and it's actually practical.</mark>"</p></article>
                                    <article className="quote-box">
                                    <p>"This program helped me gain a few <mark>friends that shared the same passion as me</mark> and definitely introduced me to the bioengineering field that I never would’ve known without this program so thank you so much!"</p></article>
                                    <article className="quote-box">
                                    <p>"It was just great! I have always wanted to start doing research I didn't know how. About a month ago I did not know much about biology, nor synthetic biology, so I am really proud of myself about all the knowledge I acquired, and I'm honestly <mark>thrilled to keep learning more.</mark>"</p></article>
                                    <article className="quote-box">
                                    <p>"One particular memory that stands out is when our team successfully tackled a complex research project. It required innovative thinking, long hours of hard work, and a lot of determination. When we finally achieved our goal,<mark> it was a proud moment for all of us</mark>, and it reinforced the value of teamwork and perseverance."</p></article>
                                    <article className="quote-box">
                                    <p>"Before this, I had only initiated systematic reviews and literature reviews aside from one or two lab experiences. But, thanks to the advice from Katie and the general advice from all of the other team members, I <mark>was able to find an opportunity to continue my research proposal at a UCSF lab.</mark>"</p></article>
                                    <article className="quote-box">
                                    <p>"This program definitely impacted me in a significant way because <mark>prior to this, I was having doubts about my ability to even break into the field of bioengineering.</mark> When I joined this program, I was surrounded by so many individuals with same background as me and was even able to work with some of them to achieve a common goal."</p></article>
                                </div>

                                <h3 className="content-section-sh" id="overview-SIBRP-SH-4">Inclusivity & Accessibility</h3>
                                <p>At the heart of SIBRP is a commitment to inclusivity and accessibility. We take pride in creating an accessible and safe space for budding bioengineers to cultivate essential skills. To achieve this, we have taken several important steps:</p>
                                <div className='row info-boxes spacer'>
                                    <article className="info-box"><h5><b>Virtual Format</b></h5>
                                    <p>This enables students globally to participate without the constraints of physical location, expanding our geographic reach.</p></article>
                                    <article className="info-box"><h5><b>Holistic Application Review</b></h5>
                                    <p>Our selection process considers applicant backgrounds, experiences, and personal stories, rather than focusing solely on academic achievements. We value unique perspectives and strive to create a diverse cohort.</p></article>
                                    <article className="info-box"><h5><b>Cost-Free</b></h5>
                                    <p>To remove financial barriers, our program is entirely free of charge.</p></article>
                                </div>
                                <p>SIBRP is a testament to our dedication to nurture the next generation of bioengineers. Through educational initiatives, mentorship, and a commitment to inclusivity, we inspire and empower young minds to explore the possibilities of synthetic biology and bioengineering.</p>
                                
                                <h2 className="content-section" id="overview-MH-3"> Educational Game: Phil's Laberia </h2>    
                                <p>Developed by our team, “Phil’s Laberia,” is an innovative bioengineering laboratory simulation game. Designed to democratize access to advanced wet lab techniques for aspiring bioengineers, this engaging and educational game is poised to revolutionize science education. With a user-friendly interface and immersive virtual lab experiences, “Phil’s Laberia” offers a unique opportunity to foster a deeper understanding of the field, equipping players with the skills and knowledge needed to excel in the field of bioengineering while breaking down barriers to entry.</p>
                                <h4 className="center">Click to Play the Game:</h4>
                                <div className="play-button full-photos"> <a href="https://knockdev.itch.io/phils-laberia" target="_blank" rel="noreferrer"><img src="https://static.igem.wiki/teams/4951/wiki/education/playbutton.png" alt="Play Button Linking to Game"></img></a></div>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/startpagephils.png" alt="Start Screen of the Education Game"></img><p class="caption">Start Screen of the Education Game</p></div>
                                <h3 className="content-section-sh" 
                                id="overview-game-SH-1">Development Timeline</h3>
                                <p>Our educational game was ideated, illustrated, and solo-developed over the course of two months by one of our team members. Pictured below is a timeline of the development process. For more specific details, refer to the "Phil's Laberia" tab on the top of the page.
                                </p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/philslaberiatimeline.png" alt="Development Timeline of Phil's Laberia"></img></div>

                                <h3 className="content-section-sh" 
                                id="overview-game-SH-2">Key Features</h3>
                                <p>Our educational game was ideated, illustrated, and solo-developed over the course of two months by one of our team members. Pictured below is a timeline of the development process. For more specific details, refer to the "Phil's Laberia" tab on the top of the page.
                                </p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/demogifgame1.gif" alt="Gif Demo of Game"></img></div>
                                <div className='row info-boxes spacer'>
                                    <article className="info-box"><h5><b>Multiple Levels</b></h5>
                                    <p>Various levels to guide player through lab safety and comonly used protocols like PCR and Transformation.</p><img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/education/levelscreenshot.png" alt="Level Page"></img></article>
                                    <article className="info-box"><h5><b>Player Agency</b></h5>
                                    <p>Controllable player and actions to make a more dynamic and personalized experience beyond "quiz" style games.</p><img className="box-photo-small" src="https://static.igem.wiki/teams/4951/wiki/education/labbunnyleft.gif" alt="Bunny Walking Left"></img></article>
                                    <article className="info-box"><h5><b>Realistic Lab Environment</b></h5>
                                    <p>Features different kinds of lab equipment and storage to emulate a real lab. The lab tour explains the functionality of each.</p><img className="box-photo-med" src="https://static.igem.wiki/teams/4951/wiki/education/labtilesheet.png" alt="Development Timeline of Phil's Laberia"></img></article>
                                    <article className="info-box"><h5><b>Immersive and Interactive</b></h5>
                                    <p>Sound effects and music to make game immersive. Player can interact with items, objects, and machines. </p><img className="box-photo-med" src="https://static.igem.wiki/teams/4951/wiki/education/shakingincubator.png" alt="Development Timeline of Phil's Laberia"></img></article>
                                    <article className="info-box"><h5><b>Educational Dialogue</b></h5>
                                    <p>Dialogue from different character NPCs based on our team's mentors. Players can read to learn more about the science behind bioE techniques.</p><img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/education/mentordrawings.png" alt="Development Timeline of Phil's Laberia"></img></article>
                                    <article className="info-box"><h5><b>Accessibility</b></h5>
                                    <p>Runs on an internet browser to make the game easily accessible. No need for downloads. No need for high specs to play.</p><img className="box-photo-big" src="https://static.igem.wiki/teams/4951/wiki/education/screenshotgame1.png" alt="Development Timeline of Phil's Laberia"></img></article>
                                </div>
                                <h4 className="center"><b>Core Gameplay Loop</b></h4>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/coreloop.png" alt="Development Timeline of Phil's Laberia"></img></div>

                                <h3 className="content-section-sh" 
                                id="overview-game-SH-4">Impact & Outreach</h3>
                                <p>From the initial release on August 23, 2023 to October 7, 2023, we have gotten:
                                </p>
                                <div className='row info-boxes'>
                                    <article className="statistic-box"><h4><b>1,869</b></h4>
                                    <p>page views on the Itch.io platform</p></article>
                                    <article className="statistic-box"><h4><b>1,068</b></h4>
                                    <p>unique browser plays</p></article>
                                    <article className="statistic-box"><h4><b>☆ 4.9</b></h4>
                                    <p>average star rating out of five</p></article>
                                    <article className="statistic-box"><h4><b>16</b></h4>
                                    <p>people have added to their collections</p></article>
                                </div>
                                <p>Additionally, Phil's Laberia was featured on the Stanford Report, a <a href="https://bioengineering.stanford.edu/news/phils-laberia-game-changer-bioengineering-education" target="_blank" rel="noreferrer">Stanford Bioengineering News Article</a>, and on the <a href="https://static.igem.wiki/teams/4951/wiki/education/screenshot-2023-10-07-003834.png" target="_blank" rel="noreferrer">Stanford BIOE80 Course Page</a> as an educational resource. By removing barriers to entry, Phil's Laberia opens doors for students who might not have had the chance to explore bioengineering otherwise. Phil’s Laberia aims to ignite a passion for bioengineering in young minds, encouraging the development of future innovators and researchers in the field.
                                </p>
                                <div className="full-photos"><img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/education/screenshot-2023-10-07-005130.png" alt="News Article From Stanford BioE Department"></img>
                                <p class="caption">Section from Stanford BioE Department's News Article, "Phil's Laberia: A Game Changer in Bioengineering Education"</p></div>

                                <h3 className="content-section-sh" 
                                id="overview-game-SH-5">Student Feedback</h3>
                                <p>Students from the SIBRP Program playtested the first version of the game. With feedback from hundreds of students, continual improvements can be made to game. In version 2.0, arcade-style levels will be added, allowing students to reinforce their learning from the educational tutorial modules.</p>
                                <div className='row info-boxes spacer'>
                                    <h4 className="center"><b>Some Experiences From Students</b></h4>
                                    <article className="quote-box">
                                    <p>"Phil's Laberia has helped inexperienced high school students like me to be able to learn lab work online. <mark>Because of the limited opportunities here in Arkansas, it was super helpful to see basic lab protocols</mark>, experimentations, and machinery demonstrated through the game."</p></article>
                                    <article className="quote-box">
                                    <p>"WOWW! THE GAME IS SO WONDERFUL! Such an amazing approach to learn lab techniques. <mark>I literally feel that I am working at lab!</mark> Great job coders, writers, who all involved in creating this game. I really like the interface as well as design and button sounds."</p></article>
                                    <article className="quote-box">
                                    <p>"Something I really enjoyed in Phil's Laberia was how <mark>accessible it was for someone (like me) who's had zero experience in lab work,</mark> it put everything together in a way that made it explainable to someone who has no experience, and I'm sure it'd be great review for someone who hasn't done any sort of similar lab work in some time."</p></article>
                                    <article className="quote-box">
                                    <p>"I found the game to be one of the <mark>most enjoyable AND valuable aspect of the program</mark> on top of the lectures that we listened to. I believe these were the foundations that allowed us to understand a lot of the research we were doing."</p></article>
                                    <article className="quote-box">
                                    <p>"It actually <mark>sent you into the lab and I felt as though I was participating</mark> as well in real life."</p></article>
                                    <article className="quote-box">
                                    <p>"The artstyle was so cute, and the game was really engaging. <mark>Even though it focused on academics, it did so in such a way that made the concepts easy to understand</mark> and the learning process really enjoyable."</p></article>
                                </div>
         
                                <h2 className="content-section" id="overview-MH-4"> SWE-GetSET Workshop</h2>
                                <p>SWE is one of the largest organizations supporting women in engineering and technology, and a leading advocate and catalyst for transformative change worldwide. Under the Santa Clara Valley Section of SWE, Stanford iGEM hosted a Synthetic Biology Workshop with the Get Science, Engineering, and Technology (GetSET) Program. GetSET is an award-winning outreach program that has been running for over 30 years. Participants interested in STEM connected with over 100 peers, industry professionals, and volunteers experienced in engineering fields. Our team planned, organized, and led a two-day workshop, where we introduced both synthetic biology concepts as well as research and career opportunities to the participants.
                                </p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/getsetworkshop.jpg" alt="Advertisement Poster for SIBRP"></img>
                                <p class="caption">iGEM Team and GetSET Cohort Group Photo</p>
                                </div>
                                <h3 className="content-section-sh" id="overview-SWE-SH-1">Day 1</h3>
                                <h4 className="center">Introduction to Bioengineering and Bio-Art Activity</h4>
                                <p>Day one of the workshop took place at Santa Clara University, where the GetSET participants engaged in introductory bioengineering skills. Students developed wet lab skills through a hands-on Bio-Art activity, where they crafted personal art by streaking chromoprotein bacteria on LB plates. Furthermore, they put their knowledge to the test through an interactive Kahoot trivia! The trivia quizzed the participants on topics ranging from protein structure to cloning techniques.</p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/20230718-122021.jpg" alt="Advertisement Poster for SIBRP"></img>
                                <p class="caption">GetSET Cohort and Their Bio-Art Creations</p>
                                </div>
                                <h3 className="content-section-sh" id="overview-SWE-SH-2">Day 2</h3>
                                <h4 className="center">Stanford Tour of Engineering and Science Facilities</h4>
                                <p>Day 2 of the workshop was an in-depth, six hour tour of Stanford University’s engineering and science facilities. Ranging from the Stanford School of Medicine to the Gates Computer Science Building, students fostered a greater understanding of career and education opportunities available at higher education. The goal of the tour was to expose students to engineering environments, different academic disciplines, and the ground-breaking research conducted at top research institutions. Additionally, students were able to examine their Bio-Art products from the previous day.</p>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/img-4340.jpeg" alt="Advertisement Poster for SIBRP"></img>
                                <p class="caption">Students on a Tour of Stanford's Facilities</p>
                                </div>
                                <p>The SWE GetSET Program Workshop inspired and empowered the next generation of scientists and engineers. Through engaging discussions, hands-on activities, and exposure to cutting-edge research environments, we introduced students to pioneering research and encouraged their future contribution in the fields of science, engineering, and technology.</p>

                            <h2 className="content-section" id="overview-MH-5"> Youth Safety and Protection </h2>
                                <p>For each of the educational initiatives, the Stanford iGEM Team ensured youth safety and protection. For example, the SIBRP Program was registered with Stanford's Cardinal Engage and Protection of Minors management, where an officer at the Office of Student Engagement (OSE) ensured proper safety precautions and protocols. Phil's Laberia had an educational modules explaining lab safety, PPE, and the purpose of all lab equipment. The GetSET Workshop was managed alongside chaperones from the SWE organization. All materials used in the Workshop were BSL-1.
                                </p>
                                <h4 className="content-section-sh"><b>SIBRP Safety</b></h4>
                                <div className="full-photos"><img className="large-photo" src="https://static.igem.wiki/teams/4951/wiki/education/office-of-student-engagment.jpg" alt="Stanford OSE Logo"></img></div>
                                <p>Along with our initiative rooted in accessibility, we also prioritize the safety of our youth joining our education program. The Stanford iGEM team has met up with an officer at Office of Student Engagement to register with Stanford’s Cardinal Engage and Protection of Minors management. Thorugh these offices, our education coordinators on Stanford iGEM completed staff training, receive a background check. Lastly, we collected participant waivers. Below, is a list of steps Stanford iGEM followed and completed to ensure the safety of the youth participants in our program.</p>
                                <h5><b>The Registration Processes (From the OSE Office Website) </b></h5>
                                <ol>
                                    <li>
                                        First, the Stanford iGEM team needed to become approved by the OSE office based on our organization's approved mission and constitution before reaching out to youth, schools, and communities. 
                                    </li>
                                    <li>
                                        Stanford iGEM organized a meeting with an OSE advisor to review our educational mission and program plans.
                                    </li>
                                    <li>
                                        Registration with Stanford’s CardinalEngage, which is Stanford’s platform for student organization and campus engagement.
                                    </li>
                                    <li>
                                        Minors Online Training  
                                    </li>
                                    <li>
                                        Background Checks 
                                    </li>
                                    <li>
                                        Collect signed liability waivers
                                    </li>
                                </ol>
                                <h5><b>Registration with ePOM</b></h5><p>Registering with the Protection of Minors Management (ePOM) enabled our education program to ensure the safety of all our students. The registration included providing essential information about the location of the program, anticipated minor count, if minors will be working in the lab, age group. Lastly, our educational coordinators went through certification to fully understand Stanford University’s Protection of Minors policy. </p>
                                <div className='row info-boxes spacer'>
                                    <article className="info-box"><h5><b>Minors Online Training</b></h5>
                                    <p>All education coordinators completed the online training that consist of training WWM-1000 Working with Minors and WWM-PROGRAM-2000 Working with Minors at Stanford and Mandated Reporter Acknowledgement. Within our program, we ensured at least two mandated reporters were present at all times, supervising participants in every session.</p></article>
                                    <article className="info-box"><h5><b>Background Checks</b></h5>
                                    <p>Educational staff in Stanford iGEM Bioengineering Research Program completed and cleared a background check and live scan, which was accordingly confirmed by the Protection of Minors Management system as well.</p></article>
                                    <article className="info-box"><h5><b>Liability Waivers</b></h5>
                                    <p>All participants were required to fill out and submit the liability waiver in order to join the program. The signed waivers were then reviewed and submitted to the Protection of Minors Management System which also enabled parents and guardians to review the liability waiver.</p></article>
                                </div>

                                <h4 className="content-section-sh"><b>Phil's Laberia</b></h4>
                                <p className="spacer">In Phil’s Laberia, we included a tutorial on PPE and safety equipment to teach students basic BSL-1 biosafety. Players put on proper PPE and used the emergency response equipment such as the combination eyewash shower in-game. While completing each step, our narrator, Julia, explains its importance.</p>
                                <h4 className="content-section-sh"><b>SWE-GetSET Safety</b></h4>
                                <p className="spacer">To ensure our Bio-Art activity was safe for SWE’s GetSET program, we used non-hazardous biological agents and chemicals only—E. Coli (BSL-1) and LB plates, respectively. We brought gloves and inoculation loops for every student. We also sanitized the benchtops before and after use with 70% (v/v) ethanol. Finally, we tightly wrapped each plate with parafilm for secure transport.</p>
                            </section>
                        </Tab>
                        <Tab eventKey="program" title="BioE Research Program">
                            <section id="program">
                                <h2 className="content-section" id="edprogram-1"> Guest Speakers</h2>
                                <h3 className="content-section-sh" id="edprogram-1-1">Dr. Alex Engel</h3>
                                <div className="guest-speaker spacer">
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-alex.png" alt="Stanford OSE Logo"></img>
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"The way Dr. Engel presented his area of expertise was clear and concise. I was very engaged the whole time."</p></article>
                                        <article className="quote-box1">
                                        <p>"I liked Dr. Alex's story the most as his work was most easily applied and seen in the real world, I also loved the different color food."</p></article>
                                        <article className="quote-box1">
                                        <p>"His talk was both educational and fun! I could tell that Dr. Alex really loves his work, and that's really inspiring."</p></article>
                                    </div>
                                </div>
                                <h3 className="content-section-sh" id="edprogram-1-2">Cyrus K</h3>
                                <div className="guest-speaker spacer">
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"I liked the idea of being exposed to all that intricate math and how it can aggregate into something so important in bioengineering."</p></article>
                                        <article className="quote-box1">
                                        <p>"What was interesting to me was the fact that researchers must decipher the biological “language” spoken by proteins, genes, and metabolites, by translating it into mathematical expressions."</p></article>
                                        <article className="quote-box1">
                                        <p>"As someone very into computer science, learning how you can model cells using simulations was amazing. My favorite aspect was seeing the model in 3D."</p></article>
                                    </div>
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-cyrus.png" alt="Stanford OSE Logo"></img>
                                </div>
                                <h3 className="content-section-sh" id="edprogram-1-3">Dr. Rogelio Hernández Lopez</h3>
                                <div className="guest-speaker spacer">
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-rogelio-herna-ndez-lo-pez.png" alt="Stanford OSE Logo"></img>
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"The presentation was really interesting. It really got me thinking about all types of possibilities that there are for fighting against diseases and other unwanted things."</p></article>
                                        <article className="quote-box1">
                                        <p>"My favorite aspect was his visuals showing how CAR T-Cell Therapy affected the cancerous cells inside of bodies."</p></article>
                                        <article className="quote-box1">
                                        <p>"I liked his research about how they didn't just stop at creating synthetic receptors but also went to creating something to differentiate from different concentrations of antigens in the target cells"</p></article>
                                    </div>
                                </div>
                                <h3 className="content-section-sh" id="edprogram-1-4">Dr. Huijun Ring </h3>
                                <div className="guest-speaker spacer">
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"I thought it was really interesting! I never really thought about the potential intersection between bioengineering and entrepreneurship."</p></article>
                                        <article className="quote-box1">
                                        <p>"Dr. Ring has inspired me to continue working hard as a high school student in order to achieve greater things in the future."</p></article>
                                        <article className="quote-box1">
                                        <p>"She talked about her entrepreneurship experience and it was personally admirable to see a woman breaking boundaries in STEM."</p></article>
                                    </div>
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-post-dr-ring.png" alt="Stanford OSE Logo"></img>
                                </div>
                                <h3 className="content-section-sh" id="edprogram-1-5">Dr. Philip Kyriakakis</h3>
                                <div className="guest-speaker spacer">
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-phil.png" alt="Stanford OSE Logo"></img>
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"It was really interesting how we are able to map the entire brain using neurons and electricity. It was honestly motivational and got me to work."</p></article>
                                        <article className="quote-box1">
                                        <p>"Optogenetics was very fascinating to me as researchers would essentially be able to activate and deactivate a specific gene without the need for surgery. "</p></article>
                                        <article className="quote-box1">
                                        <p>"Dr. Kyriakaki’s talk and story was incredible to hear about. He not only talked about his work, but the challenges he faced during the process as well. "</p></article>
                                    </div>
                                </div>
                                <h3 className="content-section-sh" id="edprogram-1-6">Dr. Milana Trounce</h3>
                                <div className="guest-speaker spacer">
                                    <div className='row info-boxes'> 
                                    <article className="quote-box1">
                                        <p>"It was really interesting to see all the factors that can potentially go in to ensuring that infectious diseases are spread at a lower rate."</p></article>
                                        <article className="quote-box1">
                                        <p>"Extremely informative and applicable! I like how Dr. Trounce centered her entire lesson on COVID-19 and used common misperceptions and biosecurity concerns to make the lesson both applicable."</p></article>
                                        <article className="quote-box1">
                                        <p>"I have heard other professors talk about this topic but I’ve never really heard someone explain it very secure and fluently as how Dr. Trounce did."</p></article>
                                    </div>
                                    <img className="med-photo" src="https://static.igem.wiki/teams/4951/wiki/guest-speaker-trounce.png" alt="Stanford OSE Logo"></img>
                                </div>
                                
                                <h2 className="content-section" id="edprogram-2"> Program Structure & Outreach </h2>
                                <p>The Stanford iGEM team has taken the initiative to empower students of all backgrounds to the capabilities of synthetic biology through our educational initiative. Rooted in our values and priority of accessibility, interdependent learning, collaboration, dialogue, the Stanford iGEM Bioengineering Research Program aims to diversity the application of bioengineering. Our four-week virtual program spanned from August 21 to September 15, offering mentorship from engineers, guest speakers from leading industries and fields, professional development workshops, and research proposal workshops. Students engage tri-weekly every Monday, Wednesday, and Friday while having the opportunity to pursue specialized research projects by exploring bioengineering applications with synthetic biologists, professors, researchers, engineers, and entrepreneurs. From application of bioengineering to project workshops along with personalized mentoring, scholars developed proficiency in bioengineering techniques to present their crafted research proposal in our Stanford iGEM Bioengineering Research Proposal Symposium. </p>
                                    <h3 className="content-section-sh" id="edprogram-2-1"> Syllabus</h3>
                                        <iframe className="spacer" title="Syllabus" width="100%" height="620" src="https://static.igem.wiki/teams/4951/wiki/igem-bioe-research-program-syllabus.pdf"></iframe>
                                    <h3 className="content-section-sh" id="edprogram-2-2"> Outreach</h3>
                                    <p>Ensuring opportunities in all experiences, backgrounds, and intellectual ingenuity, the Stanford iGEM team initiative extensive outreach to ensure accessibility of Synthetic biology to all learning communities. Our outreach efforts and engagement initiated in the middle of July, spanning until the start of our program. Avenues of our spanned from a variety of domains that include social media platforms like Stanford iGEM, Stanford Bioengineering Twitter and Instagram, Bioengineering faculty, outreach to high school counselors across the United States, advocacy groups for carbon footprint, and in first-generation and low-income communities like Thrive Scholar, Questbridge, FLI Home Server, and Matriculate. Our outreach efforts are heavily rooted in accessibility to learn a fascinating topic like synthetic biology. For this reason, we prioritize our outreach efforts in empathizing our virtual aspects to reach those from all backgrounds and locations along with conveying our program component and support to ensure that those who are new to synthetic biology and research are propelled to learn and join the realms of synthetic biology. </p>
                                <h2 className="content-section" id="edprogram-3"> Research Proposal Symposium</h2>
                                    <p>Our curriculum paved the way in ensuring students feel empowered to practice their science communication amongst sharing their passion amongst their fellow cohort. Through lectures, office hours, project workshops, students had the opportunity to transform their intellectual ingenuity into a research proposal that was presented at the Symposium!<br></br><br></br>At our symposiums we were awarded three prizes from the <b>Stanford JEDI (Justice, Equity, Diversity, & Inclusion) Department</b> in recognition of exemplary work and initiative to positively impact the community for all. For students that completed all of our program’s deliverables, students were awarded with a certification of excellence!<br></br><br></br>Below is the schedule for the symposium, along with some of the proposal titles from our program cohort:<br></br></p>
                                    <iframe title="Symposium" width="100%" height="620" src="https://static.igem.wiki/teams/4951/wiki/education/education/final-stanford-igem-bioengineering-research-symposium-schedule-update.pdf"></iframe>
                                <h2 className="content-section" id="edprogram-4"> Additional Student Feedback </h2>
                                <div className='row info-boxes spacer'>
                                    <article className="quote-box">
                                    <p>"This program has taught me the many applications of bioengineering and how valuable the work that this field produces is. Everyone in the cohort is very friendly and helpful and it is very inspiring to see how passionate everyone is."</p></article>
                                    <article className="quote-box">
                                    <p>"This program has helped me realize that bioengineering is the future. There are so many aspects to explore and so many opportunities to revolutionize the field. It gave me the potential to make an impact through research."</p></article>
                                    <article className="quote-box">
                                    <p>"Speaking of this program, it has influenced my thoughts and views, especially with regard to research and other materials that require extensive knowledge, also how to write a research paper and gaining assistance from other team members and work together with my team to produce an effective paper. Again, I'd be very appreciative of such a community. "</p></article>
                                    <article className="quote-box">
                                    <p>"This program did more than just teach me. I went into iGEM expecting to be assigned large packets of work, tests, and other requirements that usually come with a science program on the first day, but instead, I came into an environment that opened its arms to greet me. The iGEM team did an outstanding job in presenting, running, and setting up the entire event to help scholars like me get the tools that they need to succeed."</p></article>
                                    <article className="quote-box">
                                    <p>"I struggle navigating scholarly articles, so in that regard the program really pushed my boundaries. It was very useful practice though. As was writing my first research proposal! I especially liked how people were so ready to talk/socialize together/help each other in chat."</p></article>
                                    <article className="quote-box">
                                    <p>"I feel that this program made me passionate about building things like robots and prosthetics. I have been trying so hard to find what I like and this program allowed me to find it. I will miss talking to my teammates and the energetic mentors that tried so hard to make this program work and teach us new things."</p></article>
                                    <article className="quote-box">
                                    <p>"This program made me reflect on my future career. I entered this program wanting to be a neurosurgeon but I am leaving wanting to be a neuroscientist/ologiest. I truly enjoy the research aspect of science and want to continue it so THANK YOU IGEM!!!"</p></article>
                                    <article className="quote-box">
                                    <p>"I found the guest speakers most valuable as they gave so much of their time into helping us learn. Because of their years-worth of knowledge, it was such a breeze to be able to understand complex topics as they broke them down into easier pills to swallow. I understood and have learned so much from topics ranging from designer babies to red light therapy for animal neuronal correction."</p></article>
                                </div>
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