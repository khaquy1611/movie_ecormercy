import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';
import { MovieReducer } from './reducers/MovieReducer';
import { TheaterReducer } from './reducers/TheaterReducer';
import { UserReducer } from './reducers/UserReducer';
import { TicketReducer } from '../redux/reducers/TicketReducer';
import { LoadingReducer } from '../redux/reducers/LoadingReducer';
const rootReducer = combineReducers({
  CarouselReducer,
  MovieReducer,
  TheaterReducer,
  UserReducer,
  TicketReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
