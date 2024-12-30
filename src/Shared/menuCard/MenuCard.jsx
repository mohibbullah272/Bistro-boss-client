import React from 'react';

const MenuCard = ({item}) => {
    const {price,name,image,recipe}=item || {}
    return (
<div>
<div className='flex items-center space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[118px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------------</h3>
                <p className=' text-gray-600'>{recipe}</p>
            </div>
            <p className='text-[#D99904]'>${price}</p>
        </div>
    
</div>
    );
};

export default MenuCard;