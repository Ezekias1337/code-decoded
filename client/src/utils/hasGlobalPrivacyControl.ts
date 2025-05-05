const hasGlobalPrivacyControl = (): boolean =>
    document.cookie.includes("global_privacy_control=1");

export default hasGlobalPrivacyControl;