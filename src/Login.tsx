import React from 'react'
import { Link } from 'react-router-dom';

type loginState = [string, React.Dispatch<React.SetStateAction<string>>];

export default function Login({ login }: { login: loginState }) {
  return (
    <>
        <input type="text" name="" id="" onChange={(e) => {login[1](e.target.value)}} value={login[0]} />
        <Link to="/dashboard" >go to dashboard</Link>
    </>
  )
}
