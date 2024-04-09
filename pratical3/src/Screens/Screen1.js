import { useState } from "react";

function Screen1() {
    const [name, setname] = useState("I'am a developer");

    var changeName = () => {
        setname("I'am a gamer");
    }
    return (
        <>
            <h1>{name}</h1>
            <button onClick={changeName}>changeName</button>
        </>
    );
}

export default Screen1;