import styled from 'styled-components';

const desktopStarWidth = 600;
const desktop = `@media (min-width: ${desktopStarWidth}px)`;
const mobile = `@media (max-width: ${desktopStarWidth}px)`;

export const BotonX = styled.button`
cursor: pointer;
background-color: black;
align-self: left;
color: grey;
border-color: none;
`;
export const Boton3 = styled.button`

margin-top:15px;
background-color: transparent;
font-family: "KievitCyr-ExtraBold";
display: flex;
justify-content: center;
align-items: center;
color: black;
border: none;
font-weight: bold;
width: 100%;

`;

export const Overlay = styled.div`
position: fixed;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0;
top: 0;
right: 0;
bottom: 0;
left: 0;
color:white;
background-color:black;


${mobile}{
    
    flex-direction: column;
}
 `;

// export const Pop = styled.div`

// position: relative;
// width: 100%


// `;


export const Nombre = styled.div`


text-align:center;
font-family: "KievitCyr-ExtraBold";
font-weight: bold;
margin: 10px;
`;

export const Pic = styled.img`
margin-top: 25px;
width: auto;
height: auto;
justify-content: center;

${mobile}{
    width: 50%;
    height: 50%;
}
`;

export const Container1 = styled.div`
cursor: pointer;
background-color: white;
border-style: solid;
border-color: black;
text-align:center;
font-family: "KievitCyr-ExtraBold";
font-weight: bold;
margin: 10px;
`;