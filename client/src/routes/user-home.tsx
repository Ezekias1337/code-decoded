// Library Imports
//import { useState, useEffect } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Context
import { isAuthenticated } from "../authentication/authState";
// Functions, Helpers, Utils, and Hooks
//import { useAuth } from "../context/AuthContext";
// Components
//import ProtectedRoute from "../components/protected-route/ProtectedRoute";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Card } from "../components/card/Card";
//import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
//import { Button } from "../components/button/Button";
// CSS
import "../css/page-specific/user-home.scss";
import { useAuth } from "../context/AuthContext";

const UserHome = () => {
  const user = useAuth().state.user;
  console.log(user);

  return (
    <div className="user-home padding-left-and-right">
      <HelmetProvider>
        <Helmet>
          <title>Code Decoded | User Home</title>
        </Helmet>
      </HelmetProvider>

      <PageHeader title={`Welcome, ${user?.name}`} />

      <div className="user-home-wrapper">
        <div className="user-home-options">
          <Card
            headerText="View your profile"
            bodyText="Edit your profile, change your password, or delete your account."
            buttonCount={0}
            cardVariant="imageOnly"
          />
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/user-home" as never)({
  component: UserHome,
  beforeLoad: async ({ location }) => {
    const userAuthenticated = isAuthenticated();

    if (!userAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
