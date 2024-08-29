import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  p-4 mx-auto  border rounded-md">
      <div
        className="flex justify-between p-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold text-blue">{title}</h2>
        <span className='ml-5 text-blue font-bold'>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-3 border-t text-orange">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;