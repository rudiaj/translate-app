import React, { useState, useContext } from "react";
import styled from "styled-components";

import { ReactComponent as Switch } from "../assets/iconSwitch.svg";
import { LanguageContext } from "../utils";

const Line = styled.span`
  width: calc(100% - 71px);
  margin-left: auto;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.08);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  position: absolute;
  border: none;
  display: flex;
  border-radius: 50%;
  padding: 0;
  transition: 0.5s ease;
  transform: rotate(${({ degrees }) => `${degrees}deg`});
`;

const Icon = styled(Switch)`
  cursor: pointer;
  border-radius: 50%;
`;

const Divider = () => {
  const [degrees, setDegrees] = useState(0);
  const { sourceLang, targetLang, setSourceLang, setTargetLang } = useContext(
    LanguageContext
  );

  const onButtonClick = () => {
    setDegrees(degrees + 360);
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  return (
    <Line>
      <Button onClick={onButtonClick} degrees={degrees}>
        <Icon />
      </Button>
    </Line>
  );
};

export default Divider;
