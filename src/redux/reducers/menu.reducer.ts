import { MenuAction, MenuActions, MenuType } from "../model";
import createReducer from "./createReducer";

const initialState: MenuType = {
	menuType: "all",
};

export const menuReducer = createReducer<MenuType>(initialState, {
	[MenuActions.SELECTER_MENU](state: MenuType, action: MenuAction) {
		return { ...state, menuType: action.payload };
	},
});
