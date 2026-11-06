"use client";

import {useState} from "react";
/*
- how do i know which food name to sned through prop?xx
-  make an event happen when clicking add cartxx
- send that name as a propxx
- place where it cant movexx
- what causes it to pop upxx
- what causes to disappear after 3 secxx
- make sure once its in cart the pop up wont continue to pop up
*/
export default function PopUp({menu,itemName,bungee,addToCart, showElement}){
  console.log('add to cart element', showElement);
  return(
    <>
    { itemName &&
    <div className={`${bungee.className} fixed flex left-3/8 border rounded-sm bg-white text-black p-4`}>
      <h1>{showElement} added to cart</h1>
    </div>
}
    </>
  )
}
