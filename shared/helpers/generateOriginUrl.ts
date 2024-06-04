export const generateOriginUrl = (
  originUrlBase: string,
  backendPort: string,
  isDev: string
): string => {
  let originUrl: string;

  if (isDev === "TRUE") {
    originUrl = `${originUrlBase}:${backendPort}`;
  } else {
    originUrl = `${originUrlBase}`;
  }

  return originUrl;
};
