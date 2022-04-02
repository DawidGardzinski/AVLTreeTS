//TODO: Overengineering... and not optimal (dbl rerender). refactor that.
import React, { ReactElement, useReducer } from 'react';
import { AVLTree } from './dataStructures/AVLTree/AVLTree';
import { BST } from './dataStructures/BST/BST';
import { Node } from './dataStructures/Node/Node';

interface State {
  treeRerender: boolean;
  modal: {
    type: string | null;
    visibility: 'visible' | 'hidden';
    data?: Node | null;
  };
  toast?: {
    text?: string;
  };
  tree: BST;
}

type Action =
  | { type: 'enableTreeRerender' }
  | { type: 'disableTreeRerender' }
  | {
      type: 'modalManipulation';
      payload: {
        type: string;
        visibility: 'visible' | 'hidden';
        data?: Node | null;
      };
    }
  | { type: 'closeModal' }
  | {
      type: 'toastManipulation';
      payload: {
        text: string;
      };
    }
  | {
      type: 'setTree';
      payload: {
        tree: BST;
      };
    };
type Dispatch = (action: Action) => void;

const defaultState: State = {
  treeRerender: false,
  modal: {
    type: null,
    visibility: 'hidden',
    data: null,
  },
  tree: new AVLTree(),
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
    case 'modalManipulation': {
      return { ...state, modal: { ...action.payload } };
    }
    case 'closeModal': {
      return { ...state, modal: defaultState.modal };
    }
    case 'toastManipulation': {
      return {
        ...state,
        toast: {
          text: action.payload.text,
        },
      };
    }
    case `setTree`:
      return {
        ...state,
        tree: action.payload.tree,
      };
    default: {
      //@ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const MainContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, dispatch] = useReducer(mainReducer, defaultState);
  const value = { state, dispatch };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
