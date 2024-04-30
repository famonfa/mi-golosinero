import { useControllableState } from "./useControllableState";
import { Button } from "../button/button";
import { Stack } from "../stack/stack";
import { Text } from "../text/text";
import { palette } from "../../vanilla.css";
import { useState } from "react";

export interface CounterProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (x: number) => void;
  defaultValue?: number;
  customColor?: string;
}

const StyledButton = ({
  children,
  onClick,
  disabled,
  customColor,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  customColor?: string;
}) => {
  return (
    <Button
      css={{
        borderRadius: "50%",
        padding: 0,
        lineHeight: "24px",
        background: customColor,
      }}
      size="counter"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
export function useCounter({
  defaultValue = 1,
  value: valueFromProps,
  onChange: onChangeFromProps,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const decrement = () => setValue(Math.max(min, value - 1));
  const increment = () => setValue(Math.min(max, value + 1));
  const canDecrement = value <= min;
  const canIncrement = value >= max;
  return { value, setValue, decrement, increment, canDecrement, canIncrement };
}

export function Counter(props: CounterProps) {
  const { value, decrement, increment, canDecrement, canIncrement } =
    useCounter(props);
  return (
    <Stack
      direction="horizontal"
      css={{ alignItems: "center", gap: 16 }}
      data-component="Counter"
    >
      <StyledButton
        onClick={decrement}
        disabled={canDecrement}
        customColor={value > 1 ? props.customColor : palette.gray25}
      >
        -
      </StyledButton>
      <Text>{value}</Text>
      <StyledButton
        onClick={increment}
        disabled={canIncrement}
        customColor={props.customColor}
      >
        +
      </StyledButton>
    </Stack>
  );
}
