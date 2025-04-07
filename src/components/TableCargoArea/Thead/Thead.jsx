import './Thead.css'
import CAreaUUID from './CAreaUUID/CAreaUUID'
import CAreaXwidth from './CAreaXwidth/CAreaXwidth'
import CAreaYheight from './CAreaYheigh/CAreaYheigh'
import CAreaZdepth from './CAreaZdepth/CAreaZdepth'
import ButCreateCArea from './ButCreateCArea/ButCreateCArea'

function Thead({ cargoArea, setCargoArea }) {
  return (
    <thead>
      {/* Основной контейнер с вертикальным расположением */}
      <tr className="trCargoAreaTable">
        {/* Каждая ячейка как отдельная строка */}
        <CAreaUUID cargoArea={cargoArea} setCargosArea={setCargoArea} />
        <CAreaXwidth cargoArea={cargoArea} setCargosArea={setCargoArea} />
        <CAreaYheight cargoArea={cargoArea} setCargosArea={setCargoArea} />
        <CAreaZdepth cargoArea={cargoArea} setCargosArea={setCargoArea} />
        <ButCreateCArea cargoArea={cargoArea} setCargosArea={setCargoArea} />
      </tr>
    </thead>
  )
}

export default Thead
