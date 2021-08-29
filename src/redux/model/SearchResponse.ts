import Result from "./Result";

export interface SearchResponse {
    resultCount: number;
    results: Result[];
}
export interface SearchHistory {
    dates: Date[];
}

export interface SearchData {
	searchResponse:SearchResponse;
	searchHistory:SearchHistory;
	error:string;
}

export enum SearchActions {
	SEARCH = "SEARCH"
}

interface SearchActionType<T, P> {
	type: T;
	payload: P;
}

export type SearchAction =
	| SearchActionType<typeof SearchActions.SEARCH, SearchData>

