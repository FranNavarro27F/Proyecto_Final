import { createContext } from "react";

const UserContext = createContext({
  family_name: null,
  given_name: null,
  email: null,
  picture: null,
});

export default UserContext;
