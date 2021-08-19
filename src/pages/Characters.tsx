import React, { useState } from 'react'
import CharactersDisplay from '../components/CharactersDisplay';

const Characters: React.FC = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Search Breaking Bad Characters</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(false);
          setSearch(text);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a name"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setShow(false);
            setSearch(text);
          }}
        >
          Search
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
            setSearch("");
            setText("");
          }}
          style={{ marginLeft: 10 }}
        >
          Show all
        </button>
      </form>
      {(show || search) && <CharactersDisplay term={search} />}
    </div>
  );
}

export default Characters;
