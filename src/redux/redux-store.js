import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
	profileData: profileReducer,
	dialogsData: dialogsReducer,
	sideBarData: sidebarReducer,
})

let store = createStore(redusers);

export default store;