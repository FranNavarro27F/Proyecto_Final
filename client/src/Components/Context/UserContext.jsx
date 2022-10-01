import { createContext } from "react";

const UserContext = createContext({
  family_name: null,
  given_name: null,
  email: null,
  picture: null,
  subscription_id: null,
  user_id: null,
});

export default UserContext;
