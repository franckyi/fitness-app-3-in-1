import { Link } from "react-router-dom";

function AppBar() {
  return (
    <nav>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default AppBar;
