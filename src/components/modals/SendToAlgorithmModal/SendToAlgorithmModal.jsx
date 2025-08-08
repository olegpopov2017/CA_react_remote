import './SendToAlgorithmModal.css'

const SendToAlgorithmModal = ({
  cargos,
  setCargos,
  cargoArea,
  setCargoArea,
  onClose,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>THIS IS MODAL</h2>
        <p>Тут можно что-то сделать с данными</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}
export default SendToAlgorithmModal
