import imgChef from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='my-10 p-16  ' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${imgChef})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
        }}>
  
          <div className='bg-white w-3/5  mx-auto p-10'>
        <h3 className='text-2xl text-[#151515] text-center'>Bistro Boss</h3>
        <p className='text-center text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
    );
};

export default ChefService;