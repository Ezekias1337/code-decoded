// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import Examen from "../components/page-specific/tomar-examen/Examen";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
//import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/tomar-examen.scss";

const TomarExamen = () => {
  return (
    <div className="tomar-examen">
      <NavBar />

      <div className="tomar-examen-wrapper padding-left-and-right">
        <PageHeader title="Tomar Examen" />
        <Examen />
      </div>

      <Footer />
    </div>
  );
};

/* 
  Sexo
    - Hombre
    - Mujer
  Edad
  Estado Civil
    - Soltero
    - Casado
    - Union Libre
    - Divorciado
    - Viudo
  Nivel de Estudios
    - Sin Informaciom
    - Primaria
    - Secundaria
    - Preparatoria o Bachillerato
    - Tecnico Superior
    - Licenciatura
    - Maestria
    - Doctorado
  Puesto de Trabajo
    - Tecnico
    - Administrativo
    - Operativo
    - Calidad
  Departamento
    - Operaciones
    - HSSW
    - RRHH
    - Import/Export
    - Mejora Continua
    - Contabilidad (NO RECUERDA EL NOMBRE AHORA)
    - Calidad
  Tipo de Puesto
    - Operativo
    - Administrativo
    - Tecnico
  Tipo de Personal
    - Sindicalizado
    - De Confianza
    - Ninguno
  Tipo de Jornada de Trabajo
    - Nocturna
    - Diurna
    - Mixto
    - Administrativo
    - Fin de Semana
    - Fin de Semana Diurna
    - Fin de Semana Nocturna
  Realiza Rotacion de Turnos
    - No
    - Si
  Tiempo en el Puesto Actual
    - Menos de 6 meses
    - Entre 6 meses y 1 año
    - Entre 1 año y 4 años
    - Entre 5 años y 9 años
    - Entre 10 años y 14 años
    - Entre 15 años y 19 años
    - Entre 20 años y 24 años
    - Mas de 25 años
  Tiempo de Experiencia Laboral
    - Menos de 6 meses
    - Entre 6 meses y 1 año
    - Entre 1 año y 4 años
    - Entre 5 años y 9 años
    - Entre 10 años y 14 años
    - Entre 15 años y 19 años
    - Entre 20 años y 24 años
    - Mas de 25 años
*/

export default TomarExamen;
