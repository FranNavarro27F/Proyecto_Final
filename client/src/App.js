import { Route, Routes } from "react-router-dom";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
<<<<<<< HEAD
import Users from "./Components/Users/Users";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import Profile from "./Components/Login/UserProfile/Profile";
=======
import Users from "./Components/UserProfile/Users.jsx";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import UserProfile from "./Components/UserProfile/UserProfile";
import About from "./Components/About/About"
>>>>>>> 2bf0678c3a537c9129845880a10c7ae8255cf4f9

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
