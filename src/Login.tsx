import React from 'react'
import { Link } from 'react-router-dom';

type loginState = [string, React.Dispatch<React.SetStateAction<string>>];
type passwordState = [string, React.Dispatch<React.SetStateAction<string>>];

export default function Login({ login , password} : { login: loginState, password: passwordState }) {
  return (
    <>
        <input type="text" name="" id="" onChange={(e) => {login[1](e.target.value)}} value={login[0]} />
        <input type="text" name="" id="" onChange={(e) => {password[1](e.target.value)}} value={password[0]} />
        <Link to="/dashboard" >go to dashboard</Link>
    </>
  )
}
