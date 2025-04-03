import './SecondRowAllCargos.css'
import UUID from './UUID/UUID'

import Xwidth from './Xwidth/Xwidth'
import Yheight from './Yheight/Yheigh'
import Zdepth from './Zdepth/Zdepth'
import Xposition from './Xposition/Xposition'
import Yposition from './Yposition/Yposition'
import Zposition from './Zposition/Zposition'

function SecondRowAllCargos({ cargos, setCargos }) {
  const deleteCargo = (uuid) => {
    const updatedCargos = cargos.filter((x) => x.uuid !== uuid)
    setCargos(updatedCargos)
  }
  return cargos.map((item) => (
    <tr key={item.uuid}>
      <UUID uuid={item.uuid} cargos={cargos} setCargos={setCargos} />

      <Xwidth Xwidth={item.Xwidth} cargos={cargos} setCargos={setCargos} />
      <Yheight Yheight={item.Yheight} cargos={cargos} setCargos={setCargos} />
      <Zdepth Zdepth={item.Zdepth} cargos={cargos} setCargos={setCargos} />
      <Xposition
        Xposition={item.Xposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Yposition
        Yposition={item.Yposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Zposition
        Zposition={item.Zposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <td>
        <button onClick={() => deleteCargo(item.uuid)}>Удалить</button>
      </td>
    </tr>
  ))
}
export default SecondRowAllCargos
