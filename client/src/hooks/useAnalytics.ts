// Library Imports
import { useEffect, useRef } from "react";
// Functions, Helpers, Utils, and Hooks
import sendAnalytics from "../helpers/sendAnalytics";
import getOrCreateIdentifier from "../utils/getOrCreateIdentifier";
import useDeviceInfo from "./useDeviceInfo";
import useCookieConsent from "./useCookieConsent";
import useGlobalPrivacyControl from "./useGlobalPrivacyControl";


const useAnalytics = () => {
  const hasCookieConsent = useCookieConsent();
  const hasGlobalPrivacyControl = useGlobalPrivacyControl();
  const userAgentInfo = useDeviceInfo(hasGlobalPrivacyControl);
  const userIdentifier = getOrCreateIdentifier(hasGlobalPrivacyControl, hasCookieConsent);

  // Refs to always have the latest data
  const userAgentRef = useRef(userAgentInfo);
  const userIdRef = useRef(userIdentifier);

  useEffect(() => {
    userAgentRef.current = userAgentInfo;
    userIdRef.current = userIdentifier;
  }, [userAgentInfo, userIdentifier]);

  useEffect(() => {
    if (!hasCookieConsent) return;

    const handleAnalytics = () => {
      sendAnalytics(userIdRef.current, userAgentRef.current);
    };

    const intervalId = setInterval(handleAnalytics, 1 * 60 * 1000);
    window.addEventListener("beforeunload", handleAnalytics);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("beforeunload", handleAnalytics);
    };
  }, [hasCookieConsent]);
};

export default useAnalytics;