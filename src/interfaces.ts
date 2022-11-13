import { Dispatch, FunctionComponent, SetStateAction } from "react";

export interface CounterProps {
  value?: number;
}

export interface CounterComponent extends FunctionComponent<CounterProps> {
  readonly count?: Dispatch<SetStateAction<number>>;
}
