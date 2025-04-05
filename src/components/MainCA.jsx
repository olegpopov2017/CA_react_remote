import { useState } from 'react'

import TableCargos from './TableCargos/TableCargos.jsx'
import TableCargoArea from './TableCargoArea/TableCargoArea.jsx'
// import EditebleTable from './TableCargos/DSEditibleTable.jsx'

function MainCA() {
  const [cargos, setCargos] = useState([])
  const [cargoArea, setCargoArea] = useState([])
  return (
    <>
      {/* <TableCargos cargos={cargos} setCargos={setCargos} /> */}
      <TableCargoArea cargoArea={cargoArea} setCargoArea={setCargoArea} />

      {/* <EditebleTable /> */}
    </>
  )
}

export default MainCA
