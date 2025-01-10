import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
  const {user,logOut,setUser}=useContext(AuthContext)
  const [cart,refetch]=useCart()
  const [isAdmin,isLoading]=useAdmin()
 const  handleLogout=()=>{
    logOut()
    .then(()=>{
      console.log('user logged out successfully')
      refetch()
      
    })
  }
    const links = <>
     <li><NavLink to={'/'}>Home</NavLink></li>
     <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
     <li><NavLink to={`/order/salad`}>Order Food</NavLink></li>
    <li>
      <NavLink to={'/dashboard/cart'}>
      <button className="btn btn-sm">
  <FaCartArrowDown></FaCartArrowDown>
  <div className="badge badge-secondary">+{cart?.length}</div>
</button>
      </NavLink>
    </li>
    
    </>
    return (
        <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black/50 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn  btn-ghost text-sm uppercase">bistro boss <br /> restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
       {
        user?  <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user photo"
              src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-black/80 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        user && isAdmin && <li><Link to={'/dashboard/adminHome'}>Dashboard</Link></li>
       }
       {
        user && !isAdmin && <li><Link to={'/dashboard/userHome'}>Dashboard</Link></li>
       }
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>:
        <div className="flex items-center gap-3">
       <Link to={'/signIn'}>
       <button className="btn border-none bg-stone-500 text-slate-100">login</button>
       </Link>
      <Link to={'/signUp'}>
      <button className="btn border-none bg-stone-500 text-slate-100">signUp</button>
      </Link>
        </div>
       }
        </div>
      </div>
    );
};

export default Navbar;