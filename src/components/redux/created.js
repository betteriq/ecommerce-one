import { createStore } from "redux";
import Reducer from "./Reducer"

let created = createStore(Reducer);

export default created;
