import './App.css';
import ListAllNotes from './pages/ListAllNotes/ListAllNotes';
import AddNewNote from "./pages/AddNewNote/AddNewNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/listAllNotes" element={<ListAllNotes />} />
        <Route path="/addNote" element={<AddNewNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
