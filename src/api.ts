const BASE_URL = window.location.origin;

interface RequestConfig {
  url: URL;
  options: RequestInit;
}

export const PROFESSIONALS_GET = (): RequestConfig => {
  return {
    url: new URL("/api/professionals", BASE_URL),
    options: {
      method: "get",
    },
  };
};
