function SecondRowAllCargos({ cargos, setCargos }) {
  const deleteCargo = (uuid) => {
    const updatedCargos = cargos.filter((x) => x.id !== uuid)
    setCargos(updatedCargos)
  }
  return cargos.map((item) => (
    <tr key={item.uuid}>
      <td
        style={{
          // color: '',
          fontSize: '10px',
          // fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {item.id}
      </td>
      <td>{item.Xwidth}</td>
      <td>{item.Yheight}</td>
      <td>{item.Zlength}</td>
      <td>{item.Xposition}</td>
      <td>{item.Yposition}</td>
      <td>{item.Zposition}</td>
      <td>
        <button onClick={() => deleteCargo(item.id)}>Удалить</button>
      </td>
    </tr>
  ))
}
export default SecondRowAllCargos
