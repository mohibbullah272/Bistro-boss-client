import React from 'react';
import SharedTitles from '../../../components/SharedTitles';

const ChefRecommended = () => {
    return (
        <div className='my-20'>
            <SharedTitles
            title={'Should Try'}
            subtitle={'Chef recommends'}
            ></SharedTitles>
            <div className='grid md:grid-cols-3 grid-cols-1 p-5 gap-5'>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
    className='w-full'
      src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-semibold">Authentic Salad</h2>
    <p className='text-center'>Lettuce, Eggs,  Parmesan Cheese, <br /> Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 border-b-[#D99904] border-b-4">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
    className='w-full'
      src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-semibold">BBQ Chicken</h2>
    <p className='text-center'>Lettuce, Eggs,  Parmesan Cheese, <br /> Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn border-none bg-gray-900 text-[#D99904]">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
    className='w-full'
      src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-semibold">Garlic Tuna</h2>
    <p className='text-center'>Lettuce, Eggs,  Parmesan Cheese, <br /> Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 border-b-[#D99904] border-b-4">Buy Now</button>
    </div>
  </div>
</div>
           
           
            </div>
        </div>
    );
};

export default ChefRecommended;