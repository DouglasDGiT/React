import React from 'react'
import { useState } from 'react';
import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>LOGIN</header>

        <form method="POST" action="/estacionamento/Perfil">
          <input type="text" id="email" placeholder="Email" name="email" />
          <input type="password" id="senha" placeholder="Senha" name="senha" />
          <input type="submit" className="button" value="Entrar" />
        </form>

        <div className="signup">
          <span className="signup">Não tem uma conta?</span>
          <form action="/estacionamento/cliente" method="get">
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
