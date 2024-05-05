//USE one when the usestate is called after render, every time the component render the usestate is called and thus to overcome it use second it provided;

import { useEffect, useState } from "react";

function Statewitharray() {
    console.log("Function render");
    let [count, setcount] = useState(0);
    var increment = () => {
        count++
        setcount(count);

    }
    useEffect(() => {
        console.log("Use-Effect called");
    },)
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

export default Statewitharray;