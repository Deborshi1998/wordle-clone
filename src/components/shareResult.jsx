import React, { useState, useEffect } from "react";
import whatsapplogo from "../assets/whatsapp.svg";
import twitterlogo from "../assets/twitter.svg";
import clipboard from "../assets/clipboard.svg";
import "../styles/shareResult.css";
import { createFinalResultText } from "../utils/defaultValues";
const ShareResult = ({ win = true, stopTime }) => {

  const  text = createFinalResultText(stopTime);    
  const [isCopied, setIsCopied] = useState(false);
  const encodedText = encodeURIComponent(text);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      window.alert("Failed to copy text: ", err);
    }
  };
  return (
    <div>
      {win ? (
        <div className="share-body">
          <h1>Well Done!</h1>
          <h3>Share your result</h3>
          <div className="share-container">
            <div className="share-item">
              <a href="#" title="copy to clipboard" onClick={handleCopy}>
                <img src={clipboard} alt="clipboard link" />
              </a>
            </div>
            <div className="share-item">
              <a href={`whatsapp://send?text=${encodedText}`}>
                <img src={whatsapplogo} alt="whatsapp link" />
              </a>
            </div>

            <div className="share-item">
              <a href={`https://twitter.com/intent/tweet?text=${encodedText}`}>
                <img src={twitterlogo} alt="twitter link" />
              </a>
            </div>
          </div>
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ShareResult;
