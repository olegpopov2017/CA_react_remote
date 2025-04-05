// import './TableCargoArea.css'

import Thead from './Thead/Thead.jsx'
import Tbody from './Tbody/Tbody.jsx'

function TableCargoArea({ cargoArea, setCargoArea }) {
  return (
    <div className="table-cargos-container">
      <table className="table-cargos">
        <Thead cargoArea={cargoArea} setCargoArea={setCargoArea} />
        {/* <Tbody cargoArea={cargoArea} setCargoArea={setCargoArea} /> */}
      </table>
    </div>
  )
}

export default TableCargoArea
