import { useState } from 'react'

function FirstRowCreate({ cargos, setCargos }) {
  const [inpWidth, setInpWidth] = useState(0)
  const [inpHeight, setInpHeight] = useState(0)
  const [inpLenght, setInpLenght] = useState(0)
  const [inpXpos, setInpXpos] = useState(0)
  const [inpYpos, setInpYpos] = useState(0)
  const [inpZpos, setInpZpos] = useState(0)

  const createCargos = () => {
    const id = crypto.randomUUID()
    const X_width = inpWidth
    const Y_height = inpHeight
    const Z_length = inpLenght
    const X_pos = inpXpos
    const Y_pos = inpYpos
    const Z_pos = inpZpos

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
  }
  return (
    <tr>
      <td></td>
      <td>
        <input
          name="input_width"
          type="number"
          placeholder="введите ширирину"
          value={inpWidth}
          onChange={(event) => setInpWidth(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_height"
          type="number"
          placeholder="введите высоту"
          value={inpHeight}
          onChange={(event) => setInpHeight(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_length"
          type="number"
          placeholder="введите длинну"
          value={inpLenght}
          onChange={(event) => setInpLenght(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_pos_x"
          type="number"
          placeholder="введите расположение X"
          value={inpXpos}
          onChange={(event) => setInpXpos(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_pos_x"
          type="number"
          placeholder="введите расположение Y"
          value={inpYpos}
          onChange={(event) => setInpYpos(event.target.value)}
        ></input>
      </td>
      <td>
        <input
          name="input_pos_z"
          type="number"
          placeholder="введите расположение Z"
          value={inpZpos}
          onChange={(event) => setInpZpos(event.target.value)}
        ></input>
      </td>
      <td>
        <button onClick={createCargos}>Создать</button>
      </td>
    </tr>
  )
}
export default FirstRowCreate
