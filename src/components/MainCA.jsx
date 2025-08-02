import { useState } from 'react'

import TableCargos from './dataTables/TableCargos/TableCargos.jsx'
import TableCargoArea from './dataTables/TableCargoArea/CargoAreaForm.jsx'
import ThreeScene from './TheeJSComponent/ThreeScene.jsx'
import CargoAreaForm from './dataTables/TableCargoArea/CargoAreaForm.jsx'
/**
 * Main component that orchestrates the 3D scene and the data tables.
 *
 * This component manages the state for cargos and cargo areas, and
 * passes down these states to the ThreeScene component for rendering
 * the 3D environment and the TableCargos and TableCargoArea components
 * for displaying and managing the cargo data
 */

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
      <CargoAreaForm cargoArea={cargoArea} setCargoArea={setCargoArea} />
    </>
  )
}

export default MainCA
