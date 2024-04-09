import { useState } from "react";
import Profile from "../pages/Profile";
function Screen2() {
const[name,setname]=useState("My name is")
    var changeName=()=>{
        setname("My name is Varad");
    }
    return(
        <>
            <h1>{name}</h1>
            <Profile name={name}/>
            <button onClick={changeName}>changeName</button>
        </>
    );
}

export default Screen2;