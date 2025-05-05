// Library Imports
import {v4 as uuidv4} from 'uuid';

const getOrCreateIdentifier = (hasGlobalPrivacyControl: boolean, hasCookieConsent: boolean): string | null => {
    let identifier = localStorage.getItem("userIdentifier");

    if (hasGlobalPrivacyControl || !hasCookieConsent) {
        return null;
    }

    if (!identifier) {
        identifier = uuidv4();
        localStorage.setItem("userIdentifier", identifier);
    }

    return identifier;
};

export default getOrCreateIdentifier;