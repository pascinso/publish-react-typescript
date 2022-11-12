import React, { useState } from "react";

interface CounterProps {
  value?: number;
}

export default function useCounter({ value }: CounterProps) {
  const [counter, count] = useState(value || 0);

  return (
    <main>
      <h1>Counter: {counter}</h1>
      <button onClick={() => count((old) => old - 1)}>-</button>
      <button onClick={() => count((old) => old + 1)}>+</button>
    </main>
  );
}
