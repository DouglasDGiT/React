import React, { useState } from 'react';
import "./Cadastro.css";

const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "" || email === "" || password === "") {
            setMsg("Preencha todos os campos");
            setTimeout(() => setMsg(""), 3000);
        } else {
            alert("Usuário: " + username + " Email: " + email + " Senha: " + password);
        }
    };

    return (
        <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>CADASTRO</header>
          <div className="msg">{msg}</div>
  
          <form onSubmit={handleSubmit} method="POST" action="/estacionamento/Perfil">
            <input type="text" id="usuario" placeholder="Usuário" name="usuario" onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" id="email" placeholder="Email" name="email" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" id="senha" placeholder="Senha" name="senha" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" className="button" value="Cadastrar" />
          </form>
        </div>
      </div>
    );
}

export default Cadastro;
