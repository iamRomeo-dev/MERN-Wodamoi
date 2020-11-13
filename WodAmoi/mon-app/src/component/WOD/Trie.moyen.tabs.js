import React, { useState } from "react";
import TrieMoyen from "./Trie.moyen";
import TrieMoyenTeam from "./Trie.moyen.team";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

  

const PrTabs = (props) => {
    const [key, setKey] = useState('home');

    return (
        <>
            <Tabs className="wodTab text-center"
                style={{display: "block ruby"}}
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Solo">
                    <TrieMoyen />
                </Tab>
                <Tab eventKey="profile" title="Team">
                    <TrieMoyenTeam />
                </Tab>
            </Tabs>
        </>
    );
};

export default PrTabs;





