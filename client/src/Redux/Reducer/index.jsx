import countries from "./Countries";
import tecnologies from "./Tecnologies";
import services from "./Services";
import languajes from "./Languajes";
import devUser from "./DevUser";
import contracts from "./Contracts";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countries,
  tecnologies,
  services,
  languajes,
  devUser,
  contracts,
});

export default rootReducer;
