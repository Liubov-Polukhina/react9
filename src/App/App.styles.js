import styled from 'styled-components';
import img from "../img/imagen.webp"


const desktopStarWidth = 600;
const desktop = `@media (min-width: ${desktopStarWidth}px)`;
const mobile = `@media (max-width: ${desktopStarWidth}px)`;

export const Side = styled.div`
background-color: black;

display: flex;
flex-direction: row;
align-items: center;

width: 100%;
overflow-x: hidden; 

${mobile}{
    flex-direction: column;
}
`;


export const Footer = styled.div`
position: relative;
background-color: black;

padding: 20px;
text-align: center;
width: 100%;

overflow-x: hidden; 
`;

export const Boton1 = styled.button`
background-color: black;
font-family: "KievitCyr-ExtraBold";
color: grey;
border-color: grey;
cursor: pointer;

`;

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 0;


background-color: red;
background-image: url(${img}) ;
background-position: center;

overflow-x: hidden; 
`;





