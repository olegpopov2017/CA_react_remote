import './Thead.css'
import { useState } from 'react'
function Thead({ cargoArea, setCargoArea }) {
  const [inpUUID, setInpUUID] = useState('')
  const [inpWidth, setInpWidth] = useState('')
  const [inpHeight, setInpHeight] = useState('')
  const [inpDepth, setInpDepth] = useState('')
  const createUpdateCargoArea = () => {
    let newCargoArea = []

    if (!inpWidth || !inpHeight || !inpDepth) {
      return alert('Необходимо ввести размеры груза')
    }
    if (inpWidth <= 0 || inpHeight <= 0 || inpDepth <= 0) {
      return alert('Введеные размеры груза должны быть больше нуля')
    }

    newCargoArea.push(createCargoArea())

    setCargoArea(newCargoArea)
    console.log(cargoArea)
    return
  }

  const createCargoArea = () => {
    const uuidGen = crypto.randomUUID()
    const X_width = inpWidth
    const Y_height = inpHeight
    const Z_depth = inpDepth

    if (!inpUUID) {
      setInpUUID(uuidGen)
    }

    const cargoArea = {
      uuid: uuidGen,
      Xwidth: X_width,
      Yheight: Y_height,
      Zdepth: Z_depth,
    }
    return cargoArea
  }

  return (
    <thead>
      {/* Основной контейнер с вертикальным расположением */}
      <tr className="trCargoAreaTable">
        {/* Каждая ячейка как отдельная строка */}

        <th className="thCargoAreaRow">
          <span>UUID</span>
          <span>{inpUUID}</span>
          {/* <input type="text" /> */}
        </th>

        <th className="thCargoAreaRow">
          <span>X width</span>
          <input
            name="CA_width"
            value={inpWidth}
            type="number"
            placeholder="введите..."
            onChange={(event) => setInpWidth(event.target.value)}
          />
        </th>

        <th className="thCargoAreaRow">
          <span>Y height</span>
          <input
            name="CA_height"
            // value={inpHeight}
            type="number"
            placeholder="введите..."
            onChange={(event) => setInpHeight(event.target.value)}
          />
        </th>

        <th className="thCargoAreaRow">
          <span>Z depth</span>
          <input
            name="CA_length"
            // value={inpDepth}
            type="number"
            placeholder="введите..."
            onChange={(event) => setInpDepth(event.target.value)}
          />
        </th>

        <th className="finishThCA">
          <button onClick={() => createUpdateCargoArea()}>
            Создать/Изменить
          </button>
        </th>
      </tr>
    </thead>
  )
}

export default Thead
