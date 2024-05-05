//USE two when the usestate is called after render, in this program we have specifically told useEffect on which changing variable value useEffect is called;

import { useEffect, useState } from "react";

function StateThree() {
    console.log("Function render");
    let [count, setcount] = useState(0);
    const [name, setname] = useState('');
    var increment = () => {
        count++
        setcount(count);

    }
    var changeName = () => {
        setname("My name is varad");
    }
    useEffect(() => {
        console.log("Use-Effect called");
    }, [count])
    return (
        <div>
            {
                <>
                    <h1>{count}</h1>
                    <button onClick={increment}>click me to increment count</button>
                    <h1>{name}</h1>
                    <button onClick={changeName}>click me to change name</button>
                </>

            }
        </div>
    )
}

export default StateThree;