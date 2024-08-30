import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = () => {
    navigate('/Cadastro');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setMsg("Preencha todos os campos");
      setTimeout(() => setMsg(""), 3000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: username,
        password
      });

      const { token } = response.data;
      localStorage.setItem('token', token); // Armazena o token no localStorage
      navigate('/Home'); // Redireciona para a página /home

    } catch (error) {
      setMsg("Email ou senha incorretos");
      setTimeout(() => setMsg(""), 3000);
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>LOGIN</header>
        <div className="msg">{msg}</div>

        <form onSubmit={handleSubmit}>
          <input type="email" id="email" placeholder="Email" name="email" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" id="senha" placeholder="Senha" name="senha" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="button" value="Entrar" />
        </form>

        <div className="signup">
          <span className="signup">Não tem uma conta?</span>
          <form onClick={handleRegister} method="get">
          <input type="submit" className="button" value="Fazer Cadastro"/>
          </form>
        </div>

        <div className="signup">
          <span className="signup">Venha trabalhar conosco</span>
          <form>
            <input type="submit" className="button" value="Ser Parceiro"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;