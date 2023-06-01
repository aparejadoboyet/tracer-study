import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './MultiStepProgressBar.css'
import { question } from "../../FormData/Questions";
 
export const MultiStepProgressBar = (props) => {
    return (
      <ProgressBar
        percent={props.step/(question.length-1) * 100}
        filledBackground="linear-gradient(to right, #E7AB79, #B25068, #774360, #4C3A51)"
      />
    );
  }