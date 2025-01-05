import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../../../../Hooks/useCart";


const OrderCard = ({item}) => {
  const {user}=useContext(AuthContext)
  const navigate =useNavigate()
  const axiosSecure = useAxiosSecure()
  const [,refetch]=useCart()
    const {price,name,image,recipe,_id}=item || {}
    const handleAddToCart=()=>{
if(user && user?.email){
  const cartItem={
    userName:user?.displayName,
    cartId : _id ,
    email:user?.email,
    name,
    image,
    price
  }
  axiosSecure.post('carts',cartItem)
  .then(res=>{
    if(res.data.insertedId){
      toast.success(`${name} add to card successfully`)
      refetch()
    }
  })

}
else{
  Swal.fire({
    title: "You are not logged in?",
    text: "Want's to add to cart login first!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
     navigate('/signIn')
    }
  });
}
    }
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
            <p className="bg-gray-900 text-yellow-500 absolute right-2 px-5 top-2"> $ {price}</p>
        </figure>
        <div className="flex flex-col items-center p-10 gap-5">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline border-0  border-orange-500 bg-slate-100 font-semibold border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;