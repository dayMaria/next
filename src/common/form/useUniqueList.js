import { useState } from "react";

const defaultComparisonFunction = (a, b) => {
  if (a !== null && b !== null) {
    if (typeof a === "object" && typeof b === "object") {
      if (Object.keys(a).some(k => k === "id") && Object.keys(b).some(k => k === "id")) {
        // @ts-ignore
        return a.id === b.id;
      } else if (Object.keys(a).some(k => k === "_id") && Object.keys(b).some(k => k === "_id")) {
        // @ts-ignore
        return a._id === b._id;
      }
    }
  }
  return a === b;
};

export default function useUniqueList({
  initSelected = [],
  comparisonFunction = defaultComparisonFunction
}) {
  const [state, setState] = useState(initSelected);

  const add = (obj) => {
    if (!state.some(item => comparisonFunction(obj, item))) setState([...state, obj]);
  };

  const addOrRemove = (obj) => {
    const withoutNew = state.filter(item => !comparisonFunction(item, obj));
    if (withoutNew.length === state.length) setState([...withoutNew, obj]);
    else setState(withoutNew);
  };

  const addOrRemoveMany = (objs) => {
    const withoutNew = state.filter(item => objs.some(obj => !comparisonFunction(item, obj)));
    setState([...withoutNew, ...objs]);
  };

  const remove = (obj) => setState(state.filter(item => !comparisonFunction(item, obj)));

  const removeMany = (objs) =>
    setState(state.filter(item => !objs.some(obj => comparisonFunction(item, obj))));

  const update = (obj) => {
    const index = state.findIndex(item => comparisonFunction(item, obj));
    if (index > -1) setState([...state.slice(0, index), obj, ...state.slice(index + 1)]);
  };

  return {
    add,
    addOrRemove,
    addOrRemoveMany,
    state,
    setState,
    remove,
    removeMany,
    update
  };
}