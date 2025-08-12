import './SendToAlgorithmModal.css'
import { arrangeAccordingWithAlgorithm } from '../../../api/api.js'

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
        <fieldset className="fieldset">
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
        <div className="checkbox-line-arrangement">
          Требуется ли расстановка в линию
          <input
            type="checkbox"
            checked={isLineArrangement}
            onChange={() => setIsLineArrangement(!isLineArrangement)}
          />
        </div>
        <div className="checkbox-center-arrangement">
          Требуется ли расстановка от центра грузового помещения
          <input
            type="checkbox"
            checked={isCenterArrangement}
            onChange={() => setIsCenterArrangement(!isCenterArrangement)}
          />
        </div>
        <div className="modal-buttons">
          <button
            className="arrange-button"
            onClick={() =>
              arrangeAccordingWithAlgorithm(
                cargos,
                setCargos,
                cargoArea,
                setCargoArea,
                selectedCorner,
                isLineArrangement,
                isCenterArrangement
              )
            }
          >
            Расставить автоматически
          </button>
          <button className="close-button" onClick={onClose}>
            Закрыть окно
          </button>
        </div>
      </div>
    </div>
  )
}
export default SendToAlgorithmModal
