import { useEffect, useRef, useState } from "react";

const App = () => {
  const OTP_DIGIT_COUNT = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOtp = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.code === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="main">
      <h2>Validate OTP</h2>
      <div>
        {inputArr.map((input, index) => (
          <input
            className="otp-input"
            value={inputArr[index]}
            key={index}
            ref={(inpt) => {
              refArr.current[index] = inpt;
            }}
            type="text"
            onChange={(e) => handleOtp(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
