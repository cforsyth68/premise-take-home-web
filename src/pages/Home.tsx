import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div>
    <h1>Take Home Challenge for Premier</h1>
    <p>This web site is part of a system designed and built by Charles Forsyth for Premier.</p>
    <Link to="/characters">Search Characters</Link>
  </div>
);

export default Home;