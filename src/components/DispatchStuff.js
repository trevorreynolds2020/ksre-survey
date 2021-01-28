import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";



function DispatchStuff(n){

    console.log(n)
    const [{name},dispatch] = useStateValue();

    useEffect(() => {
        console.log(n)
                console.log("first")

    
        dispatch({ 
            type: 'SET_NAME',
            name: n 
        });
    
        console.log("done")
    },[n]);
}

export default DispatchStuff;