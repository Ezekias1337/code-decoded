// Library Imports
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  faPencil,
  faGlobe,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
// Context
import { isAuthenticated } from "../authentication/authState";
// Functions, Helpers, Utils, and Hooks
import { useAuth } from "../context/AuthContext";
// Types and Interfaces
import { Role } from "../constants/interfaces/user";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Card } from "../components/card/Card";
import { Loader } from "../components/general-page-layout/loader/Loader";
// CSS
import "../css/page-specific/user-home.scss";

const UserHome = () => {
  const user = useAuth().state.user;

  return (
    <div className="user-home padding-left-and-right">
      <HelmetProvider>
        <Helmet>
          <title>Code Decoded | User Home</title>
        </Helmet>
      </HelmetProvider>

      {user === null ? (
        <div className="padding-top-80 padding-bottom-80">
          <Loader variant="primary" />
        </div>
      ) : (
        <>
          <PageHeader title={`Welcome, ${user?.name}`} />

          <div className="user-home-wrapper padding-top-40 padding-bottom-80">
            <div className="user-home-options full-flex gap-20">
              <Card
                headerText="Profile"
                bodyText="Edit your profile, change your password, or delete your account"
                buttonCount={2}
                cardVariant="bodyOnly"
                button1Text="Edit Profile"
                button1Link={`/edit-profile?id=${user.id}`}
                button1Variant="primary-dark"
                button1Icon={faPencil}
                buttonSize="medium"
              />
              <Card
                headerText="Websites & Apps"
                bodyText="View and manage your websites and apps developed by Code Decoded"
                buttonCount={1}
                cardVariant="bodyOnly"
                button1Text="View Websites & Apps"
                button1Link="/websites-and-apps"
                button1Variant="primary-dark"
                button1Icon={faGlobe}
                buttonSize="medium"
              />
              {user?.role === Role.Admin  && (
                  <>
                    <Card
                      headerText="Users"
                      bodyText="View and manage the users of Code Decoded"
                      buttonCount={1}
                      cardVariant="bodyOnly"
                      button1Text="View Accounts"
                      button1Link="/accounts"
                      button1Variant="primary-dark"
                      button1Icon={faUser}
                      buttonSize="medium"
                    />
                    <Card
                      headerText="Analytics"
                      bodyText="View the analytics of Code Decoded broken down by browser, device type, and operating system along with the corresponding page visits."
                      buttonCount={1}
                      cardVariant="bodyOnly"
                      button1Text="View Analytics"
                      button1Link="/analytics"
                      button1Variant="primary-dark"
                      button1Icon={faChartPie}
                      buttonSize="medium"
                    />
                  </>
                )}
            </div>
          </div>
        </>
      )}
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
