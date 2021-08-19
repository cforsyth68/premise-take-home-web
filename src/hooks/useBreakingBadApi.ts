import { useEffect, useState } from "react";
import axios from "axios";

export interface ICharacter {
  char_id: 0;
  name: "string";
  birthday: "string";
  occupation: ["string"];
  img: "string";
  status: "string";
  nickname: "string";
  appearance: [0];
  portrayed: "string";
  category: "string";
  better_call_saul_appearance: [0];
}

const instance = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
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
    const path = term.length > 0 ? `/characters?name=${term}` : "/characters";
    (async () => {
      try {
        setLoading(true);
        const response = await instance.get(path);
        setdata(response.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [term]);

  return { data, loading, error };
};

export default useCharacterSearchApi;
