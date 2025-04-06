import './Thead.css'

function Thead({ cargoArea, setCargoArea }) {
  const createUpdateCargoArea = () => {
    const updatedCargoArea = []
    setCargoArea(updatedCargoArea)
  }

  return (
    <thead>
      {/* Основной контейнер с вертикальным расположением */}
      <tr className="trCargoAreaTable">
        {/* Каждая ячейка как отдельная строка */}
        <th className="thCargoAreaUUID">
          <span style={{ width: '50%' }}>UUID</span>
          <input type="text" style={{ width: '35%', height: '50' }} />
        </th>

        <th className="thCargoAreaXwidth">
          <span style={{ width: '50%' }}>X width</span>
          <input type="text" style={{ width: '35%' }} />
        </th>

        <th className="thCargoAreaYheight">
          <span style={{ width: '50%' }}>Y height</span>
          <input type="text" style={{ width: '35%' }} />
        </th>

        <th className="thCargoAreaZdepth">
          <span style={{ width: '50%' }}>Z depth</span>
          <input type="text" style={{ width: '35%' }} />
        </th>

        <th className="buttonCreate" style={{ width: '100%' }}>
          <button
            onClick={() => createUpdateCargoArea()}
            style={{ width: '80%' }}
          >
            Создать/Изменить
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default Thead
