import { useState, useEffect } from 'react';
import axios from 'axios';

export const useEndpoint = (endpoint: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}${endpoint}`)
      .then(({ data }) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
