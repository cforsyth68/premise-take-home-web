import { useEffect, useState } from "react";
import axios from "axios";
import ICharacter from "./ICharacter";

const charactersApiInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/character/",
  timeout: 1000,
});

type CharactersSearchApiReturn = {
  data: ICharacter[];
  loading: boolean;
  error: any;
};

const useCharacterSearchApi = (term: string): CharactersSearchApiReturn => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(`term: '${term}'`);
  useEffect(() => {
    const path = term.length > 0 ? `?name=${term}` : "";
    (async () => {
      try {
        setLoading(true);
        const response = await charactersApiInstance.get(path);
        setdata(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [term]);

  return { data, loading, error };
};

export default useCharacterSearchApi;
