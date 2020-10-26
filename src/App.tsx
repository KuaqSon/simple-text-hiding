import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./App.css";
import { base64ToText, textToBase64 } from "./hiding";
import useThrottledEffect from "./use-throttled-effect";

enum ResultTabs {
  Hide,
  UnHide,
}

function App() {
  const [hideText, setHideText] = useState("");
  const [resultTab, setResultTab] = useState(ResultTabs.Hide);
  const [textHided, setTextHided] = useState("");
  const [textUnHided, setTextUnHided] = useState("");

  useThrottledEffect(
    () => {
      const handleHideText = () => {
        setTextHided(textToBase64(hideText)[1]);
        setTextUnHided(base64ToText(hideText)[1]);
      };

      handleHideText();
    },
    500,
    [hideText]
  );

  return (
    <div className="app">
      <div className="header">
        <div className="header_main">Simple Text Hiding</div>
        <div className="header_sub">Sometimes, you want to hide some sensitive text. Here is a simple way to do it</div>
      </div>
      <div className="input_box container">
        <label>Enter text here</label>
        <textarea value={hideText} onChange={(e) => setHideText(e.target.value)} />
      </div>

      <div className="tab_selector">
        <button
          className={resultTab === ResultTabs.Hide ? "active btn" : "btn"}
          onClick={() => setResultTab(ResultTabs.Hide)}
        >
          Hiden Text
        </button>
        <button
          className={resultTab === ResultTabs.UnHide ? "active btn" : "btn"}
          onClick={() => setResultTab(ResultTabs.UnHide)}
        >
          Unhide Text
        </button>
      </div>
      {resultTab === ResultTabs.Hide && (
        <div className="container">
          <div className="text_result">{textHided}</div>
          <CopyToClipboard text={textHided}>
            <button className="btn btn_2">Copy</button>
          </CopyToClipboard>
        </div>
      )}
      {resultTab === ResultTabs.UnHide && (
        <div className="container">
          <div className="text_result">{textUnHided}</div>
          <CopyToClipboard text={textUnHided}>
            <button className="btn btn_2">Copy</button>
          </CopyToClipboard>
        </div>
      )}
      <div className="footer">Made by Quang Son with ❤</div>
    </div>
  );
}

export default App;
