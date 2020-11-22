import React from "react";
import {Link, withRouter} from "react-router-dom";
import Navigation from "./Navigation";
import BotonBack from "./BotonBack";

const CrearForo = (props) => {
  const initalState = {
    codigo:"",
    titulo: ""
  }
  const[Foro, setForo] = useState(initalState)

  function handlerChange(e){
    setForo({...Foro, [e.target.codigo] : e.target.value})
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
      <BotonBack/>
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
        </form>
    <br/><br/> 
    

  <center>
    <button 
      type="submit" 
      className="btn btn-outline-primary">
        Agendar
    </button>

<br/><br/>
<button type="button" className="btn btn-danger">Crear</button>
</center>

<br/><br/><br/><br/>
</div>
  );
};
export default withRouter(CrearForo);