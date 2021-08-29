export interface MenuType {
	menuType: string;
}

export enum MenuActions {
	SELECTER_MENU = "SELECTER_MENU",
}

interface MenuActionType<T> {
	type: T;
	payload: string;
}

export type MenuAction = MenuActionType<typeof MenuActions.SELECTER_MENU>;
