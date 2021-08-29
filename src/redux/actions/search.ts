import {
  SearchActions,
} from "../model";
import axios from "axios";
export const URL = "https://itunes.apple.com/search";

export const getSearch =
  (input: string) => async (dispatch: any, getState: any) => {
    if (input.length < 2) {
      dispatch({
        type: SearchActions.SEARCH,
        payload: {...getState,
          searchResponse: [], error:`Min character to search is 2,please try again, Thanks` },
        });
      return
    }

    let dates:Date[] = getState().search.searchHistory.dates;
    let aMinBefore = new Date( Date.now() - 1000 * 60 )
    let newListHistory =  dates.filter((it)=> it > aMinBefore)
    console.log("check")

    if(newListHistory.length>20){
      dispatch({
        type: SearchActions.SEARCH,
        payload: {
          searchHistory: { dates: [...newListHistory] },
          searchResponse: [], error:"max search time per second" },
        });
      return
    }
    console.log("push")
    newListHistory.push(new Date())

    let query = `?term= + ${input}`;
    if (getState().type === "all") {
      query = `?term= + ${input}`;
    } else {
      query = "?term=" + input + "&media=" + getState().menuReducer.menuType;
    }
    const response = await axios.get(`${URL}${query}`, {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    });


    dispatch({
      type: SearchActions.SEARCH,
      payload: {
        searchHistory: { dates: [...newListHistory] },
        searchResponse: { ...response.data },error:""
      },
    });
  };
