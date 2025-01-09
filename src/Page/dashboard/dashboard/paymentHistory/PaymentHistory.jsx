import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../Loading/Loading";
import SharedTitles from "../../../../components/SharedTitles";


const PaymentHistory = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data:history,isLoading}=useQuery({
        queryKey:["history",user?.email],
        queryFn:async()=>{
            const {data} = await axiosSecure(`history/${user?.email}`)
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <SharedTitles subtitle={'thanks for purchase'} title={'payment history'}></SharedTitles>
            <div>
                <p className="text-2xl font-semibold mb-3">Total payment : {history?.length} </p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] text-white font-semibold">
      <tr>
        <th></th>
        <th>
     Name
        </th>
        <th>Email</th>
        <th>total bill</th>
        <th>Date</th>
        <th>Transaction Id</th>
      </tr>
    </thead>
    <tbody>
  {
    history?.map((item,idx)=>     <tr key={item._id}>
        <th>
       <p>{idx+1}</p>
        </th>
        <td>
      <p>{item.customer}</p>
        </td>
        <td>
          <span>{item?.email} </span>
        </td>
        <td>{item?.totalPrice}</td>
        <td>
       <span className="text-right">     {item.payDate}</span>
        </td>
        <td>
            {item.transId}
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

export default PaymentHistory;