import React from "react";

// function car() {
//   return (
//       <h2>This is cat component</h2>
//     )
// }

// const car = () => {
//   return (
//       <div>This is cat component</div>
//     )
// }

// const car = () => (
//   <div>
//     This is cat <strong>component</strong>
//   </div>
// )

export default () => (
  <div>
    <p>This is cat</p>
    <p>Num: <strong>{Math.round(Math.random() * 100)}</strong></p>
  </div>
)

