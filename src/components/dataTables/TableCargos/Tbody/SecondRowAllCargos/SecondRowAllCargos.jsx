import './SecondRowAllCargos.css'

import UUID from './UUID/UUID'
import Xwidth from './Xwidth/Xwidth'
import Yheight from './Yheight/Yheight'
import Zdepth from './Zdepth/Zdepth'
import Xposition from './Xposition/Xposition'
import Yposition from './Yposition/Yposition'
import Zposition from './Zposition/Zposition'

function SecondRowAllCargos({ cargos, setCargos }) {
  const deleteCargo = (uuid) => {
    const updatedCargos = cargos.filter((x) => x.uuid !== uuid)
    setCargos(updatedCargos)
  }
  return cargos.map((cargo) => (
    <tr key={cargo.uuid}>
      <UUID uuid={cargo.uuid} cargos={cargos} setCargos={setCargos} />

      <Xwidth
        uuid={cargo.uuid}
        initialXwidth={cargo.Xwidth}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Yheight
        uuid={cargo.uuid}
        initialYheight={cargo.Yheight}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Zdepth
        uuid={cargo.uuid}
        initialZdepth={cargo.Zdepth}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Xposition
        uuid={cargo.uuid}
        initialXposition={cargo.Xposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Yposition
        uuid={cargo.uuid}
        initialYposition={cargo.Yposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <Zposition
        uuid={cargo.uuid}
        initialZposition={cargo.Zposition}
        cargos={cargos}
        setCargos={setCargos}
      />
      <td>
        <button onClick={() => deleteCargo(cargo.uuid)}>Удалить</button>
      </td>
    </tr>
  ))
}
export default SecondRowAllCargos
