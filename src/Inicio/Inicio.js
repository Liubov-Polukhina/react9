import   {useEffect, useState } from 'react';
import { Boton1, Container, Footer, Side, ContainerL } from "../App/App.styles";
import Signup from '../Signup/Signup';
import Login from '../Login/Login';




const Inicio = () => {
    const [usuario, setUsuario] = useState(() =>{
      try {
        const item=window.localStorage.getItem('usuario')
        return  item ? JSON.parse(item) : {user:null, pass:null}
      }
      catch(error){
        return {user:null, pass:null}
      }}
      );
    
    const crearUsuario = (nuevoUsuario) => {
      setUsuario(nuevoUsuario);
      try{
        window.localStorage.setItem('usuario',  JSON.stringify(nuevoUsuario));
      }catch (error){
          console.error(error);
      }
    }
  
    return (
      <Container> 
        <div>Acceso a las obras</div>      
          <Side>
          <ContainerL>
            
          <Login usuario ={usuario}></Login>
          <Signup usuario ={usuario} crearUsuario ={crearUsuario}></Signup>
          </ContainerL>
        </Side> 
  
      </Container>
  
  
      
    );
  }
  export default Inicio;
  