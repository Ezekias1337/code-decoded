// Library Imports
import { useEffect, useState } from "react";
// Functions, Helpers, and Utils
import hasCookieConsent from "../utils/hasCookieConsent";

const useCookieConsent = () => {
    const [hasConsent, setHasConsent] = useState(() => hasCookieConsent());

    useEffect(() => {
        if (hasConsent) return;

        const handler = () => setHasConsent(true);
        window.addEventListener("cookie-consent-granted", handler);

        return () => {
            window.removeEventListener("cookie-consent-granted", handler);
        };
    }, [hasConsent]);

    return hasConsent;
};

export default useCookieConsent;