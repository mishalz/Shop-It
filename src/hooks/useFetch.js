import { useState, useEffect } from "react";

const useFetch = (url, id = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchedItem, setSearchedItem] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Problem occured in fetching!");
      }

      const data = await response.json();
      const itemsList = [];

      for (const itemKey in data) {
        const item = { ...data[itemKey], id: itemKey };

        if (id !== null && id === item.id) {
          setSearchedItem(item);
        }
        itemsList.push(item);
      }

      setItems(itemsList);
      setIsLoading(false);
    };

    getData().catch((err) => {
      console.log(err.message);
      setHasError(true);
      setIsLoading(false);
    });
  }, [url, id]);

  return [items, isLoading, hasError, searchedItem];
};
export default useFetch;
