import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "./Components/Context/UserContext";
import { getUserEmail, postDevUser } from "./Redux/Actions/DevUser";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsers } from "./Hooks/useFetchUsers";
import { consultSub, setSubscriptionId } from "./Redux/Actions/MercadoPago";
import useFetchSubscription from "./Hooks/useFetchSubscription";

// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { YOUR_CLIENT_ID } from "./Components/Paypal/ClientID";

//componentes
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Users from "./Components/UserProfile/Users";
import Work from "./Components/Work/Work";
import DevUsersCreate from "./Components/DevUsersCreate/DevUsersCreate";
import Stripe from "./Components/Stripe/Stripe";
import UserProfile from "./Components/UserProfile/UserProfile";
import Error404 from "./Components/error404/error404";
import PurchaseCompleted from "./Components/MercadoPago/PurchaseCompleted/PurchaseCompleted.jsx";
import Loader from "./Components/Loader/Loader";

import DetalleContrato from "./Components/Contracts/DetalleContrato";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { user, isLoading, isAuthenticated } = useAuth0();
  // const userByEmail = useSelector((state) => state.devUser.userByEmail);
  const { userByEmail } = useFetchUsers(user?.email);
  const { Subscription } = useFetchSubscription();
  const user_id = userByEmail?.id;
  const subscription_id = Subscription?.id;

  const userData = {
    family_name: `${user?.family_name}`,
    given_name: `${user?.given_name}`,
    email: `${user?.email}`,
    picture: `${user?.picture}`,
    subscription_id: `${subscription_id}`,
    user_id: `${user_id}`,
  };

  useEffect(() => {
    if (isAuthenticated && !userByEmail?.registrado)
      dispatch(postDevUser(user));
  }, [dispatch, isAuthenticated, user, userByEmail?.registrado]);

  useEffect(() => {
    isAuthenticated && dispatch(consultSub(Subscription?.id));
  }, [Subscription, dispatch, isAuthenticated]);

  // useEffect(() => {
  //   dispatch(getUserEmail(user?.email));
  // }, [dispatch, user?.email]);

  console.log(user_id, "USERIDDDDDDDDDDDD");
  useEffect(() => {
    if (
      isAuthenticated &&
      !userByEmail?.premium &&
      !userByEmail?.subscription_id
    ) {
      dispatch(
        setSubscriptionId({
          user_id: user_id,
          subscription_id: subscription_id,
          status: "pending",
        })
      );
    }
  }, [
    dispatch,
    isAuthenticated,
    subscription_id,
    userByEmail?.premium,
    userByEmail?.subscription_id,
    user_id,
  ]);

  console.log(`USUARIO PREMIUN: ${userByEmail?.premium}`);

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
