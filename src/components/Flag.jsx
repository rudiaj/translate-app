import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { languageKeys } from "../constants";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import UkFlag from "../assets/uk-flag.png";
import DeFlag from "../assets/de-flag.png";

const flags = {
  [languageKeys.EN]: UkFlag,
  [languageKeys.DE]: DeFlag,
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-right: 22px;
`;

const Img = styled.img`
  padding: 1px;
  border: 1px solid #1998ff;
  border-radius: 50%;
`;

const ArrowIcon = styled(Arrow)`
  position: absolute;
  bottom: -7px;
`;

const Flag = ({ countryCode }) => {
  return (
    <Container>
      <Img src={flags[countryCode]} alt={`${countryCode} flag`} />
      <ArrowIcon />
    </Container>
  );
};

Flag.propTypes = {
  countryCode: PropTypes.oneOf([languageKeys.DE, languageKeys.EN]).isRequired,
};

export default memo(Flag);
