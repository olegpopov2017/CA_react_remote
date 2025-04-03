import { useState } from 'react'

import TableCargos from './TableCargos/TableCargos.jsx'
import EditebleTable from './TableCargos/DSEditibleTable.jsx'

function MainCA() {
  const [cargos, setCargos] = useState([])
  return (
    <>
      <TableCargos cargos={cargos} setCargos={setCargos} />
      {/* <EditebleTable /> */}
    </>
  )
}

export default MainCA
