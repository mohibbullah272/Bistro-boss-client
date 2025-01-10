import React, { useState } from 'react';
import OrderCard from '../Page/OrderFood/Order/OrderCard/OrderCard';

const FoodOrderTab = ({items}) => {
    const itemsPerPage = 6
    const totalPages = Math.ceil(items?.length / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
  
   
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    return (
<div>
<div className="grid md:grid-cols-3 gird-cols-1 gap-4  p-10">
        {
            currentItems.map(item=> <OrderCard key={item._id} item={item}></OrderCard>)
        }
     
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
 
 <button
   onClick={() => handlePageChange(currentPage - 1)}
   disabled={currentPage === 1}
   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
 >
   Previous
 </button>


 {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
   <button
     key={page}
     onClick={() => handlePageChange(page)}
     className={`px-4 py-2 rounded ${
       page === currentPage
         ? "bg-blue-500 text-white"
         : "bg-gray-200 hover:bg-gray-300"
     }`}
   >
     {page}
   </button>
 ))}

 <button
   onClick={() => handlePageChange(currentPage + 1)}
   disabled={currentPage === totalPages}
   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
 >
   Next
 </button>
</div>
</div>
    );
};

export default FoodOrderTab;