import React from 'react';
import Banner from '../banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import MenuItem from '../MenuItem/MenuItem';
import Contact from '../Contact/Contact';
import ChefRecommended from '../ChefRecomended/ChefRecommended';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>
            <Banner></Banner>
          <Category></Category>
          <ChefService></ChefService>
          <MenuItem></MenuItem>
          <Contact></Contact>
          <ChefRecommended></ChefRecommended>
          <FeaturedItem></FeaturedItem>
          <Review></Review>
        </div>
    );
};

export default Home;