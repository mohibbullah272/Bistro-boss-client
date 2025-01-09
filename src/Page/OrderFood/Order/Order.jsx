import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import orderBanner from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodOrderTab from '../../../components/FoodOrderTab';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
const Order = () => {
  const [menu,isLoading]=useMenu()
  
 
  const salad = menu?.filter(item=> item.category === 'salad')
  const dessert = menu?.filter(item=> item.category === 'dessert')
  const pizza = menu?.filter(item=> item.category === 'pizza')
  const drinks = menu?.filter(item=> item.category === 'drinks')
  const soup = menu?.filter(item=> item.category === 'soup')
  const {category} = useParams()
  const tabCategory = ["salad","Pizza","soup","Dessert","Drinks"]
  const initialTab = tabCategory.indexOf(category)
 const [tabIndex,setTabindex]=useState(initialTab)
 if(isLoading){
  return <Loading></Loading>
}
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Food order</title>
            </Helmet>
          <Cover img={orderBanner} title={'our shop'}></Cover>
          <section className='w-11/12 mx-auto text-center my-10 '>
          <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabindex(index) }>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
    <FoodOrderTab items={salad}></FoodOrderTab>
    </TabPanel>
    <TabPanel>
  <FoodOrderTab items={pizza}></FoodOrderTab>
    </TabPanel>
    <TabPanel>
    <FoodOrderTab items={soup}></FoodOrderTab>
    </TabPanel>
    <TabPanel>
    <FoodOrderTab items={dessert}></FoodOrderTab>
    </TabPanel>
    <TabPanel>
    <FoodOrderTab items={drinks}></FoodOrderTab>
    </TabPanel>
  </Tabs>
          </section>
        </div>
    );
};

export default Order;