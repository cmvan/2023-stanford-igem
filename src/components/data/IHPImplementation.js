export const IHPImplement1 = [
    {
      id: 0,
      title: "Dr. Paul Bollyky: Phage–Human Interactions",
      role: "Immunologist and Infectious Disease specialist at Stanford Medical Center", 
      img: {
        src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-paul-b.jpeg",
        alt: "Picture of Dr. Paul Bollyky",
      },
      description: "Dr. Paul Bollyky, MD, PhD is an Immunologist and Infectious Disease specialist at Stanford Medical Center and an Associate Professor of Medicine (Infectious Diseases) and of Microbiology and Immunology at Stanford University. He addressed our concern about phage-induced inflammatory responses, which we discovered in our literature review.",
      contribution: "Dr. Bollyky explained that endotoxins may trigger this response. To remove these impurities in our phage samples, he suggested two purification methods: 1) Fast Protein Liquid Chromatography (FPLC) using the ÄKTA Pure Protein Purification System, and 2) polyethylene glycol precipitation. Regarding our concerns of our phage infecting human cells, Dr. Bollyky reassured that while infection might be possible, replication inside humans is unlikely due to their lack of necessary machinery.",
      adjustments: "In our Implementation, we included a purification step to phage preparations to reduce the potential of an inflammatory response. We also decided to seek consultation from Dr. David Relman to further characterize phage disruption of natural communities within the human body.",
    },
    {
        id: 1,
        title: "Dr. David Relman: Phage Control Systems",
        role: "Professor in Medicine and a Professor of Microbiology and Immunology at Stanford University", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-david-r.jpg",
          alt: "Picture of Dr. David Relman",
        },
        description: "Dr. David Relman, MD is the Thomas C. and Joan M. Merigan Professor in Medicine and a Professor of Microbiology and Immunology at Stanford University. We sought his expertise to ask about potential phage control systems.",
        contribution: "In addition to providing suggestions as to how we can study our phages in a microbiome, he supported our idea of incorporating kill-switch technology into our phage design and suggested a broader definition for a phage control system to include mechanisms that limit environmental survival or replication to a certain number of generations. He also suggested using multiple control mechanisms together to reduce risk of our control being evolved out at the expense of fitness.",
        adjustments: "To reinforce safety, we will add a control system, likely a kill switch. This minimizes unintended consequences by restricting the phage’s spread by reducing the risk of harm to non-target organisms or environments and providing an extra layer of risk mitigation in cases where the behavior of genetically modified phages may not be entirely predictable.",
    },
    {
        id: 2,
        title: "Dr. David Magnus: Ethical Concerns of Surveillance Studies",
        role: "graduate fellow in the Rhiju Das and Possu Huang Labs", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-david-m.png",
          alt: "Picture of Dr. David Magnus",
        },
        description: "Dr. David Magnus, PhD is the Thomas A. Raffin Professor of Medicine and Biomedical Ethics and a Professor of Pediatrics and Medicine and by Courtesy of Bioengineering at Stanford University.",
        contribution: "Dr. Magnus raised several ethical considerations surrounding surveillance studies that we had not initially considered, particularly in the field of data ethics. We have curated a few of these considerations in question format: (1) How do we ensure that our target community is equitable, diverse, and representative of the population at large? (2)If our study uncovers stigmatizing health or drug-related issues, are we obligated to release this information? If so, who would we contact? To what degree do we need to obtain consent? (3)Does everyone need to explicitly consent? (4)How will we effectively engage with the community to obtain this? To answer these questions, Dr. Magnus encouraged us to seek the advice of local regulatory bodies. He also directed us to niche literature relevant to our research, specifically an article titled: Wastewater research and surveillance: an ethical exploration.[5]",
        adjustments: "Dr. Magnus challenged our traditional definition of informed consent and responsibility by questioning our role to disclose research we may unintentionally uncover throughout our experiments. For our Implementation Phase, we will draft an outline of an ethical framework for wastewater research with the literature that Dr. Magnus has recommended. Then, we will finalize this plan with the assistance of EBMUD and Dr. Mutalik, since EBMUD runs the facility and Dr. Mutalik has conducted wastewater studies there before, respectively.",
    },
  ];
  
export const IHPImplement2 = [
    {
      id: 0,
      title: "Dr. Vivek Mutalik: Wastewater as a Reservoir for ARGs",
      role: "Staff Scientist at Lawrence Berkeley National Laboratory", 
      img: {
        src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-vivek-m.jpeg",
        alt: "Dr. Vivek Mutalik",
      },
      description: "Dr. Vivek Mutalik, PhD is a Staff Scientist in the Environmental Genomics & Systems Biology Division at Lawrence Berkeley National Laboratory. He has previously conducted wastewater studies at EBMUD. He also leads the Phage Foundry, which provides phage-based countermeasures against antibiotic resistant bacteria.[4] We contacted him regarding requirements for an effective bio-solution for antibiotic resistance.",
      contribution: "In addition to advocating for the use of bacteriophages to combat antibiotic resistance, Dr. Mutalik identified wastewater as a source of the spread of antibiotic resistance throughout the environment. It acts as an ARG reservoir by concentrating antibiotics and antibiotic resistant bacteria from a wide range of sources (agriculture, hospitals, etc.). This mixing provides an environment where bacteria can exchange and spread ARGs, and failures in treating water properly can release them into the wider environment.",
      adjustments: "Our discussion solidified our decision to target wastewater treatment facilities as a way to proactively halt the spread of antibiotic resistance in the water. Additionally, Dr. Mutalik encouraged us to participate in the EBMUD tour ourselves, and he asked us to follow-up with him afterward with our findings (see Zoe Lake: The Use of ARC in Wastewater Treatment, Pt. II). Due to his interest in our project, in Phase II of our project we anticipate Dr. Mutalik becoming a close collaborator and mentor on our wastewater treatment matrix, providing advice on how to design and execute a surveillance study given his prior experience at EBMUD.",
    },
    {
        id: 1,
        title: "Dr. Chungheon Shin: Applying ARC to Wastewater Treatment, Pt. I",
        role: "Research Director at the William and Cloy Codiga Resource Recovery Center", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-chungheon-s.jpeg",
          alt: "Picture of Dr. Chungheon Shin",
        },
        description: "Dr. Chungheon Shin, PhD is the Research Director at the William and Cloy Codiga Resource Recovery Center (CR2C) at Stanford University, which enables experimentation of new, promising technologies for resource recovery from wastes.",
        contribution: "Dr. Shin described the beneficial role of bacteria in the wastewater treatment process, as they drive biological processes like production of biogas or decomposition of solid wastes. Therefore, he believed that our project brought great value to wastewater treatment. These bacteria are integral for resource recovery and renewable energy sources. When asked about antibiotic resistance, however, Dr. Shin was unable to definitively answer, as the Center specifically does not focus on this research.",
        adjustments: "Dr. Shin also reinforced our stakeholders’ value of a precise targeting tool to minimize disturbing bacterial communities. However, because the Center is primarily a pilot testing ground, we were unable to find all of our answers here. This, combined with Dr. Mutalik’s encouragement, motivated us to participate in a tour of a larger and geographically relevant facility, EBMUD.",
    },
    {
        id: 2,
        title: "Zoe Lake: Applying ARC to Wastewater Treatment, Pt. II",
        role: "Wastewater Control Representative at the East Bay Municipal Utility District (EBMUD)", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-zoe-l.jpeg",
          alt: "Picture of Zoe Lake",
        },
        description: "Zoe Lake is a Wastewater Control Representative at the East Bay Municipal Utility District (EBMUD), serving as a liaison between EBMUD to the public. She also performs analyses for the Industrial Discharge department. We were inspired to visit EBMUD after our tour at CR2C.",
        contribution: "Ms. Lake led on a 1.5 hour tour around the plant, explaining in detail each part of the wastewater treatment process. She agreed that the process is above standards, but not perfect, and our engineered phage would be useful to further improve water quality, as their tertiary treatment filters are not small enough to filter viruses. We explained our project and discussed phage implementation in the context of the treatment process. Eventually, we decided that adding our phage in the clarifiers during secondary treatment would be best. As an EBMUD tour guide, Ms. Lake also described to us how she effectively communicates the wastewater process to her audience, regardless of age and background.",
        adjustments: "Our experiences with EBMUD not only improved our science communications efforts, which aided us in our Need Verification by engaging with local organizations but also filled in a missing gap from our CR2C tour. Having the full picture, we realized how our project could benefit wastewater treatment. Our next step is to work with the EBMUD Laboratory and Process Optimization Team to conduct water sampling/analyzation and wastewater matrix, respectively. More on our Proposed Implementation Page.",
    },
  ];

  export const IHPImplement3 = [
    {
      id: 0,
      title: "Dr. Edze Westra: Phage Resistance + Phage Cocktails",
      role: "a postdoctoral fellow in the Jewett Lab at Stanford University", 
      img: {
        src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-edze-w.jpeg",
        alt: "Picture of Dr. Edze Westra",
      },
      description: "Dr. Edze Westra, PhD is a Professor of Microbiology at the University of Exeter, whose research focuses on interactions between the microbiome and the evolution of anti-phage defenses. We consulted this expert to contextualize the potential issue of phage resistance and the efficacy of Anti-CRISPR (Arc) proteins in our design.",
      contribution: "Dr. Westra acknowledged the likelihood of phage resistance becoming a concern, a statement corroborated by our conversations with Dr. Vivek Mutalik, Dr. David Relman, and Dr. Paul Bollyky. Our initial concern was CRISPR-Cas immunity, which we planned to combat with Arc proteins. However, Dr. Westra believed that innate, not adaptive, immune systems would likely render our phage ineffective. His recommendation, echoed by Dr. Mutalik and Dr. Bollyky, was to utilize phage cocktails as opposed to Arc proteins.",
      adjustments: "Dr. Westra’s insights led us to rethink our approach, brainstorming ways to create phage cocktails, which validated the utility of our riboswitch generation software. Additionally, because of his concerns with phage resistance, we have also decided to include a phage resistance experiment within a wastewater matrix in Phase II of our project, as detailed in our Proposed Implementation Page.",
    },
  ];
  