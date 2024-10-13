import React from 'react';
import styled from 'styled-components';
import background from '../../assets/background.jpg'
import fachada from '../../assets/fachada.jpg'
import datas from '../../utils/data.json'

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  `
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    margin: 3rem auto 0 auto;
    background: url(${background}) no-repeat cover ;
`
//TODO: Extrair as cores de um JSON  
 const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid ${datas.colors.linkHover};
  object-fit: cover;
`
const BackgroundImage = styled.img`
position: absolute;
z-index: -999;
top: 0;
left: 0;
height: 100vh;
width: 100%;
object-fit: cover;
`
  
const Text = styled.p`
  text-align: justify;
  font-style: italic;
  text-wrap: wrap;
  width: 60%;
  align-self: center;
  background: ${datas.colors.aboutTexts};
  padding: 1rem;
  border-radius: 1rem;
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: ${datas.colors.headerBackground};
    background: ${datas.colors.aboutTexts};
    padding: .5rem;
    border-radius: 1rem;
`

const AboutUs = () => {
  return (
    <Section id='about'>
      <Title>Sobre Nós</Title>
      <Container>
        {/*TODO: Extrair as images de um JSON*/}
        <Image src={fachada} alt='Teste'/>
        {/*TODO: Extrair o texto de um JSON*/}
        <Text>
          {datas.texts.bio}
        </Text>
      </Container>
      <BackgroundImage src={background} alt='Teste'/>
    </Section>
  );
};

export default AboutUs;