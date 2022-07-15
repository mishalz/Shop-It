import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Problem occured in fetching!");
      }

      const data = await response.json();
      const itemsList = [];
      for (const itemKey in data) {
        const item = { ...data[itemKey], id: itemKey };
        itemsList.push(item);
      }

      setItems(itemsList);
      setIsLoading(false);
    };

    getData(url).catch((err) => {
      setHasError(true);
      setIsLoading(false);
    });
  }, [url]);

  return [items, isLoading, hasError];
};
export default useFetch;
