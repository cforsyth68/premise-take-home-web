import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import useCharacterSearchApi from "../hooks/useLocalProxyApi";
import CharacterCard from "./CharacterCard";

const CharactersDisplay = ({ term }: { term: string }) => {
  const { data, loading, error } = useCharacterSearchApi(term);

  return (
    <>
      {loading && (
        <Fade
          in={true}
          style={{
            transitionDelay: '100ms'
          }}
          unmountOnExit
        ><LinearProgress color="secondary" /></Fade>
      )}
      {data && (
        <p>
          Found {data.length} matching records{data.length > 0 && ":"}
        </p>
      )
      }
      {error && <p>Error: {error}</p>}
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
      >
        {data &&
          data.map((character) => {
            return (
              <CharacterCard key={character.char_id} character={character} />
            );
          })}
      </Box>
    </>
  );
};

export default CharactersDisplay;
