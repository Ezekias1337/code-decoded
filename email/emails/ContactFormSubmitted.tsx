import {
  Button,
  Html,
  Body,
  Img,
  Heading,
  Text,
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
        <Img
          src="https://www.osa-law.com/assets/Full_Logo-0c350564.png"
          width={300}
        />
        <Heading>
          <Text style={header}>We have received a new potential customer:</Text>
        </Heading>
        <Text style={customerInfo}>
          <strong style={customerInfoStrong}>Name:</strong> Frank Edwards
        </Text>
        <Text style={customerInfo}>
          <strong style={customerInfoStrong}>Phone Number:</strong> +1 (555)
          555-5555
        </Text>
        <Text style={customerInfo}>
          <strong style={customerInfoStrong}>Email Address:</strong>{" "}
          johndoe@placeholder.com
        </Text>
        <Text style={customerInfo}>
          <strong style={customerInfoStrong}>Product Tier:</strong> Static
          Website or App
        </Text>
        <Text style={customerInfo}>
          <strong style={customerInfoStrong}>Website Description:</strong> Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
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
  color: getColor("$primary-500"),
  lineHeight: "40px",
  paddingBottom: "40px",
};

const customerInfo = {
  fontSize: getFontSize("$header-4"),
  lineHeight: "30px",
  color: getColor("$neutral-100"),
};

const customerInfoStrong = {
  ...customerInfo,
  color: getColor("$primary-300"),
};
