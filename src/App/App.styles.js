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
justify-content: space-around;
width: 100%;

${mobile}{
    flex-direction: column;
}
`;


export const Footer = styled.div`
position: relative;
background-color: black;
color: white;
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
margin-bottom: 20px;
`;
export const Boton2 = styled.button`
background-color: black;
align-items: center;
color: grey;
border-color: none;
font-family: "KievitCyr-ExtraBold";
cursor: pointer;
border-right: 1px solid #999;
border-left: none;
border-top: none;
`;

export const Boton3 = styled.button`
background-color: black;
align-items: center;
color: grey;
border-color: none;
font-family: "KievitCyr-ExtraBold";
cursor: pointer;
border-right: none;
border-left: none;
border-top: none;
`;


export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 0;

background-image: url(${img}) ;
background-position: center;

overflow-x: hidden; 

`;

export const ContainerL = styled.div`

display: flex;
flex-direction: row;
align-items: center;
margin: 10px;


overflow-x: hidden; 
`;




