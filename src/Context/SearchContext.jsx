// if user sleects dates n search in home page and inorder to use that in other components or pages 
// like we generally do prop drilling, instead of this chaos we use ContextAPI shich is basically
// similar to creating global code which can be used in any component.

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    // whenever we change info in search box in home page this action will be called
    case "NEW_SEARCH":
      return action.payload;

    case "RESET_SEARCH":
      return INITIAL_STATE;

    default:
      return state;
  }
};

// children is the component to which we want to send this info 
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    // passing this value to the children
    // we need to sedn dispatch to whenever we make some changes to search bar this NEW_SEARCH is set by it
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};