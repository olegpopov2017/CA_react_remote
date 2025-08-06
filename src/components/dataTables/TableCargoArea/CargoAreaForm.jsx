import { useState } from 'react'
import { v4 as uuidv4Gen } from 'uuid'
import './CargoAreaForm.css'

function CargoAreaForm({ cargoArea, setCargoArea }) {
  const [inpUUID, setInpUUID] = useState('')
  const [inpWidth, setInpWidth] = useState('')
  const [inpHeight, setInpHeight] = useState('')
  const [inpDepth, setInpDepth] = useState('')

  const createUpdateCargoArea = () => {
    if (!inpWidth || !inpHeight || !inpDepth) {
      return alert('Введите все размеры')
    }

    if (inpWidth <= 0 || inpHeight <= 0 || inpDepth <= 0) {
      return alert('Размеры должны быть больше нуля')
    }

    const uuid = inpUUID || uuidv4Gen()

    const newCargoArea = [
      {
        uuid,
        Xwidth: inpWidth,
        Yheight: inpHeight,
        Zdepth: inpDepth,
      },
    ]

    setInpUUID(uuid)
    setCargoArea(newCargoArea)
  }

  return (
    <div className="cargoAreaForm-box">
      <div className="form-row">
        <label>UUID</label>
        <div className="uuid-display">{inpUUID || '—'}</div>
      </div>
      <div className="form-row">
        <label>X width</label>
        <input
          type="number"
          value={inpWidth}
          onChange={(e) => setInpWidth(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Y height</label>
        <input
          type="number"
          value={inpHeight}
          onChange={(e) => setInpHeight(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Z depth</label>
        <input
          type="number"
          value={inpDepth}
          onChange={(e) => setInpDepth(e.target.value)}
        />
      </div>
      <div className="form-row submit">
        <button onClick={createUpdateCargoArea}>Создать / Изменить</button>
      </div>
    </div>
  )
}

export default CargoAreaForm
