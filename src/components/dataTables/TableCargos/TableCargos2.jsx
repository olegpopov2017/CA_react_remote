import { Row, Cell } from './Row2'

export default function CargoTable({
  inpWidth,
  setInpWidth,
  inpHeight,
  setInpHeight,
  inpDepth,
  setInpDepth,
  inpXpos,
  setInpXpos,
  inpYpos,
  setInpYpos,
  inpZpos,
  setInpZpos,
  inpQuantity,
  setInpQuantity,
  createCargosFromInput,
  deleteAllCargos,
}) {
  return (
    <div className="table">
      {/* Заголовок */}
      <Row className="header">
        <Cell flex={2}>UUID</Cell>
        <Cell>X width</Cell>
        <Cell>Y height</Cell>
        <Cell>Z depth</Cell>
        <Cell>X position</Cell>
        <Cell>Y position</Cell>
        <Cell>Z position</Cell>
        <Cell>Weight</Cell>
        <Cell>Name</Cell>
        <Cell>ID</Cell>
        <Cell>Priority</Cell>
        <Cell>Layar</Cell>
        <Cell flex={2} className="finish-cell">
          <button onClick={deleteAllCargos}>Удалить все</button>
        </Cell>
      </Row>

      {/* Строка ввода */}
      <Row>
        <Cell flex={2}></Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpWidth}
            onChange={(e) => setInpWidth(e.target.value)}
          />
        </Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpHeight}
            onChange={(e) => setInpHeight(e.target.value)}
          />
        </Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpDepth}
            onChange={(e) => setInpDepth(e.target.value)}
          />
        </Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpXpos}
            onChange={(e) => setInpXpos(e.target.value)}
          />
        </Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpYpos}
            onChange={(e) => setInpYpos(e.target.value)}
          />
        </Cell>
        <Cell>
          <input
            className="inputCargoParameters"
            type="number"
            placeholder="введите..."
            value={inpZpos}
            onChange={(e) => setInpZpos(e.target.value)}
          />
        </Cell>
        <Cell flex={2} className="finish-cell">
          <div className="finish-input-button-group">
            <input
              className="inputQuantity"
              type="number"
              placeholder="количество..."
              value={inpQuantity}
              onChange={(e) => setInpQuantity(e.target.value)}
            />
            <button className="create1" onClick={createCargosFromInput}>
              Создать
            </button>
          </div>
        </Cell>
      </Row>
    </div>
  )
}
