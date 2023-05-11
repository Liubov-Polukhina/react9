import styled from 'styled-components';

export const DropdownContainer = styled.div`  

  position: absolute;

  display: flex;
  align-items: center;
`;

export const DropdownButton = styled.button`
  background-color: #4CAF50;
  align-items: center;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`

  position: absolute;
  z-index: 1;
`;

export const DropdownItem = styled.button`
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