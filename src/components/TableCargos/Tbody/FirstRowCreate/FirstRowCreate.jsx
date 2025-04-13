import './FirstRowCreate.css'
import { useState } from 'react'

function FirstRowCreate({ cargos, setCargos }) {
  const [inpWidth, setInpWidth] = useState('')
  const [inpHeight, setInpHeight] = useState('')
  const [inpDepth, setInpDepth] = useState('')
  const [inpXpos, setInpXpos] = useState('')
  const [inpYpos, setInpYpos] = useState('')
  const [inpZpos, setInpZpos] = useState('')
  const [inpQuantity, setInpQuantity] = useState('')

  const createCargosFromInput = () => {
    let newCargos = []

    if (!inpWidth || !inpHeight || !inpDepth) {
      return alert('Необходимо ввести размеры груза')
    }
    if (inpWidth <= 0 || inpHeight <= 0 || inpDepth <= 0) {
      return alert('Введеные размеры груза должны быть больше нуля')
    }
    if (inpXpos < 0 || inpYpos < 0 || inpZpos < 0) {
      return alert('Введеные координаты не могут быть отрицательными')
    }

    if (inpQuantity < 0) {
      return alert(
        'Введеное колличество грузов не может быть отрицательным или равным нулю'
      )
    }

    if (inpQuantity === '') {
      console.log(inpQuantity)
      newCargos.push(createCargos())
      let oneCargo = [...newCargos, ...cargos]
      setCargos(oneCargo)
      return
    }

    for (let i = 0; i < inpQuantity; i++) {
      newCargos.push(createCargos())
    }
    let manyCargos = [...newCargos, ...cargos]
    setCargos(manyCargos)
    return
  }

  const createCargos = () => {
    const uuidGen = crypto.randomUUID()
    const X_width = inpWidth
    const Y_height = inpHeight
    const Z_depth = inpDepth

    const X_pos = inpXpos == '' ? 0 : inpXpos
    const Y_pos = inpYpos == '' ? 0 : inpYpos
    const Z_pos = inpZpos == '' ? 0 : inpZpos

    const cargo = {
      uuid: uuidGen,
      Xwidth: X_width,
      Yheight: Y_height,
      Zdepth: Z_depth,
      Xposition: X_pos,
      Yposition: Y_pos,
      Zposition: Z_pos,
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
      <td>
        <input
          name="input_pos_x"
          type="number"
          placeholder="введите..."
          value={inpXpos}
          onChange={(event) => setInpXpos(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_pos_x"
          type="number"
          placeholder="введите..."
          value={inpYpos}
          onChange={(event) => setInpYpos(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_pos_z"
          type="number"
          placeholder="введите..."
          value={inpZpos}
          onChange={(event) => setInpZpos(event.target.value)}
        ></input>
      </td>
      <td className="finishTd">
        <div className="finish-input-button-group">
          <input
            className="inputQuantity"
            name="input_quantity"
            type="number"
            placeholder="колличество..."
            value={inpQuantity}
            onChange={(event) => setInpQuantity(event.target.value)}
          ></input>
          <button className="create1" onClick={createCargosFromInput}>
            Создать
          </button>
        </div>
      </td>
    </tr>
  )
}
export default FirstRowCreate
