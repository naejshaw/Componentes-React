import React, { useState } from 'react';
import Section from './Section';
import styled from 'styled-components';
import axios from 'axios'; // Corrected import
import datas from '../../utils/data.json';

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid ${datas.colors.primary};
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${datas.colors.primary};
    color: ${datas.colors.tertiary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 3rem;
  width: 70%;
  min-height: fit-content;
  border: 1px solid ${datas.colors.primary};
  border-radius: 1rem;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 60%;
`;

const Label = styled.label`
  margin: 10px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 1.5rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 60%;
  min-height: 5rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('/submit', formData);
      alert(response.data); // Display success message
      setFormData({ nome: '', email: '', mensagem: '' }); // Reset form
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem.');
    }
  };

  return (
    <Section id='contact'>
      <Section.Title>Contato</Section.Title>
      <Form onSubmit={handleSubmit}>
        <Line>
          <Label>Nome:</Label>
          <Input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
        </Line>
        <Line>
          <Label>Email:</Label>
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </Line>
        <Line>
          <Label>Mensagem:</Label>
          <Textarea name="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleChange} />
        </Line>
        <Button type="submit">Enviar</Button>
      </Form>
    </Section>
  );
};

export default ContactForm;