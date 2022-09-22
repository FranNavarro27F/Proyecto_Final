import { Route, Routes } from "react-router-dom";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Users from "./Components/UserProfile/Users.jsx";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import UserProfile from "./Components/UserProfile/UserProfile";
import About from "./Components/About/About"
import Process from "./Redux/Reducer/Chat/process.jsx";
import Chat from "./Components/Chat/Chat.jsx";

import io from "socket.io-client"; 
const socket = io.connect('/');

function Appmain(props) {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work/details/:id" element={<Details />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/work" element={<Work />} />
        <Route path="/create" element={<DevUsersCreate />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chat/:roomname/:username" element={Appmain} />
        <Route path="/chat" element={<Chat socket={socket} /> } />
      </Routes>
    </>
  );
}

export default App;
