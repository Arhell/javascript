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

export default props => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
  </div>
)

