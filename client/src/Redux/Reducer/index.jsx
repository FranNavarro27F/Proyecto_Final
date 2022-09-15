import countries from "./Countries";
import technologies from "./Technologies";
import services from "./Services";
import languajes from "./Languajes";
import devUser from "./DevUser";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countries,
  technologies,
  services,
  languajes,
  devUser,
});

export default rootReducer;
