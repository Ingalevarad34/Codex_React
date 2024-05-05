import axios from 'axios';
import { useEffect, useState } from "react";

function NormalType() {
    const [data, setdata] = useState([]);
    console.log("data is :", data);
    useEffect(() => {
        const fetchdate = async () => {
            var response = axios.get("https://jsonplaceholder.typicode.com/users");
            setdata((await response).data);
            console.log(response.data);
        }
        fetchdate();
    }, []);

    return (
        <div>
            {
                data.map((item) => <h1>{item.name}</h1>

                )

            }
        </div>
    )

}

export default NormalType;