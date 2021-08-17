import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from "react-redux";

import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
function Cart({imgg,item,itemCount,price,add,remove,offer}) {
  const dispatch = useDispatch();

    return (
        <div class="p-4 md:p-8 bg-white m-12 shadow-lg flex flex-wrap items-center	justify-around	 text-center">
<img src={imgg} class="w-36"/>
<p class="font-bold text-lg m-16 mr-16">{item}</p>
<div class="flex items-center">
<RemoveCircleOutlineOutlinedIcon onClick={()=>{dispatch(remove())}}/>
<p class="font-bold text-lg m-8 md:m-16 md:mr:8 mr-16 text-blue-500">{itemCount}</p>
<AddCircleOutlineIcon  onClick={()=>{dispatch(add())}}/>
</div>

<p class="text-center  font-bold text-blue-800">₹{itemCount*price}</p>
<p class="text-red-500">{offer}</p>


        </div>
    )
}

export default Cart
