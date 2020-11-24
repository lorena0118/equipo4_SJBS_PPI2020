import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import  InicioSesion  from "../Components/InicioSesion";
import  MetodosAnticonceptivos  from "../Components/MetodosAnticonceptivos";
import  Foro  from "../Components/Foro";
import  Navigation  from "../Components/Navigation";
import  Temas  from "../Components/Temas";
import  MiCuenta  from "../Components/MiCuenta";
import  Juegos  from "../Components/Juegos";
import  Ets  from "../Components/Ets";
import  CrearForo  from "../Components/CrearForo";
import  Calendario  from "../Components/Calendario";
import  ConfigCuenta  from "../Components/ConfigCuenta";
import  JuegoEnfermedades  from "../Components/JuegoEnfermedades";
import  Embarazo  from "../Components/Embarazo";
import  MetodosQuimicos  from "../Components/MetodosQuimicos";
import  MetodosBarrera from "../Components/MetodosBarrera";
import MetodosNaturales from "../Components/MetodosNaturales";
import MetodosQuirurjicos from "../Components/MetodosQuirurjicos";
import Gonorrea from "../Components/Gonorrea";
import JuegoMetodosAnticonceptivos from "../Components/JuegoMetodosAnticonceptivos";
import JuegosEmbarazo from "../Components/JuegosEmbarazo";
import JuegosRandom from "../Components/JuegosRandom";
import LineasAmigas from "../Components/LineasAmigas";
import VerrugasGenitales from "../Components/VerrugasGenitales";
import Herpes from "../Components/Herpes";
import VihSida from "../Components/VihSida";
import HepatitisB from "../Components/HepatitisB";
import VirusPapiloma from "../Components/VirusPapiloma";
import Clamidia from "../Components/Clamidia";
import IngresarForo from "../Components/IngresarForo";

export default function Ppicontainer() {
  return (
    <BrowserRouter>
      <Route path="/Navigation" component={Navigation} />
      <Route path="/InicioSesion" component={InicioSesion} />
      <Route path="/Foro" component={Foro} />
      <Route path="/MetodosAnticonceptivos" component={MetodosAnticonceptivos} />
      <Route path="/Inicio" component={Temas} />
      <Route path="/MiCuenta" component={MiCuenta} />
      <Route path="/Juegos" component={Juegos} />
      <Route path="/Ets" component={Ets} />  
      <Route path="/CrearForo" component={CrearForo} />  
      <Route path="/Calendario" component={Calendario} />  
      <Route path="/ConfigCuenta" component={ConfigCuenta} /> 
      <Route path="/JuegoEnfermedades" component={JuegoEnfermedades} />
      <Route path="/Embarazo" component={Embarazo} />
      <Route path="/MetodosQuimicos" component={MetodosQuimicos} />
      <Route path="/MetodosBarrera" component={MetodosBarrera} />
      <Route path="/MetodosNaturales" component={MetodosNaturales} />
      <Route path="/MetodosQuirurjicos" component={MetodosQuirurjicos} />
      <Route path="/Gonorrea" component={Gonorrea} />
      <Route path="/JuegoMetodosAnticonceptivos" component={JuegoMetodosAnticonceptivos} />
      <Route path="/JuegosEmbarazo" component={JuegosEmbarazo} />
      <Route path="/JuegosRandom" component={JuegosRandom} />
      <Route path="/VerrugasGenitales" component={VerrugasGenitales} />
      <Route path="/Herpes" component={Herpes} />
      <Route path="/VihSida" component={VihSida} />
      <Route path="/HepatitisB" component={HepatitisB} />
      <Route path="/VirusPapiloma" component={VirusPapiloma} /> 
      <Route path="/LineasAmigas" component={LineasAmigas} /> 
      <Route path="/Clamidia" component={Clamidia} /> 
      <Route path="/IngresarForo" component={IngresarForo} /> 
      </BrowserRouter>
  );
}
