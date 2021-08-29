import { History } from "history";
import { combineReducers } from "redux";
import { MenuType,SearchData,Theme } from "../model";
import * as themeReducer from "./theme";
import * as searchReducer from "./search";
import * as menuReducer from "./menu.reducer";

export interface RootState {
	theme: Theme;
	menuReducer: MenuType;
	type: string;
	search: SearchData;
}

const combine = (history: History) =>
	combineReducers({
		...themeReducer,
		...searchReducer,
		...menuReducer,
	});
export default  combine;