import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SharedTitles from '../../../components/SharedTitles';
import MenuCategory from '../../../components/MenuCategory';
const Menu = () => {
    const [menu]=useMenu()
   const salad = menu.filter(item=> item.category === 'salad')
   const dessert = menu.filter(item=> item.category === 'dessert')
   const pizza = menu.filter(item=> item.category === 'pizza')
   const offered = menu.filter(item=> item.category === 'offered')
   const soup = menu.filter(item=> item.category === 'soup')
   console.log(offered)
    return (
        <div>
            <Helmet>
                <title>bistro boss | menu</title>
            </Helmet>
           <Cover title={"Our menu"}  img={menuImg}></Cover>
           <section>
            {/* offered */}
            <SharedTitles title={"Don't miss"} subtitle={"today's offer"}></SharedTitles>
           <MenuCategory items={offered}></MenuCategory>
           </section>
           <section>
            {/* dessert */}
         <Cover img={dessertImg} adjustHeight={'h-[400px]'} title={'Dessert'}></Cover>
         <MenuCategory items={dessert}></MenuCategory>
           </section>
           <section >
            {/* pizza */}
         <Cover img={pizzaImg} adjustHeight={'h-[400px]'} title={'Pizza'}></Cover>
         <MenuCategory items={pizza}></MenuCategory>
           </section>
           <section >
            {/* salad */}
         <Cover img={saladImg} adjustHeight={'h-[400px]'} title={'salad'}></Cover>
         <MenuCategory items={salad}></MenuCategory>
           </section>
           <section >
            {/* soup*/}
         <Cover img={soupImg} adjustHeight={'h-[400px]'} title={'Soup'}></Cover>
         <MenuCategory items={soup}></MenuCategory>
           </section>
        </div>
    );
};

export default Menu;