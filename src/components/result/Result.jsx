import { useAppContext } from '../../contexts/appContext';
import Card from '../UI/card/Card';

import classes from './Result.module.css';

const Result = () => {
	const { result } = useAppContext();

	return (
		<>
			{result ? (
				<article>
					<Card className={classes.card}>
						<header className={classes.header}>
							<div className={classes.titles}>
								<h1 className={classes.title}>
									{result?.Title} (<span>{result?.Year}</span>)
								</h1>
								<div className={classes['movie-details']}>
									<p>
										<i className="fa-solid fa-image-portrait"></i>{' '}
										{result?.Rated}
									</p>
									<p>
										<i className="fa-solid fa-hourglass"></i> {result?.Runtime}
									</p>
									<p>
										<i className="fa-regular fa-calendar"></i>{' '}
										{result?.Released}
									</p>
									<p>
										<i className="fa-solid fa-language"></i> {result?.Language}
									</p>
									<p>
										<i className="fa-solid fa-earth-americas"></i>{' '}
										{result?.Country}
									</p>
								</div>
							</div>
							<div className={classes.ratings}>
								{result?.Ratings.map(r => {
									return (
										<div
											key={r.Source}
											className={classes.rating}
										>
											<h3>{r.Source}</h3>
											<p>
												{r.Value}{' '}
												<i className={`fa-solid fa-star ${classes.stars}`}></i>
											</p>
										</div>
									);
								})}
							</div>
						</header>
						<main className={classes.main}>
							<div className={classes['plot-wrapper']}>
								<img
									src={result?.Poster}
									alt={result?.Title}
									className={classes.img}
								/>
								<p>{result?.Plot}</p>
							</div>
							<div className={classes['genre-wrapper']}>
								{Array.from(result.Genre.split(', ')).map((g, i) => {
									return (
										<p
											key={i}
											className={classes.genre}
										>
											{g}
										</p>
									);
								})}
							</div>
							<div className={classes['movie-info']}>
								<p>
									<strong>Director: </strong>
									{result?.Director}
								</p>
								<p>
									<strong>Writers: </strong>
									{result?.Writer}
								</p>
								<p>
									<strong>Actors: </strong>
									{result?.Actors}
								</p>
								<p>
									<strong>Awards: </strong>
									{result?.Awards}
								</p>
								<p>
									<strong>Box office: </strong>
									{result?.BoxOffice}
								</p>
							</div>
						</main>
					</Card>
				</article>
			) : (
				<Card className={classes.card}>
					<p className={classes.warning}>Not found!</p>
				</Card>
			)}
		</>
	);
};

export default Result;
