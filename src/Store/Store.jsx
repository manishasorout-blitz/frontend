import {legacy_createStore as createStore} from "redux";
import Reducer from "../redux/Reducer";
export const store=createStore(Reducer);
