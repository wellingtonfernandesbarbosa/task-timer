import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return <button onClick={this.props.onClick} type={this.props.type} className={styles.button}>{this.props.children}</button>;
  }
}

export default Button;
