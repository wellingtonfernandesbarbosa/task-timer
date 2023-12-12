import styles from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
