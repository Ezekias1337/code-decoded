// Library Imports
import { FC, Fragment } from "react";
// Interfaces and Types
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Components
import { Button } from "../button/Button";
// CSS
import "./card.scss";

type CardProps = {
  cardVariant: "mobile" | "bodyOnly" | "imageOnly" | "imageAndBody";
  headerText: string;
  bodyText?: string;
  buttonCount: 0 | 1 | 2;
  button1Text?: string;
  button1Variant?:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  // eslint-disable-next-line @typescript-eslint/ban-types
  button1OnClick?: Function;
  button1Icon?: IconProp;
  button1Link?: string;
  button2Text?: string;
  button2Type?: "button" | "reset";
  button2Variant?:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  // eslint-disable-next-line @typescript-eslint/ban-types
  button2OnClick?: Function;
  button2Icon?: IconProp;
  button2Link?: string;
  buttonSize?: "small" | "medium" | "large";
  imageSource?: string;
};

export const Card: FC<CardProps> = ({
  cardVariant,
  headerText,
  bodyText,
  buttonCount,
  button1Text,
  button1Variant,
  button1OnClick,
  button1Icon,
  button1Link,
  button2Text,
  button2Variant,
  button2OnClick,
  button2Icon,
  button2Link,
  buttonSize,
  imageSource,
}) => {
  if (cardVariant === "mobile") {
    return (
      <div className="card mobile-card">
        <img src={imageSource} />
        <h4>{headerText}</h4>
        <p>{bodyText}</p>
      </div>
    );
  } else if (cardVariant === "imageOnly") {
    return (
      <div
        className="card image-only-card semi-dark-image-overlay"
        style={{ backgroundImage: "url(" + imageSource + ")" }}
      >
        <p>{bodyText}</p>
        <h4 className="full-flex">{headerText}</h4>
        <div className="card-button-container"></div>
      </div>
    );
  } else if (cardVariant === "bodyOnly") {
    return (
      <div className="card body-only-card padding-top-20 padding-bottom-20 padding-left-40 padding-right-40">
        <div className="card-text-wrapper display-flex">
          <h3>{headerText}</h3>
          {bodyText ? (
            <p>
              {bodyText.split("/n").map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </Fragment>
              ))}
            </p>
          ) : (
            <></>
          )}
        </div>

        <div className="card-button-wrapper button-wrapper">
          {buttonCount >= 1 && button1OnClick ? (
            <Button
              text={button1Text !== undefined ? button1Text : undefined}
              variant={button1Variant ? button1Variant : "neutral"}
              icon={button1Icon ? button1Icon : undefined}
              leftIcon={button1Icon ? true : false}
              buttonSize={buttonSize}
              onClickHandler={button1OnClick}
            />
          ) : (
            <Button
              text={button1Text !== undefined ? button1Text : undefined}
              variant={button1Variant ? button1Variant : "neutral"}
              icon={button1Icon ? button1Icon : undefined}
              leftIcon={button1Icon ? true : false}
              buttonSize={buttonSize}
              url={button1Link}
            />
          )}
          {buttonCount === 2 && button2OnClick ? (
            <Button
              text={button2Text !== undefined ? button2Text : undefined}
              variant={button2Variant ? button2Variant : "error"}
              icon={button2Icon ? button2Icon : undefined}
              leftIcon={button2Icon ? true : false}
              buttonSize={buttonSize}
              onClickHandler={button2OnClick}
            />
          ) : button2Link ? (
            <Button
              text={button2Text !== undefined ? button2Text : undefined}
              variant={button2Variant ? button2Variant : "neutral"}
              icon={button2Icon ? button2Icon : undefined}
              leftIcon={button2Icon ? true : false}
              buttonSize={buttonSize}
              url={button2Link}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else if (cardVariant === "imageAndBody") {
    return (
      <div className="card image-and-body-card padding-top-20 padding-bottom-20 padding-left-40 padding-right-40">
        <div className="card-image-wrapper">
          <img src={imageSource} />
        </div>

        <div className="card-text-wrapper display-flex">
          <h3>{headerText}</h3>
          {bodyText ? (
            <p>
              {bodyText.split("/n").map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </Fragment>
              ))}
            </p>
          ) : (
            <></>
          )}
        </div>

        <div className="card-button-wrapper button-wrapper">
          {buttonCount >= 1 && button1OnClick ? (
            <Button
              text={button1Text !== undefined ? button1Text : undefined}
              variant={button1Variant ? button1Variant : "neutral"}
              icon={button1Icon ? button1Icon : undefined}
              leftIcon={button1Icon ? true : false}
              buttonSize={buttonSize}
              onClickHandler={button1OnClick}
            />
          ) : (
            <Button
              text={button1Text !== undefined ? button1Text : undefined}
              variant={button1Variant ? button1Variant : "neutral"}
              icon={button1Icon ? button1Icon : undefined}
              leftIcon={button1Icon ? true : false}
              buttonSize={buttonSize}
              url={button1Link}
            />
          )}
          {buttonCount === 2 && button2OnClick ? (
            <Button
              text={button2Text !== undefined ? button2Text : undefined}
              variant={button2Variant ? button2Variant : "error"}
              icon={button2Icon ? button2Icon : undefined}
              leftIcon={button2Icon ? true : false}
              buttonSize={buttonSize}
              onClickHandler={button2OnClick}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
