import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import filterReducer from "./filter/filterReducer";
import rootReducer from "./rootReducer";
// import todoReducer from "./todo/todoReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
