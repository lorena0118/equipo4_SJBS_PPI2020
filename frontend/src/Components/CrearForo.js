import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";


const CrearForo = (props) => {
  const initalState = {
    codigo:"",
    titulo: "",
    descripción: ""
  }
  const[foro, setForo] = useState(initalState)

  function handlerChange(e){
    setForo({...foro, [e.target.codigo] : e.target.value})
  }

  function submitData(e){
    e.preventDefault()
    fetch('http://localhost:3001/api/foro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foro)
    })
  }

const {history} = props;


  return (
    <div className="container">
      <Navigation/>
      
      <br/><br/>
      <center>
        <h1> ¡Crea tu foro! </h1>
      </center>      
              
        <br/><br/>

        <div>
          <img src="./img/IMAGENCREARFORO.PNG" width="100%" height="100%" />
        </div>
        <br/><br/> 
        <h4> ¡Llena los siguientes datos! </h4>
        <br/><br/> 
        
        <form onSubmit={submitData}>
        <div class="form-group">
          <label for="exampleInputEmail1">Nombre del foro.</label>
          <input  
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={(e) => handlerChange(e)}
            required
          />
    
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Descripción del Foro:</label>
          <textarea 
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            onChange={(e) => handlerChange(e)}
            required>
            
          </textarea>
        </div>
        <button type="button" className="btn btn-danger">Crear</button>
        </form>
    <br/><br/> <br/>
</div>
  );
};
export default withRouter(CrearForo);