import {
  Button,
  Html,
  Body,
  Img,
  Heading,
  Text,
  Link,
  Container,
} from "@react-email/components";
import * as React from "react";

import getColor from "../helpers/getColor";
import getFontSize from "../helpers/getFontSize";
import getBorderRadius from "../helpers/getBorderRadius";
import getBoxShadow from "../helpers/getBoxShadow";

export default function Email() {
  return (
    <Html>
      <Body style={main}>
        <Container style={imageContainer}>
          <Img
            src="https://codeddecoded.com/assets/images/logo/logo.png"
            width={300}
          />
        </Container>

        <Heading>
          <Text style={header}>Dear John Doe, </Text>
        </Heading>
        <Text style={bodyText}>
          Thank you for signing up with us. Your verification code is:
        </Text>

        <Container style={container}>
          <Text style={verificationCode}>123456</Text>
        </Container>

        <Text style={bodyText}>
          If you did not request a verification code, please disregard this
          email.
        </Text>
      </Body>
    </Html>
  );
}

const main = {
  fontFamily: '"Times New Roman",Times,serif',
  backgroundColor: getColor("$neutral-800"),
  margin: "0 auto",
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingTop: "80px",
  paddingBottom: "80px",
};

const header = {
  fontSize: "56.8px",
  color: getColor("$primary-100"),
  lineHeight: "40px",
  paddingBottom: "40px",
};

const bodyText = {
  fontSize: getFontSize("$header-4"),
  lineHeight: "30px",
  color: getColor("$neutral-100"),
};

const container = {
  border: "1.5px solid",
  borderColor: getColor("$primary-500"),
  borderRadius: getBorderRadius("$border-radius"),
  padding: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "80px",
  marginBottom: "80px",
};

const imageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const verificationCode = {
  fontSize: getFontSize("$header-2"),
  lineHeight: "30px",
  color: getColor("$neutral-100"),
};
