import { useState, useEffect } from 'react'
import { currentType } from './Api'

import Drawer from '@mui/material/Drawer';

export default function Dashboard({ data }: {data: currentType}) {
    const retDir = () => window.innerWidth > window.innerHeight ? 'hor' : 'ver';
    const [dir, setDir] = useState<'ver' | 'hor'>(retDir());

    useEffect(() => {
        window.addEventListener("resize", () => {
            setDir(retDir());
        });
    }, []);
    return (
        <Drawer
            ModalProps={{
            keepMounted: false,
          }}
        >
            <p>test</p>
            <p>test</p> 
        </Drawer>
    )
}
