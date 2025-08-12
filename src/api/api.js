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
      '#18_uuid': cargo.uuid,
      '#19_width_X': cargo.Xwidth,
      '#20_height_Y': cargo.Yheight,
      '#21_length_Z': cargo.Zdepth,
      '#22_position_x': cargo.Xposition,
      '#23_position_y': cargo.Yposition,
      '#24_position_z': cargo.Zposition,
      '#25_color': cargo.userColor,
    }))
  }

  let dataToAlgorithmAPI = {
    '#11_uuid': cargoArea[0].uuid,
    '#12_width_X': cargoArea[0].Xwidth,
    '#13_height_Y': cargoArea[0].Yheight,
    '#14_length_Z': cargoArea[0].Zdepth,
    '#15_position_x': cargoArea[0].position_x,
    '#16_position_y': cargoArea[0].position_y,
    '#17_position_z': cargoArea[0].position_z,
    '#18_arranged_cuboids': null,
    '#21_start_corner': selectedCorner,
    '#23_row_arrangement': isLineArrangement,
    '#24_center_arrangement': isCenterArrangemen,
    '#25_not_linked_cuboids': notLinketCuboids(cargos),
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
    fetch('http://localhost:5000/api/arrange', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToAlgorithmAPI),
    })
  )
}
