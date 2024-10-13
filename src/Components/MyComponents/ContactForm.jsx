import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import axios from 'react'
import datas from '../../utils/data.json'

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid ${datas.colors.primary};
  border-radius: 0.5rem;
  &:hover{
    cursor: pointer;
    background-color: ${datas.colors.primary};
    color: ${datas.colors.tertiary};
  }
`
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
`

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 60%;
`

const Label = styled.label`
  margin: 10px;
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 1.5rem;
`

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 60%;
  min-height: 5rem;
`

const ContactForm = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/submit', values);
      alert(response.data); // Exibe a mensagem de sucesso
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem.');
    }
  };
    //TODO: Receber os valores dos campos do formulário e armazenar em um banco de dados local
    return (
          <Section id='contact'>
            <Section.Title>Contato</Section.Title> 
            <Form>
              {/* ... campos do formulário */}
              {/*TODO: Implementar um formulário de contato com os campos de nome, email e mensagem*/}
              <Line>
                <Label>Nome:</Label>
                <Input type="text" name="nome" placeholder="Nome" />
              </Line>
              <Line>
                <Label>Email:</Label>
                <Input type="email" name="email" placeholder="Email" />
              </Line>
              <Line>
                <Label>Mensagem:</Label>
                <Textarea type="text" name="mensagem" placeholder="Mensagem" />
              </Line>
              <Button type="submit">Enviar</Button>
            </Form>
          </Section>
      );
  };
  export default ContactForm;