import { Link } from "react-router-dom";
function Features() {
  return (
    <div>
      <h3>our Features</h3>

      <ul>
        <div>
          <li>
            <Link to="/read">
              <button type="button" class="btn btn-secondary">
                Read
              </button>
            </Link>
          </li>
        </div>
        <div></div>
        <li>
          <Link to="/update">
            <button type="button" class="btn btn-secondary">
              update
            </button>
          </Link>
        </li>
        <li>
          <Link to="/read">
            <button type="button" class="btn btn-secondary">
              Delete
            </button>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <button type="button" class="btn btn-secondary">
              Home
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Features;
