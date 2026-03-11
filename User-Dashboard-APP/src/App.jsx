import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const App = () => {

  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />} />

      </Routes>

    </div>
  );

};

export default App;