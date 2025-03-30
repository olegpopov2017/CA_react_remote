import { useState } from 'react'

import TableCargos from './TableCargos/TableCargos.jsx'

function MainCA() {
  const [cargos, setCargos] = useState([])
  return (
    <>
      <TableCargos cargos={cargos} setCargos={setCargos} />
    </>
  )
}

export default MainCA
