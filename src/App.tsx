import { useEffect, useState } from "react";
import { getData, currentType } from "./Api"
import Dashboard from "./Dashboard";

export default function App() {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<currentType>({});
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            getData().then(res => {
                setData(res);
                setLoading(false);
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
            : <Dashboard data={data} />
        }
    </>;
}
