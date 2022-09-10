import { Route, Routes } from "react-router-dom";

//componentes
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
