import classes from './RadioButton.module.css';

const RadioButton = ({ id, className, selectedOption, onChange, options }) => {
	return (
		<div
			className={`${classes['radio-inputs']} ${className}`}
			id={id}
		>
			{options.map((o, i) => {
				return (
					<label
						className={classes.radio}
						key={o.value}
					>
						<input
							type="radio"
							value={o.value}
							checked={selectedOption === o.value}
							onChange={onChange}
						/>
						<span className={classes.name}>{o.label}</span>
					</label>
				);
			})}
		</div>
	);
};

export default RadioButton;
