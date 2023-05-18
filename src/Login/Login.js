import   {useEffect, useState } from 'react';
import { Boton1, BotonX, Pop, Overlay} from "./Login.styles";

function Login (props){

const [info, setInfo] = useState(false);
const [email, setEmail] = useState("");
const [passw, setPassw] = useState("");
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
    if (email== props.usuario.user && passw == props.usuario.pass){
        
        console.log("Log in correcto con usuario: "+ email + " y contraseña: " + passw);
    }else{
        console.log("Log in incorrecto con usuario: "+ email + " y contraseña: " + passw);
    }
  }, [email, passw]);
   
return(
    <>
    <Boton1 onClick={abrir}> LOG IN </Boton1>
        
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
				<button type="button">Login</button>
			</form>
		</div>
    
        </Pop>
        </Overlay>
        }
    </>
)
};

export default Login;