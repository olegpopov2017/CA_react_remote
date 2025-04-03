// import { useState } from 'react'
import './TableCargos.css'

import Thead from './Thead/Thead.jsx'
import Tbody from './Tbody/Tbody.jsx'
import {} from './helpers'

function TableCargos({ cargos, setCargos }) {
  return (
    <div className="table-cargos-container">
      <table className="table-cargos">
        <Thead cargos={cargos} setCargos={setCargos} />
        <Tbody cargos={cargos} setCargos={setCargos} />
      </table>
    </div>
  )
}

export default TableCargos
