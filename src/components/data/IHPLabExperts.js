export const IHPLabExperts = [
    {
      id: 0,
      title: "Peivand Mousavi: Developing a Cell-Free Toehold Testing System",
      role: "a postdoctoral fellow in the Jewett Lab at Stanford University", 
      img: {
        src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-peivand-m.jpeg",
        alt: "Picture of Peivand Mousavi",
      },
      description: "Peivand Mousavi, a postdoctoral fellow in the Jewett Lab at Stanford University, is an expert in cell-free synthetic biology. We contacted her for advice and assistance in developing our toehold cell-free testing system.",
      contribution: "Dr. Mousavi assisted us in developing our cell-free toehold testing system. Her hands-on mentorship guided us in creating an E. coli 759 lysate for our cell free system  (transcription driven by T7RNAP), optimizing magnesium levels for the 759 lysate, and developing a toehold cell-free testing protocol. Additionally, she provided the positive control toeholds, acquired from her previous involvement in the Pardee Lab at the University of Toronto.",
      adjustments: "Dr. Mousavi’s expertise was pivotal in developing the cell-free toehold testing system used to generate our in vitro toehold data. Additionally, we utilized her positive control switches to insert into the T7 phage genome for in vivo testing of the switches. Her guidance was invaluable in analyzing and interpreting the cell-free testing data.",
    },
    {
        id: 1,
        title: "Alex Engel: Plasmid Design & Challenges in Phage Genome Assembly",
        role: "lecturer in the Bioengineering Department at Stanford University", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-alex-e.jpeg",
          alt: "Picture of Dr. Alex Engel",
        },
        description: "Dr. Alex Christopher Engel is a Lecturer in the Bioengineering Department at Stanford University. We contacted him for guidance in designing an in vivo toehold testing system.",
        contribution: "Dr. Engel’s guidance was pivotal in designing and ordering plasmids for in vivo switch testing. He offered insights on optimal copy strength for our origin of replication, antibiotic resistance gene selection, and reporter fluorescent genes. He identified two strongly expressed fluorescent proteins that were both suitable for our purposes and easily differentiated using a plate reader. Dr. Engel also addressed challenges in phage genome assembly, particularly the nonspecific binding observed during PCR amplification of our Gibson Assembly product. His insightful advice enabled us to refine our techniques.",
        adjustments: "Dr. Engel’s plasmid expertise profoundly influenced the direction and success of our research. His recommendations were fundamental for the efficiency and accuracy of our in vivo switch testing. Furthermore, we revised our laboratory protocols based on his advice during our phage genome assembly experiments. We adjusted our PCR amplification techniques to minimize nonspecific bindings, which ultimately both enhanced our research progress and experimental precision. His guidance instilled a new level of precision and confidence in our methodologies, transforming potential roadblocks into opportunities for learning and improvement.",
    },
    {
        id: 2,
        title: "Christian Choe: Riboswitch Software Design",
        role: "graduate fellow in the Rhiju Das and Possu Huang Labs", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-christian-c.jpeg",
          alt: "Picture of Christian Choe",
        },
        description: "Christian Choe is a graduate fellow in the Rhiju Das and Possu Huang Labs at Stanford University. We contacted him regarding his work in the computational development of novel RNA switches known as riboswitches.",
        contribution: "Christian explained his current work developing and designing RNA switches with AND/OR configurations to increase switch activation sensitivity and the in silico testing of libraries of these switches. He gave us access to his code and guided us throughout the process of using it to generate our own code for our unique research purposes.",
        adjustments: "We utilized his code to generate our own “riboswitches” to target the AmpR and KanR trigger sequence. We tested the library of generated riboswitches in silico, as he demonstrated, and proceeded to order and test the most promising switches in our cell-free toehold testing system.",
    },
    {
        id: 3,
        title: "Dr. Grant Rybnicky: Phage Rebooting in Cell-Free Environments",
        role: "Scientific Director at Lytos Technologies", 
        img: {
          src: "https://static.igem.wiki/teams/4951/wiki/ihp-headshots/34-ihp-headshot-grant-r.jpeg",
          alt: "Picture of Dr. Grant Rybnicky",
        },
        description: "Dr. Grant Rybnicky, PhD is a Scientific Director at Lytos Technologies. We contacted him to discuss how to reboot phages in a cell-free environment.",
        contribution: "Dr. Rybnicky described aspects of cell-free testing that would be critical for rebooting our phages. When comparing Kai6 and GamS methods of end protection for our phage DNA, Dr. Rybnicky suggested using the latter, as that nuclease inhibitor works better. We also weighed the pros and cons of different methods of phage genome assembly, such as high fidelity PCR (sewing) and recombineering. Ultimately, he encouraged us to choose the protocol with the fewest experimental steps and with the highest probability of success. Other topics of discussion was the use of electroporation to transform our E.coli, the ideal amount of PEG8000 for T7 particle assembly.",
        adjustments: "Dr. Rybnicky was instrumental in helping us design protocols for our phage rebooting and assembly experiments. Particularly, GamS removed our concerns with preserving the genome during experimentation. Afterward, our iGEM team met with our mentor, Dr. Phil Kyriakakis, for further guidance and to receive a second opinion on our findings.",
    },
  ];
  