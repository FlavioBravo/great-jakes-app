import React from "react";
import Styles from "./firm-fact-card.module.scss";

interface Props {
  variant?: "default" | "border";
  children: React.ReactNode;
}

const FirmFactCard = ({ variant = "default", children }: Props) => {
  return (
    <div
      className={`${Styles.firmFact__card} ${
        variant === "default" ? Styles.default : Styles.border
      }`}
    >
      {children}
    </div>
  );
};

export default FirmFactCard;
