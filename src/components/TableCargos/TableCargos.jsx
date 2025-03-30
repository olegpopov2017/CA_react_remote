// import { useState } from 'react'
import Thead from './Thead/Thead.jsx'
import Tbody from './Tbody/Tbody.jsx'
import {} from './helpers'

function TableCargos({ cargos, setCargos }) {
  return (
    <div style={{ margin: '20px' }}>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <Thead cargos={cargos} setCargos={setCargos} />
        <Tbody cargos={cargos} setCargos={setCargos} />
      </table>
    </div>
  )
}

export default TableCargos
