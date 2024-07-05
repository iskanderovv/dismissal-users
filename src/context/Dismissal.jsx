import { createContext, useReducer, useContext, useEffect } from 'react';

const AppContext = createContext();

const initialState = JSON.parse(localStorage.getItem('dismissal')) || [];

const dismissalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_DISMISSAL':
      const updatedState = [...state, action.payload];
      localStorage.setItem('dismissal', JSON.stringify(updatedState));
      return updatedState;
    case 'REMOVE_FROM_DISMISSAL':
      const filteredState = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem('dismissal', JSON.stringify(filteredState));
      return filteredState;
    default:
      return state;
  }
};

export const DismissalProvider = ({ children }) => {
  const [dismissal, dispatch] = useReducer(dismissalReducer, initialState);

  useEffect(() => {
    localStorage.setItem('dismissal', JSON.stringify(dismissal));
  }, [dismissal]);

  return (
    <AppContext.Provider value={{ dismissal, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useFavorites = () => useContext(AppContext);
