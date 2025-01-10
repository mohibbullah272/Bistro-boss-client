import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const UserHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <p>Hi Welcome back </p>

            <div className="flex p-8">
      {/* Left Section */}
      <div className="w-1/2 bg-[#FFEDD5] flex justify-center items-center rounded-lg p-6">
        {/* User Image */}
        <div className="w-32 h-32 bg-white rounded-full overflow-hidden border-4 border-[#FFEDD5]">
          <img 
            src={user?.photoURL}
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-[#FEF9C3] p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
        {/* Add user activity here */}
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Name</span>
            <span className="text-sm text-gray-400">{user?.displayName}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Email</span>
            <span className="text-sm text-gray-400">{user?.email}</span>
          </li>
         
        </ul>
      </div>
    </div>
        </div>
    );
};

export default UserHome;