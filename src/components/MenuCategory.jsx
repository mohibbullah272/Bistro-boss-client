import React from 'react';
import MenuCard from '../Shared/menuCard/MenuCard';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,category}) => {
 
    return (
        <div className='my-10'>
             <div className="grid md:grid-cols-2 gird-cols-1 gap-4  p-10">
{
    items.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
}
            </div>
            <div className="flex justify-center">
          <Link to={`/order/${category}`}>
          <button className="btn btn-outline border-0 uppercase font-semibold border-b-4">Order Your Favorite food</button>
          </Link>
            </div>
        </div>
    );
};

export default MenuCategory;