import React from "react";
import styles from "./Button.module.scss";

class Button extends React.Component {
  render(): React.ReactNode {
    return <button className={styles.button}>Button</button>;
  }
}

export default Button;
