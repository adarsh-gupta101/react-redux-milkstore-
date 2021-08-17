import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart"
import {
  addButter,
  removeButter,




} from "./features/counter/counterSlice";
import { addBread ,removeBread} from "./features/counter/BreadSlice"
import {


addCheese ,removeCheese


} from "./features/counter/CheeseSlice";


import {


addMilk ,removeMilk


} from "./features/counter/MilkSlice";
import {


addSoup ,removeSoup


} from "./features/counter/SoupSlice";
import {

  Link
} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';


export const Checkout = () => {
  const butterCount = useSelector(((state) => state.Butter.value))
  const breadCount = useSelector(((state) => state.Bread.value))
  const cheeseCount = useSelector(((state) => state.Cheese.value))
  const soupCount = useSelector(((state) => state.Soup.value))
    const MilkCount = useSelector(((state) => state.Milk.value))


    const dispatch = useDispatch();
    const butter=butterCount%2===0?butterCount+butterCount/2:butterCount
    const butterp=butterCount

    return (


        <div class="bg-purple-100">
        <Link to="/" class="justify-end">
        <HomeIcon class="w-16 justify-self-center m-auto"/>
       </Link>
        <span class="font-bold text-2xl text-green-500 text-center"> <p>Total : {butter*120 + breadCount*110 + cheeseCount*90 +MilkCount*50+soupCount*60}</p>

<p>Grant total after offer:₹{butterCount*120 + breadCount*110 + cheeseCount*90/2 +MilkCount*50+soupCount*60}
        </p>
        </span>


      <Cart add={addButter} offer="get a third off butter" remove={removeButter} item="butter"itemCount={butterCount} gift={butter} price={120} imgg="../assets/butter.png"/>

<Cart add={addBread} remove={removeBread} item="bread" itemCount={breadCount} price={110} imgg="../assets/bread.png" />
<Cart add={addCheese} offer="Buy a cheese and get one free" remove={removeCheese} item="cheese" itemCount={cheeseCount} imgg="../assets/Cheddar.png"price={90}/>
<Cart  add={addSoup} offer="When you buy a soup ,You get half price bread" remove={removeSoup} item="soup" itemCount={soupCount} imgg="../assets/soup.png"price={60}/>
<Cart add={addMilk} remove={removeMilk}item="milk" itemCount={MilkCount} imgg="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/living_with_a_milk_allergy_ref_guide/650x350_living_with_a_milk_allergy_ref_guide.jpg?resize=*:350px" price={50}/>

        </div>
    )
}
