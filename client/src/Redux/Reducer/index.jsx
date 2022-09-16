import countries from "./Countries";
import tecnologies from "./Tecnologies";
import services from "./Services";
import languajes from "./Languajes";
import devUser from "./DevUser";
import filtersOrders from "./FiltersOrders";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countries,
  tecnologies,
  services,
  languajes,
  devUser,
  filtersOrders,
});

export default rootReducer;
