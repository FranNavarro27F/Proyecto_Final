import countries from "./Countries";
import technologies from "./Technologies";
import services from "./Services";
import languajes from "./Languajes";
import devUser from "./DevUser";
import filtersOrders from './FiltersOrders';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countries,
  technologies,
  services,
  languajes,
  devUser,
  filtersOrders,
});

export default rootReducer;
