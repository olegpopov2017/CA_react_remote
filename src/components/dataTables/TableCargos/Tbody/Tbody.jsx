import FirstRowCreate from './FirstRowCreate/FirstRowCreate'
import SecondRowAllCargos from './SecondRowAllCargos/SecondRowAllCargos'

function Tbody({ cargos, setCargos }) {
  return (
    <tbody>
      <FirstRowCreate cargos={cargos} setCargos={setCargos} />
      <SecondRowAllCargos cargos={cargos} setCargos={setCargos} />
    </tbody>
  )
}

export default Tbody
