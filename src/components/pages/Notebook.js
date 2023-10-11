import React from 'react'
import Template from '../Template'

const Notebook = () => {
    return ( 
        <Template title="Notebook">
            <iframe className="lab-notebook" title="Lab-Notebook" width="100%" height="900" src="https://static.igem.wiki/teams/4951/wiki/stanford-igem-lab-notebook-compressed.pdf"></iframe>
        </Template>
    )
}

export default Notebook