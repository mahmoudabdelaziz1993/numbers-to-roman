import { useEffect, useState } from "react";
import { ConverToRoman, ConverToDesimal } from "../utils/numberToRoman";

const Converter = () => {
  const [input, setInput] = useState<number | string>(1);
  const [result, setResult] = useState<string | number>("");
  const [toggle, setToggle] = useState<boolean>(true);
  const toggleHandle = () => setToggle(!toggle);
  useEffect(() => {
    if (!toggle) {
      setInput("i");
    } else {
      setInput(1);
    }
  }, [toggle]);
  useEffect(() => {
    if (!!input && typeof input === "number" && input > 0) {
      let romanResult = ConverToRoman(input);
      setResult(romanResult);
    }
    if (!!input && typeof input === "string") {
      let romanResult = ConverToDesimal(input);
      setResult(romanResult);
    }
  }, [input]);

  return (
    <div className="flex gap-2 items-center">
      <div className="form-control w-full max-w-xs gap-2 ">
        <label className="label bg-primary shadow-md rounded-lg p-4">
          <span className="label-text text-2xl text-primary-content capitalize">
            {toggle ? "desimal" : "roman"}
          </span>
        </label>
        <input
          type={toggle ? "number" : "text"}
          value={input}
          onChange={(e) => {
            if (!toggle) {
              setInput(e.target.value);
            } else if (!!e.target.value && parseInt(e.target.value, 10) > 0) {
              setInput(parseInt(e.target.value, 10));
            }
          }}
          className="input input-bordered h-32 text-center text-4xl  w-full max-w-xs uppercase input-accent rounded-md"
        />
      </div>

      {/* Swap */}
      <button
        className="btn btn-circle btn-primary btn-outline"
        onClick={toggleHandle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </button>
      <div className="form-control w-full max-w-xs gap-2 ">
        <label className="label bg-primary shadow-md rounded-lg p-4">
          <span className="label-text text-2xl text-primary-content capitalize">
            {toggle ? "roman" : "desimal"}
          </span>
        </label>
        <input
          type="text"
          value={result}
          onFocus={(e) => {
            e.target.select();
            document.execCommand("copy");
          }}
          className="input cursor-text input-bordered h-32 text-center text-4xl  w-full max-w-xs uppercase input-accent rounded-md"
          readOnly
        />
      </div>
    </div>
  );
};
export default Converter;
