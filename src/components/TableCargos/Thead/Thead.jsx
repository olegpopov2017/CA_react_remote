function Thead({ cargos, setCargos }) {
  const deleteAllCargos = () => {
    const updatedCargos = []
    setCargos(updatedCargos)
  }
  return (
    <thead>
      <tr style={{ backgroundColor: '#f2f2f2' }}>
        <th>UUID</th>
        <th>X width</th>
        <th>Y height</th>
        <th>Z lenght</th>
        <th>X position</th>
        <th>Y position</th>
        <th>Z position</th>
        <button onClick={() => deleteAllCargos()}>Удалить все</button>
      </tr>
    </thead>
  )
}
export default Thead
