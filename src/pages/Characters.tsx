import TextField from '@material-ui/core/TextField/TextField';
import React, { useState } from 'react'
import CharactersDisplay from '../components/CharactersDisplay';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Box from '@material-ui/core/Box';

const Characters: React.FC = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Search Breaking Bad Characters</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(false);
          setSearch(text);
        }}
      >
        <TextField
          id="outlined-basic"
          size="small"
          label="Search by name"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <Box ml={1} display="inline">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
              setSearch(text);
            }}
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AllInclusiveIcon />}
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
              setSearch("");
              setText("");
            }}
            style={{ marginLeft: 10 }}
          >
            Show all
          </Button>
        </Box>
      </form>
      {(show || search) && <CharactersDisplay term={search} />}
    </div>
  );
}

export default Characters;
