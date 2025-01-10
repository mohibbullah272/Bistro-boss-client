import { useQuery } from "@tanstack/react-query";
import { FaApple, FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,PieChart, Pie, Sector,  ResponsiveContainer, Legend} from 'recharts';
import Loading from "../../../Loading/Loading";

const AdminHome = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    const axiosSecure=useAxiosSecure()
    const {data:stat,isLoading:statLoading}=useQuery({
        queryKey:["adminStat"],
        queryFn:async()=>{
            const {data}=await axiosSecure('/admin-stat')
            return data
        }
    })
    const {data:chartData,isLoading}=useQuery({
        queryKey:["adminChart"],
        queryFn:async()=>{
            const {data}= await axiosSecure('/admin-chart')
            return data
        }
    })
  console.log(chartData)
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  if(isLoading || statLoading){
    return <Loading></Loading>
  }
    return (
        <div>
   <h3 className="text-3xl mb-3 font-semibold">Hi, Welcome Back!</h3>
   <div className="stats shadow gap-2">
  <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
    <div className="stat-figure text-secondary">
   
    </div>
    <div className="stat-value text-white flex items-center gap-3"><FaWallet className=""></FaWallet>${stat?.totalIncome}</div>
    <div className="stat-title text-white text-center">Revenue</div>
  
  </div>

  <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
    <div className="stat-figure text-secondary">
   
    </div>
    <div className="stat-value text-white flex items-center gap-3"><FaUsers></FaUsers>{stat?.usersCount}</div>
    <div className="stat-title text-white text-center">Users</div>
  
  </div>

  <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
    <div className="stat-figure text-secondary">
   
    </div>
    <div className="stat-value text-white flex items-center gap-3"><FaApple></FaApple>{stat?.menuCount}</div>
    <div className="stat-title text-white text-center">Menu</div>
  
  </div>
  <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
    <div className="stat-figure text-secondary">
   
    </div>
    <div className="stat-value text-white flex items-center gap-3"><FaTruck></FaTruck>{stat?.orderCount}</div>
    <div className="stat-title text-white text-center">Order</div>
  
  </div>
</div>
<div className="flex ">
    <div className="w-1/2">
    <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    
    </div>
    <div className="w-1-2">

        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="revenue"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend ></Legend>
        </PieChart>


    </div>
</div>
        </div>
    );
};

export default AdminHome;