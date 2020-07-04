import React, { useContext } from "react";
import styled from "styled-components";
import { debounce } from "lodash";

import Divider from "./Divider";
import Flag from "./Flag";
import { languageKeys } from "../constants";
import { LanguageContext } from "../utils";

const languageNames = {
  [languageKeys.EN]: "English",
  [languageKeys.DE]: "German",
};

const Container = styled.div`
  background: white;
  border-radius: 2px;
  max-width: 800px;
  flex: 1;
  margin: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16);
  flex-flow: column;
`;

const LanguageBar = styled.div`
  display: flex;
  padding: 15px;
  height: 110px;
  align-items: flex-start;
`;

const SourceText = styled.textarea`
  flex: 1;
  resize: none;
  padding: 0;
  height: 100%;
  border: none;
  font-family: inherit;
  color: inherit;
  &::placeholder {
    color: rgb(218, 224, 230);
  }
`;

const TargetText = styled.p`
  flex: 1;
  height: 100%;
  font-family: inherit;
  color: inherit;
  &:empty::before {
    content: "Translation";
    color: rgb(218, 224, 230);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TranslateBox = () => {
  const { sourceLang, targetLang, targetText, setSourceText } = useContext(
    LanguageContext
  );

  const onChange = debounce((value) => {
    setSourceText(value);
  }, 250);

  return (
    <Section>
      <Container>
        <LanguageBar>
          <Flag countryCode={sourceLang} />
          <SourceText
            placeholder={`From ${languageNames[sourceLang]}`}
            onChange={(e) => onChange(e.target.value)}
          />
        </LanguageBar>
        <Divider />
        <LanguageBar>
          <Flag countryCode={targetLang} />
          <TargetText role="presentation">{targetText}</TargetText>
        </LanguageBar>
      </Container>
    </Section>
  );
};

export default TranslateBox;
