import { useLayoutEffect, useState } from "react";
import { CounterComponent, CounterProps } from "./interfaces";

const Counter: CounterComponent = function useCounter({ value }: CounterProps) {
  const [counter, count] = useState<number>(value || 0);

  useLayoutEffect(() => {
    Object.defineProperty(Counter, "count", { value: count, writable: false });
  }, []);

  return <h1>Counter: {counter}</h1>;
};

Object.defineProperty(Counter, "count", {
  value:
    Counter.count === undefined || Counter.count === null
      ? () => {
          throw new Error(
            "Counter component needs to be rendered before accessing the 'count' property"
          );
        }
      : undefined,
  writable: true,
});

Counter.defaultProps = {
  value: 0,
};

export default Counter;
