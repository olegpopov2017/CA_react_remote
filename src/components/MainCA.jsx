import { useState } from 'react'

import TableCargos from './dataTables/TableCargos/TableCargos.jsx'
import TableCargoArea from './dataTables/TableCargoArea/TableCargoArea.jsx'
import ThreeScene from './TheeJSComponent/ThreeScene.jsx'
//
function MainCA() {
  const [cargos, setCargos] = useState([])
  const [cargoArea, setCargoArea] = useState('')
  return (
    <>
      <ThreeScene
        cargos={cargos}
        setCargos={setCargos}
        cargoArea={cargoArea}
        setCargoArea={setCargoArea}
      />
      <TableCargos cargos={cargos} setCargos={setCargos} />
      <TableCargoArea cargoArea={cargoArea} setCargoArea={setCargoArea} />
    </>
  )
}

export default MainCA
