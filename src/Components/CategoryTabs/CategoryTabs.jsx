import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetTabData from './GetTabData/GetTabData';


const CategoryTabs = () => {
    return (
      <div className="dark:bg-gray-600 dark:text-white">
        <h2 className="text-4xl font-bold mb-8 ">Browse Jobs by category</h2>
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Graphics Design</Tab>
          </TabList>

          <TabPanel>
            <GetTabData category={"Web Development"}></GetTabData>
          </TabPanel>
          <TabPanel>
            <GetTabData category={"Digital Marketing"}></GetTabData>
          </TabPanel>
          <TabPanel>
            <GetTabData category={"Graphics Design"}></GetTabData>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default CategoryTabs;