import { useCallback, useState } from "react";
import { Meals } from "../components/Meals/AvailableMeals";

export type RequestConfig = {
  requestConfig: {
    url: string;
    method?: string;
    headers?: any;
    body?: any;
  };
  applyData: (data: Meals[]) => void;
};

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const sendRequest = useCallback(
    async ({ requestConfig, applyData }: RequestConfig) => {
      setIsLoading(true);
      setHttpError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        applyData(responseData);
      } catch (error: any) {
        setHttpError(error.message);
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    httpError,
    sendRequest,
  };
};
