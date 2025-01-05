import { useQuery } from "@tanstack/react-query";
import SharedTitles from "../../../components/SharedTitles";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const User = () => {
    const axiosSecure = useAxiosSecure()
    const {data:users,isLoading,refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
         const {data} = await axiosSecure.get('/users')
         return data
        }
    })
    const handleUpdateRole=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to make her admin?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "make Admin!"
          }).then(async(result) => {
            if (result.isConfirmed) {
             await axiosSecure.patch(`/user/admin/${id}`)
            }
          });
    }
const handleRemove=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
     const {data}= await axiosSecure.delete(`/user/${id}`)
     toast('user deleted successfully')
     refetch()
          
        }
      });
}
    return (
        <div>
            <SharedTitles title={'How Many??'} subtitle={'Mange All User'}></SharedTitles>
  <div>
          
                <p className="text-2xl font-semibold">Total users : {users?.length} </p>
         
            <div className="overflow-x-auto">
  <table className="table">
    <thead className="bg-[#D1A054] text-white ">
      <tr>
        <th></th>
        <th>
   Name
        </th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  {
    users?.map((item,idx)=>     <tr key={item._id}>
        <th>
       <p>{idx+1}</p>
        </th>
      <td>{item?.name}</td>
        <td>
          <span>{item?.email} </span>
        </td>
        <td><button onClick={()=>handleUpdateRole(item?._id)} className="bg-[#D1A054] btn">
            <FaUsers className="text-white"></FaUsers>
            </button></td>
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

export default User;