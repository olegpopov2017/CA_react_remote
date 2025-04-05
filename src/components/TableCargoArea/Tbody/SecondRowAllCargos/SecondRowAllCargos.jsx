import './SecondRowAllCargos.css'

import UUID from './UUID/UUID'
import Xwidth from './Xwidth/Xwidth'
import Yheight from './Yheight/Yheight'
import Zdepth from './Zdepth/Zdepth'

function SecondRowAllCargos({ cargoArea, setCargoArea }) {
  const deleteCargo = (uuid) => {
    const updatedCargos = cargoArea.filter((x) => x.uuid !== uuid)
    setCargoArea(updatedCargos)
  }
  return cargoArea.map((cargoArea) => (
    <tr key={cargoArea.uuid}>
      <UUID
        uuid={cargoArea.uuid}
        cargoArea={cargoArea}
        setCargoArea={setCargoArea}
      />

      <Xwidth
        uuid={cargoArea.uuid}
        initialXwidth={cargoArea.Xwidth}
        cargoArea={cargoArea}
        setCargoArea={setCargoArea}
      />
      <Yheight
        uuid={cargoArea.uuid}
        initialYheight={cargoArea.Yheight}
        cargoArea={cargoArea}
        setCargoArea={setCargoArea}
      />
      <Zdepth
        uuid={cargoArea.uuid}
        initialZdepth={cargoArea.Zdepth}
        cargoArea={cargoArea}
        setCargoArea={setCargoArea}
      />
    </tr>
  ))
}
export default SecondRowAllCargos
