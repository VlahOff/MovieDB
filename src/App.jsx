import { useAppContext } from './contexts/appContext';

import Card from './components/UI/card/Card';
import LoadingSpinner from './components/UI/loadingSpinner/LoadingSpinner';
import Header from './components/header/Header';
import Result from './components/result/Result';

import classes from './App.module.css';

function App() {
  const { isLoading } = useAppContext();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Header />
      <Result />
    </>
  );
}

export default App;
