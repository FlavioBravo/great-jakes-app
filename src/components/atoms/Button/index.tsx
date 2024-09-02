import React from "react";
import Styles from "./button.module.scss";
import IconSearch from "../IconSearch";

interface Props {
  variant?: "default" | "icon";
  disabled?: boolean;
  text: string;
  customClass?: string;
}

const Button = ({ variant = "default", disabled = false, text, customClass }: Props) => {
  return (
    <button
      type="button"
      className={`${Styles.button} ${disabled ? Styles.disabled : ""} ${customClass}`}
      disabled={disabled}
    >
      {variant === "default" ? (
        <span className={`${Styles.button__text} ${Styles.default}`}>
          {text}
        </span>
      ) : (
        <>
          <IconSearch customClass={Styles.button__icon} />
          <span className={`${Styles.button__text} ${Styles.icon}`}>
            {text}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
