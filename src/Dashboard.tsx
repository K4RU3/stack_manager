import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ username, password }: { username: string, password: string }) {
    const [isLoading, setLoading] = useState<boolean>(false);
    return <>
        <div>username: {username}, password: {password}</div>;
        <Link to="/" >go to login</Link>
    </>
}
