import './TableCargoArea.css'

import Thead from './Thead/Thead.jsx'

function TableCargoArea({ cargoArea, setCargoArea }) {
  return (
    <table className="table-cargoArea-container">
      <Thead cargoArea={cargoArea} setCargoArea={setCargoArea} />
    </table>
  )
}

export default TableCargoArea
