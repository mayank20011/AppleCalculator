import styles from "./App.module.css";
import Input from "./input.jsx";
import Header from "./header.jsx";
import Keypad from "./keypad.jsx";
import { useState } from "react";

const App = () => {
  let a=0;
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  let [expression , setexpression]= useState("0");

  function findwhatinputis(value) {
    if (value == "AC") {
      return 0;
    } else if (value == "=") {
      return 1;
    } else if (
      value == "+" ||
      value == "-" ||
      value == "X" ||
      value == "/" ||
      value == "%" ||
      value == "+/-"
    ) {
      return 2;
    } else {
      return 3;
    }
  }


  function evaluate(event) {
    let value = event.target.outerText;
    let returnedvalue = findwhatinputis(value);
    if (returnedvalue == 0) {
      setexpression("0");
    }

     else if (returnedvalue == 1) {
      setexpression(eval(expression));
      console.log(eval(expression));
    }
    
    else if (returnedvalue == 2) {
      if(value=="X")
      {
        setexpression(expression+"*");
      }
      else if(value=="+/-")
      {
         setexpression(expression+"-");
      }
      else if(value=="%")
      {
        setexpression(eval(expression)/100);
      }
      else
      {
        setexpression(expression+value);
      }
    } 
    
    else {
      if (expression == "0") {
        expression="";
      }
        setexpression(expression+value);
    }

    // console.log(expression);
  }

  return (
    <div className={styles.phone}>
      <Header></Header>
      <Input expression={expression}></Input>
      <Keypad
        evaluate={evaluate}
        className={styles.keypad}
        buttons={buttons}
      ></Keypad>
      <div className={styles.bottom}></div>
    </div>
  );
};
export default App;
