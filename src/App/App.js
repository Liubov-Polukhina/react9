import  React, {useEffect, useState } from 'react';
import { Boton1, Container, Footer, Side } from "./App.styles";
import "./App.css";
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Pintura from '../Pintura/Pintura';
import logo from "../img/logo.webp"
import Dropdown1 from "../Dropdown/Dropdown1"

const App = () => {
  const [usuario, setUsuario] = useState(() =>{
    try {
      const item=window.localStorage.getItem('usuario')
      return  item ? JSON.parse(item) : {user:null, pass:null}
    }
    catch(error){
      return {user:null, pass:null}
    }}
    );
  const [idsObra, setIdsObra] = useState([]);
  const [obras, setObras] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [searchInput, setSearchInput] = useState("cats"); 
  const [message, setMessage] = useState('');
  const [departments, setDepartments] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
console.log(departments)
  const handleSelect = (option) => {
    setSelectedOption(option.displayName);
  };

  const crearUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
    try{
      window.localStorage.setItem('usuario',  JSON.stringify(nuevoUsuario));
    }catch (error){
        console.error(error);
    }
  }
  const actualizaPagina = () => {
    let p = pagina;
    setPagina(p+1)
  }

  useEffect(() => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
    .then(res => res.json())
    .then (res=> {

      setDepartments(res.departments);
    })
  }, []);

  useEffect(() => {
    
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q="+searchInput)
    .then(res => res.json())
    .then (res=> {
      setIdsObra(res.objectIDs);
    })
  }, [searchInput]);

  async function fetchAll() {
    let ids = idsObra.slice(pagina*10-10, pagina*10);

    if (ids.length === 0){
        
      }
      else {
    const results = await Promise.all(ids.map((id) => fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+id).then((r) => r.json())));
    setObras(results)

  }
}

useEffect(() => {
    fetchAll();
 }, [pagina, idsObra]);
  


  return (
    <Container>       
        <Side>
        <img src={logo} width={70} height={70} />
        <div style={{ padding: 20 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => setMessage(e.target.value)}
            /> <button onClick={(e) => setSearchInput(message)}>Update</button> </div>

        {/* <Dropdown departments= {departments}></Dropdown> */}
        <div>
          <Dropdown1 options={departments} onSelect={handleSelect} />
          <p>Selected option: {selectedOption}</p>
        </div>

        
        <Login usuario ={usuario}></Login>
        <Signup usuario ={usuario} crearUsuario ={crearUsuario}></Signup>
      </Side>   
      <>
      {/*Usamos la visualizacion condicional para no mostrar las obras hasta que existan 
      y evitar el error de acceder a elemento indefinido */}
     {obras.length != 0 && <div>
      
      <Pintura  obra = {obras[0]}> </Pintura>
      <Pintura  obra = {obras[1]}> </Pintura>
      <Pintura  obra = {obras[2]}> </Pintura>
      <Pintura  obra = {obras[3]}> </Pintura>
      <Pintura  obra = {obras[4]}> </Pintura>
      <Pintura  obra = {obras[5]}> </Pintura>
      <Pintura  obra = {obras[6]}> </Pintura>
      <Pintura  obra = {obras[7]}> </Pintura>
      <Pintura  obra = {obras[8]}> </Pintura>
      <Pintura  obra = {obras[9]}> </Pintura>

      </div>}     


      </>
      <Footer>
      <Boton1 onClick={actualizaPagina}>view more</Boton1>
      </Footer> 

    </Container>


    
  );
}
export default App;
