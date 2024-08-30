import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Home/Home.css'
const Home = () => {
    const [userName, setUserName] = useState("");

    const handleLogout = () => {
        // Remover o token do armazenamento local
        localStorage.removeItem('token');
        // Redirecionar para a página de login
        navigate('/');
      };

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                // Redirecionar para login se o token não estiver presente
                window.location.href = '/';
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/usuarios/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUserName(response.data.name);
            } catch (error) {
                console.error("Erro ao buscar dados do usuário", error);
                // Redirecionar para login se houver um erro ao buscar dados do usuário
                window.location.href = '/';
            }
        };

        fetchUserData();
    }, []);

    return (
        <form>
            <div className="container">
                <header> Bem-vindo, {userName} ! 👋</header>
                <div className='btn'>
                <button onClick={handleLogout}>Sair</button>
                </div>
            </div>
            
        </form>
    );
};

export default Home;
