import { FaTrashAlt } from "react-icons/fa";
import SharedTitles from "../../../../components/SharedTitles";
import useCart from "../../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";


const MyCart = () => {
    const [cart,refetch]=useCart()
    const totalPrice = cart?.reduce((total, item) => total + Number(item.price), 0);

    const axiosSecure = useAxiosSecure()
    const handleRemove=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
            refetch()
            toast.success('delete success')
        })
        .catch(err=> console.log(err))
            }
          });
    }
    return (
        <div>
          <SharedTitles title={'my cart'} subtitle={'wanna add more ?'}></SharedTitles>

          <div>
            <div className="flex mb-5 justify-evenly items-center">
                <p className="text-2xl font-semibold">Total Order : {cart?.length} </p>
                <p className="text-2xl font-semibold">total price $ {totalPrice} </p>
                <button className="btn border-none bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054]">
      <tr>
        <th></th>
        <th>
     item image
        </th>
        <th>Item name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  {
    cart?.map((item,idx)=>     <tr key={item._id}>
        <th>
       <p>{idx+1}</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item?.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <span>{item?.name} </span>
        </td>
        <td>{item?.price}</td>
        <th>
          <button onClick={()=>handleRemove(item?._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
        </th>
      </tr>)
  }
    </tbody>

  
  </table>
</div>
          </div>
        </div>
    );
};

export default MyCart;