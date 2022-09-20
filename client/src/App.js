import { Route, Routes } from "react-router-dom";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import Profile from "./Components/Login/UserProfile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/details/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/work" element={<Work />} />
        <Route path="/create" element={<DevUsersCreate />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
