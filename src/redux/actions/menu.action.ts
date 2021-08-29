import { MenuAction, MenuActions } from "../model";

export function selectMenu(typeMedia:string): MenuAction {
	return {
		type: MenuActions.SELECTER_MENU,
		payload:typeMedia
	};
}
