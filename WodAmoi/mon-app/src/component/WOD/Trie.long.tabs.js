import React, { useState } from "react";
import TrieLong from "./Trie.long";
import TrieLongTeam from "./Trie.long.team";
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
                    <TrieLong />
                </Tab>
                <Tab eventKey="profile" title="Team">
                    <TrieLongTeam />
                </Tab>
            </Tabs>
        </>
    );
};

export default PrTabs;





