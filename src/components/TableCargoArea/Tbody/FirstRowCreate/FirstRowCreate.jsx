import './FirstRowCreate.css'
import { useState } from 'react'

function FirstRowCreate({ cargos, setCargos }) {
  const [inpWidth, setInpWidth] = useState('')
  const [inpHeight, setInpHeight] = useState('')
  const [inpDepth, setInpDepth] = useState('')

  const createCargosFromInput = () => {
    let newCargos = []

    if (!inpWidth || !inpHeight || !inpDepth) {
      return alert('Необходимо ввести размеры груза')
    }
    if (inpWidth <= 0 || inpHeight <= 0 || inpDepth <= 0) {
      return alert('Введеные размеры груза должны быть больше нуля')
    }

    console.log(inpQuantity)
    newCargos.push(createCargos())
    let oneCargo = [...newCargos, ...cargos]
    setCargos(oneCargo)
    return
  }

  const createCargos = () => {
    const uuidGen = crypto.randomUUID()
    const X_width = inpWidth
    const Y_height = inpHeight
    const Z_depth = inpDepth

    const cargo = {
      uuid: uuidGen,
      Xwidth: X_width,
      Yheight: Y_height,
      Zdepth: Z_depth,
    }
    return cargo
  }

  return (
    <tr>
      <td></td>
      <td>
        <input
          name="input_width"
          type="number"
          placeholder="введите..."
          value={inpWidth}
          onChange={(event) => setInpWidth(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_height"
          type="number"
          placeholder="введите..."
          value={inpHeight}
          onChange={(event) => setInpHeight(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_length"
          type="number"
          placeholder="введите..."
          value={inpDepth}
          onChange={(event) => setInpDepth(event.target.value)}
        ></input>
      </td>

      <td className="finishTd">
        <button className="create1" onClick={createCargosFromInput}>
          Создать
        </button>
      </td>
    </tr>
  )
}
export default FirstRowCreate
