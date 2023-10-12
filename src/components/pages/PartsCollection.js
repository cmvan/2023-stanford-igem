import React from "react";
import Template from "../Template";
import { useState } from "react";
import TableOfContents from "../TableOfContents";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const PartsCollection = () => {
  const [key, setKey] = useState("overview");
  return (
    <Template title="Parts Collection">
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
            <Tab eventKey="overview" title="Parts">
              <section id="overview">
                <h2 className="content-section" id="parts-1">
                  Part Collection 1: RNA Switches
                </h2>
                <h3 className="content-section-sh" id="parts-1-1">
                  1A: Toehold KanR
                </h3>
                <p>
                  The toehold switch is an RNA switch designed against the KanR
                  gene using NuPack software, effectively functioning as an RBS
                  and working to control the transcription of the gene it
                  follows. The toehold was designed to control essential gene
                  2.5 in T7 phages and is preceded by homology arms that
                  correspond to the T7 phage genome, specifically the region in
                  front of gene 2.5. The part also contains a T7 promoter, the
                  designed toehold switch, and followed by a homology arm that
                  corresponds to the sfGFP gene for in vitro cell-free testing
                  purposes. This part was generated with NuPack software against
                  the KanR gene derived from Twist Biosciences. The exposed
                  regions on the KanR folding structure make it an ideal
                  antibiotic-resistance gene to target for the development of
                  our toehold switches. The preceding homology arms were
                  designed to correspond with the region in which we intended to
                  insert the toehold (between the T7 promoter and the open
                  reading frame of gene 2.5). The anterior homology arms were
                  designed to correspond with the sfGFP gene to allow us to test
                  the switches in a cell-free environment using the fluorescent
                  gene as a reporter to quantitatively measure the expression
                  level with and without the trigger sequence.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951000"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951000
                        </a>
                      </td>
                      <td>Toehold_KanR_1</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951001"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951001
                        </a>
                      </td>
                      <td>Toehold_KanR_2</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951002"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951002
                        </a>
                      </td>
                      <td>Toehold_KanR_3</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951003"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951003
                        </a>
                      </td>
                      <td>Toehold_KanR_4</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951004"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951004
                        </a>
                      </td>
                      <td>Toehold_KanR_5</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951005"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951005
                        </a>
                      </td>
                      <td>Toehold_KanR_6</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951006"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951006
                        </a>
                      </td>
                      <td>Toehold_KanR_7</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951007"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951007
                        </a>
                      </td>
                      <td>Toehold_KanR_8</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951008"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951008
                        </a>
                      </td>
                      <td>Toehold_KanR_9</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951009"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951009
                        </a>
                      </td>
                      <td>Toehold_KanR_10</td>
                      <td>Ribosome Binding Site</td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>167</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="content-section-sh" id="parts-1-2">
                  1B: Toehold AmpR
                </h3>
                <p>
                  The toehold switch is an RNA switch designed against the AmpR
                  gene using NuPack software, effectively functioning as an RBS
                  and working to control the transcription of the gene it
                  follows. The toehold was designed to control essential gene
                  2.5 in T7 phages and is preceded and followed by homology arms
                  that correspond to BBa_I732097 (RFP plasmid), specifically the
                  end of the biobrick prefix. The part also contains a T7
                  promoter and the designed toehold switch, This part was
                  generated with NuPack software against the AmpR gene derived
                  from an sfGFP plasmid retrieved from Dr. Phillip Kyriakakis,
                  labeled pPK803. The preceding and anterior homology arms were
                  designed to correspond with the biobrick prefix of
                  BBa_I732097, an RFP ChlorR plasmid for more streamlined
                  insertion of the toehold into the plasmid backbone for in vivo
                  toehold testing. These homology arms allowed us to test the
                  switches in a cell-free environment using the fluorescent gene
                  as a reporter to quantitatively measure the expression level
                  with and without the trigger sequence.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951010"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951010
                        </a>
                      </td>
                      <td>Toehold_AmpR_1</td>
                      <td>Ribosome Binding Site</td>
                      <td>Nicholas Murphy</td>
                      <td>158</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951011"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951011
                        </a>
                      </td>
                      <td>Toehold_AmpR_2</td>
                      <td>Ribosome Binding Site</td>
                      <td>Nicholas Murphy</td>
                      <td>158</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951012"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951012
                        </a>
                      </td>
                      <td>Toehold_AmpR_3</td>
                      <td>Ribosome Binding Site</td>
                      <td>Nicholas Murphy</td>
                      <td>158</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951013"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951013
                        </a>
                      </td>
                      <td>Toehold_AmpR_4</td>
                      <td>Ribosome Binding Site</td>
                      <td>Nicholas Murphy</td>
                      <td>158</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="content-section-sh" id="parts-1-3">
                  1C: Riboswitch KanR
                </h3>
                <p>
                  The riboswitch is a novel RNA riboregulators developed in
                  collaboration with Christian Choe from the Das Lab. Similar to
                  toeholds, they assume the OFF position when the gene is
                  converted to mRNA and assume the ON position upon binding to a
                  target mRNA sequence. However, while Toeholds are generated in
                  a fixed structure, with the same number of bases and the same
                  pairing structure in all switches, Riboswitches can assume
                  many different configurations, such as AND or OR, to best
                  maximize ON/OFF ratios in the presence of target mRNA. This
                  feature provides greater flexibility in targeting genes of
                  interest. This riboswitch is designed against KanR gene to
                  control the transcription of essential gene 2.5 in T7 phages,
                  containing homology arms to the phage genome as well as a T7
                  promoter, the designed toehold switch, and followed by a
                  homology arm that corresponds to the sfGFP gene for in vitro
                  cell-free testing purposes.
                </p>
                <p>
                  This part was generated with novel riboregulator design
                  software designed by Chritian Choe, a graduate student from
                  the Das Lab at Stanford Unversity, against the KanR gene
                  derived from Twist Biosciences. The exposed regions on the
                  KanR folding structure make it an ideal antibiotic-resistance
                  gene to target for the development of our toehold switches.
                </p>
                <p>
                  The preceding homology arms were designed to correspond with
                  the region in which we intended to insert the toehold (between
                  the T7 promoter and the open reading frame of gene 2.5). The
                  anterior homology arms were designed to correspond with the
                  sfGFP gene to allow us to test the switches in a cell-free
                  environment using the fluorescent gene as a reporter to
                  quantitatively measure the expression level with and without
                  the trigger sequence.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951014"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951014
                        </a>
                      </td>
                      <td>Riboswitch_KanR_1</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951015"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951015
                        </a>
                      </td>
                      <td>Riboswitch_KanR_2</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951016"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951016
                        </a>
                      </td>
                      <td>Riboswitch_KanR_3</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951017"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951017
                        </a>
                      </td>
                      <td>Riboswitch_KanR_4</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951018"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951018
                        </a>
                      </td>
                      <td>Riboswitch_KanR_5</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951019"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951019
                        </a>
                      </td>
                      <td>Riboswitch_KanR_6</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951020"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951020
                        </a>
                      </td>
                      <td>Riboswitch_KanR_7</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951021"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951021
                        </a>
                      </td>
                      <td>Riboswitch_KanR_8</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951022"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951022
                        </a>
                      </td>
                      <td>Riboswitch_KanR_9</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951023"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951023
                        </a>
                      </td>
                      <td>Riboswitch_KanR_10</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951024"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951024
                        </a>
                      </td>
                      <td>Riboswitch_KanR_11</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951025"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951025
                        </a>
                      </td>
                      <td>Riboswitch_KanR_12</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951026"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951026
                        </a>
                      </td>
                      <td>Riboswitch_KanR_13</td>
                      <td>Ribosome Binding Site</td>
                      <td>Akio Shrirali, Christian Choe</td>
                      <td>176</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="content-section" id="parts-2">
                  Part Collection 2: Phage Genome
                </h2>
                <p className="center">
                  As a whole, this collection allows the modification of a T7
                  bacteriophage genome to a modular system that can be modified
                  in front of essential gene 2.5 (the single stranded DNA
                  binding protein). Reassembly of the complete genome also
                  requires NEBuilder. The 2023 Stanford iGEM team used this
                  modular system to introduce mRNA switches in front of gene 2.5
                  to control the lytic activity of the T7 bacteriophage. The
                  original Wild Type T7 genome this set of primers is based on
                  was purchased from Boca Scientific.
                </p>
                <h3 className="content-section-sh" id="parts-2-1">
                  2A: Modified T7 Phage Genome Fragments
                </h3>
                <p>
                  To remove Sap1 sites from the T7 genome and implement a
                  cloning insert, we spliced the T7 genome into seven different
                  pieces. The fragments were then used to reassemble a
                  functional Wild Type T7 genome with no Sap1 sites. The
                  fragments vary widely in size, from 3,000 base pairs to 10,000
                  pairs, due to variance in the location of Sap1 sites in the
                  natural T7 genome. The one exception to this length is the T7
                  WT Switch Fragment (BBa_K4951028), which is meant to be
                  replaced with a Sap1 / EcoRI insert to create a modular
                  cloning system. Fragments can be reassembled using NEBuilder
                  Assembly, a Gibson-like Assembly that takes advantage of the
                  homology arms we encoded during creation of these fragments.
                  Assembled phage genomes can then be rebooted by
                  electroporation into electrocompetent cells, recovery of the
                  aforementioned cells, and plating onto a plaque assay.
                  Assembly efficacy can be checked by extracting a plaque from
                  the plaque assay, propagating the phage, and extracting
                  genomic DNA. For more information on these processes, please
                  visit <a href="/stanford/engineering">Engineering</a>! The
                  original Wild Type T7 genome used to produce these fragments
                  was purchased from Boca Scientific.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951027"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951027
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 1</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>9093</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951028"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951028
                        </a>
                      </td>
                      <td>T7 no SapI WT Switch Fragment</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>183</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951029"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951029
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 2</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>5580</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951030"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951030
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 3</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>5365</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951031"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951031
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 4</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>10833</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951032"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951032
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 4</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>6166</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951033"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951033
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 5</td>
                      <td>DNA</td>
                      <td>Julia Vu, Zane Chan</td>
                      <td>2882</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="content-section-sh" id="parts-2-2">
                  2B: T7 Phage Inserts
                </h3>
                <p>
                  This collection of T7 phage inserts are designed to be
                  inserted in front of essential gene 2.5, encoding the
                  single-stranded DNA binding protein. The inserts are almost
                  identical to the Wild Type region that they correspond to, but
                  they feature additional Type IIS restriction enzymes to allow
                  for modular insertion and cloning of a promoter and ribosome
                  binding site before the start codon. In the 2023 Stanford iGEM
                  Team’s project, the insert was used to insert different mRNA
                  switches that control the expression of gene 2.5, thereby
                  controlling the lytic activity of the T7 bacteriophage.
                  Cloning inserts were assembled with T7 No Sap1 Fragment 1
                  (BBa_K4951027) using Fusion PCR because of the large disparity
                  between Insert length and the length of Fragment 1. This
                  combined Insert + Fragment 1 strand was then used for complete
                  assembly and reboot of the T7 bacteriophage. The original Wild
                  Type T7 genome this set of inserts is based on was purchased
                  from Boca Scientific.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951034"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951034
                        </a>
                      </td>
                      <td>SapI EcoRI Toehold Insert</td>
                      <td>DNA</td>
                      <td>Julia Vu</td>
                      <td>194</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951035"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951035
                        </a>
                      </td>
                      <td>SapI Toehold Insert</td>
                      <td>DNA</td>
                      <td>Zane Chan</td>
                      <td>193</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="content-section-sh" id="parts-2-3">
                  2C: Primers Used to Edit Phage Genome
                </h3>
                <p>
                  This collection contains primers that apply to the
                  modification and assembly of the T7 bacteriophage genome. The
                  first set of primers, BBa_K4951036 through BBa_K4951047,
                  allows the removal of Sap1 sites from the T7 genome, creating
                  the fragments that make up the Part Collection “T7
                  Bacteriophage No Sap1 Genome Fragments”. The second set of
                  primers, BBa_K4951052 and BBa_K4951053, create homology arms
                  for circular assembly of the T7 genome. The third set,
                  BBa_K4951054 through BBa_K4951067, checks for junctions to
                  verify assembly of either the linear or circular T7
                  bacteriophage genome. The final two primers in this set,
                  BBa_K4951068 and BBa_K4951069, modify the original Sap1
                  Toehold Insert (BBa_K4951035) to include an EcoRI Type IIS
                  restriction site, creating BBa_4951034.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951036"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951036
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 1 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951037"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951037
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 1 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951038"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951038
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 2 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951039"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951039
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 2 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951040"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951040
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 3 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951041"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951041
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 3 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951042"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951042
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 4 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951043"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951043
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 4 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951044"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951044
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 5 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951045"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951045
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 5 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951046"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951046
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 6 F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951047"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951047
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 6 R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951048"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951048
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment Toehold F</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951049"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951049
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment Toehold R</td>
                      <td>Primers</td>
                      <td>Phillip Kyriakakis, Zane Chan</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951052"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951052
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 1 F Circularization</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951053"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951053
                        </a>
                      </td>
                      <td>T7 No Sap1 Fragment 1 R Circularization</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>49</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951054"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951054
                        </a>
                      </td>
                      <td>T7 No Sap1 1 + WT Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951055"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951055
                        </a>
                      </td>
                      <td>T7 No Sap1 1 + WT Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951056"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951056
                        </a>
                      </td>
                      <td>T7 No Sap1 WT + 2 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951057"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951057
                        </a>
                      </td>
                      <td>T7 No Sap1 WT + 2 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951058"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951058
                        </a>
                      </td>
                      <td>T7 No Sap1 2 + 3 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951059"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951059
                        </a>
                      </td>
                      <td>T7 No Sap1 2 + 3 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951060"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951060
                        </a>
                      </td>
                      <td>T7 No Sap1 3 + 4 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951061"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951061
                        </a>
                      </td>
                      <td>T7 No Sap1 3 + 4 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951062"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951062
                        </a>
                      </td>
                      <td>T7 No Sap1 4 + 5 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951063"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951063
                        </a>
                      </td>
                      <td>T7 No Sap1 4 + 5 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951064"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951064
                        </a>
                      </td>
                      <td>T7 No Sap1 5 + 6 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951065"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951065
                        </a>
                      </td>
                      <td>T7 No Sap1 5 + 6 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951066"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951066
                        </a>
                      </td>
                      <td>T7 No Sap1 6 + 1 Junction F</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951067"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951067
                        </a>
                      </td>
                      <td>T7 No Sap1 6 + 1 Junction R</td>
                      <td>Primers</td>
                      <td>Nicholas Murphy</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951068"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951068
                        </a>
                      </td>
                      <td>EcoRI Toehold Insert F</td>
                      <td>Primers</td>
                      <td>Julia Vu</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951069"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951069
                        </a>
                      </td>
                      <td>EcoRI Toehold Insert R</td>
                      <td>Primers</td>
                      <td>Julia Vu</td>
                      <td>46</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="content-section" id="parts-3">
                  Part Collection 3A: Plasmids for Toehold Testing
                </h2>
                <p>
                  This collection of Plasmid inserts was used by the 2023
                  Stanford iGEM team to purchase plasmids from Twist Bioscience.
                  The purchased plasmids were used for In Vivo testing of
                  Toehold switches and Riboswitches (See the 2023 Stanford iGEM
                  team’s Part Collection 1 to learn more). The plasmids feature
                  different reporter genes, origins of replication, and
                  antibiotic selection markers to allow for cotransfection into
                  a single E. Coli cell. The plasmid backbones paired with the
                  inserts in this collection were purchased from Twist
                  Bioscience.
                </p>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951070"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951070
                        </a>
                      </td>
                      <td>pTwist Kan High Copy mScarlet3 - Insert (Trigger)</td>
                      <td>Translational Unit</td>
                      <td>
                        insert (ordered in Twist plasmid backbone) consists of
                        T7 promoter, Nil's RBS flanked with spacer sequences,
                        the indicated fluorescent gene, a stop codon, and a
                        terminator
                      </td>
                      <td>Zane Chan, Nicholas Murphy, Alex Engel</td>
                      <td>826</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/partsdb/edit_seq.cgi?part=BBa_K4951071"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951071
                        </a>
                      </td>
                      <td>pTwist Amp Med Copy mStayGold - Insert (Switch)</td>
                      <td>Translational Unit</td>
                      <td>
                        insert (ordered in Twist plasmid backbone) consists of
                        T7 promoter, Nil's RBS flanked with spacer sequences,
                        the indicated fluorescent gene, a stop codon, and a
                        terminator
                      </td>
                      <td>Zane Chan, Nicholas Murphy, Alex Engel</td>
                      <td>791</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951072"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951072
                        </a>
                      </td>
                      <td>
                        pTwist Amp Med Copy mStayGold + LacZ - Insert (Switch)
                      </td>
                      <td>Translational Unit</td>
                      <td>
                        insert (ordered in Twist plasmid backbone) consists of
                        T7 promoter, Nil's RBS flanked with spacer sequences,
                        the indicated fluorescent gene, a stop codon, a LacZ
                        operon, and a terminator
                      </td>
                      <td>Zane Chan, Nicholas Murphy, Alex Engel</td>
                      <td>1349</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="content-section" id="parts-4">
                  No Collection
                </h2>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951073"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951073
                        </a>
                      </td>
                      <td>pPK_sfGFP_AmpR</td>
                      <td>Plasmid</td>
                      <td>Phillip Kyriakakis</td>
                      <td>4203</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/partsdb/edit_seq.cgi?part=BBa_K4951079"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951079
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 1</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>9082</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951080"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951080
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 2</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>5618</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951081"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951081
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 3</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>5339</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951082"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951082
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 4</td>
                      <td>Composite Part</td>
                      <td>DNA</td>
                      <td>10794</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951083"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951083
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 5</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>6130</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951084"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951084
                        </a>
                      </td>
                      <td>T7 no SapI Fragment 6</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>2870</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://parts.igem.org/Part:BBa_K4951085"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951085
                        </a>
                      </td>
                      <td>SapI EcoRI Toehold Insert</td>
                      <td>DNA</td>
                      <td>Nicholas Murphy, Julia Vu</td>
                      <td>116</td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="content-section" id="parts-5">
                  Composite Parts
                </h2>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Part (as Registry Link)</th>
                      <th scope="col">Part Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Description</th>
                      <th scope="col">Designer(s)</th>
                      <th scope="col">Length(bp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951074"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951074
                        </a>
                      </td>
                      <td>Toehold_AmpR_1 + RFP</td>
                      <td>Composite Part</td>
                      <td>
                        Composite part to test Toehold_AmpR_1's performance In
                        Vitro with mRFP1 as a reporter
                      </td>
                      <td>Zane Chan, Nicholas Murphy</td>
                      <td>1077</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951075"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951075
                        </a>
                      </td>
                      <td>Toehold_KanR_1 + sfGFP</td>
                      <td>Composite Part</td>
                      <td>
                        Composite part to test Toehold_KanR_1's performance In
                        Vitro with sfGFP as a reporter
                      </td>
                      <td>Zane Chan, Julia Vu, Ngoc Tran, Katie Han</td>
                      <td>985</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951076"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951076
                        </a>
                      </td>
                      <td>Riboswitch_KanR_1 + sfGFP</td>
                      <td>Composite Part</td>
                      <td>
                        Composite part to test Riboswitch_KanR_1's performance
                        In Vitro with sfGFP as a reporter{" "}
                      </td>
                      <td>Akio Shrirali, Zane Chan, Christian Choe</td>
                      <td>994</td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="http://parts.igem.org/Part:BBa_K4951078"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BBa_K4951078
                        </a>
                      </td>
                      <td>T7 no SapI w/ SapI + EcoRI Insert</td>
                      <td>Composite Part</td>
                      <td>
                        Entire T7 Genome without SapI sites and an insert to
                        serve as a platform for switch testing in the T7 genome
                        to control phage lytic activity{" "}
                      </td>
                      <td>Julia Vu, Nicholas Murphy, Zane Chan</td>
                      <td>39949</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </Tab>
          </Tabs>
        </div>
      </div>
    </Template>
  );
};

export default PartsCollection;
