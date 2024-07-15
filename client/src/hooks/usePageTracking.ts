// Library Imports
import { useEffect } from "react";
import { useRouter, RouterEvent } from "@tanstack/react-router";

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (event: RouterEvent) => {
      const { toLocation } = event;
      const currentVisits = JSON.parse(
        localStorage.getItem("pageVisits") || "[]"
      );
      currentVisits.push({
        path: toLocation.pathname,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("pageVisits", JSON.stringify(currentVisits));
    };

    const unsubscribe = router.subscribe("onResolved", handleRouteChange);

    return () => {
      unsubscribe();
    };
  }, [router]);
};

export default usePageTracking;
