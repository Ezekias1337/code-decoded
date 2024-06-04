// Library Imports
import { useState, useEffect, useMemo, ReactElement } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { FormState } from "../../../components/form/dependents/constants/formProps";
// Components
import Pregunta from "./Pregunta";
import { Button } from "../../button/Button";

const Examen = () => {
  const [guide1InputData, setGuide1InputData] = useState<FormState>({
    guide1pregunta1_1: false,
    guide1pregunta1_2: false,
    guide1pregunta1_3: false,
    guide1pregunta1_4: false,
    guide1pregunta1_5: false,
    guide1pregunta1_6: false,
    guide1pregunta1_7: false,
    guide1pregunta2_1: false,
    guide1pregunta2_2: false,
    guide1pregunta3_1: false,
    guide1pregunta3_2: false,
    guide1pregunta3_3: false,
    guide1pregunta3_4: false,
    guide1pregunta3_5: false,
    guide1pregunta3_6: false,
    guide1pregunta3_7: false,
    guide1pregunta4_1: false,
    guide1pregunta4_2: false,
    guide1pregunta4_3: false,
    guide1pregunta4_4: false,
    guide1pregunta4_5: false,
  });

  const [guide2InputData, setGuide2InputData] = useState<FormState>({
    guide2pregunta1_1: false,
    guide2pregunta1_2: false,
    guide2pregunta1_3: false,
    guide2pregunta1_4: false,
    guide2pregunta1_5: false,
    guide2pregunta1_6: false,
    guide2pregunta1_7: false,
    guide2pregunta2_1: false,
    guide2pregunta2_2: false,
    guide2pregunta3_1: false,
    guide2pregunta3_2: false,
    guide2pregunta3_3: false,
    guide2pregunta3_4: false,
    guide2pregunta3_5: false,
    guide2pregunta3_6: false,
    guide2pregunta3_7: false,
    guide2pregunta4_1: false,
    guide2pregunta4_2: false,
    guide2pregunta4_3: false,
    guide2pregunta4_4: false,
  });

  const [guide3InputData, setGuide3InputData] = useState<FormState>({
    guide3pregunta1_1: false,
    guide3pregunta1_2: false,
    guide3pregunta1_3: false,
    guide3pregunta1_4: false,
    guide3pregunta1_5: false,
    guide3pregunta1_6: false,
    guide3pregunta1_7: false,
    guide3pregunta2_1: false,
    guide3pregunta2_2: false,
    guide3pregunta3_1: false,
    guide3pregunta3_2: false,
    guide3pregunta3_3: false,
    guide3pregunta3_4: false,
    guide3pregunta3_5: false,
    guide3pregunta3_6: false,
    guide3pregunta3_7: false,
    guide3pregunta4_1: false,
    guide3pregunta4_2: false,
  });

  const [guide4InputData, setGuide4InputData] = useState<FormState>({
    guide4pregunta1_1: false,
    guide4pregunta1_2: false,
    guide4pregunta1_3: false,
    guide4pregunta1_4: false,
    guide4pregunta1_5: false,
    guide4pregunta1_6: false,
    guide4pregunta1_7: false,
    guide4pregunta2_1: false,
    guide4pregunta2_2: false,
    guide4pregunta3_1: false,
    guide4pregunta3_2: false,
    guide4pregunta3_3: false,
    guide4pregunta3_4: false,
    guide4pregunta3_5: false,
    guide4pregunta3_6: false,
    guide4pregunta3_7: false,
    guide4pregunta4_1: false,
    guide4pregunta4_2: false,
  });

  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [pageIndexToDisplay, setPageIndexToDisplay] = useState<number>(0);

  /* const [submissionSuccessful, setSubmissionSuccessful] =
    useState<boolean>(false);
  const [submissionInProgress, setSubmissionInProgress] =
    useState<boolean>(false); */

  const guideQuestions = [
    [
      <Pregunta
        headerText="1.- Acontecimiento traumático severo"
        setStateHook={setGuide1InputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          {
            stateName: "guide1pregunta1_1",
            textToDisplay:
              "¿Ha presenciado o sufrido alguna vez, durante o con motivo del trabajo un acontecimiento como los siguientes:",
          },
          {
            stateName: "guide1pregunta1_2",
            textToDisplay:
              "Accidente que tenga como consecuencia la muerte, la pérdida de un miembro o una lesión grave?",
          },
          { stateName: "guide1pregunta1_3", textToDisplay: "Asaltos?" },
          {
            stateName: "guide1pregunta1_4",
            textToDisplay: "Actos violentos que derivaron en lesiones graves?",
          },
          { stateName: "guide1pregunta1_5", textToDisplay: "Secuestro?" },
          { stateName: "guide1pregunta1_6", textToDisplay: "Amenazas?" },
          {
            stateName: "guide1pregunta1_7",
            textToDisplay:
              "Cualquier otro que ponga en riesgo su vida o salud, y/o la de otras personas?",
          },
        ]}
      />,
      <Pregunta
        headerText="II.- Recuerdos persistentes sobre el acontecimiento (durante el último mes)"
        setStateHook={setGuide1InputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          {
            stateName: "guide1pregunta2_1",
            textToDisplay:
              "¿Ha tenido recuerdos recurrentes sobre el acontecimiento que le provocan malestares?",
          },
          {
            stateName: "guide1pregunta2_2",
            textToDisplay:
              "¿Ha tenido sueños de carácter recurrente sobre el acontecimiento, que le producen malestar?",
          },
        ]}
      />,
      <Pregunta
        headerText="III.- Esfuerzo por evitar circunstancias parecidas o asociadas al acontecimiento (durante el último mes):"
        setStateHook={setGuide1InputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          {
            stateName: "guide1pregunta3_1",
            textToDisplay:
              "¿Se ha esforzado por evitar todo tipo de sentimientos, conversaciones o situaciones que le puedan recordar el acontecimiento?",
          },
          {
            stateName: "guide1pregunta3_2",
            textToDisplay:
              "¿Se ha esforzado por evitar todo tipo de actividades, lugares o personas que motivan recuerdos del acontecimiento?",
          },
          {
            stateName: "guide1pregunta3_3",
            textToDisplay:
              "¿Ha tenido dificultad para recordar alguna parte importante del evento?",
          },
          {
            stateName: "guide1pregunta3_4",
            textToDisplay:
              "¿Ha disminuido su interés en sus actividades cotidianas?",
          },
          {
            stateName: "guide1pregunta3_5",
            textToDisplay: "¿Ha sentido usted alejado o distante de los demás?",
          },
          {
            stateName: "guide1pregunta3_6",
            textToDisplay:
              "¿Ha notado que tiene dificultad para expresar sus sentimientos?",
          },
          {
            stateName: "guide1pregunta3_7",
            textToDisplay:
              "¿Ha tenido la impresión de que su vida se va a acortar, que va a morir antes que otras personas o que tiene un futuro limitado?",
          },
        ]}
      />,
      <Pregunta
        headerText="IV Afectación (durante el último mes):"
        setStateHook={setGuide1InputData}
        setErrorHook={setFormErrorData}
        bodyText={[
          {
            stateName: "guide1pregunta4_1",
            textToDisplay: "¿Ha tenido usted dificultades para dormir?",
          },
          {
            stateName: "guide1pregunta4_2",
            textToDisplay:
              "¿Ha estado particularmente irritable o le han dado arranques de coraje?",
          },
          {
            stateName: "guide1pregunta4_3",
            textToDisplay: "¿Ha tenido dificultades para concentrarse?",
          },
          {
            stateName: "guide1pregunta4_4",
            textToDisplay: "¿Ha estado nervioso o constantemente en alerta?",
          },
          {
            stateName: "guide1pregunta4_5",
            textToDisplay: "¿Se ha sobresaltado fácilmente por cualquier cosa?",
          },
        ]}
      />,
    ],
    { guide2Questions: [] },
    { guide3Questions: [] },
    { guide4Questions: [] },
  ];

  const renderPreguntas = (
    guideQuestions: ReactElement[][],
    pageIndexToDisplay: number
  ): JSX.Element[] => {
    let jsxToReturn: ReactElement[] = [];

    if (pageIndexToDisplay === 0) {
      jsxToReturn = guideQuestions[0];
    } else if (pageIndexToDisplay === 1) {
      jsxToReturn.push(<h3>On page 2</h3>);
    } else if (pageIndexToDisplay === 2) {
      jsxToReturn.push(<h3>On page 3</h3>);
    } else if (pageIndexToDisplay === 3) {
      jsxToReturn.push(<h3>On page 4</h3>);
    }

    return jsxToReturn;
  };

  return (
    <div className="examen-wrapper">
      <div className="examen-headers-wrapper display-grid">
        <h2 className="examen-header text-align-center">Pregunta</h2>
        <h2 className="examen-header text-align-center">Contesta</h2>
      </div>

      {renderPreguntas(guideQuestions, pageIndexToDisplay)}

      <div className="button-wrapper">
        <Button
          variant="neutral"
          buttonSize="large"
          text="Última Página"
          icon={faArrowLeft}
          leftIcon={true}
          additionalClassNames={`${
            pageIndexToDisplay === 0 ? "display-none" : ""
          }`}
          onClickHandler={() => setPageIndexToDisplay(pageIndexToDisplay - 1)}
        />
        <Button
          variant="neutral"
          buttonSize="large"
          text="Siguiente Página"
          icon={faArrowRight}
          rightIcon={true}
          additionalClassNames={`${
            pageIndexToDisplay === 3 ? "display-none" : ""
          }`}
          onClickHandler={() => setPageIndexToDisplay(pageIndexToDisplay + 1)}
        />
        <Button
          variant="primary"
          buttonSize="large"
          text="Entregar Examen"
          icon={faCheck}
          rightIcon={true}
          additionalClassNames={`${
            pageIndexToDisplay !== 3 ? "display-none" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Examen;
