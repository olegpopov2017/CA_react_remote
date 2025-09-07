import { useState } from 'react'

import Header from './header/Header.jsx'
import TableCargos from './dataTables/TableCargos/TableCargos.jsx'
import CargoAreaForm from './dataTables/TableCargoArea/CargoAreaForm.jsx'
import ThreeScene from './TheeJSComponent/ThreeScene.jsx'

import './MainCA.css'

function MainCA() {
  const [cargos, setCargos] = useState([])
  const [cargoArea, setCargoArea] = useState('')

  return (
    <div className="main-container">
      <Header />
      <div className="scene-wrapper">
        <ThreeScene
          cargos={cargos}
          setCargos={setCargos}
          cargoArea={cargoArea}
          setCargoArea={setCargoArea}
        />
      </div>
      <div className="tables-row">
        <div className="table-right">
          <TableCargos cargos={cargos} setCargos={setCargos} />
        </div>
        <div className="table-left">
          <CargoAreaForm
            cargoArea={cargoArea}
            setCargoArea={setCargoArea}
            cargos={cargos}
            setCargos={setCargos}
          />
        </div>
      </div>
    </div>
  )
}

export default MainCA
