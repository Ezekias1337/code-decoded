// Library Imports
import { useEffect, useCallback, useState } from "react";
import { useRouter, useLocation } from "@tanstack/react-router";
// Functions, Helpers, Utils, and Hooks
import useCookieConsent from "./useCookieConsent";
import useGlobalPrivacyControl from "./useGlobalPrivacyControl";

const usePageTracking = () => {
  const router = useRouter();
  const location = useLocation();
  const hasCookieConsent = useCookieConsent();
  const hasGlobalPrivacyControl = useGlobalPrivacyControl();


  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const handleRouteChange = useCallback(() => {
    if (!hasCookieConsent || hasGlobalPrivacyControl) {
      return
    }

    const currentVisits = JSON.parse(
      localStorage.getItem("pageVisits") || "[]"
    );
    currentVisits.push({
      path: location.pathname,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("pageVisits", JSON.stringify(currentVisits));
  }, [location.pathname, hasCookieConsent, hasGlobalPrivacyControl]);

  /* 
    ! handleRouteChange is intentionally not included in the dependency array because it causes
    ! navigations to be included twice
  */

  useEffect(() => {
    if (hasHydrated) {
      handleRouteChange();
    }
  }, [hasHydrated]);

  useEffect(() => {
    if (!hasHydrated) return;

    const unsubscribe = router.subscribe("onResolved", handleRouteChange);
    return () => unsubscribe();
  }, [router, handleRouteChange, hasHydrated]);
};

export default usePageTracking;