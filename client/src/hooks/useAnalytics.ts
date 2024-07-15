// Library Imports
import { useEffect, useMemo } from "react";
// Functions, Helpers, Utils, and Hooks
import useDeviceInfo from "./useDeviceInfo";

const useAnalytics = () => {
  const userAgentInfo = useDeviceInfo();

  const sendAnalytics = useMemo(() => {
    return () => {
      const pageVisits = JSON.parse(localStorage.getItem("pageVisits") || "[]");
      if (pageVisits.length > 0) {
        const payload = {
          userAgentInfo,
          pageVisits,
        };

        fetch("/api/analytics/update-analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        localStorage.removeItem("pageVisits");
      }
    };
  }, [userAgentInfo]);

  useEffect(() => {
    const intervalId = setInterval(sendAnalytics, 5 * 60 * 1000); // Every 5 minutes

    window.addEventListener("beforeunload", sendAnalytics);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("beforeunload", sendAnalytics);
    };
  }, [sendAnalytics]);
};

export default useAnalytics;
