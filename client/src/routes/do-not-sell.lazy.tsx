// Library Imports
import { useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { SwitchInput } from "../components/form/dependents/components/input-fields/SwitchInput";
// Types
import { FormState } from "../components/form/dependents/constants/formProps";
// CSS
import "../css/page-specific/do-not-sell.scss";
import "../components/form/dependents/css/form.scss";

const COOKIE_NAME = "doNotSell";

const DoNotSellPage = () => {
  const [doNotSell, setDoNotSell] = useState<FormState>({
    checked: false,
  });
  const [formErrors, setFormErrors] = useState<FormState>({
    doNotSell: "",
  });

  useEffect(() => {
    const cookie = document.cookie.includes(`${COOKIE_NAME}=true`);
    setDoNotSell({ checked: cookie });
  }, []);

  useEffect(() => {
    if (formErrors.doNotSell !== "") {
      console.log(formErrors);
    }
  }, [formErrors]);

  const toggleDoNotSell = () => {
    const newValue = !doNotSell.checked;
    document.cookie = `${COOKIE_NAME}=${newValue}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setDoNotSell({ checked: newValue });
    window.dispatchEvent(new Event("do-not-sell-updated"));
  };

  return (
    <div className="do-not-sell">
      <HelmetProvider>
        <Helmet>
          <title>Code Decoded | Do Not Sell</title>
        </Helmet>
      </HelmetProvider>

      <PageHeader title="Do Not Sell Or Share My Personal Information" />

      <div className="do-not-sell-wrapper padding-left-and-right">
        <p className="padding-top-40 padding-bottom-20">
          You can opt out of the sale or sharing of your personal information
          below.
        </p>
        <SwitchInput
          name="doNotSell"
          label="Opt-out of personal data sale"
          defaultValue={doNotSell.toString()}
          setStateHook={setDoNotSell}
          setErrorHook={setFormErrors}
          handleInputChange={toggleDoNotSell}
          required
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/do-not-sell" as never)({
  component: DoNotSellPage,
});