import { useEffect, useCallback, useState } from "react";
import { useRouter, useLocation } from "@tanstack/react-router";

const usePageTracking = () => {
  const router = useRouter();
  const location = useLocation();

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const handleRouteChange = useCallback(() => {
    const currentVisits = JSON.parse(
      localStorage.getItem("pageVisits") || "[]"
    );
    currentVisits.push({
      path: location.pathname,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("pageVisits", JSON.stringify(currentVisits));
  }, [location.pathname]);

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
