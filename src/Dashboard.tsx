import { useState, useEffect } from 'react'
import { currentType } from './Api'

export default function Dashboard({ data }: {data: currentType}) {
    const retDir = () => window.innerWidth > window.innerHeight ? 'hor' : 'ver';
    const [dir, setDir] = useState<'ver' | 'hor'>(retDir());

    useEffect(() => {
        window.addEventListener("resize", () => {
            setDir(retDir());
        });
    }, []);
    return (
        <div>

        </div>
    )
}
