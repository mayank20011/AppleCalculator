import styles from "./input.module.css";
function Input(props)
{
  let expression=props.expression;
  return (
   <div className={styles.input}>
    <div className={styles.value}>{expression}</div>
    </div>   
  );
}
export default Input;