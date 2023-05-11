import styled from 'styled-components';

export const Boton1 = styled.button`
background-color: black;
display: flex;
justify-content: end;
align-items: center;
color: grey;
font-family: "KievitCyr-ExtraBold";
cursor: pointer;

border-left: none;
border-top: none;
`;

export const BotonX = styled.button`
background-color: black;
align-self: left;
color: grey;
border-color: none;
`;


export const Pop = styled.div`
justify-content: center;
position: relative;
width: 100%
font-family: "KievitCyr-ExtraBold";
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
color:white;
opacity: 0.75;
color:white;

background-color:black;
display: flex;
align-items: center;
justify-content: center

 `;
