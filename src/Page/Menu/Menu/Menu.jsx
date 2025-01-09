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
import Loading from '../../Loading/Loading';
const Menu = () => {
    const [menu,isLoading]=useMenu()
    if(isLoading){
      return <Loading></Loading>
    }
   const salad = menu.filter(item=> item.category === 'salad')
   const dessert = menu.filter(item=> item.category === 'dessert')
   const pizza = menu.filter(item=> item.category === 'pizza')
   const offered = menu.filter(item=> item.category === 'offered')
   const soup = menu.filter(item=> item.category === 'soup')
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
         <MenuCategory category={'Dessert'} items={dessert}></MenuCategory>
           </section>
           <section >
            {/* pizza */}
         <Cover img={pizzaImg} adjustHeight={'h-[400px]'} title={'Pizza'}></Cover>
         <MenuCategory category={'Pizza'} items={pizza}></MenuCategory>
           </section>
           <section >
            {/* salad */}
         <Cover img={saladImg} adjustHeight={'h-[400px]'} title={'salad'}></Cover>
         <MenuCategory  category={'salad'} items={salad}></MenuCategory>
           </section>
           <section >
            {/* soup*/}
         <Cover img={soupImg} adjustHeight={'h-[400px]'} title={'Soup'}></Cover>
         <MenuCategory category={'soup'} items={soup}></MenuCategory>
           </section>
        </div>
    );
};

export default Menu;