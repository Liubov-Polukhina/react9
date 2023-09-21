import { useEffect, useState } from 'react';

import axios from 'axios';
import { DropdownContainer, DropdownButton, DropdownContent, DropdownItem } from './Dropdown1.styles';


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