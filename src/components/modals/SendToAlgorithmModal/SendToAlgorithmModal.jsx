import './SendToAlgorithmModal.css'

import { useState } from 'react'

function SendToAlgorithmModal({
  cargos,
  setCargos,
  cargoArea,
  setCargoArea,
  onClose,
}) {
  const [selectedCorner, setSelectedCorner] = useState('')

  const handleChange = (event) => {
    setSelectedCorner(event.target.value)
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div>
          {/* Выберите параметры расстановки: */}
          <div>
            Угол относительно которого будет расстановка:
            <label>
              <input
                type="radio"
                name="corner"
                value="1"
                onChange={handleChange}
              />
              передний левый
            </label>
            <label>
              <input
                type="radio"
                name="corner"
                value="2"
                onChange={handleChange}
              />
              передний правый
            </label>
            <label>
              <input
                type="radio"
                name="corner"
                value="3"
                onChange={handleChange}
              />
              задний левый
            </label>
            <label>
              <input
                type="radio"
                name="corner"
                value="4"
                onChange={handleChange}
              />
              задний правый
            </label>
          </div>
          <div>
            Требуется ли расстановка в линию
            <label>
              <input type="checkbox" />
            </label>
          </div>
          <div>
            Требуется ли расстановка от центра грузового помещения
            <label>
              <input type="checkbox" />
            </label>
          </div>
          <button onClick={onClose}>Рассчитать</button>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
export default SendToAlgorithmModal
