import   {useEffect, useState } from 'react';
import { Boton1, Container, Footer, Side, ContainerL } from "./App.styles";
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setPagina(1);
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
    
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q="+searchInput)
    .then(res => res.json())
    .then (res=> {
      setIdsObra(res.objectIDs);
    })
  }, [searchInput]);

  // Recorrer cada departamento y obtener los objetos correspondientes

  useEffect(() => {
    if(selectedOption!= null){
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${selectedOption?.departmentId}`
    )
      .then((res) => res.json())
      .then((department) => {
        setIdsObra(department.objectIDs);
      })};
  }, [selectedOption]);


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
  
 const listdeObrasImg = obras?.filter(
  (obra) => obra.primaryImageSmall
);
const tieneImagen = listdeObrasImg?.length > 0;

  return (
    <Container>       
        <Side>
        <img src={logo} width={70} height={70} margin={10} />
        <div style={{ padding: 20 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => setMessage(e.target.value)}
            /> <button onClick={(e) => setSearchInput(message)}>Update</button> </div>
        
          <Dropdown1 selectedOption={selectedOption} onSelect={handleSelect} />

        <ContainerL>
        <Login usuario ={usuario}></Login>
        <Signup usuario ={usuario} crearUsuario ={crearUsuario}></Signup>
        </ContainerL>
      </Side>   
      <>
      {/*Usamos la visualizacion condicional para no mostrar las obras hasta que existan 
      y evitar el error de acceder a elemento indefinido */}
     {tieneImagen && 
     <>
     <div>
      {obras.map(
              (obra) =>
                obra.primaryImageSmall && (
                  <Pintura obra={obra} key={obra.objectID} />
                )
            )}
      </div>
      <Boton1 onClick={actualizaPagina}>view more</Boton1>
      </>}     
  

      </>
      <Footer>
      Barcelona 2023
      </Footer> 

    </Container>


    
  );
}
export default App;
