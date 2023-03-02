import styles from './Button.module.css';

const Button = (props) => {
  const classes = `${styles.btn} ${props.className}`;
  return (
    <button
      onClick={props.onClick}
      className={classes}
      disabled={props.disabled}
      type={props.type || 'button'}
    >{props.children}</button>
  );
};

export default Button;