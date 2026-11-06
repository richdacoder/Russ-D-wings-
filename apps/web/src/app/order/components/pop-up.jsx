"use client";

import {useState} from "react";
/*
- how do i know which food name to sned through prop?xx
-  make an event happen when clicking add cartxx
- send that name as a propxx
- place where it cant move
- what causes it to pop up
- what causes to disappeat after 3 sec
- make sure once its in cart the pop up wont continue to pop up
*/
export default function PopUp({menu,itemName}){
  return(
    <div className="fixed flex left-3/8 ">
      <h1>{itemName} added to cart</h1>
    </div>
  )
}
