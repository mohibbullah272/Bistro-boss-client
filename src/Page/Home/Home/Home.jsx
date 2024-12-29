import React from 'react';
import Banner from '../banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import MenuItem from '../MenuItem/MenuItem';
import Contact from '../Contact/Contact';
import ChefRecommended from '../ChefRecomended/ChefRecommended';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
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