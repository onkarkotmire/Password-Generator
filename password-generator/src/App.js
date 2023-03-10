import { useState } from "react";
import "./App.css";
import ButtonComp from "./components/ButtonComp";
import CheckBox from "./components/CheckBox";
import {
  numberArray,
  symbolsArray,
  lowerCaseArray,
  upperCaseArray,
} from "./components/Constants";
import Length from "./components/Length";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [password, setPassword] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbols: false,
    length: 5,
  });

  const [handelText, setHandelText] = useState("");
  const [copied, setCopied] = useState(false);
  const [generatedPass, setGenPass] = useState(false)

  const handelUppercaseChange = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };
  const handelLowercaseChange = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };
  const handelNumberChange = () => {
    setPassword({
      ...password,
      number: !password.number,
    });
  };
  const handelSymbolChange = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  };
  const handelLengthChange = (value) => {
    setPassword({
      ...password,
      length: value,
    });
  };

  const generatePassword = () => {
    const { uppercase, lowercase, number, symbols, length } = password;

    const generateWord = (uppercase, lowercase, number, symbols, length) => {
      const availableValue = [
        ...(uppercase ? upperCaseArray : []),
        ...(lowercase ? lowerCaseArray : []),
        ...(number ? numberArray : []),
        ...(symbols ? symbolsArray : []),
      ];

      const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };

      const char = shuffleArray(availableValue).slice(0, length);
      console.log(char.join(""));
      setHandelText(char.join(""));
      setGenPass(true)
      setInterval(()=>{
        setGenPass(false)

      },2000)
      return char;
    };

    generateWord(uppercase, lowercase, number, symbols, length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="h1-tag"><h1>Password Generator</h1></div>
        <PasswordGenerator
          handelText={handelText}
          setHandelText={setHandelText}
          copied={copied}
          setCopied={setCopied}
        />

        <div className="length-div">
        <h3>Select Password Length</h3>
        <Length onchange={handelLengthChange} />
        </div>
        <CheckBox label={"Include uppercase letters"} onchange={handelUppercaseChange} />
        <CheckBox label={"Include lowercase letters"} onchange={handelLowercaseChange} />
        <CheckBox label={"Include numbers"} onchange={handelNumberChange} />
        <CheckBox label={"Include symbols"} onchange={handelSymbolChange} />
        <ButtonComp onclick={generatePassword} generatedPass={generatedPass} setGenPass={setGenPass} />
      </header>
    </div>
  );
}

export default App;
