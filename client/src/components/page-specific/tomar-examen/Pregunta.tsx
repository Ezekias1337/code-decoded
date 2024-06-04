// Library Imports
//import { Fragment } from "react";
// Interfaces and Types
import { SetStateHookForm } from "../../../components/form/dependents/constants/formProps";
// Components
import Contesta from "./Contesta";

export interface bodyTextProp {
  stateName: string;
  textToDisplay: string;
}

const Pregunta = ({
  headerText,
  bodyText,
  setStateHook,
  setErrorHook,
}: {
  headerText: string;
  bodyText: bodyTextProp[];
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
}) => {
  return (
    <div className="pregunta-wrapper">
      <h3 className="pregunta-header">{headerText}</h3>

      <div className="pregunta-container">
        {bodyText.map((line, index) => (
          <div className="pregunta-row" key={index}>
            <h4>{line.textToDisplay}</h4>
            <Contesta
              stateName={line.stateName}
              setStateHook={setStateHook}
              setErrorHook={setErrorHook}
            />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pregunta;
