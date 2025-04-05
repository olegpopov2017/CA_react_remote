import './TableCargoArea.css'

import Thead from './Thead/Thead.jsx'
// import Tbody from './Tbody/Tbody.jsx'

function TableCargoArea({ cargoArea, setCargoArea }) {
  return (
    <div className="table-cargoArea-container">
      <table className="table-cargoArea">
        <Thead cargoArea={cargoArea} setCargoArea={setCargoArea} />
      </table>
    </div>
  )
}

export default TableCargoArea
