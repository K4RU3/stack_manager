import { useEffect, useState } from "react";
import { getData } from "./Api"
import Dashboard from "./Dashboard";

export default function App() {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            getData().then(res => {
                setData(res);
                setLoading(false);
                console.log(data)
            }).catch(_ => {
                setError(true);
                setLoading(false);
            });
        })()
    }, []);

    return <>
        {
            isLoading
            ? <p>Loading...</p> 
            : isError
            ? <p>Error</p>
            : <Dashboard />
        }
    </>;
}
