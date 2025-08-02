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
    <div className="cargoAreaForm-container">
      <table className="cargoAreaForm-table">
        <tbody>
          <tr>
            <td>UUID</td>
            <td>
              <div className="uuid-display">{inpUUID || '—'}</div>
            </td>
          </tr>
          <tr>
            <td>X width</td>
            <td>
              <input
                type="number"
                value={inpWidth}
                onChange={(e) => setInpWidth(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Y height</td>
            <td>
              <input
                type="number"
                value={inpHeight}
                onChange={(e) => setInpHeight(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Z depth</td>
            <td>
              <input
                type="number"
                value={inpDepth}
                onChange={(e) => setInpDepth(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="submit-cell">
              <button onClick={createUpdateCargoArea}>
                Создать / Изменить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CargoAreaForm
