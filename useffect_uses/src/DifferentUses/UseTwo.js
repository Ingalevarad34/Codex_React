//USE two when the usestate is called after render, and then will never be called as we have provide it dependecy (as empty array) to overcome it use third is provided;

import { useEffect, useState } from "react";

function StateTwo() {
    console.log("Function render");
    let [count, setcount] = useState(0);
    var increment = () => {
        count++
        setcount(count);
        
    }
    useEffect(()=>{
        console.log("Use-Effect called");
    },[])
    return (
        <div>
            {
                <>
                    <h1>{count}</h1>
                    <button onClick={increment}>click</button>
                </>

            }
        </div>
    )
}

export default StateTwo;