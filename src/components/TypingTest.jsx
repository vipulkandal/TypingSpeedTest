import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  TextField,
  Box,
  LinearProgress,
} from "@mui/material";

const categories = [
  "technology",
  "science",
  "business",
  "health",
  "sports",
  "politics",
  "education",
  "entertainment",
  "travel",
  "fashion",
  "food",
  "art",
  "books",
  "real estate",
  "automobiles",
  "climate",
];

const TypingTest = () => {
  const [text, setText] = useState(""),
    [input, setInput] = useState(""),
    [timeLeft, setTimeLeft] = useState(0),
    [isRunning, setIsRunning] = useState(false),
    [wpm, setWpm] = useState(0),
    [accuracy, setAccuracy] = useState(0),
    [category, setCategory] = useState(
      categories[Math.floor(Math.random() * categories.length)]
    );

  const inputRef = useRef(null);

  useEffect(() => {
    fetchArticle();
  }, [category]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${
          import.meta.env.VITE_NYT_API_KEY
        }`
      );
      const data = await response.json();
      if (data.response.docs.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * data.response.docs.length
        );
        const paragraph =
          data.response.docs[randomIndex].lead_paragraph ||
          data.response.docs[randomIndex].snippet;
        setText(
          paragraph
            .replace(/([.,!?])(?=[^\s])/g, "$1 ")
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/([A-Z])(?=[A-Z][a-z])/g, "$1 ")
            .replace(/([’'“”\"])/g, " $1 ")
        );
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setTimeLeft(0);
    setInput("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    calculateWPM();
  };

  const handleChange = (e) => {
    const typed = e.target.value;
    let correctText = "";
    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === text[i]) {
        correctText += typed[i];
        correctChars++;
      } else {
        break;
      }
    }
    setInput(correctText);
    setAccuracy(((correctChars / text.length) * 100).toFixed(2));
  };

  const calculateWPM = () => {
    const wordsTyped = input.trim().split(/\s+/).length;
    const calculatedWpm =
      timeLeft > 0 ? Math.round((wordsTyped / (timeLeft / 60)) * 100) / 100 : 0;
    setWpm(calculatedWpm);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Typing Speed Test</Typography>
      <Button variant="contained" onClick={handleStart} sx={{ m: 2 }}>
        Start
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleStop}
        sx={{ m: 2 }}
      >
        Stop
      </Button>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Time: {timeLeft}s
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          mb: 2,
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 1,
          whiteSpace: "pre-wrap",
        }}
      >
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            style={{
              color:
                index < input.split(" ").length
                  ? input.split(" ")[index] === word
                    ? "green"
                    : "red"
                  : "black",
              fontWeight: index < input.split(" ").length ? "bold" : "normal",
              textDecoration:
                index === input.split(" ").length ? "underline" : "none",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        value={input}
        onChange={handleChange}
        disabled={!isRunning}
        sx={{ mt: 2 }}
        inputRef={inputRef}
      />
      <LinearProgress
        variant="determinate"
        value={(input.length / text.length) * 100}
        sx={{ mt: 2 }}
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Accuracy: {accuracy}%
      </Typography>
      <Typography variant="h6">WPM: {wpm}</Typography>
    </Box>
  );
};

export default TypingTest;
