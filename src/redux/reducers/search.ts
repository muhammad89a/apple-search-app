import { SearchData, SearchAction, SearchActions } from "../model";
import createReducer from "./createReducer";

const initialState: SearchData = {
  searchResponse:{ resultCount: 0, results: [] },
  searchHistory:{ dates: [] },
  error:""
};

export const search = createReducer<SearchData>(initialState, {
  [SearchActions.SEARCH](state: SearchData, action: SearchAction) {
    return { ...state, ...action.payload };
  },
});
