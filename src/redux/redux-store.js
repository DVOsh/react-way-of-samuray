import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let redusers = combineReducers({
	profileData: profileReducer,
	dialogsData: dialogsReducer,
	usersData: usersReducer,
	sideBarData: sidebarReducer,
	authData: authReducer,
})

let store = createStore(redusers);

window.store = store;

export default store;