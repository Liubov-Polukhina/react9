import  React, {useEffect, useState } from 'react';
import { Boton1, BotonX, Pop, Overlay} from "./SignupJs.styles";

function Signup (props){

const [info, setInfo] = useState(false);
const [email, setEmail] = useState(props.usuario.user);
const [passw, setPassw] = useState(props.usuario.pass);
const [registrado, setRegistrado] = useState(false);

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
    if (email== "" && passw == ""){
        console.log("No se puede crear usuario y contraseña vacios" )
    }else if(email!= null && passw != null){
        setRegistrado(true);
        props.crearUsuario({user:email, pass:passw})
        console.log("Cambio de usuario y contraseña, con usuario: "+ email + " y contraseña: " + passw)
    }else {
        setRegistrado(false);
    }
    
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
				<button type="submit">Sign Up</button>
			</form>
		</div>
        {registrado && <div>Estas registrado</div>}
        </Pop>
        </Overlay>
        }
    </>
)
};

export default Signup;