import React, {createContext} from 'react';

type TProps = {
  children: JSX.Element;
};

type TContext = {};

const initState = {};

export const AppContext = createContext<TContext>(initState);

export const AppContextProvider = ({children}: TProps): JSX.Element => {
  //

  // export states and functions
  const context = {};

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
