import   { useState } from 'react';
import { Pop, Overlay, Boton3, BotonX, Nombre, Pic, Container1} from "./Pintura.styles";
import { Container } from '../App/App.styles';

function Pintura (props){

    // const [naves, setNaves] = useState([]);
    const [info, setInfo] = useState(false);
    
    const abrir = () => {
        setInfo(true);
    }
    const cerrar = () => {
        setInfo(false);
    }
    
    

    return(
        <>
        <Container1 onClick={abrir}>
        <Boton3 > {props.obra.title} {props.obra.artistDisplayName} </Boton3>
        <Pic src={props.obra.primaryImageSmall}></Pic>  
        </Container1> 
            {info && <Overlay>
            <BotonX onClick={cerrar}> X </BotonX>    
            
            {/* <Pop> */}
            
            <div>
            <Nombre> {props.obra.title}</Nombre>
            <Nombre> {props.obra.artistDisplayName}</Nombre>
            <Nombre> {props.obra.department}</Nombre>
            <Nombre> {props.obra.period}</Nombre>
            <Nombre> {props.obra.medium}</Nombre>
            </div>
            <Pic src={props.obra.primaryImageSmall}></Pic>
            
    
            {/* </Pop> */}
            
            </Overlay>
            }
        </>
    )
    };
    
    
    export default Pintura;