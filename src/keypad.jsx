import sound from "./audio.mp3";
import "./keypad.css";
function Keypad(props) {
  let id = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "ninteen",
  ];
  let evaluate=props.evaluate;
  let symbol = props.buttons;
  var audio = new Audio(sound);
  return (
    <ul>
      {symbol.map((item, index) => (
        <li
          onClick={(event) => {
            audio.play();
            evaluate(event);
          }}
          id={id[index]}
          className={index < 3 ? "backgroundwhite" : "null"}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
export default Keypad;
