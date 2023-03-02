import Card from '../UI/Card';
import ResultInfo from './ResultInfo';

import styles from './Result.module.css';

const Result = ({
  Title,
  Year,
  Rated,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Awards,
  Plot,
  Language,
  Country,
  Poster,
  Ratings,
  BoxOffice
}) => {
  return (
    <Card className={styles.card}>
      <article className={styles.movie}>
        <header className={styles.header}>
          <div className={styles['title-wrapper']}>
            <h1 className={styles.title}>{Title} (<span className={styles.year}>{Year}</span>)</h1>
            <div className={styles.container}>
              <p className={styles.rated}>{Rated} <i className="fa-solid fa-image-portrait"></i></p>
              <p className={styles.runtime}>{Runtime} <i className="fa-solid fa-hourglass-start"></i></p>
            </div>
            <p>{Released}</p>
            <p>{Country} <i className="fa-solid fa-earth-americas"></i></p>
            <p>{Language} <i className="fa-solid fa-language"></i></p>
          </div>
          <div className={styles['ratings-wrapper']}>
            {Ratings.map((r) => {
              return (
                <div
                  key={r.Source}
                  className={styles.rating}
                >
                  <h3>{r.Source}</h3>
                  <p>{r.Value} <i className="fa-solid fa-star"></i></p>
                </div>
              );
            })}
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.plot}>
            <img src={Poster} alt={Title} />
            <p>{Plot}</p>
          </div>
          <div className={styles.genres}>
            {Array.from(Genre.split(', ')).map((g, i) => {
              return <p key={i} className={styles.genre}>{g}</p>;
            })}
          </div>
          <ResultInfo
            director={Director}
            writer={Writer}
            actor={Actors}
            awards={Awards}
            boxOffice={BoxOffice}
          />
        </main>
      </article>
    </Card>
  );
};

export default Result;