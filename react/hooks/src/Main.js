import React from 'react'
import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const {show} = useAlert()
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => show('Text')}>Show</button>
    </>
  )
}