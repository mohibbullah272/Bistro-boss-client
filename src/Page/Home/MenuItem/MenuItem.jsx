import { useEffect, useState } from "react";
import SharedTitles from "../../../components/SharedTitles";
import MenuCard from "../../../Shared/menuCard/MenuCard";


const MenuItem = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menuItem.json')
        .then(res=> res.json())
        .then(data => {
            const popularMenu = data.filter(item=> item.category ==='popular')
            setMenu(popularMenu)
            })
    },[])
    return (
        <div className="my-20">
            <SharedTitles
            title={'Check it out'}
            subtitle={'from our menu'}
            ></SharedTitles>
            <div className="grid md:grid-cols-2 gird-cols-1 gap-4 p-5">
{
    menu.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
}
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 uppercase font-semibold border-b-4">View full menu</button>
            </div>
        </div>
    );
};

export default MenuItem;