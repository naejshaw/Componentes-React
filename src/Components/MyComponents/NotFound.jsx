import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  color: #333;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Página não encontrada</Message>
    </Container>
  );
};

export default NotFound;
