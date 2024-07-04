import React, { useEffect, useState } from 'react';

const PasswordPrompt = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const alreadyAuthenticated = localStorage.getItem('isAuthenticated');

    if (alreadyAuthenticated) {
      setIsAuthenticated(true);
    } else {
      const password = prompt('Insira a senha para acessar a página interna, depois confirme-a novamente.');
      if (password === "PD2024") {
        localStorage.setItem('isAuthenticated', 'true'); // Armazena a autenticação no localStorage
        setIsAuthenticated(true);
      } else {
        alert('Senha incorreta! Tente novamente.');
      }
    }
  }, []);

  if (!isAuthenticated) return <div>Verificando senha...</div>;

  return (
    <div>Conteúdo protegido</div>
  );
};

export default PasswordPrompt;