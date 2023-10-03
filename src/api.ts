const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

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
