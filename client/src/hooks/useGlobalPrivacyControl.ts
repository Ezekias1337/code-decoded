// Library Imports
import { useEffect, useState } from "react";
// Functions, Helpers, and Utils
import hasGlobalPrivacyControl from "../utils/hasGlobalPrivacyControl";

const useGlobalPrivacyControl = (): boolean => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(hasGlobalPrivacyControl());
    }, []);

    return enabled;
};

export default useGlobalPrivacyControl;