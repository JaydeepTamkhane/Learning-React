import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*()_+[]{}|;:',.<>?/`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

  const copyPasswordToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy password: ', err);
    });
  }, [password]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white bg-black">
      <div className="w-full max-w-md p-6 bg-slate-600 rounded-3xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Password Generator</h1>
        <div className="flex flex-col gap-4 mb-4 md:flex-row">
          <input
            type="text"
            value={password}
            className="w-full p-2 font-medium text-black rounded-lg outline-none"
            placeholder="Password"
            readOnly
          />
          <button className="p-2 mt-2 bg-black rounded-lg md:mt-0" onClick={copyPasswordToClip}>
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col w-full text-center md:w-1/3">
            <input
              type="range"
              min={1}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="mt-2">Length : {length}</label>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="mt-2">Numbers</label>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center md:w-1/3">
            <input
              type="checkbox"
              checked={specialCharAllowed}
              id="charInput"
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="mt-2">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
