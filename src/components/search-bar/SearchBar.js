import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [input, setInput] = useState('');

  const onInputHandler = (event) => {
    setInput(event.target.value);
  };

  const onSubmitHandler = () => {
    props.submitInput(input);
    setInput('');
  };

  return (
    <Card className={styles.card}>
      <input
        onChange={onInputHandler}
        value={input}
        className={styles.input}
        type="search"
        placeholder='Search for your favorite movie...'
      />
      <Button
        onClick={onSubmitHandler}
        className={styles.btn}
      >Search</Button>
    </Card>
  );
};

export default SearchBar;