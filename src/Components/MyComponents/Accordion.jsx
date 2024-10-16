import React, { useRef, useState, useEffect } from 'react';
import data from './data';
import './Accordion.css';

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);
    
    // Effect to set height dynamically based on content
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.height = '0px';
        }
    }, [isOpen]);

    return (
        <div className="wrapper">
            <button 
                className={`question-container ${isOpen ? 'active' : ''}`} 
                onClick={onClick} 
                aria-expanded={isOpen}
                aria-controls={`answer-${question.replace(/\s+/g, '-')}`} // Unique ID for accessibility
            >
                <p className='question-content'>{question}</p>
            </button>
            <div 
                ref={contentRef} 
                className="answer-container" 
                style={{ overflow: 'hidden' }} // Hide overflow to prevent content from showing when collapsed
                id={`answer-${question.replace(/\s+/g, '-')}`} // Unique ID for accessibility
            >
                <p className="answer-content">{answer}</p>
            </div>
        </div>
    );
}

// Main Accordion component
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
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
    );
};

export default Accordion;