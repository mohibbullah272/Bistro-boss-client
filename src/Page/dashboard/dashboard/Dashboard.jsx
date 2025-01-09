import { FaBahai, FaBookReader, FaCalendarAlt, FaCartPlus, FaHome, FaListAlt, FaMailBulk, FaSearch, FaShoppingBag, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../Loading/Loading";

const Dashboard = () => {
const [isAdmin,isLoading]=useAdmin()
if(isLoading){
  return <Loading></Loading>
}
    return (
        <div className="flex ">
            <div className="w-60 min-h-screen bg-[#D1A054] ">
              <Link to={'/'}>
              <div className="hover:bg-slate-100/10 ">
                    <p className="text-3xl text-center p-3 font-semibold ">Bistro Boss <span>Restaurant</span></p>
                </div>
              </Link>
<ul className="p-5">
{
    isAdmin?<>
        <li>
    <NavLink className={({ isActive }) =>isActive ? "" : "text-white font-semibold" 
  }><span className="flex gap-3 items-center "><FaHome></FaHome> Admin Home</span></NavLink>
</li>
        <li>
    <NavLink to={'/dashboard/addItem'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><ImSpoonKnife /> Add Food</span></NavLink>
</li>
        <li>
    <NavLink to={'/dashboard/manageItem'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaListAlt></FaListAlt>Manage Item</span></NavLink>
</li>
        <li>
    <NavLink className={({ isActive }) =>isActive ? "" : "text-white font-semibold" 
  }><span className="flex gap-3 items-center "><FaBookReader></FaBookReader>Manage Booking</span></NavLink>
</li>
        <li>
    <NavLink to={'/dashboard/user'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaUsers></FaUsers>All Users</span></NavLink>
</li>
    
    
    </>:<>
    <li>
    <NavLink className={({ isActive }) =>isActive ? "" : "text-white font-semibold" 
  }><span className="flex gap-3 items-center "><FaHome></FaHome> User Home</span></NavLink>
</li>
<li>
    <NavLink to={'/dashboard/history'} className={({ isActive }) =>isActive ? "text-white font-semibold " : "" 
  }><span className="flex gap-3 items-center "> <FaCalendarAlt></FaCalendarAlt> Payments</span></NavLink>
</li>
<li>
    <NavLink  className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  } to={'/dashboard/cart'}><span className="flex items-center gap-3" ><FaCartPlus></FaCartPlus> My Cart</span></NavLink>
</li>
<li>
    <NavLink to={'/dashboard/myBooking'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  } ><span className="flex gap-3 items-center "><FaBahai></FaBahai> My Booking</span></NavLink>
</li>
    </>
}
<div className="divider"></div>

<li>
    <NavLink to={'/'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaHome></FaHome> Home</span></NavLink>
</li>
<li>
    <NavLink to={'/order/salad'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaShoppingBag></FaShoppingBag> Shop</span></NavLink>
</li>
<li>
    <NavLink to={'/menu'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaSearch></FaSearch> Menu</span></NavLink>
</li>
<li>
    <NavLink to={'/contact'} className={({ isActive }) =>isActive ? "text-white font-semibold" : "" 
  }><span className="flex gap-3 items-center "><FaMailBulk></FaMailBulk>Contact</span></NavLink>
</li>
</ul>
            </div>
            <div className="flex-1 p-8">
<Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;