import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';



// const DropdownContainer = styled.div`
// top-margin: 10px;
// `;


// const DropdownButton = styled.button`

// font-family: "KievitCyr-ExtraBold";
//   background-color: grey;
//   color: white;
//   padding: 10px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
// `;

// const DropdownContent = styled.div`

//   position: absolute;
//   z-index: 1;
  
// `;

// const DropdownItem = styled.button`
//   color: black;
//   padding: 10px;
//   background-color: white;
//   border: none;
//   width: 70%;
//   text-align: left;
//   cursor: pointer;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

export const DropdownContainer = styled.div.attrs(() => ({
  className: "dopdownContainer",
}))`
  position: relative;
  display: inline-block;
  width: 340px;
`;

export const DropdownButton = styled.button.attrs(() => ({
  className: "dropdownButton",
}))`
  position: relative;
  width: 100%;
  padding: 10px 20px 10px 10px;
  margin:10px;
  font-size: 16px;
  font-family: "KievitCyr-ExtraBold";
  border: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: #000000 transparent transparent transparent;
`;

export const DropdownContent = styled.div.attrs(() => ({
  className: "dropdownContent",
}))`
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid black;
`;

export const DropdownItem = styled.button.attrs(() => ({
  className: "dropdownItem",
}))`
font-family: "KievitCyr-ExtraBold";
  padding: 10px;
  font-size: 16px;
  background-color: white;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;



const Dropdown1 = ({ onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const handleSelect = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

useEffect(() => {
  const getDepartments = async () => {
      const data = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments');
      console.log('data.data.departments', data.data.departments)
      setDepartments(data.data.departments);
  }
  getDepartments();
}, [])

  return (
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.displayName || "Select the department"}
        </DropdownButton>
        {isOpen && (
          <DropdownContent>
        {
          departments?.map(d => 
          <DropdownItem 
          key={d.departmentId} 
          value={d.departmentId}
          onClick={() => handleSelect(d)}
          >
            {d.displayName}
          </DropdownItem>)
        }
          </DropdownContent>
        )}
      </DropdownContainer>
    
  );
};

export default Dropdown1;