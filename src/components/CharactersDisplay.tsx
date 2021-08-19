import useCharacterSearchApi from "../hooks/useBreakingBadApi";


const CharactersDisplay = ({ term }: { term: string }) => {
  const { data, loading, error } = useCharacterSearchApi(term);

  return (
    <>
      {data && (
        <p>
          Found {data.length} matching records{data.length > 0 && ":"}
        </p>
      )}
      <ul>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data &&
          data.map((character) => {
            return (
              <li key={character.char_id}>
                {character.name} ({character.nickname})
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default CharactersDisplay;
