import { useReducer } from "react";

export default function useToggle(init = false) {
  const [value, toggle] = useReducer(state => !state, init);
  return [value, toggle]
}
