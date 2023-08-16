import { NavLink } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <NavLink
              className="nav-link"
              to="/listAllNotes"
            >
              My Notes
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/addNote">
              Add Note
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav
