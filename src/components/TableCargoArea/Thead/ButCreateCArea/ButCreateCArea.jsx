function ButCreateCArea({ cargoArea, setCargoArea }) {
  const createUpdateCargoArea = () => {
    const updatedCargoArea = []
    setCargoArea(updatedCargoArea)
  }
  return (
    <th className="buttonCreate">
      <button onClick={() => createUpdateCargoArea()} style={{ width: '80%' }}>
        Создать/Изменить
      </button>
    </th>
  )
}
export default ButCreateCArea
