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
        <th className="thCargoAreaRow">
          <span style={{ width: '100px' }}>UUID</span>
          <input type="text" style={{ width: '100px' }} />
        </th>

        <th className="thCargoAreaRow">
          <span style={{ width: '100px' }}>X width</span>
          <input type="text" style={{ width: '100px' }} />
        </th>

        <th className="thCargoAreaRow">
          <span style={{ width: '100px' }}>Y height</span>
          <input type="text" style={{ width: '100px' }} />
        </th>

        <th className="thCargoAreaRow">
          <span style={{ width: '100px' }}>Z depth</span>
          <input type="text" style={{ width: '100px' }} />
        </th>

        <th className="finishTH" style={{ padding: '8px 0', width: '100%' }}>
          <button
            onClick={() => createUpdateCargoArea()}
            style={{ width: '150px' }}
          >
            Создать/Изменить
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default Thead
