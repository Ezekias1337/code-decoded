// Library Imports
import { useEffect, useMemo } from "react";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData";
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

        fetchData("/api/analytics/update-analytics", {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        localStorage.removeItem("pageVisits");
      }
    };
  }, [userAgentInfo]);

  useEffect(() => {
    /* 
      This sets an interval to send analytics every minute, to decrease the frequency,
      change the 1 to the desired time in minutes
    */
    const intervalId = setInterval(sendAnalytics, 1 * 60 * 1000);

    window.addEventListener("beforeunload", sendAnalytics);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("beforeunload", sendAnalytics);
    };
  }, [sendAnalytics]);
};

export default useAnalytics;
