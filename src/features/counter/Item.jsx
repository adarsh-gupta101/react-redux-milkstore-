import React from 'react'

function Item({funct,image,text ,add ,remove,title,price}) {
    return (

        <div class="shadow-2xl hover:shadow-inner	 p-2 h-72 m-10 text-center  content-between bg-white rounded-2xl">
<div>
      <img src={image} class="w-64 h-32 m-auto" alt="net"/>
      </div>
      <div class="mt-8 ">

      <p class="font-bold text-2xl">{title}</p></div>
        <p class="text-xl text-blue-400">₹{price}</p>
<div>
      <button  class="bg-purple-400 hover:bg-green-300 text-white w-18 rounded-lg focus:outline-none shadow-lg" onClick={()=>{funct(add())}}><span class="m-3 text-lg">add</span></button>
    <span class="text-blue-500 font-bold text-lg m-5">  {text}</span>
      <button  class="hover:bg-red-400 border-0 hover:text-white w-18	text-white bg-purple-400 rounded-lg border-red-400	  focus:outline-none shadow-lg
      "onClick={()=>{


        funct(remove())

      }}><span class="m-3 text-lg">remove</span></button>

      </div>
      </div>


    )
}

export default Item
