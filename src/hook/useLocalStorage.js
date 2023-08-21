import { useEffect, useState } from "react"

const decode = (value) => {
  return JSON.stringify(value)
}

const encode = (value) => {
  return JSON.parse(value)
}

const useLocalStorage = (key, defaultState) => {

if(!defaultState) return;

  const [value, setValue] = useState(
    encode(localStorage.getItem(key)||null) || defaultState
  )

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  },  [value]);

  return [value, setValue]
}

export default useLocalStorage;