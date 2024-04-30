import { useEffect, useRef, useState } from 'react';

export const useControllableState = (
  propValue,
  onChange,
  valueFromInput,
  inputFromValue,
  cleanInput = (i) => i
) => {
  const value = useRef(propValue);
  const [input, setInput] = useState(inputFromValue(propValue));
  useEffect(() => {
    if (propValue !== value.current) {
      value.current = propValue;
      setInput(inputFromValue(propValue));
    }
  }, [inputFromValue, propValue]);
  const setInputProxy = (i) => {
    const cleaned = cleanInput(i);
    setInput(cleaned);
    value.current = valueFromInput(cleaned);
    onChange && onChange(value.current);
  };
  return [input, setInputProxy];
};
