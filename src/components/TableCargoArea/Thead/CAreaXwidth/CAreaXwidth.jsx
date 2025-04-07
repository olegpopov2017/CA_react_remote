import './CAreaXwidth.css'

import { useState } from 'react'

function CAreaXwidth({ cargoArea, setCargoArea }) {
  return (
    <th className="thCargoAreaXwidth">
      <span>X Width</span>
      <input type="number"></input>
    </th>
  )
}
export default CAreaXwidth
