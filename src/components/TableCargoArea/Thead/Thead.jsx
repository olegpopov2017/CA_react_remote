// import './Thead.css'

function Thead({ cargoArea, setCargoArea }) {
  const createUpdateCargoArea = () => {
    const updatedCargoArea = []
    setCargoArea(updatedCargoArea)
  }
  return (
    // <thead>
    //   <tr style={{ backgroundColor: '#f2f2f2' }}>
    //     <th>UUID</th>
    //     <th>X width</th>
    //     <th>Y height</th>
    //     <th>Z depth</th>

    //     <th className="finishTH">
    //       <button onClick={() => createUpdateCargoArea()}>
    //         Создать/Изменить
    //       </button>
    //     </th>
    //   </tr>
    // </thead>

    <thead>
      <tr
        style={{
          backgroundColor: '#f2f2f2',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <th>UUID</th>
        <th>X width</th>
        <th>Y height</th>
        <th>Z depth</th>
        <th className="finishTH" style={{ width: '90%' }}>
          <button onClick={() => createUpdateCargoArea()}>
            Создать/Изменить
          </button>
        </th>
      </tr>
    </thead>
  )
}
export default Thead
