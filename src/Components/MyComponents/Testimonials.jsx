import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data.json';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  margin: 1rem auto;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid ${datas.colors.primary};
  object-fit: contain;
  &:hover {
    object-fit: cover;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${datas.colors.headerBackground};
  background: ${datas.colors.aboutTexts};
  padding: 0.5rem;
  border-radius: 1rem;
`;

const Testimonial = ({ author, imgAlt, imgPath, text }) => {
  return (
    <TestimonialCard className="testimonial">
      <Image src={imgPath} alt={imgAlt} />
      <p>"{text}"</p>
      <p>- {author}</p>
    </TestimonialCard>
  );
};

const Testimonials = () => {
  const testimonials = datas.texts.testimonials;

  return (
    <Section id="testimonials">
      <Title>Depoimentos</Title>
      <Container>
        {Object.keys(testimonials).map((key, index) => (
          <Testimonial
            key={index}
            author={testimonials[key].author}
            imgAlt={testimonials[key].alt}
            imgPath={require(`../../assets/profile${index + 1}.jpg`)}
            text={testimonials[key].text}
          />
        ))}
      </Container>
    </Section>
  );
};

export default Testimonials;