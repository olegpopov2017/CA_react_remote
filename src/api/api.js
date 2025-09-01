export function arrangeAccordingWithAlgorithm(
  cargos,
  setCargos,
  cargoArea,
  // setCargoArea,
  selectedCorner,
  isLineArrangement,
  isCenterArrangement // исправлено название
) {
  const notLinketCuboids = (cargos) => {
    return cargos.map((cargo) => ({
      '#11_uuid': cargo.uuid,
      '#12_width_X': parseInt(cargo.Xwidth),
      '#13_height_Y': parseInt(cargo.Yheight),
      '#14_length_Z': parseInt(cargo.Zdepth),
      '#15_position_x': parseInt(cargo.Xposition),
      '#16_position_y': parseInt(cargo.Yposition),
      '#17_position_z': parseInt(cargo.Zposition),
      '#18_color': cargo.userColor,
    }))
  }

  const dataToAlgorithmAPI = {
    '#00_access_token': null,
    '#01_start_corner': parseInt(selectedCorner),
    '#02_row_arrangement': isLineArrangement,
    '#03_arrangement_direction': 'x',
    '#11_uuid': cargoArea[0].uuid,
    '#12_width_X': parseInt(cargoArea[0].Xwidth),
    '#13_height_Y': parseInt(cargoArea[0].Yheight),
    '#14_length_Z': parseInt(cargoArea[0].Zdepth),
    '#15_position_x': parseInt(cargoArea[0].position_x),
    '#16_position_y': parseInt(cargoArea[0].position_y),
    '#17_position_z': parseInt(cargoArea[0].position_z),
    '#200_arranged_cuboids': null,
    '#300_not_linked_cuboids': notLinketCuboids(cargos),
  }

  fetch('/api/api/arrangement', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToAlgorithmAPI),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Ошибка ${response.status}`)
      return response.json()
    })
    .then((data) => {
      if (data['#200_arranged_cuboids']) {
        data['#200_arranged_cuboids'].forEach((cuboid) => {
          setCargos((prevCargos) =>
            prevCargos.map((cargo) =>
              cargo.uuid === cuboid['#11_uuid']
                ? {
                    ...cargo,
                    Xposition: parseInt(cuboid['#15_position_x']),
                    Yposition: parseInt(cuboid['#16_position_y']),
                    Zposition: parseInt(cuboid['#17_position_z']),
                  }
                : cargo
            )
          )
        })
      }
    })
    .catch((error) => {
      console.error('Ошибка при расстановке:', error)
    })
}
