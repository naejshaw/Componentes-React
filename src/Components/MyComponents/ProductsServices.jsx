import React from 'react';
import Section from './Section';
import styled, { keyframes } from 'styled-components';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import datas from '../../utils/data.json';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid ${datas.colors.primary};
  object-fit: cover;
  animation: ${fadeIn} 2s ease-in;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 2rem;
  border: 1px solid ${datas.colors.primary};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${datas.colors.headerBackground};
  background: ${datas.colors.aboutTexts};
  padding: 0.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const Service = ({ description, imgAlt, imgPath, title }) => {
  return (
    <ServiceCard>
      <Image src={imgPath} alt={imgAlt} />
      <h3>{title}</h3>
      <p>- {description}</p>
    </ServiceCard>
  );
};

const ProductsServices = () => {
  return (
    <Section id="services">
      <Title>Produtos e Serviços</Title>
      <Container>
        <Service
          description={datas.texts.products.p1.description}
          imgAlt={datas.texts.products.p1.alt}
          imgPath={service1}
          title={datas.texts.products.p1.title}
        />
        <Service
          description={datas.texts.products.p2.description}
          imgAlt={datas.texts.products.p2.alt}
          imgPath={service2}
          title={datas.texts.products.p2.title}
        />
        <Service
          description={datas.texts.products.p3.description}
          imgAlt={datas.texts.products.p3.alt}
          imgPath={service3}
          title={datas.texts.products.p3.title}
        />
      </Container>
    </Section>
  );
};

export default ProductsServices;