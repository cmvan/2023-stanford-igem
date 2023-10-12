import React from 'react'
import Template from '../Template'
import { useState } from 'react';
import TableOfContents from '../TableOfContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const PartsCollection = () => {
    const [key, setKey] = useState('overview');
    return ( 
        <Template title="Parts Collection">
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
                        <Tab eventKey="overview" title="Parts">
                            <section id="overview">
                                <h2 className="content-section" id="parts-1">Part Collection 1: RNA Switches</h2>
                                    <h3 className="content-section-sh" id="parts-1-1">1A: Toehold KanR</h3>
                                    <p>The toehold switch is an RNA switch designed against the KanR gene using NuPack software, effectively functioning as an RBS and working to control the transcription of the gene it follows. The toehold was designed to control essential gene 2.5 in T7 phages and is preceded by homology arms that correspond to the T7 phage genome, specifically the region in front of gene 2.5. The part also contains a T7 promoter, the designed toehold switch, and followed by a homology arm that corresponds to the sfGFP gene for in vitro cell-free testing purposes. This part was generated with NuPack software against the KanR gene derived from Twist Biosciences. The exposed regions on the KanR folding structure make it an ideal antibiotic-resistance gene to target for the development of our toehold switches. The preceding homology arms were designed to correspond with the region in which we intended to insert the toehold (between the T7 promoter and the open reading frame of gene 2.5). The anterior homology arms were designed to correspond with the sfGFP gene to allow us to test the switches in a cell-free environment using the fluorescent gene as a reporter to quantitatively measure the expression level with and without the trigger sequence.</p>
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
                                    <h3 className="content-section-sh" id="parts-1-2">1B: Toehold AmpR</h3><p>The toehold switch is an RNA switch designed against the AmpR gene using NuPack software, effectively functioning as an RBS and working to control the transcription of the gene it follows. The toehold was designed to control essential gene 2.5 in T7 phages and is preceded and followed by homology arms that correspond to BBa_I732097 (RFP plasmid), specifically the end of the biobrick prefix. The part also contains a T7 promoter and the designed toehold switch, This part was generated with NuPack software against the AmpR gene derived from an sfGFP plasmid retrieved from Dr. Phillip Kyriakakis, labeled pPK803. The preceding and anterior homology arms were designed to correspond with the biobrick prefix of BBa_I732097, an RFP ChlorR plasmid for more streamlined insertion of the toehold into the plasmid backbone for in vivo toehold testing. These homology arms allowed us to test the switches in a cell-free environment using the fluorescent gene as a reporter to quantitatively measure the expression level with and without the trigger sequence.</p>
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
                                    <h3 className="content-section-sh" id="parts-1-3">1C: Riboswitch KanR</h3><p>The riboswitch is a novel RNA riboregulators developed in collaboration with Christian Choe from the Das Lab. Similar to toeholds, they assume the OFF position when the gene is converted to mRNA and assume the ON position upon binding to a target mRNA sequence. However, while Toeholds are generated in a fixed structure, with the same number of bases and the same pairing structure in all switches, Riboswitches can assume many different configurations, such as AND or OR, to best maximize ON/OFF ratios in the presence of target mRNA. This feature provides greater flexibility in targeting genes of interest. This riboswitch is designed against KanR gene to control the transcription of essential gene 2.5 in T7 phages, containing homology arms to the phage genome as well as a T7 promoter, the designed toehold switch, and followed by a homology arm that corresponds to the sfGFP gene for in vitro cell-free testing purposes.<br></br><br></br>

                                    This part was generated with novel riboregulator design software designed by Chritian Choe, a graduate student from the Das Lab at Stanford Unversity, against the KanR gene derived from Twist Biosciences. The exposed regions on the KanR folding structure make it an ideal antibiotic-resistance gene to target for the development of our toehold switches.<br></br><br></br>

                                    The preceding homology arms were designed to correspond with the region in which we intended to insert the toehold (between the T7 promoter and the open reading frame of gene 2.5). The anterior homology arms were designed to correspond with the sfGFP gene to allow us to test the switches in a cell-free environment using the fluorescent gene as a reporter to quantitatively measure the expression level with and without the trigger sequence.</p>

                                <h2 className="content-section" id="parts-2">Part Collection 2: Phage Genome</h2>
                                <p className="center">As a whole, this collection allows the modification of a T7 bacteriophage genome to a modular system that can be modified in front of essential gene 2.5 (the single stranded DNA binding protein). Reassembly of the complete genome also requires NEBuilder. The 2023 Stanford iGEM team used this modular system to introduce mRNA switches in front of gene 2.5 to control the lytic activity of the T7 bacteriophage.
                                    The original Wild Type T7 genome this set of primers is based on was purchased from Boca Scientific.</p>
                                    <h3 className="content-section-sh" id="parts-2-1">2A: Modified T7 Phage Genome Fragments</h3>
                                    <p>To remove Sap1 sites from the T7 genome and implement a cloning insert, we spliced the T7 genome into seven different pieces. The fragments were then used to reassemble a functional Wild Type T7 genome with no Sap1 sites. The fragments vary widely in size, from 3,000 base pairs to 10,000 pairs, due to variance in the location of Sap1 sites in the natural T7 genome. The one exception to this length is the T7 WT Switch Fragment (BBa_K4951028), which is meant to be replaced with a Sap1 / EcoRI insert to create a modular cloning system.
                                    Fragments can be reassembled using NEBuilder Assembly, a Gibson-like Assembly that takes advantage of the homology arms we encoded during creation of these fragments. Assembled phage genomes can then be rebooted by electroporation into electrocompetent cells, recovery of the aforementioned cells, and plating onto a plaque assay. Assembly efficacy can be checked by extracting a plaque from the plaque assay, propagating the phage, and extracting genomic DNA. For more information on these processes, please visit <a href="/stanford/engineering">Engineering</a>!
                                    The original Wild Type T7 genome used to produce these fragments was purchased from Boca Scientific.
                                    </p>
                                    <h3 className="content-section-sh" id="parts-2-2">2B: T7 Phage Inserts</h3>
                                    <p>This collection of T7 phage inserts are designed to be inserted in front of essential gene 2.5, encoding the single-stranded DNA binding protein. The inserts are almost identical to the Wild Type region that they correspond to, but they feature additional Type IIS restriction enzymes to allow for modular insertion and cloning of a promoter and ribosome binding site before the start codon. In the 2023 Stanford iGEM Team’s project, the insert was used to insert different mRNA switches that control the expression of gene 2.5, thereby controlling the lytic activity of the T7 bacteriophage.
                                    Cloning inserts were assembled with T7 No Sap1 Fragment 1 (BBa_K4951027) using Fusion PCR because of the large disparity between Insert length and the length of Fragment 1. This combined Insert + Fragment 1 strand was then used for complete assembly and reboot of the T7 bacteriophage.
                                    The original Wild Type T7 genome this set of inserts is based on was purchased from Boca Scientific.
                                    </p>
                                    <h3 className="content-section-sh" id="parts-2-3">2C:  Primers Used to Edit Phage Genome</h3><p>This collection contains primers that apply to the modification and assembly of the T7 bacteriophage genome. The first set of primers, BBa_K4951036 through BBa_K4951047, allows the removal of Sap1 sites from the T7 genome, creating the fragments that make up the Part Collection “T7 Bacteriophage No Sap1 Genome Fragments”. The second set of primers, BBa_K4951052 and BBa_K4951053, create homology arms for circular assembly of the T7 genome. The third set, BBa_K4951054 through BBa_K4951067, checks for junctions to verify assembly of either the linear or circular T7 bacteriophage genome. The final two primers in this set, BBa_K4951068 and BBa_K4951069, modify the original Sap1 Toehold Insert (BBa_K4951035) to include an EcoRI Type IIS restriction site, creating BBa_4951034.
                                    </p>

                                <h2 className="content-section" id="parts-3">Part Collection 3A: Plasmids for Toehold Testing</h2>
                                <p>This collection of Plasmid inserts was used by the 2023 Stanford iGEM team to purchase plasmids from Twist Bioscience. The purchased plasmids were used for In Vivo testing of Toehold switches and Riboswitches (See the 2023 Stanford iGEM team’s Part Collection 1 to learn more). The plasmids feature different reporter genes, origins of replication, and antibiotic selection markers to allow for cotransfection into a single E. Coli cell.
                                The plasmid backbones paired with the inserts in this collection were purchased from Twist Bioscience.
                                </p>

                                <h2 className="content-section" id="parts-4">No Collection</h2>

                                <h2 className="content-section" id="parts-5">Composite Parts</h2>
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default PartsCollection