import './App.css';
import ListAllNotes from './pages/ListAllNotes/ListAllNotes';
import AddNewNote from "./pages/AddNewNote/AddNewNote";
import SearchForNote from './pages/SearchForNote/SearchForNote';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import pageNotFound from "./assets/Images/pageNotFound.png"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/listAllNotes" element={<ListAllNotes />} />
        <Route path="/addNote" element={<AddNewNote />} />
        <Route path="/search" element={<SearchForNote />} />
        <Route
          path="*"
          element={
            <img
              src={pageNotFound}
              alt="Page not found"
              className="pageNotFoundImg"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
