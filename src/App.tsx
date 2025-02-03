import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useState, useEffect } from "react";

export default function App() {
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
    }, [])

    return <>
        <Router>
            <Routes>
                <Route path="/" element={<Login login={[username, setUsername]} />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    </>;
}
