import React, { useState,useEffect, useCallback } from "react";
import {isEmpty} from "lodash";

import { TranslateBox } from "./components";
import { LanguageContext } from "./utils";
import {languageKeys} from "./constants";
import dummyData from "./constants/dummyData.json";


const App = () => {
  const [sourceLang, setSourceLang] = useState(languageKeys.EN);
  const [targetLang, setTargetLang] = useState(languageKeys.DE);
  const [targetText, setTargetText] = useState("");
  const [sourceText, setSourceText] = useState("");

  const translate = useCallback(
    (value) => {
      if (isEmpty(value)) {
        setTargetText("");
        return;
      }

      const randomWord =
        dummyData[targetLang][
          Math.floor(Math.random() * dummyData[targetLang].length)
        ];

      setTargetText(randomWord);
    },
    [targetLang],
  );

  useEffect(()=>{
      translate(sourceText);

  },[ sourceText,translate])

  return (
    <LanguageContext.Provider
      value={{
        sourceLang,
        setSourceLang,
        targetLang,
        setTargetLang,
        sourceText,
        setSourceText,
        targetText,
        setTargetText,
      }}
    >
      <TranslateBox/>
    </LanguageContext.Provider>
  );
};

export default App;
