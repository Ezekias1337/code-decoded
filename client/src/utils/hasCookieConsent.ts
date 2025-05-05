const hasCookieConsent = () => document.cookie.includes("cookieAccepted=true");

export default hasCookieConsent;