import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useState } from "react";

export default function App() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <>
        <Router>
            <Routes>
                <Route path="/" element={<Login login={[username, setUsername]} password={[password, setPassword]} />} />
                <Route path="/dashboard" element={<Dashboard username={username} password={password} />} />
            </Routes>
        </Router>
    </>;
}
