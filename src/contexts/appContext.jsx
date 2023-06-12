import { createContext, useContext, useState } from 'react';
import { fetchMovie } from '../services/searchForMovie';

const AppContext = createContext({
  isLoading: false,
  result: null,
  getMovie: () => {},
});

export const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const getMovie = (formValues) => {
    setIsLoading(true);
    fetchMovie(formValues.query, formValues.type, formValues.year)
      .then((res) => {
        if (res?.Error) {
          setResult(null);
          return;
        }

        setResult(res);
      })
      .finally(setIsLoading(false));
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        result,
        getMovie,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  return ctx;
};
