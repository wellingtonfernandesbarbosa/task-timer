import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset" | undefined
}

class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return <button type={this.props.type} className={styles.button}>{this.props.children}</button>;
  }
}

export default Button;
