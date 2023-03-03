import { useEffect, useState } from 'react';

import * as movieApi from './services/searchForMovie';

import Result from './components/result/Result';
import SearchBar from './components/search-bar/SearchBar';
import Card from './components/UI/Card';

import styles from './App.module.css';

function App() {
  const [result, setResult] = useState({ Response: 'False' });
  const [input, setInput] = useState('');

  useEffect(() => {
    movieApi.getMovie(input)
      .then(data => setResult(data))
      .catch(err => console.log(err));
  }, [input]);

  const onSubmitHandler = (data) => {
    setInput(data);
  };

  return (
    <>
      <Card className={styles.card} >
        <SearchBar
          submitInput={onSubmitHandler}
        />
        {result.Response === 'True' ?
          <Result {...result} /> :
          <p className={styles.warning}>Movie not found!</p>}
      </Card>
    </ >
  );
}

export default App;
