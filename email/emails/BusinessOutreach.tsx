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
        <Container style={container}>
          <Img
            src="https://codeddecoded.com/assets/images/logo/logo.png"
            width={300}
          />
        </Container>

        <Heading>
          <Text style={header}>
            Boost Your Online Presence with Code Decoded
          </Text>
        </Heading>

        <Container style={container}>
          <Text style={bodyText}>Dear Business Owner,</Text>
          <Text style={bodyText}>
            Are you looking to elevate your online presence and drive more
            business? At Code Decoded, we specialize in creating
            high-performance websites tailored to your specific needs. Our team
            uses the latest technologies to ensure your website is visually
            appealing, fast, and secure.
          </Text>
          <Text style={bodyText}>
            Many businesses like yours struggle with outdated designs and slow
            loading times. Let us help you overcome these challenges with a
            website that is optimized for performance and designed to convert
            visitors into customers.
          </Text>

          <Container style={buttonContainer}>
            <Button href="https://codeddecoded.com/contact-us" style={button}>
              <Text style={buttonText}>Schedule a Free Consultation</Text>
            </Button>
            <Button href="https://codeddecoded.com" style={button}>
              <Text style={buttonText}>Visit our Website</Text>
            </Button>
          </Container>

          <Text style={bodyText}>Best regards,</Text>
          <Text style={bodyText}>Frank Edwards</Text>
          <Text style={bodyText}>+1 (682) 325-9573</Text>
        </Container>
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
  color: getColor("$primary-200"),
  lineHeight: "40px",
  paddingBottom: "40px",
  display: "flex",
  justifyContent: "center",
};

const bodyText = {
  fontSize: getFontSize("$header-4"),
  lineHeight: "30px",
  color: getColor("$neutral-100"),
  marginBottom: "20px",
};

const container = {
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 20px 40px 40px",
};

const buttonContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
};

const button = {
  backgroundColor: getColor("$primary-500"),
  color: getColor("$primary-900"),
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "8px",
  paddingBottom: "8px",
  border: "1.5px solid",
  borderRadius: getBorderRadius("$border-radius"),
  boxShadow: getBoxShadow("$neutral-glow"),
  fontSize: getFontSize("$header-4"),
  width: "100%",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const buttonText = {
  fontSize: getFontSize("$header-4"),
  lineHeight: "30px",
  color: getColor("$primary-900"),
};
