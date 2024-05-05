import axios from 'axios';
import { useEffect, useState } from "react";

function ConditionalRender() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    console.log("data is :", data);
    useEffect(() => {
        const fetchdate = async () => {
            var response = axios.get("https://jsonplaceholder.typicode.com/users");
            setdata((await response).data);
            setloading(false);
            console.log(response.data);
        }
        fetchdate();
    }, []);

    return (
        <div>
            {

                loading ? <h1>...loading</h1> : data.map((item) => <h1>{item.name}</h1>)

            }


        </div>
    )

}

export default ConditionalRender;