import { ApiResponse } from "./useGetRequest";
import { useState, useEffect } from 'react';

export function useMockRequest<T extends object>(data: T): ApiResponse<T> {
  const [response, setResponse] = useState<T>(data);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMockData = async () => {
    setLoading(true);
    try {
      setResponse(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMockData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data: response, error, loading };

}