import  React, {useEffect, useState } from 'react';
import { Boton1, BotonX, Pop, Overlay} from "./SignupJs.styles";

function Signup (props){

const [info, setInfo] = useState(false);
const [email, setEmail] = useState(props.usuario.user);
const [passw, setPassw] = useState(props.usuario.pass);
const abrir = () => {
    setInfo(true);
}
const cerrar = () => {
    setInfo(false);
}
   
const comprobar = (event) => {
    event.preventDefault();
    setPassw(event.target.elements.passw.value);
    setEmail(event.target.elements.email.value);
}

useEffect(() => {
    props.crearUsuario({user:email, pass:passw})
    console.log("Cambio de usuario y contraseña, con usuario: "+ email + " y contraseña: " + passw)
  }, [email, passw]);
   
return(
    <>
    <Boton1 onClick={abrir}> SIGN UP </Boton1>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        <Pop>
        <div>
			<form onSubmit={comprobar}> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="button">Sign Up</button>
			</form>
		</div>
    
        </Pop>
        </Overlay>
        }
    </>
)
};

export default Signup;