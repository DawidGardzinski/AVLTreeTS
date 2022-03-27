//TODO: Overengineering... and not optimal (dbl rerender). refactor that.
import React, { useReducer } from 'react';

interface State {
  treeRerender: boolean;
}

type Action = { type: 'enableTreeRerender' } | { type: 'disableTreeRerender' };
type Dispatch = (action: Action) => void;

const defaultState: State = {
  treeRerender: false,
};

export const MainContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
}>({ state: defaultState, dispatch: (a) => {} });

const mainReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'enableTreeRerender': {
      return { ...state, treeRerender: true };
    }
    case 'disableTreeRerender': {
      return { ...state, treeRerender: false };
    }
    default: {
      //@ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const MainContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, defaultState);
  const value = { state, dispatch };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
