import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string
}

class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return <button className={styles.button}>{this.props.children}</button>;
  }
}

export default Button;
