import { EscuelaProfesional } from "../escuelaprofesional/escuelaprofesional.module";
import { Linea } from "../linea/linea.module";
import { Persona } from "../persona/persona.module";

export class Tutor {
  id:number;
  escuelaprofesionales:EscuelaProfesional;
  lineas:Linea;
  personas:Persona;
  constructor(  id:number=0,
    escuelaprofesionales:EscuelaProfesional=new EscuelaProfesional(),
    lineas:Linea=new Linea(),
    personas:Persona=new Persona()){
      this.id=id;
      this.escuelaprofesionales=escuelaprofesionales;
      this.lineas=lineas;
      this.personas=personas;
    }
 }

