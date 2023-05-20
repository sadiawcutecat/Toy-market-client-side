import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = () => {
    const [toy, setToy] = useState(null);
    const fun = () => {
        setToy("dsfhdshfdhfhdhdhjkjkjkjkjkj");
    }
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={fun}>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    
                </TabList>

                <TabPanel>
                    <h2>{toy}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;