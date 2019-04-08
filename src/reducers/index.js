import { combineReducers } from 'redux';
import ApartmentListReducer from './ApartmentListReducer';
import ApartmentTotalReducer from './ApartmentTotalReducer';
import CityNameReducer from './CityNameReducer';
import BedroomReducer from './BedroomReducer';
import PriceReducer from './PriceReducer';
import SizeReducer from './SizeReducer';
import GuestReducer from './GuestReducer';

const rootReducer = combineReducers({
  ApartmentListReducer,
  ApartmentTotalReducer,
  CityNameReducer,
  BedroomReducer,
  PriceReducer,
  SizeReducer,
  GuestReducer
})

export default rootReducer;
