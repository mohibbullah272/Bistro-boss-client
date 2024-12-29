import React from 'react';
import MenuCard from '../Shared/menuCard/MenuCard';

const MenuCategory = ({items}) => {
    return (
        <div className='my-10'>
             <div className="grid md:grid-cols-2 gird-cols-1 gap-4  p-10">
{
    items.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
}
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 uppercase font-semibold border-b-4">Order Your Favorite food</button>
            </div>
        </div>
    );
};

export default MenuCategory;