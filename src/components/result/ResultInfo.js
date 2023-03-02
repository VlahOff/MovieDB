import styles from './ResultInfo.module.css';

const ResultInfo = ({
  director,
  writer,
  actor,
  awards,
  boxOffice
}) => {
  return (
    <div className={styles.info}>
      <p><strong>Director: </strong>{director}</p>
      <p><strong>Writers: </strong>{writer}</p>
      <p><strong>Actors: </strong>{actor}</p>
      <p><strong>Awards: </strong>{awards}</p>
      <p><strong>Box office: </strong>{boxOffice}</p>
    </div>
  );
};

export default ResultInfo;