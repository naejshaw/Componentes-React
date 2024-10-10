import React, { useState } from 'react';

export default function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação mais robusta
    const newErrors = {};
    if (!nome) newErrors.nome = 'Nome é obrigatório';
    if (!email) newErrors.email = 'Email é obrigatório';
    if (!senha) newErrors.senha = 'Senha é obrigatória';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email inválido';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Envio para a API com tratamento de erros mais detalhado
      fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.message || 'Erro ao cadastrar usuário');
          });
        }
        return response.json();
      })
      .then(data => {
        // Limpa o formulário e mostra mensagem de sucesso
        setNome('');
        setEmail('');
        setSenha('');
        alert('Usuário cadastrado com sucesso!');
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário: ' + error.message);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}
      </div>
      {/* ... outros campos do formulário com a mesma estrutura ... */}
      <button type="submit">Cadastrar</button>
    </form>
  );
}