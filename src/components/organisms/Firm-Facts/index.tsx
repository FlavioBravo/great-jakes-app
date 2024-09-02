import React from "react";
import Styles from "./firm-facts.module.scss";
import FirmFactCard from "../../molecules/Firm-Fact-Card";
import Button from "../../atoms/Button";

const FirmFacts = () => {
  return (
    <div className={Styles.firmFacts}>
      <h1 className={Styles.firmFacts__title}>Firm Facts</h1>
      <div className={Styles.firmFacts__divider}></div>
      <div className={Styles.firmFacts__layout}>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button
              text="This is a two line button that terminates with something else"
              variant="icon"
            />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button
              text="This is a two line button that terminates with something else aaaa aaaa aaaa"
              variant="icon"
            />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button text="This is a one line button" />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button
              text="This is a two line button that terminates with something else"
              variant="icon"
            />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button
              text="This is a two line button that terminates with something else"
              variant="icon"
              customClass={Styles.firmFacts__bottomRow}
            />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard>
            <Button
              text="This is a two line button that terminates with something else"
              variant="icon"
              disabled={true}
              customClass={Styles.firmFacts__bottomRow}
            />
          </FirmFactCard>
        </div>
        <div className={Styles.firmFacts__card}>
          <FirmFactCard
            variant="border"
          >
            <Button
              text="This is a two line button that terminates with something else"
              variant="icon"
              customClass={Styles.firmFacts__bottomRow}
            />
          </FirmFactCard>
        </div>
      </div>
    </div>
  );
};

export default FirmFacts;
