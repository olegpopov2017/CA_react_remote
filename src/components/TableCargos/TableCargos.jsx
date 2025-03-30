// import { useState } from 'react'
import './TableCargos.css'

import Thead from './Thead/Thead.jsx'
import Tbody from './Tbody/Tbody.jsx'
import {} from './helpers'

function TableCargos({ cargos, setCargos }) {
  return (
    <div class="table-cargos-container">
      <table class="table-cargos">
        <Thead cargos={cargos} setCargos={setCargos} />
        <Tbody cargos={cargos} setCargos={setCargos} />
      </table>
    </div>
  )
}

export default TableCargos
