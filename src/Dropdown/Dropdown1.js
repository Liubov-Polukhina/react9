import React, { useState } from 'react';
import styled from 'styled-components';




const DropdownContainer = styled.div`
top: 30px;
position: relative;
display: inline-block;
`;


const DropdownButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`

  position: absolute;
  z-index: 1;
  
`;

const DropdownItem = styled.button`
  color: black;
  padding: 10px;
  background-color: white;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;



const Dropdown1 = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          Select the department
        </DropdownButton>
        {isOpen && (
          <DropdownContent>
            {options.map(option => (
              <DropdownItem key={option.departmentId} onClick={() => handleSelect(option.displayName)}>
                {option.displayName}
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
      </DropdownContainer>
    
  );
};

export default Dropdown1;