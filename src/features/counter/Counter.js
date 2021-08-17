import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import {
  addButter,
  removeButter,




} from "./counterSlice";
import {


addBread ,removeBread


} from "./BreadSlice";
import {


addCheese ,removeCheese


} from "./CheeseSlice";


import {


addMilk ,removeMilk


} from "./MilkSlice";
import {


addSoup ,removeSoup


} from "./SoupSlice";

import Item from "./Item"
import {

  Link
} from "react-router-dom";

export function Counter() {
  const butterCount = useSelector(((state) => state.Butter.value))
  const breadCount = useSelector(((state) => state.Bread.value))
  const cheeseCount = useSelector(((state) => state.Cheese.value))
  const soupCount = useSelector(((state) => state.Soup.value))
    const MilkCount = useSelector(((state) => state.Milk.value))





  //const breadCount = useSelector(((state) => state.counter.value))

  const dispatch = useDispatch();


  return (
<>
 <Link to="/checkout" class="justify-end">
 <span class="flex justify-center sticky top-0 bg-white">
 <ShoppingCartOutlinedIcon class="w-16  "/><p class="bg-red-500 text-white h-8 rounded-lg p-1 ">{MilkCount+soupCount+breadCount+butterCount+cheeseCount}</p>
 </span>
</Link>


    <div class="flex-1 md:flex md:justify-center	content-center md:pt-32 bg-purple-100	flex-wrap ">
  <Item funct={dispatch} image="../../../assets/butter.png"  text={butterCount} title="Butter" add={addButter} remove={removeButter} price={120}/>
    <Item funct={dispatch} image="../../../assets/bread.png"  text={breadCount} title="Bread" add={addBread} remove={removeBread} price={110}/>
      <Item funct={dispatch} image="../../../assets/Cheddar.png"  text={cheeseCount} title="Cheese" add={addCheese} remove={removeCheese} price={90}/>
        <Item funct={dispatch} image="../../../assets/soup.png"  text={soupCount} title="Soup"add={addSoup} remove={removeSoup} price={60}/>
          <Item funct={dispatch} image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/living_with_a_milk_allergy_ref_guide/650x350_living_with_a_milk_allergy_ref_guide.jpg?resize=*:350px"  price ={50} text={MilkCount} title="MilK"add={addMilk} remove={removeMilk}/>

  </div>
</>);
}
