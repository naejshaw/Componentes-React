import React, { useRef, useState } from 'react'
import data from './data';
import  './Accordion.css';

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{question}</p>
       </button>
   
        <div ref={contentHeight} className="answer-container" style={
             isOpen
             ? { height: contentHeight.current.scrollHeight }
             : { height: "0px" }
            }>
         <p className="answer-content">{answer}</p>
        </div>
      </div>
     )
   }

// main Accordion component
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='accordion-container'>
       {data.map((item, index) => (
       <AccordionItem
        key={index}
        question={item.question}
        answer={item.answer}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
   
   export default Accordion;