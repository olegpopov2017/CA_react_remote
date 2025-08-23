// This function sent cargos,cargo area,paramemeters of the arranging (selectedCorner,lineArrangement,centerArrangemet) to algorithm, recieve results back.
export function arrangeAccordingWithAlgorithm(
  cargos,
  setCargos,
  cargoArea,
  setCargoArea,
  selectedCorner,
  isLineArrangement,
  isCenterArrangemen
) {
  const notLinketCuboids = (cargos) => {
    return cargos.map((cargo) => ({
      '#11_uuid': cargo.uuid,
      '#12_width_X': cargo.Xwidth,
      '#13_height_Y': cargo.Yheight,
      '#14_length_Z': cargo.Zdepth,
      '#15_position_x': cargo.Xposition,
      '#16_position_y': cargo.Yposition,
      '#17_position_z': cargo.Zposition,
      '#18_color': cargo.userColor,
    }))
  }

  let dataToAlgorithmAPI = {
    '#00_access_token': null,
    '#01_start_corner': selectedCorner,
    '#02_row_arrangement': isLineArrangement,
    '#03_center_arrangement': isCenterArrangemen,
    '#11_uuid': cargoArea[0].uuid,
    '#12_width_X': cargoArea[0].Xwidth,
    '#13_height_Y': cargoArea[0].Yheight,
    '#14_length_Z': cargoArea[0].Zdepth,
    '#15_position_x': cargoArea[0].position_x,
    '#16_position_y': cargoArea[0].position_y,
    '#17_position_z': cargoArea[0].position_z,
    '#200_arranged_cuboids': null,
    '#300_not_linked_cuboids': notLinketCuboids(cargos),
  }

  // Сохраняем как файл
  const jsonString = JSON.stringify(dataToAlgorithmAPI, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'dataToAlgorithmAPI.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)

  return (
    console.log('DataToAlgorithmAPI: ', dataToAlgorithmAPI),
    // fetch('http://localhost:5000/api/ai_arrange_engine', {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToAlgorithmAPI),
    })
  )
}
