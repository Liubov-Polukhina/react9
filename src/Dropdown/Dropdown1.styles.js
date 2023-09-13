import styled from 'styled-components';

export const DropdownContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 240px;
  
`;

export const DropdownButton = styled.button`
  position: relative;
  
  width: 100%;
  height: 20px;
  padding: 10px 20px 10px 10px;
  margin:10px;
  font-size: 6px;
  font-family: "KievitCyr-ExtraBold";
  border: none;
  cursor: pointer;
  border-radius: 2px;
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

export const DropdownContent = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid black;
`;

export const DropdownItem = styled.button`
font-family: "KievitCyr-ExtraBold";
  padding: 10px;
  font-size: 16px;
  background-color: white;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {background-color: #B8CBD4}
 
`;
//  &:hover {
//     background-color: #f1f1f1;
//   }
