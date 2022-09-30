import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "./Components/Context/UserContext";

// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { YOUR_CLIENT_ID } from "./Components/Paypal/ClientID";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Users from "./Components/UserProfile/Users";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import Profile from "./Components/Login/UserProfile/Profile";
import Stripe from "./Components/Stripe/Stripe";
import UserProfile from "./Components/UserProfile/UserProfile";
//import About from "./Components/About/About"
import Contracts from "./Components/Contracts/Contracts";
import Error404 from "./Components/error404/error404";
import PurchaseCompleted from "./Components/MercadoPago/PurchaseCompleted/PurchaseCompleted.jsx";

import Loader from "./Components/Loader/Loader";

import DetalleContrato from "./Components/Contracts/DetalleContrato";
import { useEffect } from "react";
import { getUserEmail, postDevUser } from "./Redux/Actions/DevUser";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsers } from "./Hooks/useFetchUsers";

function App() {
  const {
    user,
    isAuthenticated,
    isLoading,
    //  loginWithRedirect
  } = useAuth0();
  const dispatch = useDispatch();
  // const { email, family_name, given_name, picture } = await user;

  const { userByEmail } = useFetchUsers(user?.email);

  console.log(userByEmail, "USERRRRRRRRRRRRRRRRRREMAIL");

  useEffect(() => {
    if (!userByEmail?.registrado) dispatch(postDevUser(user));
  }, [dispatch, user, userByEmail?.registrado]);

  const userData = {
    family_name: `${user?.family_name}`,
    given_name: `${user?.given_name}`,
    email: `${user?.email}`,
    picture: `${user?.picture}`,
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <UserContext.Provider value={userData}>
        <Routes>
          <Route path="/checkout" element={<Stripe />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/work/details/:id" element={<Details />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/create" element={<DevUsersCreate />} />
          <Route path="/users" element={<Users />} />
          <Route path="/purchase" element={<Users />} />
          <Route path="/purchase-completed" element={<PurchaseCompleted />} />
          {/* <Route path="/contratos" element={<Contracts/>}></Route> */}
          **<Route path="*" element={<Error404 />}></Route>**
          <Route path="/contrato/:id" element={<DetalleContrato />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
