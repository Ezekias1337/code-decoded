// Library Imports
import { useState, useEffect } from "react";

interface UserAgentInfo {
  browser: string | undefined;
  device: string | undefined;
  os: string | undefined;
}

const useDeviceInfo = (): UserAgentInfo => {
  const [userAgentInfo, setUserAgentInfo] = useState<UserAgentInfo>({
    browser: undefined,
    device: undefined,
    os: undefined,
  });

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    // Get browser name
    let browser: string | undefined;
    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browser = "Opera";
    } else if (userAgent.indexOf("Edge") > -1) {
      browser = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browser = "Apple Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      browser = "Mozilla Firefox";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
      browser = "Microsoft Internet Explorer";
    } else {
      browser = undefined;
    }

    // Get device type
    let device: string | undefined;
    if (/Mobi/i.test(userAgent)) {
      device = "Mobile";
    } else if (/Tablet/i.test(userAgent)) {
      device = "Tablet";
    } else {
      device = "Desktop";
    }

    // Get operating system
    let os: string | undefined;
    if (/Windows/i.test(userAgent)) {
      os = "Windows";
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
      os = "Mac OS X";
    } else if (/Linux/i.test(userAgent)) {
      os = "Linux";
    } else if (/Android/i.test(userAgent)) {
      os = "Android";
    } else if (/iOS/i.test(userAgent)) {
      os = "iOS";
    } else {
      os = undefined;
    }

    setUserAgentInfo({ browser, device, os });
  }, []);

  return userAgentInfo;
};

export default useDeviceInfo;
