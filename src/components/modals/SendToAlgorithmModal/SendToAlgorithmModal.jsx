import './SendToAlgorithmModal.css'

import { useState } from 'react'

function SendToAlgorithmModal({
  cargos,
  setCargos,
  cargoArea,
  setCargoArea,
  onClose,
}) {
  const [selectedCorner, setSelectedCorner] = useState('1')
  const [isLineArrangement, setIsLineArrangement] = useState(true)
  const [isCenterArrangement, setIsCenterArrangement] = useState(false)

  const changeCornerOfArrangement = (event) => {
    setSelectedCorner(event.target.value)
  }
  return (
    <div className="container-modal" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>Выберите параметры расстановки</h2>
        <fieldset>
          <legend>Угол относительно которого будет расстановка:</legend>
          <label className="change-corner">
            <input
              className="radio"
              type="radio"
              name="corner"
              value="1"
              defaultChecked
              onChange={changeCornerOfArrangement}
            />
            передний левый
          </label>
          <label className="change-corner">
            <input
              className="radio"
              type="radio"
              name="corner"
              value="2"
              onChange={changeCornerOfArrangement}
            />
            передний правый
          </label>
          <label className="change-corner">
            <input
              className="radio"
              type="radio"
              name="corner"
              value="3"
              onChange={changeCornerOfArrangement}
            />
            задний левый
          </label>
          <label className="change-corner">
            <input
              className="radio"
              type="radio"
              name="corner"
              value="4"
              onChange={changeCornerOfArrangement}
            />
            задний правый
          </label>
        </fieldset>
        <div>
          Требуется ли расстановка в линию
          <input
            className="checkbox-line-arrangement"
            type="checkbox"
            checked={isLineArrangement}
            onChange={() => setIsLineArrangement(!isLineArrangement)}
          />
        </div>
        <div>
          Требуется ли расстановка от центра грузового помещения
          <input
            className="checkbox-center-arrangement"
            type="checkbox"
            checked={isCenterArrangement}
            onChange={() => setIsCenterArrangement(!isCenterArrangement)}
          />
        </div>
        <button onClick={onClose}>Рассчитать</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}
export default SendToAlgorithmModal
