import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CategoryTabs = () => {
    return (
      <div>
        <h2 className='text-4xl font-bold mb-8'>Browse talent by category</h2>
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Graphics Design</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default CategoryTabs;