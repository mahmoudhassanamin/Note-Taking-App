import { NavLink } from "react-router-dom";
import "./Nav.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
  function Nav() {
    const [searchNote, setSearchNote] = useState("")
    const navigate = useNavigate();

    const searchHandler = (e) => {
      e.preventDefault();
      setSearchNote("");
      navigate(`/search?search=${searchNote}`)
    };
  return (
    <>
      <nav className="navBar">
        <ul class="nav nav-tabs w-50">
          <li class="nav-item">
            <NavLink className="nav-link" to="/listAllNotes">
              My Notes
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/addNote">
              Add Note
            </NavLink>
          </li>
        </ul>
        <div className="searchForm">
          <form className=" w-100" onSubmit={searchHandler}>
            <input
              className="serchInput"
              type="search"
              placeholder="Search by note's title"
              value={searchNote}
              onChange={(e) => setSearchNote(e.target.value)}
            />
            <button type="submit" className="serchButton">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}


export default Nav
