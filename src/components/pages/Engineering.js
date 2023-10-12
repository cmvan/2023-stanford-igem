import React from 'react'
import Template from '../Template'
import { useState } from 'react';
import TableOfContents from '../TableOfContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Engineering  = () => {
    const [key, setKey] = useState('overview');
    return ( 
        <Template title="Engineering">
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
                                <h2 className="content-section" id="experiments-MH-1">Molecular Biology Protocols</h2>
                            </section>
                        </Tab>
                    </Tabs>
                    </div>
                </div>
        </Template>
    )
}

export default Engineering