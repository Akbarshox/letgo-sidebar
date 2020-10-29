import React, {createContext, useReducer} from 'react';
import reducer from './reducer';

export const Store = createContext();

const InitialState = {
   images: [],
}

export function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, InitialState);
   const value = {state: state, dispatch: dispatch}

   return (
      <Store.Provider value={value}>{props.children}</Store.Provider>
   )
}