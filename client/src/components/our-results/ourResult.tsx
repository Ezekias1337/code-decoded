// Library Imports
import { FC } from "react";
// CSS
import "./our-result.scss";

interface OurResultObject {
  practiceArea: string;
  description: string;
}

export interface OurResultProps {
  language: string;

  ourResultObject: {
    amountAwarded: string;
    english: OurResultObject;
    spanish: OurResultObject;
  };
}

export const OurResult: FC<OurResultProps> = ({
  language,
  ourResultObject,
}) => {
  const { english, spanish, amountAwarded } = ourResultObject;
  const { practiceArea: practiceAreaEnglish, description: descriptionEnglish } =
    english;
  const { practiceArea: practiceAreaSpanish, description: descriptionSpanish } =
    spanish;

  return (
    <div className="individual-result-container">
      <h4 className="full-flex">
        {language === "English" ? practiceAreaEnglish : practiceAreaSpanish}
      </h4>
      <h3 className="full-flex">${amountAwarded}</h3>
      <p>{language === "English" ? descriptionEnglish : descriptionSpanish}</p>
    </div>
  );
};
