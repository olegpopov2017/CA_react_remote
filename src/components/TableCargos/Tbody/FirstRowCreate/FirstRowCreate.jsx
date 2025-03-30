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
    if (inpQuantity < 0) {
      return alert('Введеные колличество грузов не может быть отрицательным')
    }

    // if (inpQuantity === '') {
    //   createCargos()
    //   return
    // }
    const manyCargos = () => {
      for (let i = 0; i < inpQuantity; i++) {
        createCargos()
        console.log(inpQuantity + 'qqqqq')
      }
    }
    return manyCargos()
  }

  const createCargos = () => {
    if (!inpWidth || !inpHeight || !inpDepth) {
      return alert('Необходимо ввести размеры груза')
    }
    if (inpWidth <= 0 || inpHeight <= 0 || inpDepth <= 0) {
      return alert('Введеные размеры груза должны быть больше нуля')
    }
    if (inpXpos < 0 || inpYpos < 0 || inpZpos < 0) {
      return alert('Введеные координаты не могут быть отрицательными')
    }
    const id = crypto.randomUUID()
    const X_width = inpWidth
    const Y_height = inpHeight
    const Z_length = inpDepth

    const X_pos = inpXpos == '' ? 0 : inpXpos
    const Y_pos = inpYpos == '' ? 0 : inpYpos
    const Z_pos = inpZpos == '' ? 0 : inpZpos

    const cargo = {
      id: id,
      Xwidth: X_width,
      Yheight: Y_height,
      Zlength: Z_length,
      Xposition: X_pos,
      Yposition: Y_pos,
      Zposition: Z_pos,
    }
    const UpdatedCargos = [cargo, ...cargos]
    setCargos(UpdatedCargos)
    return UpdatedCargos
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
      <td>
        <input
          name="input_quantity"
          type="number"
          placeholder="введите..."
          value={inpQuantity}
          onChange={(event) => setInpQuantity(event.target.value)}
        ></input>
        <button className="create1" onClick={createCargosFromInput}>
          Создать
        </button>
      </td>
    </tr>
  )
}
export default FirstRowCreate
