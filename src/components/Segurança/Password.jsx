import React, { useEffect, useState } from 'react';

const PasswordPrompt = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let passwordCorrect = false;
    while (!passwordCorrect) {
      const password = prompt('Insira a senha para acessar a página interna, depois confirme-a novamente.');
      if (password === "PD2024") { 
        passwordCorrect = true;
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