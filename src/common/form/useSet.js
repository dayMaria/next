import {useCallback, useState} from "react";

/**
 * @typedef {Object} UseSetParams
 * @property {initSelected} [initSelected=[]] - Initialize selected list
 * @property {(a, b) => boolean} [eqFn] - Check if tow elements are equals
 *
 * @typedef {Object} UseSet
 * @property {Array} selected
 * @property {(value: Array) => void} setSelected
 * @property {(obj: any) => void} update
 * @property {(arr: Array) => void} updateMany
 */

const defaultEqFn = (a, b) => {
  if (typeof a === "object") {
    if (typeof b === "object") {
      return a.id === b.id
    }
    return a.id === b
  }
  return a === b
}

/**
 * @param {UseSetParams} params
 * @returns {UseSet}
 */
export default function useSet({
  initSelected = [],
  eqFn = defaultEqFn
}) {
  const [selected, setSelected] = useState(initSelected)

  const update = useCallback(obj => {
    const withoutCurrent = selected.filter(item => !eqFn(obj, item))
    if(withoutCurrent.length === selected.length)
      setSelected([...selected, obj])
    else
      setSelected(withoutCurrent)
  }, [eqFn, selected])

  const updateMany = useCallback(arr => {
    const withoutCurrents = selected.filter(s => !arr.some(el => eqFn(s, el)))
    setSelected([...withoutCurrents, ...arr])
  }, [eqFn, selected])

  return {selected, setSelected, update, updateMany}
}
