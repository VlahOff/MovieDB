import { Fragment, useEffect, useState } from 'react';

import Result from './components/result/Result';
import SearchBar from './components/search-bar/SearchBar';
import Card from './components/UI/Card';

import styles from './App.module.css';

function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}&r=json&t=${input}&plot=full`)
      .then(res => res.json())
      .then(data => setResult(data));
  }, [input]);

  const onSubmitHandler = (data) => {
    setInput(data);
  };

  return (
    <Fragment>
      <Card className={styles.card} >
        <SearchBar
          submitInput={onSubmitHandler}
        />
        {
          result ?
            <Result
              {...result}
            /> :
            <p className={styles.warning}>Movie not found!</p>
        }
      </Card>
    </Fragment >
  );
}

export default App;
