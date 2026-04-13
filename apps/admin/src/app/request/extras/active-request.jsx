"use client";

import {useState, useEffect} from "react";

export default function ActiveRequest({onClose, requests}){
  return(
    <>
    <div>
      <button onClick={onClose}> x </button>
      <h1>Working</h1>
    </div>
    </>
  )
}
