import React from 'react';
import styled from 'styled-components';
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import datas from '../../utils/data.json'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    margin: 1rem auto;
`

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid ${datas.colors.primary};
  object-fit: contain;
  &:hover{
    object-fit: cover;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 2rem;
`

const Testimonial = ({author, imgAlt, imgPath, text}) => {
  return(
    <TestimonialCard className="testimonial">
        <Image src={imgPath} alt={imgAlt}/>
        <p>"{text}"</p>
        <p>- {author}</p>
      </TestimonialCard>
  )
}

const Testimonials = () => {
  return (
    <Section id='testimonials'>
      <h2>Depoimentos</h2>
      <Container>
        <Testimonial author={datas.texts.testimonials.t1.author} imgAlt={datas.texts.testimonials.t1.alt} imgPath={profile1} text={datas.texts.testimonials.t1.text}/>
        <Testimonial author={datas.texts.testimonials.t2.author} imgAlt={datas.texts.testimonials.t2.alt} imgPath={profile2} text={datas.texts.testimonials.t2.text}/>
        <Testimonial author={datas.texts.testimonials.t3.author} imgAlt={datas.texts.testimonials.t3.alt} imgPath={profile3} text={datas.texts.testimonials.t3.text}/>
      </Container>
    </Section>
  );
};

export default Testimonials;