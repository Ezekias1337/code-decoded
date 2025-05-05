// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData";
// Interfaces and Types
import { UserAgentInfo } from "../hooks/useDeviceInfo";


const sendAnalytics = async (userIdentifier: string | null, userAgentInfo: UserAgentInfo) => {
    const pageVisits = JSON.parse(localStorage.getItem("pageVisits") || "[]");
    if (userIdentifier === null) {
        return
    }

    if (pageVisits.length > 0) {
        const payload = {
            userIdentifier,
            userAgentInfo,
            pageVisits,
            baseUrl: window.location.origin,
        };

        fetchData("/api/analytics/update-analytics", {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }
};

export default sendAnalytics;