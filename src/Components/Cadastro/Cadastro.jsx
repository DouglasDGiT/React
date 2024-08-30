import React, { useState, useEffect, useRef } from 'react';
import "./Cadastro.css";
import api from '../../services/api';

const Cadastro = () => {
  // Estados
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]);

  // Referências para inputs
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  // Função para obter usuários
  async function getUsers() {
    try {
      const usersFromApi = await api.get('/usuarios');
      setUsers(usersFromApi.data);
      console.log(usersFromApi.data); // Log dos dados recebidos
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
    }
  }

  // Função para criar usuário
  async function createUsers() {
    try {
      await api.post('/usuarios', {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value
      });
      getUsers(); // Atualiza a lista de usuários
      setMsg('Usuário criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setMsg('Erro ao criar usuário');
    }
  }

  // Função para deletar usuário
  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      getUsers(); // Atualiza a lista de usuários após a exclusão
      setMsg('Usuário deletado com sucesso');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      setMsg('Erro ao deletar usuário');
    }
  }

  // Efeito para carregar usuários ao montar o componente
  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputName.current.value === "" || inputEmail.current.value === "" || inputPassword.current.value === "") {
      setMsg("Preencha todos os campos");
      setTimeout(() => setMsg(""), 3000);
    } else {
      createUsers();
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>CADASTRO</header>
        <div className="msg">{msg}</div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuário" ref={inputName} />
          <input type="email" placeholder="Email" ref={inputEmail} />
          <input type="password" placeholder="Senha" ref={inputPassword} />
          <input type="submit" className="button" value="Cadastrar" />
        </form>
        {users.map(user => (
          <div className='form2' key={user.id}>
            <div>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cadastro;
