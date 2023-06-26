import { useAppContext } from '../../contexts/appContext';
import { useForm } from '../../hooks/useForm';

import Button from '../UI/button/Button';
import Card from '../UI/card/Card';
import Input from '../UI/input/Input';
import RadioButton from '../UI/option/RadioButton';

import classes from './Header.module.css';

const queryValidation = v => {
	return v.trim().length > 1;
};

const yearValidation = v => {
	return Number(v) > 1000;
};

const Header = () => {
	const { getMovie } = useAppContext();

	const { formValues, changeHandler, setValues, isFormValid, resetValues } =
		useForm({
			query: '',
			queryValid: null,
			type: 'movie',
			year: '',
		});

	const onOptionSelect = event => {
		setValues(s => ({ ...s, type: event.target.value }));
	};

	const onFormSubmit = event => {
		event.preventDefault();

		if (isFormValid) {
			getMovie(formValues);
			resetValues();
		}
	};

	return (
		<header>
			<Card className={classes.card}>
				<form
					className={classes.form}
					onSubmit={onFormSubmit}
				>
					<Input
						className={classes.search}
						id={'query'}
						label={'Search...'}
						type={'search'}
						onChange={e => changeHandler(e, queryValidation)}
						value={formValues.query}
						error={formValues.queryValid}
						errorMessage={'Please enter a title.'}
					/>
					<Input
						className={classes.year}
						id={'year'}
						label={'Year'}
						type={'number'}
						onChange={e => changeHandler(e, yearValidation)}
						value={formValues.year}
					/>
					<RadioButton
						className={classes.type}
						id={'type'}
						onChange={onOptionSelect}
						selectedOption={formValues.type}
						options={[
							{ value: 'movie', label: 'Movie' },
							{ value: 'series', label: 'Series' },
						]}
					/>
					<Button
						type={'submit'}
						className={classes.btn}
						disabled={!isFormValid}
					>
						Search
					</Button>
				</form>
			</Card>
		</header>
	);
};

export default Header;
