import { useEffect, useState } from "react";
import { getData, currentType } from "./Api"
import Dashboard from "./Dashboard";

export default function App() {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<currentType>({});

    useEffect(() => {
        (async () => {
            let data = await getData();
            setData(data);
            setLoading(false);
        })()
    }, []);

    return <>
        {
            isLoading
            ? <p>Loading...</p>
            : <Dashboard data={data} />
        }
    </>;
}
