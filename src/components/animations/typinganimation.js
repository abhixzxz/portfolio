// TypingAnimation.jsx
import React, { useState, useEffect } from "react";
import "./TypingAnimation.css";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const message = "The best way to predict the future is to create it";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText((prevText) => prevText + message[index]);
      index++;

      if (index === message.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the typing speed by changing the interval duration

    return () => clearInterval(intervalId);
  }, []);

  return <span className="typing-text">{text}</span>;
};

export default TypingAnimation;
