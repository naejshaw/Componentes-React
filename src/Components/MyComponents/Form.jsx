import React, { useState } from 'react';

const CadastroForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!nome) newErrors.nome = 'Nome é obrigatório';
    if (!email) newErrors.email = 'Email é obrigatório';
    if (!senha) newErrors.senha = 'Senha é obrigatória';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email inválido';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
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
        setNome('');
        setEmail('');
        setSenha('');
        setSuccess(true);
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
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errors.senha && <span className="error">{errors.senha}</span>}
      </div>
      <button type="submit">Cadastrar</button>
      {success && <p>Cadastro realizado com sucesso!</p>}
    </form>
  );
};

export default CadastroForm;