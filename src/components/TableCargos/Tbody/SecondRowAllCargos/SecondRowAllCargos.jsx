import './SecondRowAllCargos.css'

function SecondRowAllCargos({ cargos, setCargos }) {
  const deleteCargo = (uuid) => {
    const updatedCargos = cargos.filter((x) => x.uuid !== uuid)
    setCargos(updatedCargos)
  }
  return cargos.map((item) => (
    <tr key={item.uuid}>
      <td
        style={{
          fontSize: '10px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {item.uuid}
      </td>
      <td>{item.Xwidth}</td>
      <td>{item.Yheight}</td>
      <td>{item.Zlength}</td>
      <td>{item.Xposition}</td>
      <td>{item.Yposition}</td>
      <td>{item.Zposition}</td>
      <td>
        <button onClick={() => deleteCargo(item.uuid)}>Удалить</button>
      </td>
    </tr>
  ))
}
export default SecondRowAllCargos
