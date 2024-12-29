  import bg from '../../../assets/home/featured.jpg'
import SharedTitles from '../../../components/SharedTitles';
  
  const FeaturedItem = () => {
    return (
        <section className='bg-fixed px-20 py-14 my-20' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${bg})`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat'
                }}>
            <SharedTitles
            classStyle={'text-slate-100/50'}
            title={'check it out'}
            subtitle={'from our menu'}
            >
            </SharedTitles>
            <div className='md:flex 
             justify-center items-center gap-8'>
<div>
    <img src={bg} alt="" />
</div>
<div className='text-slate-300'>
    <p>March 20 , 2025</p>
    <p className='uppercase'>Where i can get some ?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque quos rerum dolor cum doloremque provident debitis iusto quisquam voluptatem similique, officiis ut eveniet modi corrupti voluptatibus minima. Nulla, ipsa.</p>
    <button className='btn btn-outline border-0 border-b-4 border-slate-100 text-white'>Order Now</button>
</div>
            </div>
        </section>
    );
};

export default FeaturedItem;