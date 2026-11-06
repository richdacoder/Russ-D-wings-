"use client";

import {useState} from "react";
/*
- how do i know which food name to sned through prop?xx
-  make an event happen when clicking add cartxx
- send that name as a propxx
- what causes it to pop up
- what causes to disappeat after 3 sec
- make sure once its in cart the pop up wont continue to pop up
*/
export default function PopUp({menu,itemName}){
  return(
    <div>{itemName} added to cart</div>
  )
}
