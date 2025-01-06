import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SharedTitles from "../../../../components/SharedTitles";
import useMenu from "../../../../Hooks/useMenu";
import Loading from "../../../Loading/Loading";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import axios from "axios";


const MangeItem = () => {
    const [menu,isLoading,refetch]=useMenu()
    const axiosSecure = useAxiosSecure()
const handleRemove=async(item)=>{
 const {data} =await axiosSecure.delete(`menu/${item._id}`)
 if(data.deletedCount > 0){
    toast.success('item deleted successfully')
    refetch()
    console.log(data)
 }
 
}


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <SharedTitles title={'Hurry up'} subtitle={"Mange Items"}></SharedTitles>
             <div>         
                          <p className="text-2xl font-semibold mb-4">Total Items : {menu?.length} </p>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
            {
              menu?.map((item,idx)=>     <tr key={item._id}>
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
                  <td>
                   <button className="btn bg-[#D1A054]">
                    <FaEdit className="text-white"></FaEdit>
                   </button>
                    </td>
                    <td>
                    <button onClick={()=>handleRemove(item)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
                    </td>
                 
                </tr>)
            }
              </tbody>
          
            
            </table>
          </div>
                    </div>
        </div>
    );
};

export default MangeItem;