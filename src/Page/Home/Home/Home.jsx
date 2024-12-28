import React from 'react';
import Banner from '../banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Category></Category>
          <ChefService></ChefService>
        </div>
    );
};

export default Home;