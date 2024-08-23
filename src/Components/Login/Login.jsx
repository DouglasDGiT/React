import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[msg, setMsg] = useState("");

  const handleRegister = () => {
    navigate('/Cadastro');
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    console.log("Envio"); 
    if(username === ("") || password === ("") ){
        setMsg("Preencha todos os campos")
        setTimeout(()=>setMsg(""), 3000)
    } else{
      alert("Email : "+username+" Senha : "+password)
    }
  }
  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>LOGIN</header>
        <div className="msg">{msg}</div>

        <form onSubmit={handleSubmit} method="POST" action="/estacionamento/Perfil">
          <input type="email" id="email" placeholder="Email" name="email" onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" id="senha" placeholder="Senha" name="senha" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="button" value="Entrar" />
        </form>

        <div className="signup">
          <span className="signup">Não tem uma conta?</span>
          <form onClick={handleRegister} method="get">
            <input type="submit" className="button" value="Fazer Cadastro" />
          </form>
        </div>

        <div className="signup">
          <span className="signup">Venha trabalhar conosco</span>
          <form action="/estacionamento/dono" method="get">
            <input type="submit" className="button" value="Ser Parceiro" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
