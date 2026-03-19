import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoteDetails from "./pages/NoteDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;