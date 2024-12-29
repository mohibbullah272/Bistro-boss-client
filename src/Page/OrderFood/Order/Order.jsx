import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import orderBanner from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Food order</title>
            </Helmet>
          <Cover img={orderBanner} title={'our shop'}></Cover>
          <section className='w-11/12 mx-auto text-center'>
          <Tabs>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
      <h2>salad</h2>
    </TabPanel>
    <TabPanel>
      <h2>pizza</h2>
    </TabPanel>
    <TabPanel>
      <h2>soup</h2>
    </TabPanel>
    <TabPanel>
      <h2>dessert</h2>
    </TabPanel>
    <TabPanel>
      <h2>drinks</h2>
    </TabPanel>
  </Tabs>
          </section>
        </div>
    );
};

export default Order;