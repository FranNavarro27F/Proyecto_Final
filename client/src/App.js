import { Route, Routes } from "react-router-dom";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/users" element={<Users />} />
        <Route path="/work" element={<Work />} />
        <Route path="/create" element={<DevUsersCreate />} />
      </Routes>
    </>
  );
}

export default App;
