import React from 'react'
import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const {toggle} = useAlert()
  return (
    <>
      <h1>Hello</h1>
      <button onClick={toggle}>Show</button>
    </>
  )
}