import { Link } from "react-router-dom";

function AppBar() {
  return (
    <nav>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/music">Music</Link>
      <Link to="/options">Options</Link>
    </nav>
  );
}

export default AppBar;
