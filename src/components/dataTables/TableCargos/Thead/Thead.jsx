import './Thead.css'

function Thead({ cargos, setCargos }) {
  const deleteAllCargos = () => {
    const updatedCargos = []
    setCargos(updatedCargos)
  }
  return (
    <thead>
      <tr>
        <th>UUID</th>
        <th>X width</th>
        <th>Y height</th>
        <th>Z depth</th>
        <th>X position</th>
        <th>Y position</th>
        <th>Z position</th>
        {/* <th>Weight</th>
        <th>Name</th>
        <th>ID</th>
        <th>Priority</th>
        <th>Layar</th> */}

        <th className="finishTH">
          <button onClick={() => deleteAllCargos()}>Удалить все</button>
        </th>
      </tr>
    </thead>
  )
}
export default Thead
