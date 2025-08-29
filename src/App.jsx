import { useEffect, useRef, useState } from "react";

const App = () => {
  const OTP_DIGIT_COUNT = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
  console.log(inputArr);

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  const handleOtp = (value, index) => {
    if (isNaN(value)) return;

    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
  };

  return (
    <div className="main">
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
        />
      ))}
    </div>
  );
};

export default App;
