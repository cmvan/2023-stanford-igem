import React from "react";
import Template from "../Template";
import { useState } from "react";
import TableOfContents from "../TableOfContents";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Engineering = () => {
  const [key, setKey] = useState("overview");
  return (
    <Template title="Engineering">
      <div className="row">
        <div className="toc-index col-sm-2">
          <TableOfContents activeKey={key} />
        </div>
        <div className="tab-container col-lg">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="overview" title="Phage Engineering">
              <section id="overview">
                <h2 className="content-section" id="engineering-MH-1">
                  Overview
                </h2>
                <p>
                  The ability to make synthetic bacteriophages without
                  restriction enzymes allows for simple engineering without the
                  hassle or cloning limitations encountered when building
                  “domesticated” bacteriophage genomes. The ability to build a
                  bacteriophage genome without these limitations is important
                  for custom bacteriophage engineering because control systems
                  of the bacteriophage often reside in promoter elements that
                  cannot be by using alternative codons as with protein-coding
                  genes. Similarly, synthetic switches are often coded in the
                  phage promoters or ribosome binding sites, which cannot be
                  modified without altering their function.
                </p>
                <p>
                  As a proof of principle that we can seamlessly assemble a
                  custom phage genome, we genetically engineered a T7
                  bacteriophage without SapI sites to distinguish it from the WT
                  phage and assembled it without the use of restriction enzymes.
                  We next engineered and built a modified T7 bacteriophage
                  containing a “genetic landing pad” in front of the essential
                  T7 gene, “gene 2.5”. This gene encodes a single-stranded DNA
                  binding protein that interacts with T7 gene 5 (DNA polymerase)
                  and gene 4 (helicase and primase) proteins, which are crucial
                  for T7 DNA synthesis <sup>1</sup>. Therefore, regulating this
                  pathway enables control of phage DNA replication and lytic
                  activity. In other words, a Toehold switch or Riboswitch
                  controlling the translation of gene 2.5 allows control of the
                  essential phage functions by an arbitrary target RNA. This
                  paves the way to engineering phages that are switchable
                  depending on the cell type it infects, giving it further
                  specificity, which could be employed to control
                  antibiotic-resistant bacteria, leaving non-resistant, and
                  potentially healthy bacteria intact.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/bacteriadifference-1.gif"
                    alt="RNA switch selecting for antibiotic resistant strain"
                  ></img>
                  <p class="caption">
                    RNA switch selecting for antibiotic resistant strain
                  </p>
                </div>
                <h2 className="content-section" id="engineering-MH-2">
                  T7 Genome Engineering Design
                </h2>
                <h3 className="content-section-sh" id="engineering-SH-1">
                  Genome Design
                </h3>
                <p>
                  To test our synthetic RNA switch designs in vivo, we first
                  developed a T7 bacteriophage genome to act as a platform for
                  testing a library of RNA switches. We sought to engineer a
                  genome with a landing pad, or cloning site, around the region
                  between T7 gene 2.5 open reading frame and its respective
                  promoter, where we insert our switches. Initially, we planned
                  to use SapI restriction sites to flank the toehold insertion
                  region from both sides, harnessing the ability of Type IIS
                  restriction enzymes to “cut” with a scarless modification.
                  However, the native T7 genome already contains SapI sites,
                  which would need to be removed to use SapI in the landing pad.
                  Thus, we domesticated the WT T7 genome to ensure that only the
                  toehold insertion region is being cut out from the genome
                  during digestion.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-12-35-06-am.png"
                    alt="mRNA Switches are inserted between flanking Type IIS restriction sites in the T7 bacteriophage genome"
                  ></img>
                  <p class="caption">
                    Figure 1: Insertion of mRNA Switches between flanking Type
                    IIS restriction sites in the T7 bacteriophage genome
                  </p>
                </div>
                <h3 className="content-section-sh" id="engineering-SH-2">
                  Building approach
                </h3>
                <p>
                  Using PCR, we amplified several fragments of the genome, while
                  mutating the three SapI sites in the WT T7 genome, dividing
                  the genome into 7 fragments (see below). Hot-start KOD Xtreme
                  DNA polymerase, which gives high yields and consistent results
                  with difficult templates was used to amplify the genome
                  fragments. Due to the native T7 replication mechanism, the
                  ends of the genome consist of 160 bp of repeating sequences,
                  causing some primer binding at multiple locations in the
                  genome. We ensured the purity and accuracy of the T7 fragments
                  with gel purification, quantification by Nanodrop, and long
                  read sequencing (Plasmidsaurus).
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-08-11-at-12-26-38-am-3.jpg"
                    alt="Length of extracted T7 Bacteriophage fragments verified through gel electrophoresis 1"
                  ></img>
                </div>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-08-10-at-11-50-10-pm-4.jpg"
                    alt="Length of extracted T7 Bacteriophage fragments verified through gel electrophoresis 2"
                  ></img>
                  <p class="caption">
                    Figure 2: Length of extracted T7 Bacteriophage fragments
                    verified through gel electrophoresis
                  </p>
                </div>
                <p>
                  There are several established methods for engineering phage
                  genomes without genome domestication, such as yeast cloning
                  <sup>2</sup> and λ Red recombineering <sup>3</sup>, these all
                  require specialized cells and regents to work with them,
                  making them less efficient for our purposes. While the number
                  of fragments and size of the fragments pushed the limits of
                  Gibson Assembly, the speed of the cloning allows flexibility
                  to easily assemble a subset of fragments prior to assembling
                  the final genome. Thus, we sought to use Gibson Assembly as
                  our main approach to assemble the genome.{" "}
                </p>

                <h2 className="content-section" id="engineering-MH-3">
                  Subcloning of T7 Genome in E. coli
                </h2>
                <h4>Design</h4>
                <p>
                  Subcloning sections of the phage genome offers a simple
                  strategy for facilitating targeted genetic manipulations,
                  amplifying certain phage genome segments, and enhancing
                  efficiency of downstream experiments. However, numerous T7
                  genes are toxic to an E. coli host <sup>4</sup>, so it is only
                  possible to subclone certain parts of the phage genome in E.
                  coli.
                </p>
                <h4>Build</h4>
                <p>
                  To address the issue of gene toxicity, we selectively cloned
                  specific non-toxic cassettes of the T7 genome into an E. coli
                  destination vector. T7 bacteriophages possess several T7
                  promoters at both ends of the T7 genome that exploit bacterial
                  transcription mechanisms to facilitate phage replication
                  within an E. coli host. The “early promoter” at the start of
                  the T7 genome transcribes essential enzymes for the phage’s
                  early infection cycle. Conversely, the “late promoter” at the
                  other end of the genome transcribes the genes that enable
                  structural protein assembly of new phage particles during the
                  phage’s late infection cycle <sup>5</sup>. Thus, by subcloning
                  fragments with toxic late promoters separate from the early
                  genes, we can avoid expression on the toxic genes during
                  cloning.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  Of the T7 genome fragments that were PCR amplified from the
                  genome, these T7 promoters and gene 1.0, which encodes for the
                  T7 RNA polymerase, are located in Fragments 1 and 6 (Figure
                  3). We hypothesized that removing these two fragments from our
                  phage genome would enable the clconing of cassettes with toxic
                  genes that the E.coli host would not transcribe. Specifically,
                  we Gibson Assembled both Fragments Insert, 2, and 3 and
                  Fragments 4 and 5 into a plasmid backbone, obtained from Dr.
                  Phillip Kyriakakis (pSBo1) <sup>6</sup>. We then transformed
                  the Gibson assembly product directly into DH10B, plating them
                  with antibiotic selection and mini-prepped/seqeunce screened
                  the resulting colonies.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-1-06-07-am.png"
                    alt="Subcloning backbones were designed for easy replication of T7 bacteriophage genome fragments"
                  ></img>
                  <p class="caption">
                    Figure 3: Subcloning backbones were designed for easy
                    replication of T7 bacteriophage genome fragments
                  </p>
                </div>
                <h4>Learn</h4>
                <p>
                  Contrary to our expectations, the sequencing results for the
                  plasmids that we extracted from the colonies that grew
                  indicated that the vector backbone had mutated and
                  self-annealed, rather than containing the T7 genome cassettes
                  Therefore, the sequencing results indicate that our approach
                  likely did not prevent the toxicity of certain T7 genes from
                  affecting its bacterial host.
                </p>
                <h2 className="content-section" id="engineering-MH-4">
                  Linear Assembly of the T7 Genome
                </h2>
                <h3 className="content-section-sh" id="engineering-SH-3">
                  DBTL Cycle 1
                </h3>
                <h4>Design</h4>
                <p>
                  To simplify cloning modified phage genomes, we decided to use
                  Gibson Assembly to assemble the entirety of the T7 phage
                  genome from PCR fragments. A previous study, Pryor et al.{" "}
                  <sup>4</sup>, a Golden Gate Assembly approach to construct the
                  genome. However, we chose Gibson assembly over Golden Gate for
                  its seamless and scarless assembly, that does not need a Type
                  IIS restriction enzyme to generate the “overhangs” required
                  with Golden Gate Assembly. With this design we could still use
                  the TypeIIs restriction sites in our genetic landing pad to
                  test our gene switches.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-3-19-20-pm.png"
                    alt="Workflow of assembling individual T7 bacteriophage fragments with Gibson Assembly"
                  ></img>
                  <p class="caption">
                    Figure 4: Workflow of assembling individual T7 bacteriophage
                    fragments with Gibson Assembly
                  </p>
                </div>
                <h4>Build and Test</h4>
                <p>
                  Initially, we Gibson assembled 2 of the 7 fragments at a time
                  and attempted to gel-purify the assembled products. We
                  confirmed successful assembly with gel electrophoresis.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-08-10-at-11-10-21-pm-4.jpg"
                    alt="Length of Gibson assembled T7 Bacteriophage fragments verified through gel electrophoresis 1"
                  ></img>
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-08-10-at-11-27-36-pm-4.jpg"
                    alt="Length of Gibson assembled T7 Bacteriophage fragments verified through gel electrophoresis 2"
                  ></img>
                  <p class="caption">
                    Figure 5: Length of Gibson assembled T7 Bacteriophage
                    fragments verified through gel electrophoresis
                  </p>
                </div>
                <h4>Learn</h4>
                <p>
                  However, because of low product yields, we PCR amplified our
                  Gibson Assembly product. Unfortunately, for most of our
                  attempted fragment assemblies, nonspecific primer binding to
                  the large assembly product resulted in the amplification of
                  shorter (2–3 kb) fragments. We were left with low yields of
                  our actual Gibson assembly product.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-08-10-at-11-38-08-pm-4.jpg"
                    alt="Poor yield of assembled T7 bacteriophage fragments shown through gel electrophoresis"
                  ></img>
                  <p class="caption">
                    Figure 6: Poor yield of assembled T7 bacteriophage fragments
                    shown through gel electrophoresis
                  </p>
                </div>
                <h3 className="content-section-sh" id="engineering-SH-4">
                  DBTL Cycle 2
                </h3>
                <h4>Design</h4>
                <p>
                  We reasoned that if we could assemble all the fragments in a
                  single reaction, our yields would further decrease, but if
                  even a small amount of the correctly assembled genome was
                  present, then it would replicate in the E coli when the Gibson
                  Assembly reaction was transformed into the cells. Thus, using
                  the same primer design and starting fragments from our last
                  cycle, we attempted to assemble the full length genome in a
                  single reaction.
                </p>
                <h4>Build</h4>
                <p>
                  To Gibson Assemble all 7 fragments of the T7 genome
                  concurrently, we gel-purified PCR products of each fragment,
                  as shown in Figure 1. Then, we electroporated the product into
                  DH10B competent cells, an E. coli strain with an endonuclease
                  I deficiency <sup>5</sup>, which provides phage genome end
                  protection.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-5-12-00-pm.png"
                    alt="Illustration of complete T7 bacteriophage genome assembly through Gibson Assembly. Homologous overlaps on each fragment allow for reliable assembly"
                  ></img>
                  <p class="caption">
                    Figure 7: Illustration of complete T7 bacteriophage genome
                    assembly through Gibson Assembly. Homologous overlaps on
                    each fragment allow for reliable assembly
                  </p>
                </div>
                <h4>Test</h4>
                <p>
                  After assembly we performed a plaque assay by plating the
                  transformed DH10B in soft agar. Plaque formation indicated
                  successful assembly products, as partially assembled genomes
                  would not yield plaques. We then grew the phage and extracted
                  the phage genomic DNA, and sequenced it, confirming the
                  assembly of the modified genome using long-read sequencing
                  (Plasmidsaurus). This experiment was repeated eight times and
                  consistently successful plaque formation (Figure #8).{" "}
                </p>
                <h4>Learn</h4>
                <p>
                  At least with the fragments we chose, it was possible to
                  assemble the entire T7 phage genome in a single step using
                  Gibson assembly. Since it is possible to PCR larger fragments,
                  it may be possible to use fewer fragments to increase
                  efficiency for when there are challenges assembling other
                  constructs. Thus Gibson Assembly provides a simple, yet
                  effective method to assemble modified phage genome fragments
                  into a complete functional genome.
                </p>
                <div className="full-photos">
                  <img
                    className="med-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-6-06-37-pm.png"
                    alt="Complete T7 Bacteriophage assembly successfully lysed E. Coli in plaque assay"
                  ></img>
                  <p class="caption">
                    Figure 8: Complete T7 Bacteriophage assembly successfully
                    lysed E. Coli in plaque assay
                  </p>
                </div>
                <h2 className="content-section-sh" id="engineering-MH-5">
                  Circular Assembly and Junction Verification
                </h2>
                <h4>Design</h4>
                <p>
                  Since the Gibson Assembly is usually used designed for
                  circular plasmid assembly, we thought that we could further
                  improve assembly efficiency by assembling the genome as
                  circular DNA. This is because the exonuclease in the Gibson
                  Assembly mix may be degrading the ends of the linear DNA,
                  lowering the amount of full length genome in the final
                  product. We designed primers with homology arms between
                  fragments 1 and 6, creating an overlapping junction, which
                  would make a circular product upon assembly.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  We used Gibson assembly to assemble the 7 fragments of the T7
                  genome, and tested for assembly of each junction using PCR.
                  For this, we designed primers to amplify a 300–500 bp region
                  at the junction of each fragment in the assembly. With these
                  primers, we ran a ~1 hour PCR reaction using the Gibson
                  assembly product as the template DNA and confirmed the
                  presence of the specific junction via gel electrophoresis as
                  seen below. This approach enabled us to quickly confirm
                  assembly success prior to performing a plaque assay, avoiding
                  an overnight wait and allowing users to know which fragments
                  are not assembling correctly.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/image-8-18-23-at-10-11-am-2.jpg"
                    alt="Verification of fragment assembly shown through junction primer PCR and gel electrophoresis"
                  ></img>
                  <p class="caption">
                    Figure 9: Verification of fragment assembly shown through
                    junction primer PCR and gel electrophoresis
                  </p>
                </div>
                <h4>Test</h4>
                <p>
                  After confirmation of successful circularization and assembly
                  of the modified WT T7 genome, we isolated the fully assembled
                  product by transforming it and performing a plaque assay.
                  However, the plaque assay yielded lower plaque formation than
                  that of the linear assembly, possibly because of the phage’s
                  linear replication system <sup>8</sup>.{" "}
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/fig10.png"
                    alt="Successful circular assembly of T7 bacteriophage shown through lysing of E. Coli on a plaque assay"
                  ></img>
                  <p class="caption">
                    Figure 10: Successful circular assembly of T7 bacteriophage
                    shown through lysing of E. Coli on a plaque assay
                  </p>
                </div>
                <h2 className="content-section" id="engineering-MH-6">
                  Engineering the Phage Genome for "Inserts"
                </h2>
                <h3 className="content-section=sh" id="engineering-SH-5">
                  DBTL Cycle 1
                </h3>
                <h4>Design</h4>
                <p>
                  After establishing a reliable system for cloning and
                  assembling a domesticated WT T7 genome without SapI, we
                  focused on designing “inserts” that would take the place of
                  our “toehold region” fragment, known as Fragment “T,” in our
                  genome. We aimed to control the lytic activity of the phage by
                  regulating the expression of gene 2.5, which is essential for
                  T7 DNA replication <sup>1</sup>. To achieve this, we needed to
                  insert our switch in the region between the T7 promoter and
                  the open reading frame of gene 2.5, effectively allowing the
                  switch to function as a switchable ribosome binding site. The
                  “insert” was designed to have flanking Type IIS restriction
                  sites to streamline switch testing in the T7 phage genome.
                </p>
                <h4>Build</h4>
                <p>
                  Our initial insert design consisted of the WT “toehold region”
                  or Fragment “T” with flanking SapI sites. Using the
                  established T7 genome assembly and cloning method above, we
                  linearly assembled the genome with the appropriate flanking
                  SapI sites around the switch insertion region, as confirmed by
                  the presence of their junctions (see Circular Assembly and
                  Junction Verification).
                </p>
                <h4>Test</h4>
                <p>
                  However, when we ran a plaque assay with the Gibson assembly
                  reaction, very few plaques formed compared to our previous
                  attempt with the domesticated WT genome. Sequencing indicated
                  that all plaques contained phage that had mutated one of the
                  SapI sites.
                </p>
                <h4>Learn</h4>
                <p>
                  Upon closer examination of the insert, the second SapI site
                  unintentionally introduced an out-of-frame start codon.
                  Additionally, the two flanking SapI sites formed a hairpin
                  structure. One of these or both factors likely hindered
                  transcription of gene 2.5 to varying degrees, which explains
                  why our SapI site-flanked genome only developed into plauqes
                  when the second SapI site is mutated out. However, these
                  results did confirm that gene 2.5 is necessary for the
                  formation of viable phages. By extension, if our RNA switch
                  could effectively inhibit the transcription of gene 2.5 with
                  limited leakiness without the trigger gene, we could prevent
                  the formation of viable phage when the target gene is absent.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/fig11.png"
                    alt="T7 bacteriophage with Toehold Insert appears to successfully lyse E. Coli in a plaque assay"
                  ></img>
                  <p class="caption">
                    Figure 11: T7 bacteriophage with Toehold Insert appears to
                    only lyse E. Coli in a plaque assay when second SapI site is
                    mutated, resulting in low plaque formation.
                  </p>
                </div>
                <h3 className="content-section=sh" id="engineering-SH-6">
                  DBTL Cycle 2
                </h3>
                <h4>Design</h4>
                <p>
                  Recognizing the limitations of our initial insert design, we
                  designed a second insert with a different restriction site in
                  place of the second SapI site in the original design. However,
                  to avoid repeating the mutagenesis process, we opted to use
                  another restriction enzyme that is not found in the native T7
                  genome and whose overhangs following the digest would mimic
                  that of the WT genome, enabling scarless editing of the T7
                  genome. EcoRI fits this criterion perfectly.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-5-29-00-pm.png"
                    alt="Sequence of the redesigned Toehold Insert for modular cloning"
                  ></img>
                  <p class="caption">
                    Figure 12: Sequence of the redesigned Toehold Insert for
                    modular cloning
                  </p>
                </div>
                <h4>Build</h4>
                <p>
                  With this new SapI/EcoRI insert, we assembled the modified T7
                  genome as confirmed by the presence of their junctions (see
                  Circular Assembly and Junction Verification). The use of the
                  newly designed insert ensured the removal of the out-of-frame
                  start codon and eliminated the formation of the hairpin
                  observed in the original insert.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-5-27-14-pm.png"
                    alt="Complete T7 bacteriophage genome shown with the modified Sap1 + EcoRI insert"
                  ></img>
                  <p class="caption">
                    Figure 13: Complete T7 bacteriophage genome shown with the
                    modified Sap1 + EcoRI insert
                  </p>
                </div>
                <h4>Test</h4>
                <p>
                  We then ran a plaque assay on the modified T7 genome and
                  extracted the phage genomic DNA. Sequencing confirmed that the
                  modified genome was accurately assembled and contained the
                  flanking SapI and EcoRI sites that we inserted.{" "}
                </p>
                <h4>Learn</h4>
                <p>
                  Ultimately, we effectively established a platform that
                  streamlined insertion and in vivo testing of our switches in
                  the phage genome.
                </p>
                <h2 className="content-section" id="engineering-MH-7">
                  In Vivo Switch Testing in Phages
                </h2>
                <h4>Design</h4>
                <p>
                  Having established a phage genome suitable for streamlined in
                  vivo testing of our switches, we aimed to insert positive
                  control toehold switches, or “positive controls,” into the T7
                  genome to confirm that our system can create phage subhost
                  specificity. Through our IHP efforts, we obtained the two
                  positive controls and their respective triggers from the
                  Pardee lab, who have published their sequences and baseline
                  on/off ratios in literature <sup>9</sup>.
                </p>
                <h4>Build</h4>
                <p>
                  We PCR amplified the switches out of our plasmid vector before
                  gel purifying the fragments to confirm their size and purity.
                  We then digested the EcoRI/SapI modified T7 genome with
                  respective restriction enzymes and “cleaned up” the reaction
                  with a PCR purification. Then, we Gibson Assembled the
                  positive controls into the T7 genome, replacing the designed
                  insert. This resulted in a modified T7 genome with a positive
                  control toehold switch for controlling the transcription of
                  essential gene 2.5 unless in the presence of the trigger
                  sequence.
                </p>
                <h4>Test</h4>
                <p>
                  To test the on/off ratios of our positive controls in the T7
                  genome, we prepared both normal electrocompetent DH10B and
                  electrocompetent DH10B with the trigger plasmid for our plaque
                  assays. We transformed DH10B with the two trigger plasmids,
                  cultured, and made them electrocompetent once again to
                  transform the phage genomes into the cells containing the
                  triggers. We ran a plaque assay of both modified positive
                  controls–T7 genome hybrid with and without the trigger plasmid
                  to observe the sub-host specificity of our switches in the
                  phage genome, as visually determined by plaque formation in
                  each condition, compared to baselines published in literature.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-09-at-6-05-43-pm.png"
                    alt="Plaque assays demonstrating T7 bacteriophage with riboswitch’s lytic activity, with and without trigger mRNA"
                  ></img>
                  <p class="caption">
                    Figure 14: Plaque assays demonstrating T7 bacteriophage with
                    riboswitch’s lytic activity, with and without trigger mRNA
                  </p>
                </div>
                <h4>Learn</h4>
                <p>
                  It is not clear that these switches work in the conditions we
                  tested. It may be that the levels of trigger, temperature, or
                  other factors play a role. However, our pipeline to
                  design-build-test-learn phages containing toehold switches is
                  a quick route for optimizing newer versions.{" "}
                </p>
                <h2 className="content-section" id="engineering-MH-8">
                  References
                </h2>
                <ol className="small-references">
                  <li>
                    Kim YT, Richardson CC. Bacteriophage T7 gene 2.5 protein: an
                    essential protein for DNA replication. Proc Natl Acad Sci U
                    S A. 1993 Nov 1;90(21):10173-7. doi:
                    10.1073/pnas.90.21.10173. PMID: 8234273; PMCID: PMC47736.
                  </li>
                  <li>
                    Hiroki Ando, Sebastien Lemire, Diana P. Pires, Timothy K.
                    Lu, Engineering Modular Viral Scaffolds for Targeted
                    Bacterial Population Editing, Cell Systems, Volume 1, Issue
                    3, 2015, Pages 187-196, ISSN 2405-4712,
                    https://doi.org/10.1016/j.cels.2015.08.013.{" "}
                  </li>
                  <li>
                    Jensen JD, Parks AR, Adhya S, Rattray AJ, Court DL. λ
                    Recombineering Used to Engineer the Genome of Phage T7.
                    Antibiotics (Basel). 2020 Nov 13;9(11):805. doi:
                    10.3390/antibiotics9110805. PMID: 33202746; PMCID:
                    PMC7697293.
                  </li>
                  <li>
                    John M. Pryor, Vladimir Potapov, Katharina Bilotti, Nilisha
                    Pokhrel, and Gregory J. S. Lohman. Rapid 40 kb Genome
                    Construction from 52 Parts through Data-optimized Assembly
                    Design. ACS Synthetic Biology 2022 11 (6), 2036-2042 DOI:
                    10.1021/acssynbio.1c00525
                  </li>
                  <li>
                    R.A. Weisberg, D.M. Hinton, S. Adhya, Transcriptional
                    Regulation in Bacteriophage, Editor(s): Brian W.J. Mahy,
                    Marc H.V. Van Regenmortel, Encyclopedia of Virology (Third
                    Edition), Academic Press, 2008, Pages 174-186, ISBN
                    9780123744104,
                    https://doi.org/10.1016/B978-012374410-4.00747-0.
                    (https://www.sciencedirect.com/science/article/pii/B9780123744104007470)
                  </li>
                  <li>
                    Pollak B, Matute T, Nuñez I, Cerda A, Lopez C, Vargas V, Kan
                    A, Bielinski V, von Dassow P, Dupont CL, Federici F.
                    Universal loop assembly: open, efficient and cross-kingdom
                    DNA fabrication. Synth Biol (Oxf). 2020;5(1):ysaa001. doi:
                    10.1093/synbio/ysaa001. Epub 2020 Feb 5. PMID: 32161816;
                    PMCID: PMC7052795.
                  </li>
                  <li>
                    “NEB® 10-Beta Competent E. Coli (High Efficiency).” New
                    England Biosciences,
                    www.neb.com/en-us/products/c3019-neb-10-beta-competent-e-coli-high-efficiency#Product%20Information.
                    Accessed 10 Oct. 2023.{" "}
                  </li>
                  <li>
                    Christoph Weigel, Harald Seitz, Bacteriophage replication
                    modules, FEMS Microbiology Reviews, Volume 30, Issue 3, May
                    2006, Pages 321–381,
                    https://doi.org/10.1111/j.1574-6976.2006.00015.x
                  </li>
                  <li>
                    Pardee, Keith, et al. “Paper-based synthetic Gene Networks.”
                    Cell, vol. 159, no. 4, 23 Oct. 2014, pp. 940–954,
                    https://doi.org/10.1016/j.cell.2014.10.004.
                  </li>
                </ol>
              </section>
            </Tab>
            <Tab eventKey="rna-switch" title="RNA Switch Design and Testing">
              <section id="rna-switch">
                <h2 className="content-section" id="engineering-MH-9">
                  Toehold Design
                </h2>
                <p>
                  Toehold Switches were designed in-house with the NUPACK
                  nucleic acid sequence design package, Version 4.0. A rough
                  template for our generation script, in the form of a NUPACK
                  Version 3.0 script, was generously provided by Dr. José
                  Barboza-Corona. This script was then converted to NUPACK
                  Version 4.0 syntax to be run in a{" "}
                  <a
                    href="https://github.com/zealousplatypus/iGEM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jupyter Notebook environment
                  </a>
                  .
                </p>
                <p>
                  We designed our code to generate multiple switches from a
                  singular antibiotic resistance gene, which we later
                  synthesized and tested <i>in vitro</i> or <i>in vivo</i>.
                </p>
                <p>
                  First, we specify the conditions for switch generation and
                  name the working variables. Then, we create domains, switches,
                  and complexes that correspond to the various parts of the
                  Toehold Switch. Switch structure and conserved regions were
                  taken from the switches designed by Alexander Green, et al.
                  <sup>1</sup> and defined using dots-parens-plus notation.
                  Conserved regions include Domain G, Domain S, and Domain L.
                  Domain G assists with transcription of the switch and affected
                  gene, Domain S contains the ribosome binding site, and Domain
                  L acts as a linker between the switch and the gene it affects.
                </p>
                <p>
                  With each iteration of our code, we create test tubes
                  containing our trigger–switch complexes and the activated
                  complex and store them within a working variable. These tubes
                  allow NUPACK to consider the activity and optimization of each
                  switch individually. Additionally, we add complexes to the
                  Crosstalk set every loop. The Crosstalk tube forces each
                  generated switch to be distinct. After all individual switch
                  variables are created, the Crosstalk tube is created and all
                  tubes are added to a single variable named “my_tubes”.
                  Increasing the weight of the Crosstalk tube ensures that the
                  switches generated target different regions of the target
                  gene.{" "}
                </p>
                <p>
                  Finally, we impose constraints upon the switches, forcing
                  inclusion of a subsection of the target antibiotic resistance
                  gene in the trigger sequence and preventing long runs of the
                  same nucleotide. To generate switches for different genes,
                  simply change the constraining gene sequence and the number of
                  switches generated to suit your own needs.
                </p>
                <h2 className="content-section" id="engineering-MH-10">
                  Toehold Testing and Engineering Overview
                </h2>
                <p>
                  We went through multiple design-build-test-learn cycles,
                  progressing from inexperienced in vivo testing to far more
                  efficient, parallelized PURE cell-free screens. The following
                  three stages marked significant engineering efforts to develop
                  an optimized, effective, and efficient testing system.{" "}
                </p>
                <ol>
                  <li>
                    <i>In vivo</i> testing
                    <ol>
                      <li>Double plasmid sfGFP + RFP transformation</li>
                      <li>Alex plasmid design</li>
                    </ol>
                  </li>
                  <li>Cell-free 759 system design</li>
                  <ol>
                    <li>Making lysate. Used sfGFP</li>
                    <li>Magnesium optimization</li>
                    <li>LET flanking sequence optimization</li>
                    <li>GamS optimization - experiment was inconclusive</li>
                  </ol>
                  <li>PURE system screening - experiment was successful</li>
                </ol>
                <h2 className="content-section" id="engineering-MH-11">
                  <i>In Vivo</i> Testing
                </h2>
                <h4>Design</h4>
                <p>
                  Our initial goal was to build a reliable, efficient screening
                  system for the large-scale testing of RNA switches. After
                  consulting literature, we noted that toehold switches were
                  tested and shown to work both in vitro in cell-free systems
                  and in vivo in model organisms such as E. coli. While we
                  considered using cell-free systems at first, we opted for an
                  in vivo testing approach for two reasons. First, literature on
                  testing toehold switches in vivo was less established. For our
                  final, in vivo system, we wanted a testing assay that most
                  reliably simulated our final environment in E. coli. Second,
                  given that toehold switches were well-established in
                  literature, we deemed the massive throughput testing offered
                  by cell-free testing was unnecessary for our purposes.{" "}
                </p>
                <p>Our initial design specifications were as follows:</p>
                <ol>
                  <li>Easily quantifiable trigger generation</li>
                  <li>Easily quantifiable toehold output</li>
                  <li>Scalable, modular toehold testing in vivo</li>
                </ol>
                <p>
                  We designed a simple toehold testing system with plasmids 1)
                  <a
                    href="https://benchling.com/zanestanford/f/lib_75gwIJup-gbs/seq_Hlu7jDjz-ampgfp-pk803/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    pK803
                  </a>
                  , a high copy plasmid constitutively expressing sfGFP with an
                  ampicillin resistance marker for our trigger, and 2)
                  BBa_I732097, a high copy plasmid constitutively expressing
                  mRFP with a chloramphenicol resistance marker for our switch.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  Since mRFP is a high-copy plasmid, we would have to change the
                  origin of replication on BBa_I732097 to co-transform them
                  later. We placed our mRFP under the T7 phi 2.5 promoter to
                  better model the phage genome, and use the ribosome binding
                  site (RBS) present in Green et al.’s switches, which we found
                  by analysis of multiple sequence alignments of said switches.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  Initial transformations went smoothly; we had high yields of
                  colonies on both selection plates, and pK803 transformants
                  were clearly green. However, reliable mRFP expression from our
                  BBa_I732097 positive control proved challenging even before we
                  began toehold switch testing. Sequencing of plasmid DNA from
                  the BBa_I732097 plasmid transformants verified the expression
                  of our construct. We narrowed the mRFP expression problem down
                  to two possibilities: 1) our less characterized, wildtype (WT)
                  T7 phi 2.5 promoter was under-recruiting RNA polymerase or 2)
                  the toehold RBS from Green et al. was faulty and unstable
                  outside of a toehold switch.{" "}
                </p>
                <h4>Learn and Adjustment</h4>
                <p>
                  With the benefit of experience, we sought to design a system
                  that debugged the previous testing system’s flaws and also
                  removed some of the unnecessary slowing factors we
                  encountered. We redesigned the plasmids, consulting Dr. Alex
                  Engel’s expertise and support, to design and order the
                  following plasmids for testing our toehold switches in pTwist
                  backbones.
                </p>
                <ol>
                  <li>
                    mScarlet3 with a high copy origin of replication and a KanR
                    selection marker
                  </li>
                  <li>
                    mStayGold with a medium copy origin of replication and an
                    AmpR selection marker
                  </li>
                  <li>
                    mStayGold with a medium copy origin of replication, a LacZ
                    operon, and an AmpR selection marker
                  </li>
                </ol>
                <p>
                  The pTwist mScarlet3 plasmid, specifically the KanR gene, was
                  intended to serve as the trigger sequence that our toehold
                  switches were designed against. The pTwist mStayGold plasmid
                  was intended to accommodate the insertion of our designed
                  toeholds to serve as our “switch” plasmid, such that the
                  mStayGold signal would only be expressed when it is
                  co-transformed with the mScarlet trigger sequence to determine
                  and gauge the in vivo effectiveness of our switches. The
                  pTwist mStayGold plasmid with a LacZ operon was designed to
                  have an inducible switch, that would only express the
                  mStayGold signal when the operon is activated and the switch
                  is in the presence of the trigger plasmid.
                </p>
                <p>
                  However, given the complexities of the experiment and our
                  limited timeline, we began leaning toward the benefits of a
                  cell-free toehold testing system over in vivo toehold testing.
                </p>
                <h2 className="content-section" id="engineering-MH-12">
                  759 Cell-Free System
                </h2>
                <p>
                  Even with our initial reasoning toward in vivo testing, our
                  first engineering cycle led us to conclude that cell-free
                  screening presented was simple, efficient, and elegant. It
                  streamlined toehold ordering, cloning, and testing, avoiding
                  issues such as origin and selection marker compatibility. We
                  obtained results in hours instead of overnight. We avoided the
                  more tedious and inefficient protocols associated with in vivo
                  testing such as electrocompetent cell induction,
                  co-transformation, and quantification of toehold fluorescence
                  in multiple colonies. And we could monitor fluorescence
                  kinetically instead of at arbitrary time points. To address
                  our previous concerns, we would test our best-performing
                  toeholds in vivo after cell-free screening.{" "}
                </p>
                <h3 className="content-section-sh" id="engineering-SH-7">
                  DBTL Cycle 1
                </h3>
                <h4>Design</h4>
                <p>
                  We had three main specifications for our cell-free screening
                  system. First, it must efficiently provide an easily
                  quantifiable output that measures switch efficacy. Second, our
                  system must have T7 transcription machinery, since toehold
                  switches are commonly screened with the T7 promoter and our
                  final switches would be under wildtype T7 phi 2.5 promoter
                  control. For the specification one, we opted to use an E. coli
                  759 lysate for our cell free system (transcription driven by
                  T7RNAP). For initial switch switches, we used the generalized
                  T7 promoter for both trigger DNA and switch DNA. To satisfy
                  specification two, we would use either mRFP or sfGFP under
                  switch control as our readouts.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  We grew a single colony of 759 in an overnight culture, which
                  we then diluted to an OD600 of 0.1 in one liter of media and
                  induced with IPTG at an OD600 of 0.6. The culture was then
                  centrifuged, resuspended in S30 buffer, sonicated, and the
                  resulting supernatant was flash frozen.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  We tested the resulting 759 lysate by optimizing for the
                  lysate’s magnesium salt concentration with the pJL1-sfGFP
                  plasmid. In other words, we tested the lysate with and without
                  DNA (T7 + sfGFP), as well as with varying concentrations of
                  magnesium glutamate (0 nM, 4 nM, 6 nM, 8nM, 10 nM, 12 nM, 16
                  nM, 20 nM). We had the following conditions in a 96
                  well-plate:
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/96-well-plate.jpg"
                    alt="96-Well Plate"
                  ></img>
                  <p class="caption">Conditions to test 759 lysate</p>
                </div>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-10-at-1-03-24-am.png"
                    alt="96-Well Plate Concentrations"
                  ></img>
                  <p class="caption">Concentrations to test 759 lysate</p>
                </div>
                <p>
                  Our lysate worked better than the positive control (a
                  previously known working lysate), with an optimal magnesium
                  concentration of 10 nM
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/screen-shot-2023-10-10-at-1-04-38-am.png"
                    alt="Magnesium Optimization for 759 Lysate Expression"
                  ></img>
                </div>
                <h3 className="content-section-sh" id="engineering-SH-8">
                  DBTL Cycle 2
                </h3>
                <h4>Optimization and Design</h4>
                <p>
                  While our switches worked with plasmid DNA, we wished to
                  increase the efficiency of toehold screening. To do this, we
                  wanted to enable our system to express linear expression
                  templates (LETs). This would bypass unnecessary cloning and
                  allow for significantly higher throughput switch screening.
                  Our new specification was a switch testing system that worked
                  at a similar level to the 759 lysate and that could also
                  express protein from linear DNA. To do this, we planned to use
                  the GamS Nuclease Inhibitor to inhibit the RecBCD exonuclease
                  from degrading LETs in our crude extract.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  A T7 promoter and sfGFP LET was amplified with PCR from the
                  pJL1-sfGFP plasmid. The resulting PCR product was purified and
                  added to the lysate along with GamS Nuclease Inhibitor to
                  prevent RecBCD degradation of the linear product.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  We tested the lysate and LET with varying concentrations of
                  GamS: 0 µM, 0.88 µM, 3.52 µM, 8.8 µM. In the GamS + LET +
                  crude lysate mixes, we observed green fluorescence similar in
                  level to the plasmid pJL1-sfGFP positive control.{" "}
                </p>
                <h3 className="content-section-sh" id="engineering-SH-9">
                  DBTL Cycle 3
                </h3>
                <h4>Improve and Design</h4>
                <p>
                  This was our final iterative design for our switch testing
                  system. After enabling LET expression in our 759 crude lysate,
                  the next step was to minimize the flanking regions of the LET.
                  In our previous tests, our promoter and coding region in the
                  LET were flanked on each side by ~250 bp. While this provided
                  additional protection from exonuclease activity, such large
                  flanking regions had two large disadvantages. First, while it
                  was convenient to introduce such large flanking regions with a
                  PCR amplicon, we could not order our switches with large
                  protective flanking sequences. Our testing system needed to
                  account for this. Second, large flanking regions significantly
                  increased the volume necessary to add to the cell-free
                  extract, and therefore the amount of extract consumed per
                  reaction. Such a large flanking region was unsuitable for
                  higher-throughput switch screens. Our final design
                  specifications were straightforward. They were identical to
                  the previous iteration’s testing system (GamS + 759 lysate +
                  LET), but stipulating little to no flanking basepairs around
                  the promoter and protein coding region.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  A T7 promoter + sfGFP LET with no flanking protection was PCR
                  amplified and gel purified. The upper limit concentration of
                  GamS from the previous experiment (8.8 µM) was used along with
                  a generalized T7 promoter + sfGFP LET with no flanking region
                  in the 759 lysate mix.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  The resulting GamS + LET + crude lysate mixes had no
                  significant difference from the negative control (no DNA).
                  This indicated that our lysate was unable to express the LET
                  with the minimal flanking regions we provided. Two possible
                  methods to rectify this would either be to increase the
                  flanking region until there was moderate LET expression or to
                  increase GamS and lysate incubation time before adding the
                  DNA.{" "}
                </p>
                <h3 className="content-section-sh" id="engineering-SH-10">
                  DBTL Cycle 4
                </h3>
                <h4>Final Design Optimization</h4>
                <p>
                  With time running out and all our switches having arrived, we
                  were faced with a difficult decision. Should we continue
                  focusing on optimizing the 759 lysate, or should we divide
                  energy between optimizing the lysate and attempt testing
                  another cell-free screening system? We chose the latter to
                  cover our bases. As before, our design specifications were:
                </p>
                <ol>
                  <li>Efficiently quantifiable expression/output</li>
                  <li>Posses T7 transcription machinery</li>
                  <li>Able to express LETs with minimal flanking regions</li>
                </ol>
                <p>
                  In addition to further optimizing the 759 lysate, we chose to
                  additionally test the PURExpress® In Vitro Protein Synthesis
                  Kit. This was a reconstituted cell free transcription
                  translation system, meaning there would be no exonuclease
                  activity or competing cellular mechanisms.{" "}
                </p>
                <h4>Build</h4>
                <p>
                  The mRFP gene was amplified from BBa_I732097 with the 5’
                  primer containing an overhang with the generalized T7 promoter
                  and a strong RBS beforehand. We did the same with the T7 phi
                  2.5 promoter, as this would be the toeholds true promoter in
                  the phage genome. The amplicon had no flanking regions before
                  the T7 promoter or after the T7 terminator. The amplicon was
                  then gel purified for testing.{" "}
                </p>
                <h4>Test</h4>
                <p>
                  The T7 + mRFP LET was added to the PURExpress system alongside
                  a negative control (RNase free water), incubated at 30 degrees
                  inside a plate reader, and the fluorescence was measured
                  kinetically over 6 hours. The experiment seems successful. The
                  T7 phi 2.5 promoter had a strong signal but was weaker than
                  the generalized T7 promoter, as expected, and the positive
                  control had noticeable higher fluorescence than the negative
                  control.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/thumbnail-img-7988.png"
                    alt="Fluorescent Intensity Graphs"
                  ></img>
                  <p class="caption">Fluorescent Intensity Graphs</p>
                </div>
                <h3 className="content-section-sh" id="engineering-SH-11">
                  DBTL Cycle 5
                </h3>
                <h4>Optimization, Design, Build</h4>
                <p>
                  Using the generated data above to further optimize our code,
                  we generated a second generation of toehold switches against
                  the AmpR gene. We elected to use sfGFP as a reporter to enable
                  production of a stronger signal. The sfGFP gene was amplified
                  from an sfGFP plasmid retrieved from Dr. Phillip Kyriakakis,
                  labeled pPK803, with a 5’ primer containing an overhang with a
                  generalized T7 promoter and a strong RBS, retrieved from Dr.
                  Nils Averesch. The switch also contains the T7 phi 2.5
                  promoter, as this would be the toeholds true promoter in the
                  phage genome. The amplicon had no flanking regions before the
                  T7 promoter or after the T7 terminator. The amplicon was then
                  gel purified for testing.{" "}
                </p>
                <p>
                  The preceding and anterior homology arms were designed to
                  correspond with the biobrick prefix of BBa_I732097, an RFP
                  ChlorR plasmid for more streamlined insertion of the toehold
                  into the plasmid backbone for in vivo toehold testing. These
                  homology arms allowed us to test the switches in a cell-free
                  environment using the fluorescent gene as a reporter to
                  quantitatively measure the expression level with and without
                  the trigger sequence.
                </p>
                <h4>Test</h4>
                <p>
                  The T7 + sfGFP LET was added to the PURExpress system
                  alongside a negative control (RNase free water), incubated at
                  37 degrees inside a plate reader, and the fluorescence was
                  measured kinetically over 6 hours. Each toehold was tested in
                  conditions with and without the presence of the trigger
                  sequence to determine the on/off ratios of the switches’
                  activations. The experiment seems successful. The switches, in
                  general, demonstrated higher activation in the presence of the
                  trigger sequence, indicating their success in selectively
                  regulating sfGFP expression.
                </p>
                <div className="full-photos">
                  <img
                    className="large-photo"
                    src="https://static.igem.wiki/teams/4951/wiki/thumbnail-png-image-2.jpg"
                    alt="Fluorescent Intensity Over Time"
                  ></img>
                  <p class="caption">Fluorescent Intensity Over Time</p>
                </div>
                <h2 className="content-section" id="engineering-MH-13">
                  Riboswitch Design
                </h2>
                <p>
                  Through our IHP outreach efforts, we connected with Christian
                  Choe, a graduate fellow in the Rhiju Das and Possu Huang Labs
                  at Stanford University, who is currently working on the
                  computational development of novel RNA switches known as
                  riboswitches. We designed a set of novel RNA switches
                  utilizing Christian’s methodology and software targeting the
                  KanR gene, similar to the second generation toeholds.
                </p>
                <p>
                  Similar to toeholds, they assume the OFF position when the
                  gene is converted to mRNA and assume the ON position upon
                  binding to a target mRNA sequence. However, while toeholds are
                  generated in a fixed structure, with the same number of bases
                  and the same pairing structure in all switches, Riboswitches
                  can assume many different configurations, such as AND or OR,
                  to best maximize ON/OFF ratios in the presence of target mRNA.
                  This feature provides greater flexibility in targeting genes
                  of interest.
                </p>
                <h2 className="content-section" id="engineering-MH-14">
                  References
                </h2>
                <ol className="small-references">
                  <li>
                    Green, A. A., Silver, P. A., Collins, J. J., & Yin, P.
                    (2014). Toehold switches: de-novo-designed regulators of
                    gene expression. Cell, 159(4), 925–939.
                    https://doi.org/10.1016/j.cell.2014.10.002
                  </li>
                </ol>
              </section>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Template>
  );
};

export default Engineering;
